import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
import SuperSleep from '../pages/superSleep.vue'
import SuperTest from '../pages/superTest.vue'
import SleepWomam from '../pages/sleepWomam.vue'
import TermsUse from '../pages/termsUse.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/supersleep', component: SuperSleep },
  { path: '/test', component: SuperTest },
  { path: '/sleepWomam', component: SleepWomam},
  { path: '/termsuse', component: TermsUse }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})