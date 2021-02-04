import Vue from 'vue';
import Router from 'vue-router';
import H5 from '@/page/html/h5.md';
Vue.use(Router);
export default new Router({
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
            path: '/CanvasAndSvg',
            component: () => import('@/page/html/CanvasAndSvg.md'),
        },
        {
            path: '/全屏Api',
            component: () => import('@/page/html/全屏Api.md'),
        },
        {
            path: '/drag',
            component: () => import('@/page/html/drag.vue'),
        },
        {
            path: '/onlineANDoffline',
            component: () => import('@/page/html/onlineANDoffline.md'),
        },
        {
            path: '/websocket',
            component: () => import('@/page/html/websocket.md'),
        },
        {
            path: '/workers',
            component: () => import('@/page/html/workers.md'),
        },
        {
            path: '/c3',
            name: 'css3',
            component: () => import('@/page/css/css3.md'),
        },
        {
            path: '/css',
            name: 'css',
            component: () => import('@/page/css/css.vue'),
        },
        {
            path: '/null',
            name: 'null',
            component: () => import('@/page/js/null.md'),
        },
        {
            path: '/undefined',
            name: 'undefined',
            component: () => import('@/page/js/undefined.md'),
        },
        {
            path: '/mst',
            name: 'mst',
            component: () => import('@/page/js/面试题.md'),
        },
        {
            path: '/jsmst',
            name: 'jsmst',
            component: () => import('@/page/js/js面试题.md'),
        },
        {
            path: '/axios',
            name: 'axios',
            component: () => import('@/page/js/axios.md'),
        },
        {
            path: '/array',
            name: 'array',
            component: () => import('@/page/js/array.md'),
        },
        {
            path: '/extend',
            name: 'extend',
            component: () => import('@/page/js/extend.md'),
        },
        {
            path: '/string',
            name: 'string',
            component: () => import('@/page/js/string.md'),
        },
        {
            path: '/fun',
            name: 'fun',
            component: () => import('@/page/js/fun.md'),
        },
        {
            path: '/set',
            name: 'newSet',
            component: () => import('@/page/js/newSet.md'),
        },
        {
            path: '/map',
            name: 'newMap',
            component: () => import('@/page/js/newMap.md'),
        },
        {
            path: '/GC',
            name: 'GC',
            component: () => import('@/page/js/GC.md'),
        },
        {
            path: '/browser',
            name: 'browser',
            component: () => import('@/page/browser/browser.md'),
        },
        {
            path: '/statusCode',
            name: 'statusCode',
            component: () => import('@/page/browser/statusCode.md'),
        },
        {
            path: '/javaZc',
            name: 'javaZ',
            component: () => import('@/page/java/javaZc.md'),
        },
        {
            path: '/javaZj',
            name: 'javaZj',
            component: () => import('@/page/java/javaZj.md'),
        },
        {
            path: '/springCloud',
            name: 'springCloud',
            component: () => import('@/page/java/springCloud.md'),
        },
        {
            path: '/vue',
            name: 'vue',
            component: () => import('@/page/vue/vue.md'),
        },
        {
            path: '/vueCli3',
            name: 'vueCli3',
            component: () => import('@/page/vue/vueCli3.md'),
        },
        {
            path: '/vueRouter',
            name: 'vueRouter',
            component: () => import('@/page/vue/vueRouter.md'),
        },
        {
            path: '/vue3',
            name: 'vue3',
            component: () => import('@/page/vue/vue3.md'),
        },
        {
            path: '/vue',
            name: 'vue',
            component: () => import('@/page/vue/vue.md'),
        },
        {
            path: '/vueCase',
            name: 'vueCase',
            component: () => import('@/page/vue/vueCase.md'),
        },
        {
            path: '/react',
            name: 'react',
            component: () => import('@/page/react/react.md'),
        },
        {
            path: '/react-redux',
            name: 'react-redux',
            component: () => import('@/page/react/react-redux.md'),
        },
        {
            path: '/redux+ts',
            name: 'redux+ts',
            component: () => import('@/page/react/redux+ts.md'),
        },
        {
            path: '/webpack',
            name: 'webpack',
            component: () => import('@/page/webpack/webpack.md'),
        },
        {
            path: '/three1',
            name: 'three1',
            component: () => import('@/page/three/three1.vue'),
        },
        {
            path: '/seal',
            name: 'seal',
            component: () => import('@/page/contract/seal.md'),
        },
        {
            path: '/flowable',
            name: 'flowable',
            component: () => import('@/page/flowable/vue-bpm.vue'),
        }
    ],
});
//# sourceMappingURL=router.js.map