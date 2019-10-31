# 声命周期
## 可以把组件生命周期大致分为三个阶段
* 第一阶段：是组件第一次绘制阶段，在这里完成了组件的加载和初始化；
* 第二阶段：是组件在运行和交互阶段，这个阶段组件可以处理用户交互，或者接收事件更新界面；
* 第三阶段：是组件卸载消亡的阶段，，这里做一些组件的清理工作。

## 第一阶段
1. getDefaultProps
* 再创建组件之前，先会调用getDefaultProps(),这是全局调用一次，严格来说不属于生命周期的一部分，在组件被创建并加载候，首先调用 getInitialState()，来初始化组件的状态。
2. componentWillMount
* 准备加载组建， 会调用componentWillMount()
* 初始化状态后会调用render()
3. componentDidMount
* 组件加载完成时调用

## 第二阶段
1. componentWillReceiveProps
* 在组建收到新的Props值时会调用
* 通过调用 this.setState()来更新组建状态
2. shouldComponentUpdata
* 组件收到新的属性值和状态变化时会触发
* 这个函数的返回值决定是否更新组件： true(默认) 更新 继续向后走， 否则 不更新 进入等待状态 大型项目中 有自己重载这个函数，决定是否更新，能有效提高性能
3. componentWillUpdata
* 如果组件状态或者属性改变，并且上面的 shouldComponentUpdate(...) 返回为 true，就会开始准更新组件，并调用 componentWillUpdate()
* 在这个函数里面，你就不能使用 this.setState 来修改状态。这个函数调用之后，就会把 nextProps 和 nextState 分别设置到 this.props 和 this.state 中。紧接着这个函数，就会调用 render() 来更新界面了
4. componentDidUpdata
* 调用了 render() 更新完成界面之后，会调用 componentDidUpdate()

## 第三阶段
1. componentWillUnmount
* 当组件要被从界面上移除的时候，就会调用 componentWillUnmount()
* 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等。

## 总结
```text
生命周期                        调用次数                能否使用 setSate()
getDefaultProps 	        1(全局调用一次) 	            否
getInitialState 	        1 	                            否
componentWillMount 	        1 	                            是
render 	                        >=1 	                            否
componentDidMount 	        1 	                            是
componentWillReceiveProps 	>=0 	                            是
shouldComponentUpdate 	        >=0 	                            否
componentWillUpdate 	        >=0 	                            否
componentDidUpdate 	        >=0 	                            否
componentWillUnmount 	        1 	                            否