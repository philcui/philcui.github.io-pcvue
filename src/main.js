// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import utvue from 'utvue'
// import 'iview/dist/styles/iview.css'
import 'utvue/src/styles/index.less'
import axios from '@/util/http.js'
import hljs from 'highlight.js'
import VueClipboard from 'vue-clipboard2'
import 'highlight.js/styles/googlecode.css'

Vue.config.productionTip = false
Vue.use(utvue);
Vue.use(VueClipboard);
Vue.prototype.axios = axios;
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
