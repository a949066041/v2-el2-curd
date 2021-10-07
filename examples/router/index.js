import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 基础模板
const baseRouters = [
  {
    path: '/table',
    component: () => import('../docs/TipBlock/index.vue'),
    meta: { title: '提示块' }
  }
]

const useRouters = [
  {
    path: '/',
    component: () => import('../docs/Use/index.vue')
  }
]

export {
  baseRouters
}

export default new VueRouter({
  mode: 'history',
  fallback: false,
  routes: [...useRouters, ...baseRouters],
  scrollBehavior: (to) => {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})
