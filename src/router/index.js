import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/sleepnatural',   alias: '/',  name:'supersleep',    component: () => import('../pages/superSleep.vue') },
  { path: '/sleepingbeauty',    name:'beautysleep',   component: () => import('../pages/sleepWomam.vue') },
  { path: '/terms',             name: 'terms',        component: () => import('../pages/termsUse.vue') },
  { path: '/privacypolicy',     name:'privacypolicy', component: () => import('../pages/policyPrivacy.vue') },
  { path: '/refundpolicy',      name: 'refundpolicy', component: () => import('../pages/refundPolicy.vue') },
  { path: '/faq',               name: 'faq',          component: () => import('../pages/faq.vue') },
  { path: '/about',             name: 'about',        component: () => import('../pages/about.vue') },
  { path: '/maturesleep',       name: 'elderly',      component: () => import('../pages/elderly.vue') },
  { path: '/discomfort',        name:'discomfort',    component: () => import('../pages/discomfort.vue') },
  { path: '/menopause',        name:'menopause',    component: () => import('../pages/menopause.vue') },
  { path: '/vsleep',            name:'vsl',           component: () => import('../pages/vsl.vue')},
  { path: '/vsleep2',           name:'vsl2',          component: () => import('../pages/vsl2.vue')},
  { path: '/sleep', name:'sleepbetter',   component: () => import('../pages/sleepBetter.vue')},
  { path: '/sleep2', name:'sleepbetter2',   component: () => import('../pages/sleepBetter2.vue')},
  { path: '/relax',    name:'superrelax',   component: () => import('../pages/superRelax.vue') },  
  { path: '/slim',    name:'superslim',   component: () => import('../pages/superSlim.vue') },  
  { path: '/advetorial',    name:'advetorial',   component: () => import('../pages/adVetorial.vue') },  
  { path: '/tsl',    name:'tsl',   component: () => import('../pages/tsl.vue') },  
  { path: '/relief',    name:'relief',   component: () => import('../pages/relief.vue') },  
]

export const router = createRouter({
  history: createWebHistory('/'),
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
    superrelax: '#E1DCCD',
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
    vsl2:'#6EC8F0',
    sleepbetter: '#E1DCCD',
    sleepbetter2: '#E1DCCD',
    advetorial: '#370F1E',
    tsl:'#E1DCCD',
    relief: '#E1DCCD'

  }
  const color = themeColorMap[to.name] || '#ffffff'
  setThemeColor(color)
})
