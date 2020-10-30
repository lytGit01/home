<template>
  <div id="canvasBox">
    <div id="red" v-bind="{ id: 'blue' }"></div>
    <ChildComponent :p.sync="page"></ChildComponent>
    <p>Message is: {{ page }}</p>
    <input type="text" v-model="val">
    <button @click="fn">按钮</button>
    <p>{{s ? s : '66' }}</p>
  </div>
</template>
<script>
   import ChildComponent from "../../common/conponents/ChildComponent";
   export default {
       data: () => {
           return {
              page: 1,
               list: [1,2,3],
               s: '',
               val: 66
           }
       },
       components: {ChildComponent},
       mounted () {
           console.log(this.$refs['lists'])
           // this.createThree();
       },
       methods: {
           fn () {
               const n = this.val * 1;
               const listMap = [
                   {1: 'a'},
                   {2: 'b'},
                   {3: 'c'},
                   {4: 'd'},
                   {5: 'e'},
                   {6: 'f'},
                   {7: 'g'},
                   {8: 'h'},
                   {9: 'i'},
                   {10: 'j'},
                   {11: 'k'},
                   {12: 'l'},
                   {13: 'm'},
                   {14: 'n'},
                   {15: 'o'},
                   {16: 'o'},
                   {17: 'q'},
                   {18: 'e'},
                   {19: 's'},
                   {20: 't'},
                   {21: 'u'},
                   {22: 'v'},
                   {23: 'w'},
                   {24: 's'},
                   {25: 'y'},
                   {26: 'z'}
               ];
               this.s = '';
               let m = new Map();
               listMap.forEach((obj, index) => {
                   const i = index + 1;
                   m.set(i, obj[i]);
               })
               if (n <= 26) {
                   this.s = m.get(n);
               } else if (n > 0 & n > 26) {
                   const a = n % 26;
                   const b = (n / 26).toFixed();
                   let i = 0;
                   while (b > i) {
                       i++;
                       this.s += m.get(a);
                   }
               }
           },
           createThree() {
               const Box = document.getElementById('canvasBox');
               const scene = new THREE.Scene();
               /*
               * 透视摄像机
               *  第一个参数是视野角度（FOV）。视野角度就是无论在什么时候，你所能在显示器上看到的场景的范围，它的值是角度单位。
               *  第二个参数是长宽比（aspect ratio）。 也就是你用一个物体的宽除以它的高的值。比如说，当你在一个宽屏电视上播放老电影时，可以看到图像仿佛是被压扁的。
               *  接下来的两个参数是近截面（near）和远截面（far）。 当物体某些部分比摄像机的远截面远或者比近截面近的时候，该这些部分将不会被渲染到场景中。
               *  或许现在你不用担心这个值的影响，但未来为了获得更好的渲染性能，你将可以在你的应用程序里去设置它。
               * */
               const camera = new THREE.PerspectiveCamera( 55, Box.clientWidth/Box.clientHeight, 0.1, 1000 );

               const renderer = new THREE.WebGLRenderer();
               renderer.setSize( Box.clientWidth, Box.clientHeight );
               Box.appendChild( renderer.domElement );

               const geometry = new THREE.BoxGeometry( 1, 1, 1 );
               const material = new THREE.MeshBasicMaterial( { color: '#eee' } );
               const cube = new THREE.Mesh( geometry, material );
               scene.add( cube );

               camera.position.z = 5;

               let animate = function () {
                   requestAnimationFrame( animate );

                   cube.rotation.x += 0.01;
                   cube.rotation.y += 0.01;

                   renderer.render( scene, camera );
               };

               animate();
           }
       },
   }
</script>
<style scoped lang="scss">
  #canvasBox, canvas { width: 100%; height: 100% }
</style>
