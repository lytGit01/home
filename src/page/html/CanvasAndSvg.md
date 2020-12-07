### Canvas画布
```html
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"></canvas>

标签通常需要指定一个id属性 (脚本中经常引用),
width 和 height 属性定义的画布的大小
使用 style 属性来添加边框
你可以在HTML页面中使用多个 <canvas> 元素
```
```js
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d"); // 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。
ctx.fillStyle="#FF0000"; // 属性可以是CSS颜色，渐变，或图案
ctx.fillRect(0,0,150,75); // 方法定义了矩形当前的填充方式。意思是：在画布上绘制 150x75 的矩形，从左上角开始 (0,0)。　
```
### Canvas 路径
```js
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.moveTo(0,0); // 定义线条开始坐标
ctx.lineTo(200,100); // 定义线条结束坐标
ctx.stroke(); // 绘制线条
```
###  Canvas 文本
```js
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.font="30px Arial"; // 定义字体
ctx.fillText("Hello World",10,50); // 在 canvas 上绘制实心的文本
strokeText("Hello World",10,50); // 在 canvas 上绘制空心的文本
```

###  Canvas - 渐变
```js
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
 
// Create gradient
var grd=ctx.createLinearGradient(0,0,200,0); // 创建线条渐变
//createRadialGradient(x,y,r,x1,y1,r1) - 创建一个径向/圆渐变
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
 
// Fill with gradient
ctx.fillStyle=grd;
ctx.fillRect(10,10,150,80);
```

###  Canvas 图像
```js
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var img=document.getElementById("scream");
ctx.drawImage(img,10,10);
```

### SVG
> 可缩放矢量图形（Scalable Vector Graphics，SVG），是一种用于描述二维的矢量图形，基于 XML 的标记语言。作为一个基于文本的开放网络标准，SVG能够优雅而简洁地渲染不同大小的图形，并和CSS，DOM，JavaScript和SMIL等其他网络标准无缝衔接。本质上，SVG 相对于图像，就好比 HTML 相对于文本。

> SVG 图像及其相关行为被定义于 XML 文本文件之中，这意味着可以对它们进行搜索、索引、编写脚本以及压缩。此外，这也意味着可以使用任何文本编辑器和绘图软件来创建和编辑它们。

> 和传统的点阵图像模式，像JPEG和PNG不同，SVG格式提供的是矢量图，这意味着它的图像能够被无限放大而不失真或降低质量，并且可以方便地修改内容。

### Canvs vs SVG
* Canvas 通过 JavaScript 来绘制 2D 图形。
* Canvas 是逐像素进行渲染的。
* 在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。

### 优缺点
* 依赖分辨率
* 不支持事件处理器
* 弱的文本渲染能力
* 能够以 .png 或 .jpg 格式保存结果图像
* 最适合图像密集型的游戏，其中的许多对象会被频繁重绘

### canvas
* SVG 是一种使用 XML 描述 2D 图形的语言。
* SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为* 某个元素附加 JavaScript 事件处理器。
* 在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生* 变化，那么浏览器能够自动重现图形。
### SVG
* 不依赖分辨率
* 支持事件处理器
* 最适合带有大型渲染区域的应用程序（比如谷歌地图）
* 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
* 不适合游戏应用