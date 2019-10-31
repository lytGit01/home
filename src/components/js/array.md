## 合并数组
```js
    const arr = [4,100]
    const brr = [5,200]
    1. console.log([...arr,...brr])
    2. concat // 会形成一个新的数组所以是 数组的深拷贝
 ```
## Array.from() Array.of() [] [...rest] 四种方法
```js
    1. Array.from({  
        '0': 'a',  
        '1': 'b',  
        '2': 'c',  
        length: 3  
        })  // 将维数组转化为数组
        // Array.from还可以接受第二个参数，作用类似于数组的es5map方法，用来对每个元素进行处理，将处理后的值放入返回的数组
   2. Array.of(1, 2, 3) 和 Array(3) 的区别 Array只有一个参数时 是把数组的长度设为 3
   3. [] const ss = 'ly'; console.log([ss]) //['ss]
   4. [...] const ss = 'ly'; console.log([...ss]) //['s','s']

```
 ## find findIndex
 ```js
  [1,5,6,7].find((x,i,val)=>{
      return x>5
  })  //返回第一个满足条件的值
  findIndex //返回第一个满足条件的值的下标
```

## copyWithin
 ```js
    const arr = [1,2,3,4,5,6,7,8,9];
    console.log(arr.copyWithin(1,3,6))
    1. 起始位置覆盖 能覆盖的和
    2. 启示复制源     可为- 可省略
    3. 1结束复制源  可为- 可省略 end-1
    console.log(arr.copyWithin(3)) 
    4. 只有一个参数 为起始位置 重这个位置后开始数有几个 截取前几个 重第一个参数开始覆盖
    5. start和end都可以是负数，负数表示从右边数过来第几个。
    console.log(arr.copyWithin(3,-4,-1))
    6. 如果都为负数 |start| >|end|
    console.log(arr.copyWithin(3,-4))
    7. 只有两个参数 第一个起始 第二个statr 直接到最后
```
## file
```js
    Array(3).file(7) //[7,7,7]
    file() // 三个参数
    1:填充值
    2:start 无end到最后
    3:end   前包后不包
```
## keys() values() entries()
```js
    // 结合 for of
    //数组
    for(let index [1,2].keys){
        console.log(index) // 0 1
    }
    for(let value [1,2].values){
        console.log(value) // 1 2
    }
    for(let [i,v] [1,2].entries){
        console.log(i,v) // 0 1 , 1 2
    }
    // 对象
    Object.keys(对象)
    Object.values(对象)
    Object.entries(对象)
```
## for of 和 for in的区别
```text
    for of es6语法 不能遍历对象 默认打印的是 val
    for in es5语法 能遍历对象 数组 默认打印的是 index
    1.index索引为字符串型数字，不能直接进行几何运算

    2.遍历顺序有可能不是按照实际数组的内部顺序

    3.使用for in会遍历数组所有的可枚举属性，包括原型。例如上栗的原型方法method和name属性

    所以for in更适合遍历对象，不要使用for in遍历数组。
```