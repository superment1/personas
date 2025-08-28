import { createApp, nextTick  } from 'vue'
import './assets/main.css'
import App from './App.vue'
import { router } from './router'

const app = createApp(App)
app.use(router)

async function waitDecode(img) {
  if (!img) return
  try {
    if ('decode' in img) { await img.decode() }
    else if (!img.complete) {
      await new Promise(r => img.addEventListener('load', r, { once:true }))
    }
  } catch {}
}

async function waitForHero(timeoutMs = 1000) {
  const timeout = new Promise(res => setTimeout(res, timeoutMs))
  const splashImg = document.querySelector('#splash-hero img')
  const p1 = waitDecode(splashImg)
  const p2 = (async () => {
    await nextTick()
    const appHero = document.querySelector('.hero-img') 
    await waitDecode(appHero)
  })()
  await Promise.race([Promise.all([p1, p2]), timeout])
}

const EAGER_ROOTS = ['#super-sleep-pequeno', '#super-sleep-grande']
const isEager = (el) => EAGER_ROOTS.some(sel => el.closest?.(sel))

document.querySelectorAll('img').forEach(img => {
  if (!isEager(img)) {
    if (!img.hasAttribute('loading'))  img.setAttribute('loading', 'lazy')
    if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async')
  }
})
router.isReady().then(async () => {
  app.mount('#app')
  await nextTick()
  try { await document.fonts?.ready } catch {}
  await waitForHero(1000)
  document.getElementById('app')?.setAttribute('data-visual-ready', '')
})
const ioBg = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries, io) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        const el = e.target
        const url = el.getAttribute('data-bg')
        if (url) {
          el.style.backgroundImage = `url('${url}')`
          el.classList.add('bg-loaded')
          el.removeAttribute('data-bg')
        }
        io.unobserve(el)
      }
    }, { rootMargin: '300px' })
  : null

document.querySelectorAll('[data-bg]').forEach(el => {
  if (ioBg) ioBg.observe(el)
  else {
    const url = el.getAttribute('data-bg')
    if (url) el.style.backgroundImage = `url('${url}')`
  }
})

document.querySelectorAll('video').forEach(v => {
  if (!isEager(v) && !v.hasAttribute('preload')) {
    v.setAttribute('preload', 'none')
  }
})