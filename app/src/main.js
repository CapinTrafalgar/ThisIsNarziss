import Vue from 'vue'
import App from './App.vue'

import Axios from 'axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入路由
import router from '@/router'

Vue.config.productionTip = false

// 设置全局axios
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')