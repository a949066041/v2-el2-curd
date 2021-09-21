import 'babel-polyfill'

import Vue from 'vue'
import App from './App.vue'
import Mx from '../components/index'
import DemoBox from './components/demoBox'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Mx)
Vue.use(ElementUI)
Vue.component('demo-box', DemoBox)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
