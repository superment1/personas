<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import setaDireita from '@/assets/image/seta-direita.png'
import setaEsquerda from '@/assets/image/seta-esquerda.png'
import ArrowCircle from '../components/ArrowCircle.vue';

const items = [
  {
    type: 'video', url: new URL('@/assets/videos/ligiani_depoiment.mp4', import.meta.url).href
  },  
  {
    type: 'video', url: new URL('@/assets/videos/depoimento-video.mp4', import.meta.url).href
  },
  {
    type: 'video', url: new URL('@/assets/videos/depoimento_nuala.mp4', import.meta.url).href
  },  
  {
    type: 'image', image: new URL('@/assets/image/sleepSuperment/NovosDepoimentos-Bruna.png', import.meta.url).href
  },
  {
    type: 'image', image: new URL('@/assets/image/sleepSuperment/NovosDepoimentos-Danielle.png', import.meta.url).href
  },
  {
    type: 'image', image: new URL('@/assets/image/sleepSuperment/NovosDepoimentos-Eliseu.png', import.meta.url).href
  },
  {
    type: 'image', image: new URL('@/assets/image/sleepSuperment/NovosDepoimentos-Ligiani.png', import.meta.url).href
  },
  {
    type: 'image', image: new URL('@/assets/image/sleepSuperment/NovosDepoimentos-Nuala.png', import.meta.url).href
  }
]
const isFirstSlide = computed(() => currentIndex.value <= 0)
const isLastSlide  = computed(() => currentIndex.value >= items.length - 1)

const currentIndex = ref(0)
const videoRef = ref(null)

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + items.length) % items.length
}
const next = () => {
  currentIndex.value = (currentIndex.value + 1) % items.length
}
watch(currentIndex, () => {
  if (items[currentIndex.value].type === 'video') {
    setTimeout(() => {
      videoRef.value?.play().catch(err => {
        console.warn('Autoplay bloqueado (troca):', err)
      })
    }, 100)
  }
})
onMounted(() => {
  if (items[0].type === 'video') {
    setTimeout(() => {
      videoRef.value?.play().catch(err => {
        console.warn('Autoplay bloqueado (mounted):', err)
      })
    }, 100)
  }
})
</script>

<template>
  <div class="relative w-full pt-5 pb-[40px] flex justify-center items-center">
    <div class="w-full max-w-[800px] px-4 flex justify-center items-center relative h-[550px] rounded-2xl">
      <!-- Seta esquerda -->
      <button 
      @click="prev" 
      class="arrow-button absolute -left-[40px] top-1/2 z-30" 
      style="margin-top: 18px"
      aria-label="Depoimento anterior"
      :aria-disabled="isFirstSlide" :disabled="isFirstSlide"
      >
        <ArrowCircle direction="left" backgroundColor="#E1DCCD" :responsive="false"  />
      </button>

      <!-- Item visível -->
      <div class="absolute inset-0 w-full h-full z-10 overflow-hidden rounded-2xl">
        <template v-if="items[currentIndex].type === 'image'">
          <img
            :src="items[currentIndex].image"
            :alt="items[currentIndex].image"
            class="w-full h-full object-cover"
          />
        </template>
        <template v-else>
          <video
            ref="videoRef"
            :src="items[currentIndex].url"            
            autoplay
            muted
            loop            
            playsinline
            controls
            class="w-full h-full object-cover"           
          ></video>
        </template>

      </div>

      <!-- Seta direita -->
      <button 
      @click="next" 
      class="arrow-button absolute right-0 top-1/2 z-30"  
      style="margin-top: 18px;"
      aria-label="Próximo depoimento"
      :aria-disabled="isLastSlide" :disabled="isLastSlide"
    >
        <ArrowCircle direction="right" backgroundColor="#E1DCCD" :responsive="false" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.font-gelasio {
  font-family: 'Gelasio', serif;
}
.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}
.arrow-button {
  transition: transform 0.1s ease;
  transform: translate(50%, -50%);
}
.arrow-button:hover {
  transform: translate(50%, -50%) scale(1.05);
}

.arrow-button:active {
  transform: translate(50%, -50%) scale(1.15);
}
</style>
