<script setup>
import { ref, onMounted, watch, onBeforeUnmount, nextTick } from 'vue'

const showModal = ref(false)
const OPEN_KEY = 'rd-modal-opened' 

let rdScriptLoaded = false
let formCreated = false

function openModal() {
  if (!sessionStorage.getItem(OPEN_KEY)) {
    showModal.value = true
    document.body.style.overflow = 'hidden'
  }
}
function closeModal() {
  showModal.value = false
  document.body.style.overflow = ''
  sessionStorage.setItem(OPEN_KEY, '1')
}

function onKey(e) {
  if (e.key === 'Escape') closeModal()
}

onMounted(() => {
  setTimeout(openModal, 1500)
  const script = document.createElement('script')
  script.src = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"
  script.async = true
  script.onload = () => {
    if (window.RDStationForms) {
    new RDStationForms('lead-e9a65abee360f5aa42a1', '').createForm()
    } else {
      console.warn('RDStationForms not available after script load')
    }
  }
  document.body.appendChild(script)
  window.addEventListener('keydown', onKey)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})

watch(showModal, async (isOpen) => {
  if (!isOpen || formCreated === true) return
  await nextTick()
  if (rdScriptLoaded && window.RDStationForms) {
    new RDStationForms('lead-e9a65abee360f5aa42a1', '').createForm()
    formCreated = true
  }
})

</script>

<template>
  <div
    v-show="showModal"
    class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
    aria-hidden="true">
  </div>
    <div
      v-show="showModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="rd-modal-title"
      class="fixed inset-0 z-50 flex items-center justify-center p-8"
      @click="closeModal"
    >          
      <div @click.stop 
        class="relative w-full max-w-xl font-crossfit text-[36px] md:text-[40px] shadow-2xl ring-1 rounded-xl bg-[#6EC8F0] ring-black/5 p-6 space-y-4">
        <h1 id="rd-modal-title" class="text-[#370F1E] leading-[1.1]" >
          Sign up below to get <br> a <span class="text-[#fff]">10%</span> super discount.
        </h1>
        <div
          role="main"
          id="lead-e9a65abee360f5aa42a1"
          class="w-full mx-auto">
        </div>
      </div>
    </div>
</template>
