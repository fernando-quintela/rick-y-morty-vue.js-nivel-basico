import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/character/:id',
    name: 'Character',
    component: () => import(/* webpackChunkName: "character" */'../views/Character.vue')

  },
  {
    path: '/about/',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '/Error404',
    component: () => import(/* webpackChunKName: "Error404" */ '../views/Error404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
