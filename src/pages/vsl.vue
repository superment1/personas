<script setup>
import '../styles/superSleep.scss';
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import BannerRetention from '../components/BannerRetention.vue'


const router = useRouter()
const modalOpen = ref(false)
const videoEl = ref(null)

const urlPath = '/supersleep'

function openModal() { modalOpen.value = true }
function goToCheckout() { router.push(urlPath) }

let io
onMounted(() => {
  const v = videoEl.value
  if (!v) return
  v.muted = true
  v.playsInline = true
  v.play().catch(() => {})
  io = new IntersectionObserver(([entry]) => {
    if (!videoEl.value) return
    if (entry.isIntersecting) videoEl.value.play().catch(() => {})
    else videoEl.value.pause()
  }, { threshold: 0.25 })
  io.observe(v)
})
onBeforeUnmount(() => { if (io && videoEl.value) io.unobserve(videoEl.value) })

</script>

<template>
  <div class="w-full min-h-screen bg-white flex flex-col">

    <!-- Header -->
    <header class="w-full bg-white">
      <div class="h-14 justify-center flex items-center px-4">
        <div class="font-bold items-center tracking-wide text-[#370F1E]">
          SUPERMENT<span class="font-thin align-top text-xs">®</span>
        </div>
      </div>
    </header>

    <!-- Main -->
    <main class="flex-1 bg-[#6EC8F0]">
      <div class="max-w-[900px] mx-auto px-4 py-8">
        <div class="relative">
          <video
            ref="videoEl"
            class="w-full rounded-2xl shadow-lg"
            preload="metadata"
            playsinline
            muted
            controls
            poster="../assets/image/sleepElderly/bannerElderly.png"
          >
            <source src="../assets/videos/depoimento-video.mp4" type="video/mp4" />
            <source src="../assets/videos/depoimento-video.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo HTML5.
          </video>

          <!-- CTA sticky (mobile) -->
          <div class="sm:hidden sticky bottom-4 mt-4 flex justify-center">
            <button
              @click="openModal"
              class="px-6 py-3 rounded-2xl shadow bg-[#FFDC03] text-[#370F1E] font-bold"
            >
              Get my offer
            </button>
          </div>
        </div>

        <!-- CTA desktop -->
        <div class="hidden sm:flex justify-center mt-6">
          <button
            @click="openModal"
            class="px-7 py-4 rounded-2xl shadow bg-[#FFDC03] text-[#370F1E] font-extrabold text-lg hover:brightness-95 transition"
          >
            Get my offer
          </button>
        </div>
      </div>
    </main>

    <footer class="w-full h-[50px] bg-[#370F1E]"></footer>

    <!-- Modal reutilizável -->
    <AttentionModal
      v-model:open="modalOpen"
      title="Atenção!"
      message="Esta é uma condição especial por tempo limitado. Clique em “Continuar” para garantir agora."
      primary-text="Continuar"
      secondary-text="Voltar"
      @primary="goToCheckout"
    />
  </div>
</template>