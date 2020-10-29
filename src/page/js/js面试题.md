### 手写Promise
```js
// 简易版
function myPromis(callback) {
        this.state = 'padding'; // 初始状态值
        this.value = undefined; // resolve状态
        this.reason = undefined; // reject状态
        let resolve = value => {
            // 保证转态改变是不可逆的
            if (this.state === 'padding') {
                this.state = 'fulfilled';
                this.value = value;
            }   
        }   
        let reject = reason => {
            // 保证转态改变是不可逆的
            if (this.state === 'padding') {
                this.state = 'rejected';
                this.value = reason;
            }   
        }
        // 捕获异常
        try {
            callback(resolve, reject);
        }catch(e){
            reject(e);
        }
  
}
myPromis.prototype.then = function(onFulilled, onRejected) {
    switch (this.state) {
        case 'fulfilled': 
            onFulilled(this.value);
            break;
        case 'rejected': 
            onRejected(this.reason);
            break;
        default:
    }
}
let p = new myPromis((res, rej) => {
console.log(1);
res(2);
});
p.then((x) => {console.log(x)})
```