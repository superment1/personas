<script setup>
import { ref } from 'vue'
import setaDireita from '@/assets/image/seta-direita.png'
import setaEsquerda from '@/assets/image/seta-esquerda.png'
import ArrowCircle from '@/components/ArrowCircle.vue';

const items = [
  {
    type: 'image',
    image: new URL('@/assets/image/sleepSuperment/PG3Depoimento01.png', import.meta.url).href
  },
  {
    type: 'image',
    image: new URL('@/assets/image/sleepSuperment/PG3Depoimento02.png', import.meta.url).href
  },
  {
    type: 'image',
    image: new URL('@/assets/image/sleepSuperment/PG3Depoimento03.png', import.meta.url).href
  },
  {
    type: 'image',
    image: new URL('@/assets/image/sleepSuperment/PG3Depoimento04.png', import.meta.url).href
  },
  {
    type: 'video',
    url: new URL('@/assets/videos/depoimento-video.mp4', import.meta.url).href
  }
]

const currentIndex = ref(0)

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + items.length) % items.length
}
const next = () => {
  currentIndex.value = (currentIndex.value + 1) % items.length
}
</script>

<template>
  <div class="relative w-full py-5 flex justify-center items-center">
    <div class="w-full max-w-[800px] px-4 flex justify-center items-center relative h-[550px] rounded-2xl">
      <!-- Seta esquerda -->
      <button @click="prev" class="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30" style="margin-top: 18px">
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
            :src="items[currentIndex].url"
            class="w-full h-full object-cover"
            controls
            muted
            loop
            playsinline
          ></video>
        </template>

      </div>

      <!-- Seta direita -->
      <button @click="next" class="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-30" style="margin-top: 18px">
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
</style>
