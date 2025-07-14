import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
import SuperSleep from '../pages/superSleep.vue'
import SuperTest from '../pages/superTest.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/SuperSleep', component: SuperSleep },
  { path: '/Test', component: SuperTest }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})