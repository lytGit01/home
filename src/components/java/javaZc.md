### class
```java
// .java 文件会被编译器编译成.class文件执行
public class name {
    // calss入口
    public static void main(String[], args) {
        // 输出
        System.out.println("hello word!");
    }
}
```
### 标识符
1. 以 字母、下划线、_ 、$ 开头
2. 不能是特殊字符
3. 不能是关键字

### 数据类型
```java
1. 基本数据类型
-     数值型 
            整数类型: {
                byte：[8位, 类型用在大型数组中节约空间，主要代替整数, byte a = 100，byte b = -50]，
                short：[16位, short s = 1000，short r = -20000],
                int: [32位, int a = 100000, int b = -200000]，
                long: [64位, 这种类型主要使用在需要比较大整数的系统上, long a = 100000L，Long b = -200000L]
            }
            浮点类型: {
                float: [32位 单精度, 浮点数不能用来表示精确的值，如货币, float f1 = 234.5f]，
                double: [64位 双精度, double类型同样不能表示精确的值，如货币,
                double d1 = 123.4]
            }
-     字符型 （char）
-     布尔型 （boolean）
```

### 运算符
> * "+" 
> * "-" 
> * "*" 
> * "/" 
> * "%" 
> * ++  ++在前先运行，后赋值，在后先赋值，后运算
> * --

### 赋值运算符
> * += 
> * =+
> * *= 
> * /=
> * %=
> * =

### 逻辑运算符
1、&& 与：要求所有人都投票同意，才能通过某议题

2、|| 或：只要求一个人投票同意就可以通过某议题

3、 ! 非：某人原本投票同意，通过非运算符，可以使其投票无效

4、 ^ 异或：有且只能有一个人投票同意，才可以通过某议题


### 运算符优先级
单目乘除为关系，逻辑三目后赋值。 

- 单目：单目运算符+ –(负数) ++ -- 等 
- 乘除：算数单目运算符* / % + - 
- 为：位移单目运算符<< >> 
- 关系：关系单目运算符> < >= <= == != 
- 逻辑：逻辑单目运算符&& || & | ^ 
- 三目：三目单目运算符A > B ? X : Y 
- 后：无意义，仅仅为了凑字数 
- 赋值：赋值=
- 

### 数组
``` java
一. 声明数组
1. int[] scores;  整数型数组
2. double[] height; 浮点型
3. String[] name; 字符串型

二. 分配空间
1. scores = new int[5];
2. height = new double[5];
3. name = new String[5];
4. int[] scores = {78, 89, 59, 98} ===> new int[]{78, 89, 59, 98};

三. error
1. new int[]
2. new int[1]{45}

四. 多维数组
1. 二维数组 int[][] scores = new int[2][2] ===> int[][] scpres =
{
{12, 123}, 
{12, 123}
};
```

### 方法定义
```
所谓方法，就是用来解决一类问题的代码的有序组合，是一个功能模块。

一般情况下，定义一个方法的语法是：



其中：
所谓方法，就是用来解决一类问题的代码的有序组合，是一个功能模块。

一般情况下，定义一个方法的语法是：
```
```java
    访问修饰符 返回值类型 方法名(参数列表) {
        方法体
    }


1、 访问修饰符：方法允许被访问的权限范围， 可以是 public、protected、private 甚至可以省略 ，其中 public 表示该方法可以被其他任何代码调用，其他几种修饰符的使用在后面章节中会详细讲解滴

2、 返回值类型：方法返回值的类型，如果方法不返回任何值，则返回值类型指定为 void ；如果方法具有返回值，则需要指定返回值的类型，并且在方法体中使用 return 语句返回值

3、 方法名：定义的方法的名字，必须使用合法的标识符

4、 参数列表：传递给方法的参数列表，参数可以有多个，多个参数间以逗号隔开，每个参数由参数类型和参数名组成，以空格隔开 

根据方法是否带参、是否带返回值，可将方法分为四类：

Ø 无参无返回值方法

Ø 无参带返回值方法

Ø 带参无返回值方法

Ø 带参带返回值方法



## 面向对象
public class className {}

### static 静态变量
1. 静态方法中可以直接调用同类中的静态成员，但不能直接调用非静态成员。（如果希望在静态方法中调用非静态变量，可以通过创建类的对象，然后通过对象来访问非静态变量）
2. 在普通成员方法中，则可以直接访问同类的非静态变量和静态变量
3. 静态方法中不能直接调用非静态方法，需要通过对象来访问非静态方法
```
### 模块初始化
```java
public class HelloWorld {
    
    String name; // 声明变量name
	String sex; // 声明变量sex
	static int age;// 声明静态变量age
    
    // 构造方法 只在第一次初始化时执行
	public HelloWorld () { 
		System.out.println("通过构造方法初始化name");
		name = "tom";
	}
    
    // 初始化块
	{ 
		System.out.println("通过初始化块初始化sex");
		sex = "男";
	}
    
    // 静态初始化块
	static { 
		System.out.println("通过静态初始化块初始化age");
		age = 20;
	}
    
	public void show() {
		System.out.println("姓名：" + name + "，性别：" + sex + "，年龄：" + age);
	}
    
	public static void main(String[] args) {
        
        // 创建对象
		HelloWorld hello = new HelloWorld();
		// 调用对象的show方法
        hello.show();
        HelloWorld hello2 = new HelloWorld();
        
	}
	<!--
	通过静态初始化块初始化age
    通过初始化块初始化sex
    通过构造方法初始化name
    姓名：tom，性别：男，年龄：20
    
    通过静态初始化块初始化age
    通过初始化块初始化sex-->
}
```


### java 封装
```java
1. 修改属性的可见性    --private
2. 创建 setter/getter  -- 用于属性的读写
3. 在setter/getter中加入控制性语句   --对属性的合法值进行普安段
```

### Java 中的修饰符
```java
private 本类
protected 本类 同包 子类
public 任何人都能用
```

### 内部类
```java
问：什么是内部类呢？

答：内部类（ Inner Class ）就是定义在另外一个类里面的类。与之对应，包含内部类的类被称为外部类。

问：那为什么要将一个类定义在另一个类里面呢？清清爽爽的独立的一个类多好啊！！

答：内部类的主要作用如下：

1. 内部类提供了更好的封装，可以把内部类隐藏在外部类之内，不允许同一个包中的其他类访问该类

2. 内部类的方法可以直接访问外部类的所有数据，包括私有的数据

3. 内部类所实现的功能使用外部类同样可以实现，只是有时使用内部类更方便

问：内部类有几种呢？

答：内部类可分为以下几种：

成员内部类
静态内部类
方法内部类
匿名内部类
```
```java
//外部类HelloWorld
public class HelloWorld {
    
    // 内部类Inner，类Inner在类HelloWorld的内部
    public class Inner {
        
		// 内部类的方法
		public void show() {
			System.out.println("welcome to imooc!");
		}
	}
    
	public static void main(String[] args) {
        
        // 创建外部类对象
		HelloWorld hello = new HelloWorld();
        // 创建内部类对象
		Inner i = hello.new Inner();
        // 调用内部类对象的方法
		i.show();
	}
}
```

## 继承
```
implements 和 extends
使用impments 父类方法无法被覆盖
使用extends  父类方法可以被覆盖
```
#### final
```final
1. final 修饰符 只能一次赋值
2. final String name; 报错 final不允许默认值 必须赋值;
3. interface name {
    String name = "lt" ===> static final String name = "lt";
    
}
```

#### equals
```
1. equals 判断引用对象是否相同
Dog dog1 = new Dog(); 
Dog dog2 = new Dog();
dog1.equals(dog2) ===>  false ===> ===
```


## 多态
#### 引用的多态  方法的多态
```
public class Cat extends Animal {
    public void fn {
        System.out.println();
    }
}
Aniaml obg1 = new Animal();
Aniaml obg2 = new Dog(); (Dog extents Animal)
Aniaml obg3 = new Cat();
obg3.fn() // 报错
1. 父类的引用可以指向本类
2. 父类的引用可以指向子类
```

### 引用类型转换
``` 
1. 向上类型转换       隐式转换   小类型到大类型
2. 向下类型转换       强制转换   大类型到小类型
3. instanceof
Animal 父类 Dog Cat 子类
Dog dog = new Dog();
Animal animal = dod; // 将 dog 向 Animal 小向大转换 隐式转换无风险
if (animal instanceof Dog)
Dog dog2 = (Dog)animal; // 虽然animal指向Dog 但它仍然是父类（大类型） 大向小转换 需要强制抓换 
if (animal instanceof Cat)
Cat cat = (Cat)animal; // 报错 Cat 和 Dog 无继承关系 (Cat 和 Animal 是继承关系 但 Animal 是指向 Dog的)

```


### 抽象类
```
1. 语法定义 
类前或方法前使用 abstract 则为抽象类或抽象方法

2. 应用场景
a: 在某些情况下父类只知道子类应该包含某些方法，确无法知道这些之类具体是怎样实现的
b: 从多个具有相同特征的类中抽象出一个抽象类，让这个抽象类作为子模板，宠而避免子模板的设计随意性

3. 作用
限制子类必须实现某种方法，但不关注实现细节

4. 使用规则
a. abstract定义抽象类
b. abstract定义抽象方法，只有声明，不需要实现
c. 包含抽象方法的类是抽象类
d. 抽象类可以包含抽象方法也可以包含普通方法
e. 抽象类不能直接创建，可以定义引用变量
```


### 接口
```
interface
```

### UML图