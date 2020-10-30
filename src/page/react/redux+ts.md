### react + ts + redux
### redux的三大核心{state， action， reducers}

#### state: 整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。

#### action: 唯一改变state的方法就是出发 active
```js
store.dispatch({
  type: 'COMPLETE_TODO', // 可以理解为名称
  index: 1 // 参数
})
``` 

#### reducers: 描述 action 执行的过程
#### 可以接受 {state, action} 并返回新的 state
#### 随着项目变大 需要对 reducers 进行单独区分可以用 combineReducers({单个reducers})
```typescript jsx
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
export default visibilityFilter;
```

#### ts: 可以为 State、Action、reducer 规定类型、接口、类 加强约束性
### ts: 构建redux的目录
#### types      规定state类型
#### actions    定义action的格式
#### reducer    reducer处理目录
#### constans   统一规定action的名称类型
#### container  组件通信目录
