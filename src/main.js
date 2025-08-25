import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import { router } from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')


const EAGER_ROOTS = ['#super-sleep-pequeno', '#super-sleep-grande']
const isEager = (el) => EAGER_ROOTS.some(sel => el.closest?.(sel))

document.querySelectorAll('img').forEach(img => {
  if (!isEager(img)) {
    if (!img.hasAttribute('loading'))  img.setAttribute('loading', 'lazy')
    if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async')
  }
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
    // fallback sem IO: aplica direto
    const url = el.getAttribute('data-bg')
    if (url) el.style.backgroundImage = `url('${url}')`
  }
})

document.querySelectorAll('video').forEach(v => {
  if (!isEager(v) && !v.hasAttribute('preload')) {
    v.setAttribute('preload', 'none')
  }
})