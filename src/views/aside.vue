<template>
  <el-row id="tac">
    <el-col>
      <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              router
              unique-opened>
        <el-submenu
                v-for="(obj) in navRoute"
                :key="obj.title"
                :index="obj.title"
        >
          <template slot="title">
            <!--<i class="el-icon-location" />-->
            <span>{{ obj.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
                    v-for="(opt) in obj.options"
                     :key="opt.link"
                    :index="opt.link"
                    @click='linkRout'
            >
              {{ opt.title }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class Home extends Vue {
    public navRoute: any[];
    constructor() {
        super();
        this.navRoute = [
            {
                title: 'HTML',
                options: [
                    {
                        link: '/h5',
                        title: 'h5',
                    },
                ],
            },
            {
                title: 'css',
                options: [
                    {
                        link: '/c3',
                        title: 'css3',
                    },
                ],
            },
            {
                title: 'js',
                options: [
                    {
                        link: '/null',
                        title: 'null',
                    },
                    {
                        link: '/undefined',
                        title: 'undefined',
                    },
                    {
                        link: '/array',
                        title: '数组',
                    },
                    {
                        link: '/object',
                        title: '对象',
                    },
                    {
                        link: '/string',
                        title: '字符',
                    },
                    {
                        link: '/fun',
                        title: '函数',
                    },
                    {
                        link: '/set',
                        title: 'new Set',
                    },
                    {
                        link: '/map',
                        title: 'new Map',
                    },
                    {
                        link: '/axios',
                        title: '处理重复请求',
                    },
                ],
            },
            {
                title: 'java',
                options: [
                    {
                        link: '/javaZc',
                        title: 'java基础篇',
                    },
                    {
                        link: '/javaZj',
                        title: 'java注解',
                    },
                    {
                        link: '/springCloud',
                        title: 'springCloud',
                    },
                ],
            },
            {
                title: 'webpack',
                options: [
                    {
                        link: '/webpack',
                        title: 'webpack',
                    },
                ],
            },
            {
                title: 'vue',
                options: [
                    {
                        link: '/vue',
                        title: 'vue',
                    },
                    {
                      link: '/vueCli3',
                      title: 'vueCli3',
                    },
                ],
            },
            {
                title: 'react',
                options: [
                    {
                        link: '/react',
                        title: 'react',
                    },
                ],
            },
        ];
    }

    // methods
     public linkRout(): any {
         this.$emit('closeAside');
     }
    // computed
}
</script>
<style scoped lang="scss">
  #tac {
    height: 100%;
    width: 100%;
  }
  .el-submenu .el-menu-item {
    padding: 0 !important;
    text-align: center;
    min-width: 120px;
    a {
      display: block;
    }
  }
  .el-menu {
      border-right: none;
  }
</style>
