### webScoket
```js
import store from '../store';
import Cookies from 'js-cookie';

let socket = null;
let timer = null;
const time = 56000; // nginx 默认60s,所以心跳时间需要 < 60000
function init () {
    // ReconnectingWebSocket 浏览器兼容以在插件中完成
    // if (!window.WebSocket) {
    //     alert('设备不支持WebSocket');
    //     return false;
    // }
    if (socket != null && socket.readyState === ReconnectingWebSocket.OPEN) {
        return false;
    }

    let addr = process.env.NODE_ENV === 'development' ? window.staticRoute.development : window.staticRoute.production;
    // let addr = process.env.NODE_ENV === 'development' ? window.staticRoute.development
    //     : process.env.VUE_APP_TITLE === 'test' ? window.staticRoute.test
    //         : window.staticRoute.production;
    socket = new ReconnectingWebSocket(addr);

    socket.onopen = wsopen;
    socket.onclose = wsclose;
    socket.onerror = wserror;
    socket.onmessage = wsmessage;
}

function ChatMsg (userCode) {
    this.senderId = userCode;
}

function DataContent (type, chatMsg) {
    this.type = type;
    this.data = chatMsg;
}

function keep_alive () {
    const dataContent = new DataContent(0, null);
    chat(JSON.stringify(dataContent));
}

function chat (msg) {
    if (socket != null && socket.readyState === WebSocket.OPEN) {
        // console.log('发送消息：' + msg);
        socket.send(msg);
    } else {
        init();
        // eslint-disable-next-line
        setTimeout("chat('"+msg+"')", 3000);
    }
}

function wsopen () {
    // console.log('WebSocket已建立连接...');
    // 构建ChatMsg
    let chatMsg = new ChatMsg(Cookies.get('userNum'));
    // 构建DataContent
    let dataContent = new DataContent(1, chatMsg);
    chat(JSON.stringify(dataContent));
    clearInterval(timer);
    // webSocket心跳
    timer = setInterval(keep_alive, time);
}

function wsclose () {
    // console.log('连接关闭...');
    clearInterval(timer);
}

function wserror () {
    // console.log('发生错误...');
    clearInterval(timer);
}

function wsmessage (event) {
    // console.log('响应消息');
    if (event.data != null) {
        let json = JSON.parse(event.data);
        // console.log(json);
        // 刷新文件解析进度
        if (json.type === 2) {
            store.commit('updateTableUpload', json.data.msg);
        }
        // 刷新正在解析个数
        if (json.type === 4) {
            store.commit('setWebsocketLen', json.data.msg.total);
        }
    }
}

export default init;

```