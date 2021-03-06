```text
 研究将.md文件在浏览器展示
 是因为在做笔记时希望只做一份笔记
 既可以自己看又可以展示在自己看又可以发布到自己的网站上
 项目是 webpack + vue 
 ```
 [markdown-it中文网](https://github.com/LinFeng1997/markdown-it-docs)
 
### 下载包
```
cnpm install markdown-it --save
cnpm install highlight.js --save
```


###  解析.md文件
```js
 {
                test: /\.md$/,
                use: [
                    { loader: 'vue-loader' }, // 解析和转换.vue文件，提取出html、js、style 交给对应的loader去处理
                    {
                        loader:require.resolve('./markdownLoader') // 自己编写的loader
                    }
                ]
            }
```


###  编写loader文件
```js
/*
 *meg 自定义一个loader将.md后缀的文件解析
 */
const hljs = require('highlight.js'); // 设置高亮

// 通常的默认值们
const markdown = require('markdown-it');

module.exports = function(src) {
    const md = markdown({
        highlight: function (str, lang) {
            // 添加这两行才能正确显示 <>
            // str = str.replace(/&lt;/g, "<");
            // str = str.replace(/&gt;/g, ">");

            if (lang && hljs.getLanguage(lang)) {
                try {
                    return '<pre class="hljs"><code>' +
                        hljs.highlight(lang, str, true).value +
                        '</code></pre>';
                } catch (__) {}
            }

            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
        }
    });
    const html = md.render(src);

    return (
        `<template>\n` +
        `<div id="markdown">${html}</div>\n` +
        `</template>\n`
    )
};
```


