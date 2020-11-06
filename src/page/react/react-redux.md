> 1 [action](#action)
> 2 [reducer](#reducer)
> 3 [store](#store)
> 4 [Provider](#Provider)
> 5 [connect](#connect)

### 一. action <a id="action"></a>
```text
Action 是把数据从应用（这里之所以不叫 view 是因为这些数据有可能是服务器响应，用户输入或其它非 view 的数据 ）传到 store 的有效载荷。它是 store 数据的唯一来源。一般来说你会通过 store.dispatch() 将 action 传到 store。
```
#### action + ts 代码 (action 只是定义了一个操作state的方法，并规定对应state的结构)
```js
import { ADD_TODO, TOGGLE_TODO} from '../constants' // 同意定义的action名称

let nextTodoId = 1;

export interface IAddTodoAction {
    id: number;
    text: string;
    type: ADD_TODO;
}

export interface IToggleTodoAction {
    id: number;
    type: TOGGLE_TODO;
}
export type TodoAction = IAddTodoAction | IToggleTodoAction;

// 添加一条信息
export const addTodo = (text: string) : IAddTodoAction => ({
    id: nextTodoId++,
    text,
    type: ADD_TODO
})

// 点击事件
export const toggleTodo = (id: number): IToggleTodoAction => (
    {
        id,
        type: TOGGLE_TODO
    }
)
```

### 二. reducer <a id="reducer"></a>
```text
Reducers 指定了应用状态的变化如何响应 actions并发送到 store 的，记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。
```
#### reducer 是对应action方法的具体执行逻辑
```js
import { TodoAction } from '../actions'
import { ADD_TODO, TOGGLE_TODO} from '../constants'
import { Todo } from '../types'
const todos = (state : Todo[] = [], action : TodoAction) => {
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                }
            ];
        case TOGGLE_TODO:
                return state.map((todo: Todo): Todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        default:
            return state;

    }
}

export default todos;
```

### 三. store <a id="store"></a>
```text
store就是把action和reducer联系到一起的对象，store本质上是一个状态树，保存了所有对象的状态。任何UI组件都可以直接从store访问特定对象的状态。
在 Redux 中，所有的数据（比如state）被保存在一个store容器中 ，在一个应用程序中只能有一个store对象。当一个store接收到一个action，它将把这个action代理给相关的reducer。reducer是一个纯函数，它可以查看之前的状态，执行一个action并且返回一个新的状态。
```
#### store 的创建于如何应用
```js
// 1、创建 store
const store = createStore(reducer);

ReactDOM.render(
    // 2、然后使用react-redux的Provider将props与容器连通起来
    <Provider store={ store }>
        <App/>
    </Provider> ,
    document.getElementById('root') as HTMLElement
);
```

### 四. Provider <a id="Provider"></a>
```text
Provider 其实就只是一个外层容器，它的作用就是通过配合 connect 来达到跨层级传递数据。使用时只需将Provider定义为整个项目最外层的组件，并设置好store。那么整个项目都可以直接获取这个store。它的原理其实是通过React中的Context来实现的。它大致的核心代码如下
```

```js
import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

export default class Provider extends Component {
    getChildContext() {
        return {store: this.props.store}
    }

    constructor() {
        super()

        this.state = {}
    }

    render() {
        return this.props.children
    }
}

Provider.childContextTypes = {
    store: PropTypes.object
}
```

### 五. connect <a id="connect"></a>
```text
connect 的作用是连接React组件与 Redux store，它包在我们的容器组件的外一层，它接收上面 Provider 提供的 store 里面的 state 和 dispatch，传给一个构造函数，返回一个对象，以属性形式传给我们的容器组件。

它共有四个参数mapStateToProps, mapDispatchToProps, mergeProps以及options。

mapStateToProps 的作用是将store里的state（数据源）绑定到指定组件的props中
mapDispatchToProps 的作用是将store里的action（操作数据的方法）绑定到指定组件的props中
另外两个方法一般情况下使用不到，这里就不做介绍。。

那么 connect 是怎么将React组件与 Redux store连接起来的呢？其主要逻辑可以总结成以下代码：
```
#### connect + ts 与 eact组件通信(ts规范。。。。。。。。)
```js
const getVisibleTodos = (todos: Todo[], filter = VisibilityFilters.SHOW_ALL) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
}

const mapStateToProps = (state: IStoreState) : { todos : Todo[] } => (
    {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
)

const mapDispatchProps = (dispatch: Dispatch) : {toggleTodo: (id : number) => void } => (
    {
        toggleTodo: (id: number) => dispatch(toggleTodo(id))
    }
) 

export default connect(mapStateToProps, mapDispatchProps)(TodoList)

```
```js
import {Component} from "react";
import React from "react";
import {PropTypes} from 'prop-types'

const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent => {
    class Connect extends Component {
        constructor() {
            super()

            this.state = {}

        }

        componentWillMount() {
            this.unSubscribe = this.context.store.subscribe(() => {
                this.setState(mapStateToProps(this.context.store.getState()))
            })
        }

        componentWillUnmount() {
            this.unSubscribe()
        }

        render() {
            return <WrappedComponent  {...this.state}
                                      {...mapDispatchToProps(this.context.store.dispatch)}/>
        }
    }

    Connect.contextTypes = {
        store: PropTypes.object
    }
    return Connect
})

export default connect
```