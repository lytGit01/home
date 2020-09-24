#### es6继承
```javascript
    const fn1 = {
        eat(){
            return 'egg';
        }
    }
     const fn2 = {
        eat(){
            return '煎饼';
        }
    }
    1: Object.create()
    var today = Object.create(fn1) // 继承fn1的方法
    Object.getprototypeOf(today)  // 获取指向
    Object.setprototypeOf(today,fn2) //设置指向
    2:  __proto__
    const newObj = {
        __proto__:dinner, // 继承fn1的方法 === Object.create(fn1)
        eat(){
            return '煎饼';
        }
    }
    console.log(newObj.eat()) // 会先找本身 再找原型
    // 解决 方法
    eat(){
            return super.eat(); // 反会父类的方法
        }
    // 3 class main extends presonle{}
   class preson {
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        say () {
            return `我叫${this.name}今年${this.age}`
        }
    }
    class man extends preson{
        constructor(name,age){
            super(name,age)
        }
    }
    let mans = new man('李云涛','21')

    

```
## class 构造函数
```javascript
    //es6构造函数
    class preson {
        constructor('name','age'){
            // 不写 也会隐式产生
            // 默认会接收实参
            this.like = ['香蕉'];
        }
        set fn1 (val) {
            // 设置
            return this.like.push(val)
        }
        get fn2 () {
            // 获取
            return this.like;
        }
        static look(){}// 在某方法前加 无法调用 变成静态 只能 preson.look()调用
    }
    var obj = new preson('lt',21)
```
## Object.is
```js
    == 无转换数据类型
    === NaN != NaN 和 -0 = +0 的问题
    Object.is // 解决两者的缺点
```