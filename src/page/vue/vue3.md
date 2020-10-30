## vue3 API 变化

### 全局API变更和

```js
// vue3.x的main.js
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
```

### 引入"tree-shaking"(是一种通过清除多余代码方式来优化项目打包体积的技术)
```js
// vue2.x
import Vue from 'vue'
Vue.nextTick(() => {
  // 一些和DOM有关的东西
})

// vue3.x
import { nextTick } from 'vue'
nextTick(() => {
  // 一些和DOM有关的东西
})
```

### vue包含方法
```text
component 生成组件        
config 
--------errorHandler: undefiend      [获取错误信息和应用实例] 
-------- warnHandler: undefiend       [会在开发环境下生效]
--------globalProperties: {}         [如2.0的Vue.prototype.$http = axios] 
--------isCustomElement: () => false [指定一个方法，用来识别在 Vue 之外定义的自定义元素] 
--------isNativeTag: (tag) => isHTMLTag(tag) || isSVGTag(tag)    [判断html和svg元素]
--------optionMergeStrategies: {}    [为自定义选项定义合并策略] 
--------performance: true            [启用对组件初始化、编译、渲染和更新的性能追踪]
directive 自定义指令 
mixin   合并行为 [当来自组件的 data() 及其 mixin 或 extends 基类被合并时，现在将浅层次执行合并]
mount   实例挂载<==Vue.$mount() 
unount  解除挂载
provide 注入到应用范围内所有组件中的值。组件应该使用 inject 来接收提供的值
use     挂载插件
```

### 模板指令变更[key]
```html
/*
vue3对key有了修改
1. 对于 v-if/v-else/v-else-if 的各分支项 key 将不再是必须的，因为现在 Vue 会自动生成唯一的 key
2. 如果你手动提供 key，那么每个分支必须使用唯一的 key。你不能通过故意使用相同的 key 来强制重用分支
3. <template v-for> 的 key 应该设置在 <template> 标签上 (而不是设置在它的子节点上)
官方建议： 在新旧nodes对比时辨 VNodes 时使用 key 如[v-for]可以减少算法
*/
<!-- Vue 2.x -->
<div v-if="condition" key="a">Yes</div>
<div v-else key="a">No</div>

<!-- Vue 3.x (recommended solution: remove keys) -->
<div v-if="condition">Yes</div>
<div v-else>No</div>

<!-- Vue 3.x (alternate solution: make sure the keys are always unique) -->
<div v-if="condition" key="a">Yes</div>
<div v-else key="b">No</div>

<!-- Vue 2.x template 不允许使用:key-->
<template v-for="item in list">
  <div v-if="item.isVisible" :key="item.id">...</div>
  <span v-else :key="item.id">...</span>
</template>

<!-- Vue 3.x -->
<template v-for="item in list" :key="item.id">
  <div v-if="item.isVisible">...</div>
  <span v-else>...</span>
</template>
```
### 模板指令变更[v-if、v-for优先级变更]
```html
<!-- Vue 2.x v-for优先级比v-if高-->
<ul>
<li v-if="false" v-for="item in [1, 2]" >{{item}}</li>
</ul>
<!-- 浏览器中 -->
<ul>
<!-- -->
<!-- -->
</ul>

<!-- Vue 3.x v-for优先级比v-if低-->
<ul>
<li v-if="false" v-for="item in [1, 2]" >{{item}}</li>
</ul>
<!-- 浏览器中 -->
<ul></ul>
```
### 模板指令变更[v-bind优先级变更]
```html
<!-- 
在元素上动态绑定 attribute 时，
常见的场景是在一个元素中同时使用 v-bind="object" 语法和单独的 property。
然而，这就引出了关于合并的优先级的问题。
-->
<!-- Vue2.x v-bind的id无论优先级都不会覆盖property的id-->
<!-- template -->
<div id="red" v-bind="{ id: 'blue' }"></div>
<!-- result -->
<div id="red"></div>

<!-- Vue3.x v-bind的id优先级高的话会覆盖property的id-->
<!-- template -->
<div id="red" v-bind="{ id: 'blue' }"></div>
<!-- result -->
<div id="blue"></div>

<!-- template -->
<div v-bind="{ id: 'blue' }" id="red"></div>
<!-- result -->
<div id="red"></div>
```

### 模板指令变更[组件上的v-model用法更改]
```html
<!-- 
用于自定义组件时，v-model prop 和事件默认名称已更改
1. prop：value -> modelValue；
2. event：input -> update:modelValue；
3. v-bind 的 .sync 修饰符和组件的 model 选项已移除，可用 v-model 作为代替；
代码过多具体请看官方文档： https://vue-docs-next-zh-cn.netlify.app/guide/migration/v-model.html#%E4%BB%8B%E7%BB%8D
-->

```

### ref
```html
<!-- Vue2.x-->
<p v-for="item in [1, 2, 3]" ref="lists">item</p>
this.$refs['lists'] ==> [p, p, p]
<!-- Vue3.x-->
<p v-for="item in [1, 2, 3]" ref="lists">item</p>
this.$refs['lists'] ==> [p](最后一个节点)
<!-- Vue3.x 获取数组节点的方法-->
<div v-for="item in list" :ref="setItemRef"></div>
export default {
  data() {
    return {
      itemRefs: []
    }
  },
  methods: {
    setItemRef(el) {
      this.itemRefs.push(el)
    }
  },
  beforeUpdate() {
    this.itemRefs = []
  },
  updated() {
    console.log(this.itemRefs)
  }
}
```
