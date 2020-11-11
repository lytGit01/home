<template>
    <!-- <div id="cssBox">
        <div class="left"></div>
        <div class="right"></div>
    </div> -->
    <ul>
        <li id="id1">1</li> 
        <li id="id2">2</li>
        <li id="id3">3</li>
        <li>4</li>
        <li>5</li>
    </ul>
</template>
<script>
export default {
    mounted () {
    //   Function.prototype.binds = function (otherThis) {
    //     if (typeof this !== 'function') {
    //         throw new TypeError('不是函数')
    //     }
    //     var that = this,
    //     // 获取预定参数
    //     args = Array.prototype.slice.call(arguments, 1),
    //     newFn = function () {
    //         // 合并参数，运用闭包获取预定参数
    //         args.push.apply(args, arguments);
    //         console.log(this);
    //         return that.apply(
    //             that.prototype.isPrototypeOf(this) ? this : otherThis, // 判断实例是否指向自己（是否new)
    //             args
    //             )
    //     };
    //     // 寄生式继承
    //     if (this.prototype) {
    //         const fn = function () {};
    //         fn.prototype = this.prototype;
    //         newFn.prototype = new fn();
    //     }
    //
    //     return newFn;
    // }
    // function f1(num,num1 = 0) {
    //     this.a = num;
    //     this.b = num1;
    //     console.log(this.c)
    // }
    // f1.prototype.toS = function() {
    //     return this.a + ',' + this.b;
    // };
    // const f2 = {
    //        c: 0
    // }
    // let b = f1.binds(f2, 8);
    // const c = new b(2);
    // console.log(c.toS());
        // console.log(Math.max.apply(null, [7, 8, 10]));
        // console.dir(Function.prototype.call.toString())
}
}
</script>
<style lang="scss" scoped>
// #cssBox{
//     width: 100%;
//     height: 100%;
//     overflow: auto;
// }
// .cont,.left,.right {
//     width: 50vw;
//     height: 10vw;
//     background: #ccc;
//     border: .01rem solid red;
// }
li {
    height: 30px;
    border: 1px solid #ccc;
}


</style>