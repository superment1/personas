import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/supersleep',   alias: '/',  name:'supersleep',    component: () => import('../pages/superSleep.vue') },
  { path: '/test',         name: 'test',         component: () => import('../pages/superTest.vue') },
  { path: '/beautysleep',  name:'beautysleep',   component: () => import('../pages/sleepWomam.vue') },
  { path: '/terms',        name: 'terms',        component: () => import('../pages/termsUse.vue') },
  { path: '/privacypolicy',name:'privacypolicy', component: () => import('../pages/policyPrivacy.vue') },
  { path: '/refundpolicy', name: 'refundpolicy', component: () => import('../pages/refundPolicy.vue') },
  { path: '/faq',          name: 'faq',          component: () => import('../pages/faq.vue') },
  { path: '/about',        name: 'about',        component: () => import('../pages/about.vue') },
  { path: '/elderly',      name: 'elderly',      component: () => import('../pages/elderly.vue') },
  { path: '/discomfort',   name:'discomfort',    component: () => import('../pages/discomfort.vue') },
  { path: '/vsl',          name:'vsl',           component: () => import('../pages/vsl.vue')},
  { path: '/vsl2',          name:'vsl2',           component: () => import('../pages/vsl2.vue')}
  
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
    discomfort: '#370F1E',
    menopause: '#E6B4FF',
    privacypolicy:'#E1DCCD',
    vsl:'#6EC8F0',
    vsl2:'#6EC8F0'
  }
  const color = themeColorMap[to.name] || '#ffffff'
  setThemeColor(color)
})
