import { createRouter, createWebHashHistory } from 'vue-router'
import Vue from 'vue'
import Home from '../views/Home.vue'
import AboutClub from '@/views/AboutClub'
import Router from '@vue/cli-plugin-router/generator/template/src/router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/AboutClub',
    name: 'AboutClub',
    component: () => import('../views/AboutClub.vue')
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHashHistory(),
  routes
})

export default router
