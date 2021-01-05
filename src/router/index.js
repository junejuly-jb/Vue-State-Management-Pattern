import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/events',
    name: 'EventList',
    component: () => import(/* webpackChunkName: "about" */ '../views/EventList.vue')
  },
  {
    path: '/eventshow/:id',
    component: () => import('../views/ShowEvent.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
