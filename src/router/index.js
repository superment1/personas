import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
import SuperSleep from '../pages/superSleep.vue'
import SuperTest from '../pages/superTest.vue'
import SleepWomam from '../pages/sleepWomam.vue'
import TermsUse from '../pages/termsUse.vue'
import RefundPolicy from '../pages/refundPolicy.vue'
import Faq from '../pages/faq.vue'
import About from '../pages/about.vue'
import Elderly from '../pages/elderly.vue'
import Menopause from '../pages/menopause.vue'

const routes = [
  { path: '/', redirect : '/supersleep' },
  { path: '/supersleep', name:'supersleep', component: SuperSleep },
  { path: '/test', name: 'test', component: SuperTest },
  { path: '/beautysleep', name:'beautysleep', component: SleepWomam},
  { path: '/terms', name: 'terms', component: TermsUse },
  { path: '/refundpolicy', name: 'refundpolicy', component: RefundPolicy },
  { path: '/faq',  name: 'faq', component: Faq},
  { path: '/about', name: 'about', component: About},
  { path: '/elderly', name: 'elderly', component: Elderly},
  { path: '/menopause', name: 'menopause', component: Menopause}
]

export const router = createRouter({
  history: createWebHistory('/sleep/'),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

function setThemeColor(color) {
  let metaTag = document.querySelector('meta[name="theme-color"]')
  if (!metaTag) {
    metaTag = document.createElement('meta')
    metaTag.setAttribute('name', 'theme-color')
    document.head.appendChild(metaTag)
  }
  metaTag.setAttribute('content', color)
}

router.afterEach((to) => {
  const themeColorMap = {
    supersleep: '#E1DCCD',
    terms: '#E1DCCD',
    faq: '#E1DCCD',
    about: '#E1DCCD',
    refundpolicy: '#E1DCCD',
    beautysleep: '#6EC8F0',
    elderly: '#370F1E',
    menopause: '#E6B4FF'
  }
  const color = themeColorMap[to.name] || '#ffffff'
  setThemeColor(color)
})
