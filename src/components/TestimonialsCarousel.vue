<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick  } from 'vue'
import ArrowCircle from '../components/ArrowCircle.vue'

const items = [
  { type: 'video', url: new URL('@/assets/videos/ligiani_depoiment.mp4', import.meta.url).href },
  { type: 'video', url: new URL('@/assets/videos/depoimento-video.mp4', import.meta.url).href },
  { type: 'video', url: new URL('@/assets/videos/depoimento_nuala.mp4', import.meta.url).href },
  { type: 'image', image: new URL('@/assets/image/sleepSuperment/NovosDepoimentos-Bruna.png', import.meta.url).href },
  { type: 'image', image: new URL('@/assets/image/sleepSuperment/NovosDepoimentos-Danielle.png', import.meta.url).href },
  { type: 'image', image: new URL('@/assets/image/sleepSuperment/NovosDepoimentos-Eliseu.png', import.meta.url).href },
  { type: 'image', image: new URL('@/assets/image/sleepSuperment/NovosDepoimentos-Ligiani.png', import.meta.url).href },
  { type: 'image', image: new URL('@/assets/image/sleepSuperment/NovosDepoimentos-Nuala.png', import.meta.url).href }
]

const currentIndex = ref(0)
const step = ref(1)

function updStep() {
  step.value = window.matchMedia('(min-width:1024px)').matches ? 3 : 1
 
}
function tryPlay(e) {
  const el = e.target
  if (el && el.play) el.play().catch(() => {})
}

const len = items.length
const i0 = computed(() => (currentIndex.value + 0) % len)
const i1 = computed(() => (currentIndex.value + 1) % len)
const i2 = computed(() => (currentIndex.value + 2) % len)

const vm = ref(null)  // vídeo do mobile
const v0 = ref(null)  // vídeos do lg (coluna 1..3)
const v1 = ref(null)
const v2 = ref(null)

function prev() { currentIndex.value = (currentIndex.value - step.value + len) % len }
function next() { currentIndex.value = (currentIndex.value + step.value) % len }


function safePlay(el: HTMLVideoElement | null) {
  if (!el) return
  el.muted = true
  ;(el as any).playsInline = true
  ;(el as any).webkitPlaysInline = true

  const doPlay = () => el.play().catch(() => {})
  if (el.readyState >= 2) {
    doPlay()
  } else {
    const onCanPlay = () => { 
      doPlay(); 
      el.removeEventListener('canplay', onCanPlay) }
      el.addEventListener('canplay', onCanPlay, { once: true })
  }
}
function pauseAll() {
  ;[vm.value, v0.value, v1.value, v2.value].forEach((el) => {
    try { el?.pause() } catch {}
  })
}
function playVisible() {
  const els = [vm.value, v0.value, v1.value, v2.value] as (HTMLVideoElement|null)[]
  for (const el of els) safePlay(el)  
}
watch(currentIndex, () => {
  pauseAll()
  setTimeout(playVisible, 60)
})
onMounted(() => {
  updStep()
  window.addEventListener('resize', updStep)
  playVisible()
})
onBeforeUnmount(() => window.removeEventListener('resize', updStep))

</script>

<template>
  <div class="relative w-full pt-[37px] pb-10 flex justify-center items-center lg:pt-10">
    <div class="w-full max-w-[800px] lg:max-w-[1250px] px-4 relative h-[550px] lg:h-[600px]">

      <!-- seta esquerda -->
      <button @click="prev" class="arrow-button absolute -left-[40px] top-1/2 z-30" style="margin-top:18px"
        aria-label="Anterior">
        <ArrowCircle direction="left" backgroundColor="#E1DCCD" :responsive="false" />
      </button>

      <!-- MOBILE: 1 item -->
      <div class="block lg:hidden absolute inset-0 w-full h-full z-10 overflow-hidden rounded-2xl">
        <template v-if="items[i0].type === 'image'">
          <img 
          :src="items[i0].image" 
          alt="" 
          loading="lazy"
          decoding="async"
          class="w-full h-full object-cover" />
        </template>
        <template v-else>
          <video ref="vm" :src="items[i0].url" 
          muted
          playsinline
          webkit-playsinline
          autoplay
          loop
          preload="metadata"
          controls
          @canplay="tryPlay($event)"
          class="w-full h-full object-contain"></video>
        </template>
      </div>

      <!-- LG+: 3 itens (i0, i1, i2) -->
      <div class="hidden lg:grid grid-cols-3 gap-10 w-full h-[600px]">
        <!-- Coluna 1 -->
        <div class="rounded-2xl overflow-hidden">
          <template v-if="items[i0].type === 'image'">
            <img :src="items[i0].image" alt="" class="w-full h-full object-cover" />
          </template>
          <template v-else>
            <video 
            ref="v0" 
            :src="items[i0].url"
            muted
            playsinline
            autoplay
            loop
            preload="metadata"
            controls
            @canplay="tryPlay($event)"
            class="w-full h-full object-contain"></video>
          </template>
        </div>
        <div class="rounded-2xl overflow-hidden">
          <template v-if="items[i1].type === 'image'">
            <img 
            :src="items[i1].image" 
            alt="" 
            class="w-full h-full object-cover" 
            loading="lazy"
            decoding="async"
          />
          </template>
          <template v-else>
            <video ref="v1" :src="items[i1].url" autoplay muted loop playsinline controls
              class="w-full h-full object-contain"></video>
          </template>
        </div>

        <div class="rounded-2xl overflow-hidden">
          <template v-if="items[i2].type === 'image'">
            <img :src="items[i2].image" 
            alt="" 
            loading="lazy"
            decoding="async"
            class="w-full h-full object-cover" />
          </template>
          <template v-else>
            <video ref="v2" :src="items[i2].url" autoplay muted loop playsinline controls
              class="w-full h-full object-contain"></video>
          </template>
        </div>
      </div>

      <!-- seta direita -->
      <button @click="next" class="arrow-button absolute right-0 top-1/2 z-30" style="margin-top:18px"
        aria-label="Próximo">
        <ArrowCircle direction="right" backgroundColor="#E1DCCD" :responsive="false" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.arrow-button {
  transition: transform .1s ease;
  transform: translate(50%, -50%)
}

.arrow-button:hover {
  transform: translate(50%, -50%) scale(1.05)
}

.arrow-button:active {
  transform: translate(50%, -50%) scale(1.15)
}
</style>
