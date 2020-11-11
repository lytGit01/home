## 构造函数继承
```js
function Parent1(){
    this.name = "parent1"
}
Parent1.prototype = {
    name: 'parent1',
    add: () => {
      console.log('lk')
    }
}
function Child1(){
    Parent1.call(this); //指向
    this.type = "child1";
}
const child1 = new Child1()
console.log(child1)
// 缺点
// child1 只继承Parent1 实例里的属性 无法继承原型 （部分继承）
// 引用类属性会被所有实例属性共享
```
## 原型链继承
```js
function Parent(age){
    this.name = "parent";
    this.play = [1,2,3];
    this.age = age;
}
Parent.prototype.age = 24
Parent.prototype.fn = function () {
    alert(this.age) // 现找实例 再找原型
}
var parent = new Parent(15)

parent.fn()
function Child(){
    this.name = "child";
}
Child.prototype.sex = '男'
Child.prototype = new Parent(); // 重写原型链 == 父实例的属性方法 （父原型的属性方法在prototype下的proto中）
var child = new Child(16)
child.fn() // 子类不能向父类传参
child.play.push(4)
var child1 = new Child()  //引用类型的属性被所有实例共享
console.log(child1)
// 缺点 
// 1：重写子类原型 (parent原型和实例都会在子类原型上)
// 2：在创建子类实例时，不能向父类的构造函数传递参数 
// 3: 引用类型属性会被所有实例共享
```

## 组合式函数继承
```js
function Person(name){  
  this.name=name;  
  this.countries=["Angule","Vue","React"];  
  this.sayName=function(){  
    return this.name;  
   }  
}  
Person.prototype.sayName=function(){  
  return this.name;  
}  
function Student(age){  
  this.age=age;  
  Psrson.call(this, 'lt')
}  
  
Student.prototype=new Person();  
  
var s1=new Student();  
s1.countries.push("india");  
console.log(s1.countries);//["America", "China", "Canada", "india"]   
var s2=new Student();  
console.log(s2.countries);//["America", "China", "Canada"]  
// 优点
// 1. 创建子类型的实例时不能向超类型的构造函数传递参数
// 2. 解决原型链继承 引用类属性被所有实例共享
// 缺点
// 1. 方法都在构造函数中写，每次创建新的实例都会重建一个方法
```
## 寄生组合式
```js
   function Parent2(){
    this.name = "parent2";
    this.play = [1,2,3];
    }
   function Child2(){
        this.type = "child2";
        Parent2.apply(this, [])
   }
   function F() {}
   F.propoty = Parent2.propoty
   Child2.propoty = new F() // 如果不new的，引用相同
   Child2.prototype.constructor = Child2
``` 

#### es6继承
```js
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
    // 1: Object.create()
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