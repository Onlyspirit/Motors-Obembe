import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Header from '../components/Header.vue'
import Inventory from '../components/inventory.vue'
import Reach from '../components/Reach.vue'
import Watsapp from '../components/Watsapp.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: Inventory
    },
    {
      path: '/reach',
      name: 'Reach',
      component: Reach
    },
    {
      path: '/watsapp',
      name: 'Watsapp',
      component: Watsapp
    }
  ]
}
)
export default router