import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import contentData from "./conten.js"
import 'element-ui/lib/theme-chalk/index.css';
import '_swiper@5.3.6@swiper/css/swiper.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(contentData);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
