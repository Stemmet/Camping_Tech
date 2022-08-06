import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: function () {
      return import('../views/Contact.vue')
    }
  },
  {
    path: '/products',
    name: 'products',
    component: function () {
      return import('../views/Products.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
