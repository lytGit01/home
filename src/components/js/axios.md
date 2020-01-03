### axios 拦截重复请求
#### 一直被连续点击一个按钮触发多次Http请求而困扰，想要统一处理这类问题
#### 通过 new axios.CancelToken() 来注销重复请求
### 思路 
```text
1. 在axios拦截器中拦截发出的每条http请求并缓存起来， 判断是否重复
2. 在axios拦截器中拦截响应后的http请求，清除缓存，保证发出的请求不会去缓存数据重复
3. 【重点※】 如果是重复请求http请求， 未响应时又发出一条相同http， 在 1. 会走重复逻辑， 将重复的http请求清除
```

### 直接上代码

```js
/**
 * axios全局配置，包括验证校验及错误处理
 */
import axios from 'axios';
import store from '../store';
import router from '../router';
// import Cookies from 'js-cookie';

// 创建axios实例
const service = axios.create({
    withCredentials: true, // 允许跨域携带cookie
    timeout: 1000 * 30 // 请求超时时间30秒
});
const pending = {}; // 缓存http请求
const CancelToken = axios.CancelToken; // 取消请求的实例
// 清除重复请求、缓存
const removePending = (key, isRequest = false) => {
    if (pending[key] && isRequest) {
        pending[key]({ msg: '取消重复请求' });
    }
    delete pending[key];
};
// 处理http请求，返回统一格式
const getRequestIdentify = (config, isReuest = false) => {
    let url = config.url;
    if (isReuest) {
        url = config.baseURL + config.url.substring(1, config.url.length);
    }
    return config.method === 'get' ? encodeURIComponent(url + JSON.stringify(config.params)) : encodeURIComponent(config.url + JSON.stringify(config.data));
};
// request 拦截器
service.interceptors.request.use(
    config => {
        // 每次请求都为http头增加Authorization字段，其内容为userCode
        if (store.state.user.userCode) {
            config.headers.Authorization = `${store.state.user.userCode}`;
        }
        // 拦截重复请求(即当前正在进行的相同请求)
        let requestData = getRequestIdentify(config, true);
        removePending(requestData, true);

        config.cancelToken = new CancelToken((c) => {
            pending[requestData] = c;
        });
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// response 拦截器
service.interceptors.response.use(
    response => {
        // 把已经完成的请求从 pending 中移除
        let requestData = getRequestIdentify(response.config);
        removePending(requestData);
        return response;
    },
    error => {
        // 请求已发出，但服务器响应的状态码不在 2xx 范围内
        if (error.response) {
            switch (error.response.status) {
            case 401:
                // 没有权限
                store.dispatch('user/logout').then(() => {
                    router.push(store.state.UNAUTHORIZED);
                });
                break;
            case 403:
                // 访问被拒绝
                store.dispatch('user/logout').then(() => {
                    store.dispatch('user/tokenValidate');
                });
            }
        }
        return Promise.reject(error.message);
    }
);

export default service;

```
