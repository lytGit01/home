#### is
```
* 在HTML中有一些元素的限制 如：
  1. <a></a> 不能嵌套其他交互元素如按钮 链接
  2. ul ol 只能嵌套 li
  3. select option optgroup
* 所以 有了 is 
> <ul>
    <li :is='组件名'></li>
    用于动态组件 解决了DOM模板的限制问题
  </ul>
```  

#### key  type number | string
* key的特殊属性主要用在Vue的虚拟DOM 算法，它会基于key的变化重新排列元素的顺序，从而达到重新渲染视图的作用，并会移除不存在key的元素 有相同父元素的子元素必须有独有的key。重复的key会造成渲染错误

#### ref
* 有两种使用方式
1. 在DOM节点上
> 会拿到节点
2. 在组件上
> 会拿到一个对对象 包含组件的信息

#### slot slot-scope 插槽 | 具名插槽 | 作用域插槽
##### 因为DOM的限制 组件与组件不能相互嵌套  为了解决这种问题有了插槽 slot
1. 插槽
> parent子件内写入<slot></slot> 在parent内嵌套child组件 就可以了 不然不符合DOM机制 不会报错 但什么也不显示
2. 具名插槽
> 和插槽结构大致一样多了两个属性 name slot 让插槽变得更加灵活
```html
<!-- 假如我们有一个parent组件 -->

<div class='parent'>
<slot name='header'></slot>
<slot></slot>
<slot name='footer'></slot>
</div>


<!-- 它的模板为 -->
<parent>
<header slot='header'>我是header</header>
<div>
我是main
</div>
<footer slot='footer'>我是footer</footer>
</parent>

<!-- 渲染结果为 -->
<div class='parent'>
<header>我是header</header>
<div>
我是main
</div>
<footer>我是footer</footer>
</div>
```

3. 作用域插槽
> 与插槽和具名插槽有点不同 它可以用来传递数据
```html
<!-- 组件 -->
<div class='parent'>
<slot text="hello from child" inser='我是作用域插槽'></slot>
</div>

<!-- 它的模板为 -->
<parent>
<div slot-scope='props'>
<p>{ props.text }</p>
<p>{ props.inser}</p>
</div>
</parent>

<!-- 渲染结果为 -->
<div class='parent'>
<p>hello from child</p>
<p>我是作用域插槽</p>
</div>
```
## nextTick
```
在一个生命周期里如果想要获取新更新的DON解构
一般在Mound生命周期获取
如果想要在这个生命周期里获取 那么就要用 nextTick()
```

## 路由原理
