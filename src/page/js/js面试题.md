#### 1. 手写Promise、介绍Promise的特性
```js
// 简易版
function myPromis(callback) {
        this.state = 'padding'; // 初始状态值
        this.value = undefined; // resolve状态
        this.reason = undefined; // reject状态
        let resolve = value => {
            // 保证转态改变是不可逆的
            if (this.state === 'padding') {
                this.state = 'fulfilled';
                this.value = value;
            }   
        }   
        let reject = reason => {
            // 保证转态改变是不可逆的
            if (this.state === 'padding') {
                this.state = 'rejected';
                this.value = reason;
            }   
        }
        // 捕获异常
        try {
            callback(resolve, reject);
        }catch(e){
            reject(e);
        }
  
}
myPromis.prototype.then = function(onFulilled, onRejected) {
    switch (this.state) {
        case 'fulfilled': 
            onFulilled(this.value);
            break;
        case 'rejected': 
            onRejected(this.reason);
            break;
        default:
    }
}
let p = new myPromis((res, rej) => {
console.log(1);
res(2);
});
p.then((x) => {console.log(x)})
```

#### 2. 闭包
```js
function bibao() {
    cosnt a = 6;
    return function cab() {
        const b = 6;
        return a + b;
    }
}
bibao();
//  闭包的出现是为了解决
/*
* 1. 成为局部变量，作为私有成员，防止全局变量的污染
* 2. 能够访问到作用域的变量
* 3. 长期存储在内中，供日后使用
*/
//  闭包的出现导致的问题
/*
* 1. 占用内存，无法被垃圾回收
* 2. 外部引用时，闭包的层级决定了作用域链的长度
*/
// 闭包解决循环后无法获取循环中的值
function fn1(num) {
    return function () {
        console.log(num);
    }
}
for (var i = 1; i<=3; i++) {
    document.getElementById('id' + i).onclick = fn1(i)
}
```

#### 4. GC(垃圾回收机制)
[GC路由](https://hsb11.cn/#/GC)

#### 5. 作用域 及 作用域链
```js
// 作用域
/*
* 1. es5 之前只有 全局作用域 和 函数作用域
* 2. 作用域内的变量函数是私有的，外部不能直接访问 (可使用闭包或实例调用)
* 3. es6 后 引入了 let const 可以声明块级作用域 {} 内的用 let const 定义变量 外部不能调用
*/
// 作用域链
/*
* 1. 在作用域中没有找到所需要的变量或函数会一直向上查找直到头位置
* 2. 
* 3. 
*/
function Parent() {
    let surname = 'L';
    let moeny = '20,000,000';
    let jn = function () {
        this.eat = '吃';
        console.log(surname);
    }
}
```
#### 6. 原型 与 原型链
```js
// 构造函数
function Parent() {
    this.surnamr = 'L';
}
// 原型
Parent.prototype.eat = '吃';
Parent.prototype.jn = function () {
    console.log(surname);
}
// 实例
const P = new Parent();
// 每个实例对象都有一个__proto__ 指向原型
p.__proto__ === Parent.prototype // true
// 每个原型上都有一个 constructor 指向构造函数 
Parent.prototype.constructor === Parent // true
p.__proto__.constructor === Parent // true
p.__proto__.constructor === Parent.prototype.constructor // true
// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) ===  Parent.prototype) // true
```

#### 7. 继承
[继承](https://hsb11.cn/#/extend)
|名称|特点|方法|
|---|---|---|
|构造函数继承|1.只能继承构造函数的方法和属性无法继承原型|call(), apply()指向继承的构造函数|
|原型链函数继承|1. 实例的引用相同</br> 2. 子类无法向父类传参|child.prototype = new Parent()|
|组合式继承| 1. 构造函数的方法属性会调用两次，消耗内存| 构造函数和原型链相结合 |
|寄生式继承| 1. 解决实例的引用相同的问题</br> 2. 无法继承构造函数中的方法属性| 1.创建一个新函数</br> 2. 原型 = 父类.prototype </br> 3. 子类.prototype = new 新函数()|
|寄生组合式继承| 最终版，解决以上问题|构造函数继承 + 寄生式继承 |

#### 8. 高阶函数
```js
function fn1 () {
    console.log(1);
}
function fn2 (f) {
    f()
}
function fn3 () {
    return function () {
        console.log(2)
    }
}
```

#### 9. 函数柯里化 实现add(1)(2)(3)
```js
// 函数柯里化 是将接收多个参数的函数转换成，接收一个参数，并能够接收剩下参数和返回值的新函数
function add (a) {
    return function (b) {
        return function () {
            console.log(a+b+c);
            return a + b + c;
        }   
    }
}
console.log(add(1)(2)(3))
```
#### 10. 防抖节流
```js
// 防抖
/*
* 1. 解决重复点击按钮时，在规定时间内，只执行最后一次
* 2. input输入时，只需要在输入完成后最后一次执行
* 3. 满足在规定时间内执行第一次
*/
function fd(fn, wait = 500, immediate = false) {
    let time;
    let context, arg;
    return function () {
        context = this;
        arg = arguments;
        if (time) clearTimeout(time);
        if (immediate) {
            const flag = !time;
            time = setTimeout(function() {
                time = null;
            }, wait);
            if (flag) fn.apply(contexts,arg);
        } else {
            time = setTimeout(function() {
                fn.apply(context, arg);
            }, wait)
        }
    }
}
// 节流
/*
* 1. 监控浏览器变化或则某个视图拉伸变化时等类似问题时，resize会被多次触发 
*/
// 利用时间实现
function jl(fn, wait = 500, immediate = false) {
    let brforeTime = 0;
    return function () {
        const nowTime = new Date().getTime(); // +new Date()
        if(nowTime - brforeTime > wait) {
            fn.apply(this, arguments);
            brforeTime = nowTime;
        }
    }
}
// 利用定时器实现
function jl1(fn, wait = 500, immediate = false) {
    let time; 
    let context, arg;
        return function () {
            context = this;
            arg = arguments;
            if (!time) {
                time = setTimeout(function () {
                    time = null;
                    fn.apply(this, arguments);
                }, wait)
            }
    }
}
```
#### 11. 实现链式调用 (核心在于调用完后将自生实例返回)
```js
function f() {
    console.log(0)
}

f.prototype.met = function () {
    console.log(1)
    console.log(this);
    return this;
}
f.prototype.met1 = function () {
    console.log(2)
    console.log(this);
    return this;
}
new f().met().met1();
```
#### 12. 手写发布订阅
```js
```

#### 13. 类数组和数组的区别, 类数组如何转换成数组
```js
```

#### 14. call、apply、bind (思考箭头函数能否使用)
#### call
```js
Function.prototype.calls = function () {
    const that = arguments[0] || window;
    that.fn = this; // this === f1, that === f2 // 用f2调用f1 
    const args = [];
    if (arguments.length > 1) {   
        for(let i = 1; i < arguments.length; i++) {
            args.push('arguments[' + i + ']');   
        }
        eval('that.fn(' + args + ')')
    } else {
        that.fn();
    }
    
    delete that.fn;
}
function f1(num=45) {
    console.log(this)
    this.a = num;
}
function f2() {
    f1.calls(this, 85)      
}
console.log(new f2().a) // 85
```
#### apply 
```js
/*
* call appply 是利用js的this指向，谁调用指向谁来实现的 只是传参类型不同 感觉 apply是call 的一款升级版本
*/
Function.prototype.applys = function () {
    const that = arguments[0] || window;
    that.fn = this; // this === f1, that === f2 // 用f2调用f1 
    const args = [];
    if (!!arguments[1] && Array.isArray(arguments[1])) {   
        for(let i = 0; i < arguments[1].length; i++) {
            args.push('arguments[1][' + i + ']');   
        }
        eval('that.fn(' + args + ')')
    } else {
        that.fn();
    }
    delete that.fn;
}
function f1(num=45) {
    this.a = num;
}
function f2() {
    f1.applys(this,[85])      
}
console.log(new f2().a) // 85
```
#### bind 
```js
// 运用到的知识点
/*
* 1. call
* 2. apply
* 3. 寄生式继承
* 4. 函数柯里化
* 5. 闭包
*/
Function.prototype.binds = function (otherThis) {
    if (typeof this !== 'function') {
        throw new TypeError('不是函数')
    }
    var that = this,
    args = Array.prototype.slice.call(arguments, 1), // 获取预定参数
    newFn = function () {
        // 合并参数，运用闭包获取预定参数
        args.push.apply(args, arguments);
        console.log(this);
        return that.apply(
            that.prototype.isPrototypeOf(this) ? this : otherThis, // 判断实例是否指向自己（是否new)
            args
            )
    };
    // 寄生式继承
    if (this.prototype) {
        const fn = function () {};
        fn.prototype = this.prototype;
        newFn.prototype = new fn();
    }

    return newFn;
}
function f1(num,num1 = 0) {
    this.a = num;
    this.b = num1;
    console.log(this.c)
}
f1.prototype.toS = function() { 
    return this.a + ',' + this.b; 
};
const f2 = {
        c: 0
}
let b = f1.binds(f2, 8);
const c = new b(2);
console.log(c.toS()); // 8.2
```


#### 15. 词法作用域 （js采用静态作用域）
```js
var a = 1;
function a() {
    console.log(a)
}
function b() {
    var a = 2;
    a()
}
b() // 1
```
#### 16. 执行顺序
#### 17. 执行上下文栈、变量对象、执行过程
```js
// 执行上下文有三个重要的属性
/*
* 1. 变量对象 vo(引擎变量)不可被访问  Ao(active object) 函数变量 进入上下文时才会激活
* 2. 作用域链
* 3. this
*/


// 例子
function fn (a) {
    var b = 2;
    function c() {};
    var d = function () {};
    b = 3
}
fn(1)
// 进入执行上下文后
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: undefined,
    c: reference to function() {},
    d: undefined
}
// 代码执行
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: 3,
    c: reference to function c() {},
    d: reference to FunctionExpression
}
```

#### 18. 作用域链 （在函数定义时就决定了）
```js
// [[scope]]每个函数都有一个，可以将其看作是父变量的链接层
function foo() {
    function bar(){

    }
}
// 定义时
foo[[scope]]: {
    gobalContext.vo
}
bar[[scope]]: {
    f00Context.Ao
    gobalContext.vo
}
// 激活时
[[Scope]] = Ao.concat([[scope]]);
```
