<template>
  <div id="canvasBox">

  </div>
</template>
<script>
   export default {
       mounted() {
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
   }
</script>
<style scoped lang="scss">
  #canvasBox, canvas { width: 100%; height: 100% }
</style>
