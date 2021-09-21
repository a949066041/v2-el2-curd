import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../docs/test/index.vue')
  }
]

export default new VueRouter({
  mode: 'history',
  fallback: false,
  routes,
  scrollBehavior: (to) => {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})
