import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
import SuperSleep from '../pages/superSleep.vue'
import SuperTest from '../pages/superTest.vue'
import SleepWomam from '../pages/sleepWomam.vue'
import TermsUse from '../pages/termsUse.vue'
import RefundPolicy from '../pages/refundPolicy.vue'
import Faq from '../pages/faq.vue'
import About from '../pages/about.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/supersleep', component: SuperSleep },
  { path: '/test', component: SuperTest },
  { path: '/sleepWomam', component: SleepWomam},
  { path: '/terms', component: TermsUse },
  { path: '/refundpolicy', component: RefundPolicy },
  { path: '/faq', component: Faq},
  { path: '/about', component: About}
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})