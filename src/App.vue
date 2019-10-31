<template>
  <div id="app">
    <header class="head">
      <h3 class="title">
        云涛-个人笔记
      </h3>
      <ul class="links">
        <li>
          <a href="https://github.com/lytGit01">GitHub</a>
        </li>
      </ul>
    </header>
    <aside class="aside">
      <asd/>
    </aside>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Asd from './views/aside.vue'; // @ is an alias to /src

@Component({
  components: {
      Asd,
  },
})
export default class Home extends Vue {
     constructor() {
       super();
     }
     // methods
     // computed
 }
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
}
.head {
  position: fixed;
  background: #fff;
  z-index: 20;
  top: 0;
  left: 0;
  height: .56rem;
  width: 100%;
  border-bottom: 1px #eaecef solid;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 .2rem;
  .title {
    font-size: 0.2rem;
    font-weight: 800;
  }
}
.links {
  position: absolute;
  right: .2rem;
  li{
    font-size: 0.14rem;
    font-weight: 600;
  }
}
.aside{
  position: fixed;
  top: .56rem;
  width: 3rem;
  bottom: 0;
  left: 0;
  overflow: auto;
  border-right: 1px solid #ccc;
}
.main {
  width: 100%;
}
.content {
  position: absolute;
  top: .56rem;
  left: 3rem;
  bottom: 0;
  width: calc(100% - 3rem);
  min-width: 640px;
  font-size: .14rem;
  overflow: auto;
  padding: .5rem .8rem;
}
</style>
