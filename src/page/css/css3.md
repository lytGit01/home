# css
```text
CSS（Cascading Style Sheets，层叠样式表）是一种将表示样式应用到标记的系统。
CSS以设计、改变其HTML页面的样式而知名，并使用于Web和其他媒介，如XML文档中。
1996年12月W3C推出了CSS规范的第一个版本，1998年W3C发布了CSS的第二个版本即CSS2.0,
2001年5月W3C开始进行CSS3标准的制定，到目前为止该标准还没有最终定稿
```
## css 4种引入方式
```js
1. 引入外部样式文件
    <link type="text/css" rel="stylesheet" href="CSS样式文件的绝对地址"> 
    (推荐使用) 当HTML页面被渲染时，link引用的CSS文件会被同时加载，我们也可以通过JavaScript控制DOM去改变link元素的CSS内容

2. 导入外部样式单
    （1）<style type="text/css">    
            @import "CSS样式文件的绝对地址";
            @import url("样式文件的绝对地址");
        </style>    
    （2）    /*某个CSS文件*/
            @import "另一个CSS文件的地址";

    @import是由CSS提供的一种导入样式的方式，当页面被加载时，@import会等到页面全部被加载完成时再加载CSS样式，所以在页面还未加载完成期间，页面还没有CSS样式效果，会导致“屏闪”，通过@import导入的CSS样式是无法用DOM去控制的。

3. 使用内联样式
   <div style="color: #ccc; width: 200px; height: 100px;"></div>
   应用于调试元素

4. 使用内部CSS样式
    <style type="css/text">
        .text{
            font-size: 20px;
            padding-left: o;
            margin: 0 auto;
        } 
    </style>     
```
## 权重与选择器
### 权重

  |基本选择器|权  重|
  |---|---|
  |* (全局)|   0|
  |e (标签)|   1|
  |. (class)| 10|
  |#  (id)  |   100|
  |styel (行内)|  1000|
  |!important |  >1000|

### 层次选择器

 | 选择器	          |例子                  |描述|
 | ---|---|---|
 | element,element    | div,p               | 选择所有 div 元素和所|有 p 元素 |
 | element element    | div p               | 选择 div 元素内部的所有 p 元素 |
 | element element	  | div p	            | 选择 div 元素内部的所有 p 元素 |
 | element>element	  | div > p	            | 选择父元素为 div 元素的所有 p 元素 |
 | element+element	  | div + p	            | 选择紧接在 div 元素之后的所|有 p 元素|

### 属性选择器
| 选择器	  |例子  |描述|
|---|---|---|
|[attribute]                	|[target]                    |选择带有 target 属性所有元素|
|[attribute=value]           |[target=_blank]               |选择 target="_blank" 的所有元素|
|[attribute~=value]          |[title~=flower]               |选择 title 属性值具有多个空格分隔的值 其中包含单词 "flower" 的所有元素|
|[attr*=val]                 |[attr*=val]                 |选择attr属性值的任意位置包含val的所有元素|
|[attr^=val]                 |[attr^=val]                 |选择attr属性值以val开头的所有元素|
|[attr$=val]                | [attr$=val]                 |选择attr属性值以val结尾的所有元素|
|[attr|=val]                 |[attr|=val]                 |选择拥有值以val或val-开头的attr属性的所有元素|
    
### 伪类选择器
| 选择器	  |例子  |描述|
|---|---|---|
|:visited                   |a:visited                     |访问的链接过后|
|:active                    |a:active                      |选择活动链接时|
|:hover                     |a:hover                       |鼠标划过时|
|:focus                     |a:focus                       |获取焦点时|

### 结构伪类选择器

| 选择器|描述|
|---|---|
|selector:first-child	 |        选择selector所匹配的元素，且该元素是其父元素的第一个子元素等价于 selector:nth-child(1)|
|selector:last-child	     |    选择selector所匹配的元素，且该元素是其父元素的最后一个子元素等价于 selector:nth-last-child(1)|
|selector:nth-child(n)	 |        选择selector所匹配的元素，且该元素是其父元素的第n个子元素其中 n 的值可以使正数(1、2、3...)也可以是关键字(even、odd)|，也可以是公式(2n+1、2n-1...)，且 n 的起始值是1而不是0|
|selector:nth-last-child(n)|	 选择selector所匹配的元素，且该元素是其父元素的倒数第n个子元素|
|selector:first-of-type	  |       选择selector所匹配的元素，且该元素是其父元素的第一个特定类型的子元素|
|selector:last-of-type	  |       选择selector所匹配的元素，且该元素是其父元素的最后一个特定类型的子元素|