import { createRouter, createWebHistory } from 'vue-router'
import {
collectInitialUTMs,
loadPersistedUTMs,
persistUTMs,
mergeQueryWithUTMs,
haveAnyUTM
} from '../services/utms.js'

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
  { path: '/menopause',         name:'menopause',     component: () => import('../pages/menopause.vue') },
  { path: '/vsleep',            name:'vsl',           component: () => import('../pages/vsl.vue')},
  { path: '/vsleep2',           name:'vsl2',          component: () => import('../pages/vsl2.vue')},
  { path: '/sleep',             name:'sleepbetter',   component: () => import('../pages/sleepBetter.vue')},
  { path: '/sleep2',            name:'sleepbetter2',  component: () => import('../pages/sleepBetter2.vue')},
  { path: '/relax',             name:'superrelax',    component: () => import('../pages/superRelax.vue') },  
  { path: '/slim',              name:'superslim',     component: () => import('../pages/superSlim.vue') },  
  { path: '/7days',             name:'7days',         component: () => import('../pages/7days.vue') },  
  { path: '/tsl',               name:'tsl',           component: () => import('../pages/tsl.vue') },  
  { path: '/relief',            name:'relief',        component: () => import('../pages/relief.vue') },  
  { path: '/vslrelax',          name:'vslrelax',      component: () => import('../pages/vslRelax.vue') },  
  { path: '/vslrelief',         name:'vslrelief',     component: () => import('../pages/vslRelief.vue') }, 
  { path: '/vslnerve',          name:'vslnerve',      component: () => import('../pages/vslNerve.vue') },  
  { path: '/healthnews',        name:'healthnews',    component: () => import('../pages/healthNews.vue') },  
  { path: '/melatonin',         name:'melatonin',     component: () => import('../pages/melatonin.vue') },  
  { path: '/home',              name:'home',          component: () => import('../pages/home.vue') },  

]

export const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

let utms = loadPersistedUTMs();
if (!Object.keys(utms).length) {
  utms = collectInitialUTMs();
  persistUTMs(utms);
}

router.replace((to) => {
  if (haveAnyUTM(to.query)) return to;
  return {
    name: to.name,
    params: to.params,
    query: mergeQueryWithUTMs(to.query, utms),
    hash: to.hash,      
    replace: true
  };
});


router.beforeEach((to, _from, next) => {
  if (!Object.keys(utms).length) utms = loadPersistedUTMs();

  const newQuery = mergeQueryWithUTMs(to.query, utms);
  const changed = JSON.stringify(newQuery) !== JSON.stringify(to.query);

  if (changed) {
    next({
      name: to.name,
      params: to.params,
      query: newQuery,
      hash: to.hash,    
      replace: true
    });
  } else {
    next();
  }
});

const BLOCKED = new Set ([
  '/tsl',
  '/sleepnatural',
  '/sleepingbeauty',
  '/terms',  
  '/privacypolicy',
  '/faq', 
  '/about', 
  '/maturesleep', 
  '/discomfort', 
  '/menopause',
  '/vsleep', 
  '/vsleep2',
  '/sleep2',
  '/relax', 
  '/slim', 
  '/7days',
  '/relief', 
  '/vslrelax',
  '/vslrelief',
  '/healthnews',
  '/melatonin'
])      
const norm = (p) => (p || '/').replace(/\/+$/, '') || '/';

function applyZendesk(path) {
  const blocked = BLOCKED.has(norm(path))
  try { window.zE && window.zE('messenger', blocked ? 'hide' : 'show') } catch {}
  try { window.zE && window.zE('webWidget', blocked ? 'hide' : 'show') } catch {}
  window.__checkZendeskVisibility = () => applyZendesk(location.pathname)
}

applyZendesk(location.pathname)

router.afterEach((to) => {
  applyZendesk(to.path)
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
    vslrelax:'#4dbcb6',
    vslrelief: '#4dbcb6',
    sleepbetter: '#E1DCCD',
    sleepbetter2: '#E1DCCD',
    '7days': '#370F1E',
    tsl:'#E1DCCD',
    relief: '#E1DCCD',
    healthnews:'#',

  }
  const color = themeColorMap[to.name] || '#ffffff'
  setThemeColor(color)
  applyZendesk(to.path)
})