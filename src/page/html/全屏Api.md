### 全屏Api
```js
let browser = ['fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange']  // 屏幕变化,用于监听esc、F11
browser.forEach(eventName => { document.addEventListener(eventName, fn // 对应操作函数
); });
this.browser.forEach(eventName => { document.removeEventListener(eventName, fn // 清除对应操作函数
); });
// 浏览器全屏事件
fullScreens () {
    let el = document.documentElement;
    let rfs =
        el.requestFullScreen ||
        el.webkitRequestFullScreen ||
        el.mozRequestFullScreen ||
        el.msRequestFullScreen;

    if (typeof rfs !== 'undefined' && rfs) {
        rfs.call(el);
    } else if (typeof window.ActiveXObject !== 'undefined') {
        // for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
        let wscript = new ActiveXObject('WScript.Shell');
        if (wscript != null) {
            wscript.SendKeys('{F11}');
        }
    }
},
// 浏览器关闭全屏事件
exitScreen () {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    if (typeof cfs !== 'undefined' && cfs) {
        cfs.call(el);
    }
}
```