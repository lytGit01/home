### Vue Router源码分析
##### Vue Router 是一个插件 需要用到 vue.use() 挂载 首先分析一下 vue.use
源码位置：vue/src/core/global-api/use.js 
```js
export function initUse (Vue: GlobalAPI) {
  Vue.use = function (plugin: Function | Object) {
    // 维护了一个 _installedPlugins 数组，它存储所有注册过的 plugin
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    // 防止重复注册
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }
    // 附加参数 一般为[]
    const args = toArray(arguments, 1)
    // 第一个参数是 Vue
    args.unshift(this)
    // 每个插件都需要实现一个静态的 install 方法
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    // 添加缓存
    installedPlugins.push(plugin)
    return this
  }
}
```

##### 路由安装
源码位置：vue/src/core/global-api/use.js 
```js
// Vue-Router 的入口文件是 src/index.js其中定义了 VueRouter 类，
// 也实现了 install 的静态方法：VueRouter.install = install，
// 它的定义在 src/install.js 中。
export let _Vue
export function install (Vue) {
  // 确保install() 只执行一次
  if (install.installed && _Vue === Vue) return
  install.installed = true
  // 全局的 _Vue 来接收参数 Vue，因为作为 Vue 的插件对 Vue 对象是有依赖的
  // 但又不能去单独去 import Vue，因为那样会增加包体积，
  // 所以就通过这种方式拿到 Vue 对象。
  _Vue = Vue

  const isDef = v => v !== undefined

  const registerInstance = (vm, callVal) => {
    let i = vm.$options._parentVnode
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal)
    }
  }

  // Vue-Router 安装最重要的一步就是利用
  // Vue.mixin 去把 beforeCreate 和 destroyed 钩子函数注入到每一个组件中
  Vue.mixin({
    beforeCreate () {
      if (isDef(this.$options.router)) {
        // 表示Vue自身
        this._routerRoot = this
        // 表示vueRouter实例
        this._router = this.$options.router
        // 初始化 vueRouter
        this._router.init(this)
        // this._route 变成响应式对象
        Vue.util.defineReactive(this, '_route', this._router.history.current)
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
      }
      registerInstance(this, this)
    },
    destroyed () {
      registerInstance(this)
    }
  })
  
  // vue原型上定义$router、$route
  // 这就是为什么组件中可以访问this.$router 以及 this.$route
  Object.defineProperty(Vue.prototype, '$router', {
    get () { return this._routerRoot._router }
  })

  Object.defineProperty(Vue.prototype, '$route', {
    get () { return this._routerRoot._route }
  })
  
  // 挂载全局组件
  Vue.component('RouterView', View)
  Vue.component('RouterLink', Link)

  const strats = Vue.config.optionMergeStrategies
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created
}
```

##### VueRouter 对象
```js
export default class VueRouter {
  static install: () => void;
  static version: string;

  app: any;
  apps: Array<any>;
  ready: boolean;
  readyCbs: Array<Function>;
  options: RouterOptions;
  mode: string;
  history: HashHistory | HTML5History | AbstractHistory;
  matcher: Matcher;
  fallback: boolean;
  beforeHooks: Array<?NavigationGuard>;
  resolveHooks: Array<?NavigationGuard>;
  afterHooks: Array<?AfterNavigationHook>;

  constructor (options: RouterOptions = {}) {
    // 表示根 Vue 实例
    this.app = null
    // 保存持有 $options.router 属性的 Vue 实例
    this.apps = []
    // 保存传入的路由配置
    this.options = options
    // 表示一些钩子函数
    this.beforeHooks = []
    this.resolveHooks = []
    this.afterHooks = []
    // 创建路由列表 【会单独分析】
    this.matcher = createMatcher(options.routes || [], this)

    let mode = options.mode || 'hash'
    // this.fallback 表示在浏览器不支持 history.pushState 的情况下
    // 根据传入的 fallback 配置参数，决定是否回退到hash模式，
    this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false
    if (this.fallback) {
      mode = 'hash'
    }
    if (!inBrowser) {
      mode = 'abstract'
    }
    this.mode = mode
    
    // 匹配不同路由模式
    switch (mode) {
      case 'history':
        this.history = new HTML5History(this, options.base)
        break
      case 'hash':
        this.history = new HashHistory(this, options.base, this.fallback)
        break
      case 'abstract': // 非浏览器模式 不考虑
        this.history = new AbstractHistory(this, options.base)
        break
      default:
        if (process.env.NODE_ENV !== 'production') {
          assert(false, `invalid mode: ${mode}`)
        }
    }
    // 初始化方法 【下面分析】
    init (app: any) {}
    // ....
  }
}
```

#### 实例化 VueRouter 后会返回它的实例 router，我们在 new Vue 的时候会把 router 作为配置的属性传入
```js
beforeCreate() {
  if (isDef(this.$options.router)) {
    // ...
    this._router = this.$options.router
    this._router.init(this)
    // ...
  }
} 
```
##### 分析 init
```js
init (app: any) {
  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    `not installed. Make sure to call \`Vue.use(VueRouter)\` ` +
    `before creating root instance.`
  )
  // 当前vue
  this.apps.push(app)
  // 避免重复  
  if (this.app) {
    return
  }

  this.app = app

  const history = this.history
 
  // 拿到当前的 this.history，根据它的不同类型来执行不同逻辑，
  // 由于我们平时使用 hash 路由多一些，所以我们先看这部分逻辑，
  // 先定义了 setupHashListener 函数，接着执行了 history.transitionTo 方法
  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation())
  } else if (history instanceof HashHistory) {
    const setupHashListener = () => {
      history.setupListeners()
    }
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    )
  }

  history.listen(route => {
    this.apps.forEach((app) => {
      app._route = route
    })
  })
}
```
##### history.transitionTo 
源码地址：src/history/base.js
```js
transitionTo (location: RawLocation, onComplete?: Function, onAbort?: Function) {
  const route = this.router.match(location, this.current)
  // ...
}
```
##### 我们先不着急去看 transitionTo 的具体实现，先看第一行代码，
##### 它调用了 this.router.match 函数,它是在createMatcher函数中调用
```js
const { pathList, pathMap, nameMap } = createRouteMap(routes)
    function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap)
    }
    function createRouteMap () {} // 单独分析
    function match () {} // 单独分析
    function _createRoute () {} // 单独分析
    return {
      match,
      addRoutes
    }
```

##### createRouteMap 定义一个路由映射表
```js
// 可以创建路由映射表，也可以动态添加
export function createRouteMap (
  routes: Array<RouteConfig>,
  oldPathList?: Array<string>,
  oldPathMap?: Dictionary<RouteRecord>,
  oldNameMap?: Dictionary<RouteRecord>
): {
  pathList: Array<string>;
  pathMap: Dictionary<RouteRecord>;
  nameMap: Dictionary<RouteRecord>;
} {
  const pathList: Array<string> = oldPathList || []
  const pathMap: Dictionary<RouteRecord> = oldPathMap || Object.create(null)
  const nameMap: Dictionary<RouteRecord> = oldNameMap || Object.create(null)
   
  // 遍历router列表
    /* const routes = [
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar }
    ] */
  routes.forEach(route => {
    // 根据参数生成一条记录 如果有子节点循环调用生成树结构的记录
    addRouteRecord(pathList, pathMap, nameMap, route)
  })
  
  // 匹配通配符    
  for (let i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0])
      l--
      i--
    }
  }

  return {
    pathList, // 存储所有的 path存储所有的 path
    pathMap, // 表示一个 path 到 RouteRecord 的映射关系
    nameMap // name 到 RouteRecord 的映射关系
  }
}
```

##### match
```js
function match (
  raw: RawLocation, // 是 RawLocation 类型，它可以是一个 url 字符串，也可以是一个 Location 对象
  currentRoute?: Route, // 是 Route 类型，它表示当前的路径
  redirectedFrom?: Location // 和重定向相关
): Route {
  // 方法的作用是根据 raw，current 计算出新的 location
  const location = normalizeLocation(raw, currentRoute, false, router)
  const { name } = location

  if (name) {
    // 匹配到 record
    const record = nameMap[name]
    if (process.env.NODE_ENV !== 'production') {
      warn(record, `Route with name '${name}' does not exist`)
    }
    // 失败 创建一个空的 record
    if (!record) return _createRoute(null, location)
   // 然后拿到 record 对应的 paramNames，再对比 currentRoute 中的 params，
    const paramNames = record.regex.keys
      .filter(key => !key.optional)
      .map(key => key.name)

    if (typeof location.params !== 'object') {
      location.params = {}
    }
     // 把交集部分的 params 添加到 location 中，
    if (currentRoute && typeof currentRoute.params === 'object') {
      for (const key in currentRoute.params) {
        if (!(key in location.params) && paramNames.indexOf(key) > -1) {
          location.params[key] = currentRoute.params[key]
        }
      }
    }
       // 然后在通过 fillParams 方法根据 record.path 和 location.path 计算出 location.path，
    if (record) {
      location.path = fillParams(record.path, location.params, `named route "${name}"`)
      // 最后调用 _createRoute(record, location, redirectedFrom) 去生成一条新路径，
      return _createRoute(record, location, redirectedFrom)
    }
  } else if (location.path) {
    // 通过 name 我们可以很快的找到 record，但是通过 path 并不能，
    // 因为我们计算后的 location.path 是一个真实路径，
    // 而 record 中的 path 可能会有 param，因此需要对所有的 pathList 做顺序遍历，
    // 然后通过 matchRoute 方法根据 record.regex、location.path、location.params 匹配，
    location.params = {}
    for (let i = 0; i < pathList.length; i++) {
      const path = pathList[i]
      const record = pathMap[path]
      if (matchRoute(record.regex, location.path, location.params)) {
        return _createRoute(record, location, redirectedFrom)
      }
    }
  }
  
  return _createRoute(null, location)
}
```

##### _createRoute
```js
function _createRoute (
  record: ?RouteRecord,
  location: Location,
  redirectedFrom?: Location
): Route {
  if (record && record.redirect) {
    return redirect(record, redirectedFrom || location)
  }
  if (record && record.matchAs) {
    return alias(record, location, record.matchAs)
  }
  return createRoute(record, location, redirectedFrom, router)
}
// 我们先不考虑 record.redirect 和 record.matchAs 的情况，
// 最终会调用 createRoute 方法
export function createRoute (
  record: ?RouteRecord,
  location: Location,
  redirectedFrom?: ?Location,
  router?: VueRouter
): Route {
  const stringifyQuery = router && router.options.stringifyQuery

  let query: any = location.query || {}
  try {
    query = clone(query)
  } catch (e) {}
  
  // 最终返回的是一条 Route 路径，
  // 在 Vue-Router 中，所有的 Route 最终都会通过 createRoute 函数创建，
  // 并且它最后是不可以被外部修改的。Route 对象中有一个非常重要属性是 matched，
  // 它通过 formatMatch(record) 计算而来：
  const route: Route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery),
    matched: record ? formatMatch(record) : []
  }
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery)
  }
  return Object.freeze(route)
}
```
##### formatMatch
```js
function formatMatch (record: ?RouteRecord): Array<RouteRecord> {
  const res = []
  while (record) {
    res.unshift(record)
    record = record.parent
  }
  return res
}
// 可以看它是通过 record 循环向上找 parent，直到找到最外层，
// 并把所有的 record 都 push 到一个数组中，最终返回的就是 record 的数组，
// 它记录了一条线路上的所有 record。matched 属性非常有用，它为之后渲染组件提供了依据
```
