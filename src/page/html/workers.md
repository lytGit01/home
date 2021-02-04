### Web Workers API
> 一个worker是使用一个构造函数创建的一个对象(e.g. Worker()) 运行一个命名的JavaScript文件 - 这个文件包含将在工作线程中运行的代码; workers 运行在另一个全局上下文中,不同于当前的window. 
> 因此，在 Worker 内通过 window获取全局作用域 (而不是self) 将返回错误

> 在专用workers的情况下，DedicatedWorkerGlobalScope 对象代表了worker的上下文（专用workers是指标准worker仅在单一脚本中被使用；共享worker的上下文是SharedWorkerGlobalScope对象）。
>一个专用worker仅仅能被首次生成它的脚本使用，而共享worker可以同时被多个脚本使用

###  注意
1. 在worker内，不能直接操作DOM节点，也不能使用window对象的默认方法和属性。然而你可以使用大量window对象之下的东西，包括WebSockets，IndexedDB以及FireFox OS专用的Data Store API等数据存储机制
2. 只要运行在同源的父页面中，workers可以依次生成新的workers；并且可以使用XMLHttpRequest 进行网络I/O，但是XMLHttpRequest的responseXML和channel属性总会返回null
3. workers和主线程间的数据传递通过这样的消息机制进行——双方都使用postMessage()方法发送各自的消息，使用onmessage事件处理函数来响应消息（消息被包含在Message事件的data属性中）。这个过程中数据并不是被共享而是被复制。
4. 在框架中运行时需要解析Workers.js文件