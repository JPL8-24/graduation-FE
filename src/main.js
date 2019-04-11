import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import api from './api/api'
import echart from 'echarts'
import VueQuillEditor from 'vue-quill-editor' // require styles 引入样式 
import 'quill/dist/quill.core.css' 
import 'quill/dist/quill.snow.css' 
import 'quill/dist/quill.bubble.css' 
Vue.use(VueQuillEditor)

import './plugins/iview.js'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Object.defineProperty(Vue.prototype,'$api',{value:api})
Object.defineProperty(Vue.prototype,'$echarts',{value:echart})
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
