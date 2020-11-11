import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
let Home = class Home extends Vue {
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
                    {
                        link: '/caseInterview',
                        title: 'caseInterview',
                    },
                    {
                        link: '/css',
                        title: 'css',
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
                    {
                        link: '/mst',
                        title: '面试题',
                    },
                    {
                        link: '/jsmst',
                        title: 'js面试题',
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
                    {
                        link: '/vueRouter',
                        title: 'vueRouter源码分析',
                    },
                    {
                        link: '/vue3',
                        title: 'vue3模板指令分析',
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
                    {
                        link: '/redux+ts',
                        title: 'redux+ts',
                    },
                    {
                        link: '/react-redux',
                        title: 'react-redux',
                    },
                ],
            },
            {
                title: '微信小程序',
                options: [
                    {
                        link: '/mpvue',
                        title: 'react',
                    },
                ],
            },
            {
                title: 'three',
                options: [
                    {
                        link: '/three1',
                        title: 'three1',
                    },
                ],
            },
        ];
    }
    // methods
    linkRout() {
        this.$emit('closeAside');
    }
};
Home = __decorate([
    Component({
        components: {},
    })
], Home);
export default Home;
//# sourceMappingURL=aside.vue.js.map