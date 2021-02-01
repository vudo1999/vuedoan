import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('../view/Home.vue')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('../view/Detail.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../view/Cart.vue')
    },
  ]

  const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })
  export default router