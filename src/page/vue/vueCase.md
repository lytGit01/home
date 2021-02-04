### 1. 计算属性和method、watch的区别
### 2. vue双向绑定原理
### 3. 描述下自定义指令
### 4. VueX 和 localStorage
### 5. 路由在生命周期中的体现
```js
// 全局首位路由
beforeEach
beforeEnter
afterEather
// 组件路由
beforeRouterEnter
beforeRouteUpdate
beforeRouterLeave
```
### 6. vue子组件和父组件执行的顺序
```js
// 创建过程
父 beforeCreate
父 create
父 beforeMount
子 beforeCreate
子 create
子 beforeMount
子 mounted
父 mounted

// 更新过程
父 beforeUpdate
子 beforeUpdate
子 updated
父 updated

// 销毁过程
父 beforeDestory
子 beforeDestory
子 destoryd
父 destoryd
```
### 8. mxin和extends的逻辑
### 9. 多页面和单页面的应用
### 10. Vue data 为什么必须是函数
### 11. 子组件可以改变父组件的值么？子组件如何向父组件传参，组件之间如何传参
 ```js
// 父向子
props
this.$child // 不推荐
// 子向父
this.$emit()
this.$parend // 不推荐
provide inject
// 通用
vuex
Bux ==> new Vue()
localStorage
```
### 12. vnode的理解，vnode主要做什么，vnode本身是什么
### 13. 对vue3.0的理解
### 14. Object.defineProperty和Proxy的区别
### 15. vue的基本原理
### 16. nextTick的原理
### 17. v-model的实现
### 18. 单页面spa与多页面mpa的区别
### 19. vue的Diff算法
### 20. vue如何进行依赖收集的
### 21. react 和 vue的理解，它们的异同
### 22. redux 和 vuex 有什么区别, 共同点
### 23. keep-alive如何实现的具体缓存