import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/404'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/AboutClub',
    name: 'AboutClub',
    component: () => import('../views/AboutClub.vue')
  },
  {
    path: '/AboutFans',
    name: 'AboutFans',
    component: () => import('../views/AboutFans')
  },
  {
    path: '/Foto',
    name: 'Foto',
    component: () => import('../views/Foto')
  },
  {
    path: '/Video',
    name: 'Video',
    component: () => import('../views/Video')
  },
  {
    path: '/Contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts')
  },
  {
    path: '/AboutSite',
    name: 'AboutSite',
    component: () => import('../views/AboutSite')
  },
  {
    path: '/FCSever',
    name: 'FCsever',
    component: () => import('../views/FCSever')
  },
  {
    path: '/Testpage',
    name: 'Testpage',
    component: () => import('../views/Testpage')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/Stadium',
    name: 'Stadiom',
    component: () => import('../views/Stadium')
  },
  {
    path: '/Archive',
    name: 'Archive',
    component: () => import('../views/Archive')
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHashHistory(),
  routes
})

export default router
