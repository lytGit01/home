import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import './static/index';
import './assets/css/index.scss';
import './utils/gobalMixin';
import './plugins/element.js'
Vue.config.productionTip = false;
Vue.use(ElementUI);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
