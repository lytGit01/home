import Vue from 'vue';
import Router from 'vue-router';
import H5 from '@/components/html/h5.md';
Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'h5',
            component: H5,
        },
        {
            path: '/h5',
            component: H5,
        },
        {
            path: '/c3',
            name: 'css3',
            component: () => import('@/components/css/css3.md'),
        },
        {
            path: '/null',
            name: 'null',
            component: () => import('@/components/js/null.md'),
        },
        {
            path: '/undefined',
            name: 'undefined',
            component: () => import('@/components/js/undefined.md'),
        },
        {
            path: '/axios',
            name: 'axios',
            component: () => import('@/components/js/axios.md'),
        },
        {
            path: '/array',
            name: 'array',
            component: () => import('@/components/js/array.md'),
        },
        {
            path: '/object',
            name: 'object',
            component: () => import('@/components/js/object.md'),
        },
        {
            path: '/string',
            name: 'string',
            component: () => import('@/components/js/string.md'),
        },
        {
            path: '/fun',
            name: 'fun',
            component: () => import('@/components/js/fun.md'),
        },
        {
            path: '/set',
            name: 'newSet',
            component: () => import('@/components/js/newSet.md'),
        },
        {
            path: '/map',
            name: 'newMap',
            component: () => import('@/components/js/newMap.md'),
        },
        {
            path: '/javaZc',
            name: 'javaZ',
            component: () => import('@/components/java/javaZc.md'),
        },
        {
            path: '/javaZj',
            name: 'javaZj',
            component: () => import('@/components/java/javaZj.md'),
        },
        {
            path: '/springCloud',
            name: 'springCloud',
            component: () => import('@/components/java/springCloud.md'),
        },
        {
            path: '/vue',
            name: 'vue',
            component: () => import('@/components/vue/vue.md'),
        },
        {
            path: '/vueCli3',
            name: 'vueCli3',
            component: () => import('@/components/vue/vueCli3.md'),
        },
        {
            path: '/vue',
            name: 'vue',
            component: () => import('@/components/vue/vue.md'),
        },
        {
            path: '/react',
            name: 'react',
            component: () => import('@/components/react/react.md'),
        },
        {
            path: '/webpack',
            name: 'webpack',
            component: () => import('@/components/webpack/webpack.md'),
        },
    ],
});
//# sourceMappingURL=router.js.map