// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import utvue from 'utvue'
import 'iview/dist/styles/iview.css'
import axios from '@/util/http.js'

Vue.config.productionTip = false
Vue.use(utvue);
Vue.prototype.axios = axios;
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
