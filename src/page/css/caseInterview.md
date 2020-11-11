### css面试题

#### 1. 盒模型
```text
IE盒模型  w/h = padding + border + content
W3C盒模型 w/h = content
```

#### 2. ::before 和 :after 中双冒号和单冒号的区别 及 伪类和伪元素的区别
```text
1. 定义不同
   伪类是class类型
   伪元素是Html的类型（脱离文档流）

2. css2 伪类和伪元素 以 单个冒号生命规范 :hover :after :first-child
   css2.1 伪类 以 单个冒号生命规范 :hover :active 
          伪元素 以 双冒号 ::before ::after 规范命名      
```

#### 3. CSS中哪些属性可以继承
```text
可继承:    font-size @font-face color
不可继承:   margin padding boder width height
```

#### 4. 如何居中div
```css
// 第一种 （父元素相对定位）
    width: 3rem;
    height: 3rem;
    background: #ccc;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

// 第二种 （父元素相对定位）
    width: 3rem;
    height: 3rem;
    background: #ccc;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -1.5rem; // 会触发回流 重绘
    margin-left: -1.5rem;  

// 第三种 （父元素相对定位）
    width: 3rem;
    height: 3rem;
    background: #ccc;
    position: absolute;
    top: 50%;
    left: 50%;
     transform: translate(-50%, -50%); // 不会触发回流  重绘

// 第四种 （父元素设置）
   display: flex;
   justify-content: center;
   align-items: center;


```

#### 5. CSS3有哪些新特性
```css
// 背景
// 边框
// 盒子阴影
// 文字阴影
// transfrom：位移 旋转 倾斜 缩放
// transition: 名称 时长 方式‘ease’(默认) 延迟开始
// animation:  名称 时长 方式‘ease’(默认) 延迟开始 执行几次 是否重后往前执行
// @keyframes
// resize outline box-sizing
```

#### 6. 解释一下 Flexbox (弹性盒布局模型)、及适用场景
```
```

#### 7. 用纯 CSS 创建一个三角形
```css
// 原理： 由边框构成一个矩形，边框相互折叠，其中一个边框与其他三个边框颜色不一样
width: 0;
height: 0;
content: '';
border: 20px solid transparent;
border-bottom-color: #ccc; 
```

#### 8. 浏览器兼容性有哪些
```text
1. 不同浏览器的margin pading 不同
2. img的边框默认值不同
3. a 超链接点击过后 伪类样式 不在具有 hover active 将 伪类进行排序 L-V-H-A
4. 谷歌中字体小于12px会按照12px设置  -webkit-text-size-adjust: none; 解决。
```

#### 9. 使用 base64 编码的优缺点
```text
base64 用来处理图片
优点
1. 减少http请求
2. 图片加载快
缺点
1. 比原有图片体积大
2. 不利于存储
```

#### 10. 为什么要清除浮动、清除浮动的方式
```text
为什么要清除浮动: 因为浮动会导致元素脱衣文档流，使下一个元素紧挨着浮动元素，导致样式错乱
清除浮动的方式
1. 给其增加一个父元素 并设置 overflow：hidden|auto   display: flex
2. 给其增加一个父元素 并设置 相同高度
3. 在其后面加一个块元素设置  clern: both
4. 添加一个伪元素设置        clern: both
```

#### 11. CSS优化，提高性能的方法有哪些
```text
1. 预处理器 sass less
2. 减少层级嵌套
3. 提取公共样式
4. 命名规范统一
5. 压缩，去除空格
```

#### 12. 写一个左中右布局占满屏幕，其中左右两块是固定宽度200 ，中间自适应宽，要求先加载中间块，请写出结构及样式
```html
<style>
#cssBox{
    position: relative;
    width: 100%;
    height: 100%;
}
.cont,.left,.right {
    position: absolute;
    height: 100%;
}
.left, .right {
    width: 2rem;
}
.left {
    left: 0;
}
.right {
    right: 0;
}
.cont {
    right: 2rem;
    left: 2rem;
    background: #eee;
}
</style>    
<div id="cssBox">
    <div class="cont"></div>
    <div class="left"></div>
    <div class="right"></div>
</div>
```

#### 13. box-sizing常用的属性有哪些
```css
box-sizing: border-box;  // width/height = border + padding + content;
box-sizing: content-box; // width/height = content;
```
#### 14. css选择器有哪些，选择器的权重的优先级
|名称|权重|
|---|---|
| 标签名 | 1 |
| .class | 10 |
| id | 100 |
| style | 1000 |
| !imporant | >1000 |

#### 15. 请简要描述margin重合问题
##### margin-bootom 和 margin-top 会重叠
|介绍|例子|
|---|---|
|都是正值 取大的 | margin-bootom：3px;  margin-top: 5px; 取 margin-top: 5px |
|都是负值 取绝对值大的 | margin-bootom：-3px;  margin-top: -5px; 取 margin-top: -5px |
|一正一负 取相加值 | margin-bootom：-3px;  margin-top: 5px; 取 margin-top: 2px |

#### 16. px、rem、em、vh、vw的区别
|名称|介绍|
|---|---|
| px  | 像素 | 
| rem | 相对于根元素 |
| em  | 相对于父元素 |
| vw  | 相对与浏览器的宽度 1vw = width:1% |
| vh  | 相对于浏览器的高度    |
#### 17. 浏览器的内核分别是什么
|内核名称|浏览器使用|
|---|---|
|Trident|IE|
|Gecko|火狐|
|Webkit|苹果，谷歌以前使用过|
|Blink|Opera、谷歌现在使用|

#### 18. 什么叫优雅降级和渐进增强
|名称|介绍|
|---|---|
| 优雅降级 | 在满足基本功能的同时，为了能过适配和兼容低版本的浏览器，进行逐步降级 |
| 渐进增强 | 在满足基本功能的同时，为追求良好的用户体验和功能效果，逐步向高级浏览器过度 |

#### 20. link 和  @import的区别 
|名称|介绍|
|---|---|
|link    | 1. Html 标签 <br/>2. 同时载入不会影响样式 <br/>3. 可以用js控制DOM去改变的|
|@import | 1. css属性 <br/>  2. import会等到页面全部被加载完成时再加载CSS样式，所以在页面还未加载完成期间，页面还没有CSS样式效果，会导致“屏闪” <br/>3. 无法用js控制DOM去改变的|

#### 21. position的值 
|名称|介绍|
|---|---|

#### 22. BFC （块级格式化上下文：block formatting context)的理解
|名称|介绍|
|---|---|

#### 23. 媒体查询 
|名称|介绍|
|---|---|

#### 24. 单行、多行溢出省略
```css
```

#### 25. png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过webp？
|名称|介绍|
|---|---|

#### 26. 手写动画，最小的时间间隔多少
```text
```

#### 27. 介绍回流重绘及如何解决
|名称|介绍|
|---|---|

#### 28. css画出一个扇形
```css
```

#### 29. 简述grid布局
```
```

#### 30. 什么时候会出现浏览器分层
```
```

#### 31. css实现一个水波纹
```
```

#### 32. calc, support, media