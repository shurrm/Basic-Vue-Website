import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Top10 from '../views/Top10.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/top10', component: Top10 },
    { path: '/about', component: About }
  ]
})

export default router