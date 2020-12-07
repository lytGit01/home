### navigator.onLine
(转载mdn)[https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorOnLine/Online_and_offline_events]

> 1. navigator.onLine 是一个值为 true/false  (true 表示在线， false 表示离线) 的属性。当用户通过选择对应的菜单项 (Firefox 中为 文件 -> 离线工作) 切换到「离线模式」时，这个值就会被更新
> 2. 此外，当浏览器长时间无法连接到网络时，该值也会被更新。根据如下规范：
> 3. 「online」与「offline」 事件
> 4. Firefox 3 引入了两个新事件：「online」与「offline」。当浏览器从在线与离线状态中切换时，这两个事件会在页面的 body 上触发。此外，该事件会从 document.body 冒泡到 document 上，最后到达 window。两个事件都无法被取消(你无法阻止用户进入在线或离线状态)。

```js
window.addEventListener('load', function() {
  var status = document.getElementById("status");
  var log = document.getElementById("log");

  function updateOnlineStatus(event) {
    var condition = navigator.onLine ? "online" : "offline";

    status.className = condition;
    status.innerHTML = condition.toUpperCase();

    log.insertAdjacentHTML("beforeend", "Event: " + event.type + "; Status: " + condition);
  }

  window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});
```
```html
<div id="status"></div>
<div id="log"></div>
<p>This is a test</p>
```
```css
#status {
  position: fixed;
  width: 100%;
  font: bold 1em sans-serif;
  color: #FFF;
  padding: 0.5em;
}

#log {
  padding: 2.5em 0.5em 0.5em;
  font: 1em sans-serif;
}

.online {
  background: green;
}

.offline {
  background: red;
}
```