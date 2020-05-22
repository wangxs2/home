import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './libs/fetch.js'
import ElementUI from 'element-ui';
import contentData from "./conten.js"
import 'element-ui/lib/theme-chalk/index.css';
import '_swiper@5.3.6@swiper/css/swiper.css';
import animated from 'animate.css'
Vue.use(animated)
Vue.prototype.$axios = axios
import VueParticles from 'vue-particles'  
Vue.use(VueParticles) 
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(contentData);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
