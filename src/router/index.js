import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/Experience.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/Skills.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/About.vue')
    // },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: () => import('../views/Test.vue')
    // }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router