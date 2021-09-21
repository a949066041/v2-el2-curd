import 'babel-polyfill'

import Vue from 'vue'
import router from './router'
import App from './App.vue'
import Mx from '../components/index'
import DemoBox from './components/demoBox'
import DemoSort from './components/demoSort'
import md from './components/md'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/reset.css'
import './style/markdown.scss'

Vue.use(Mx)
Vue.use(ElementUI)
Vue.component('demo-box', DemoBox)
Vue.component('demo-sort', DemoSort)
Vue.component('md', md)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
