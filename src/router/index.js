import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../components/NintendoSlider.vue'),
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('../components/GamesNintendo.vue'),
    },
  ]
})



export default router