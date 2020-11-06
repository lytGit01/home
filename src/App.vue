<template>
  <div id="app">
    <header class="head">
      <i class='el-icon-menu menShow' @click='asideShow'></i>
      <h3 class="title">
        云涛-个人笔记
      </h3>
      <ul class="links">
        <li>
          <a href="https://github.com/lytGit01">GitHub</a>
        </li>
      </ul>
    </header>
    <aside class="aside" :class="{'asideShow': asideChange}">
      <asd @closeAside="asideHide" />
    </aside>
    <div class="main" @click='asideHide'>
      <router-view/>
    </div>
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
     public asideChange: boolean;
     constructor() {
       super();
       this.asideChange = false;
     }
     // methods
     public asideShow() {
       this.asideChange = !this.asideChange;
     }
     public asideHide() {
       this.asideChange = false;
     }
     // computed
 }
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 768px) {
    .aside {
       left: -3rem !important;
       transition: left .3s
    }
    .main {
      padding-left: 0 !important;
    }
    .menShow {
      display: block !important;
    }
}
@media only screen and (max-width: 1100px) and (min-width: 769px){
    .aside {
       width: 2.5rem !important;
    }
    .main {
      padding-left: 2.5rem !important;
       }
}
.asideShow {
  left: 0 !important;
  transition: left .3s;
}
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
  z-index: 20;
  top: 0;
  left: 0;
  height: .56rem;
  width: 100%;
  border-bottom: 1px #eaecef solid;
  background: #fff;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 .2rem;
  .title {
    font-size: 0.2rem;
    font-weight: 800;
    line-height: 0;
  }
}
.links {
  position: absolute;
  right: .2rem;
  a{
    font-size: 0.2rem !important;
    font-weight: 600;
    color: #333 !important;
    text-decoration: none;
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
  background: #fff;
}
.main {
  width: 100%;
}
.content {
  width: 100%;
  height: 100%;
  font-size: .14rem;
  overflow: auto;
  padding: .96rem .3rem .4rem .4rem;
}
.main {
  width: 100%;
  height: 100%;
  padding-left: 3rem;
}
.menShow {
  display: none;
  font-size: .2rem;
  padding-right: .2rem;
}
</style>
