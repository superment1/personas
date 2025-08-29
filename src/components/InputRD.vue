<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const formRef = ref(null)
let io, loaded = false, mounted = false

function loadRD(): Promise<any> {
  return new Promise((resolve, reject) => {
    // se já carregou antes
    if ((window as any).RDStationForms) return resolve((window as any).RDStationForms)

    const s = document.createElement('script')
    s.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js'
    s.async = true
    s.type = 'text/javascript'             // <- importante: NÃO 'module'
    s.onload = () => resolve((window as any).RDStationForms)
    s.onerror = () => reject(new Error('RD load failed'))
    document.head.appendChild(s)
  })
}

async function mountForm() {
  if (mounted) return
  try {
    await loadRD()
    if (window.RDStationForms) {
      new window.RDStationForms('e-mail-site-2-fc7666a2bfa336762e39', '').createForm()
      mounted = true
    }
  } catch (e) {
    console.warn('RDStationForms:', e)
  }
}

function eagerOnFirstInteraction() {
  mountForm()
  window.removeEventListener('pointerdown', eagerOnFirstInteraction)
  window.removeEventListener('keydown', eagerOnFirstInteraction)
}

onMounted(() => {
  // Lazy por viewport (com prefetch ~200px antes)
  if ('IntersectionObserver' in window && formRef.value) {
    io = new IntersectionObserver((entries) => {
      if (entries.some(e => e.isIntersecting)) {
        io.disconnect()
        mountForm()
      }
    }, { rootMargin: '200px' })
    io.observe(formRef.value)
  } else {
    // Fallback: carrega em idle
    setTimeout(mountForm, 3000)
  }

  // Fallback adicional: 1ª interação do usuário
  window.addEventListener('pointerdown', eagerOnFirstInteraction, { once: true })
  window.addEventListener('keydown', eagerOnFirstInteraction, { once: true })
})

onBeforeUnmount(() => {
  if (io) io.disconnect()
  window.removeEventListener('pointerdown', eagerOnFirstInteraction)
  window.removeEventListener('keydown', eagerOnFirstInteraction)
})
</script>
<style scoped>


  #e-mail-site-2-fc7666a2bfa336762e39 form {
    width: 700px;
  }

  .content-input {
    width: 350px !important;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }

  .title {
    font-family: 'Crossfit';
    color: #FFF;
    text-align: start;
  }
@media (min-width: 639px) {
  .content-input {
    width: 769px !important;
  }
}
@media (min-width: 1350px){
  .content-input {
    width: 700px !important; 
  }
}
</style>

<template>
<div class="content-input gap-[18px]" >
  <p class="title text-4xl"> JOIN OUR LIST</p>
  <div
    role="main"
    id="e-mail-site-2-fc7666a2bfa336762e39"
    class="w-full mx-auto"
    style="margin-left: -30px;"
  ></div>
</div>

</template>

