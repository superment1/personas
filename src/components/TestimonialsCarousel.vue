<script setup>
import { ref } from 'vue'
import setaDireita from '@/assets/image/seta-direita.png'
import setaEsquerda from '@/assets/image/seta-esquerda.png'

const items = [
  {
    type: 'image',
    title: 'Passion Flower',
    subtitle: 'Calming and relaxing.',
    image: '/src/assets/image/sleepSuperment/imagem-teste.png'
  },
  {
    type: 'image',
    title: 'Marshmallow Root',
    subtitle: 'Calms digestion, supports sleep.',
    image: '/src/assets/image/sleepSuperment/imagem-teste.png'
  },
  {
    type: 'image',
    title: 'California Poppy',
    subtitle: 'Promotes calm and sleep.',
    image: '/src/assets/image/sleepSuperment/imagem-teste.png'
  },
  {
    type: 'video',
    title: 'Vídeo 1 - Passion Flower',
    subtitle: 'Descubra os benefícios da flor da paixão.',
    url: 'https://www.youtube.com/embed/KjpzE0FeZa4'
  },
  {
    type: 'video',
    title: 'Vídeo 2 - Marshmallow Root',
    subtitle: 'Calmante natural para o sistema digestivo.',
    url: 'https://www.youtube.com/embed/KjpzE0FeZa4'
  },
  {
    type: 'video',
    title: 'Vídeo 3 - California Poppy',
    subtitle: 'Planta que favorece o relaxamento.',
    url: 'https://www.youtube.com/embed/KjpzE0FeZa4'
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
  <div class="relative w-full py-12 flex justify-center items-center">
    <div class="w-full max-w-[800px] px-4 flex justify-center items-center relative h-[500px] rounded-2xl">
      <!-- Seta esquerda -->
      <button @click="prev" class="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30">
        <img :src="setaEsquerda" alt="prev" class="w-16 h-16 md:w-12 md:h-12" />
      </button>

      <!-- Item visível -->
      <div class="absolute inset-0 w-full h-full z-10 overflow-hidden rounded-2xl">
        <template v-if="items[currentIndex].type === 'image'">
          <img
            :src="items[currentIndex].image"
            :alt="items[currentIndex].title"
            class="w-full h-full object-cover"
          />
        </template>
        <template v-else>
          <iframe
            :src="items[currentIndex].url"
            class="w-full h-full"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </template>

      </div>

      <!-- Seta direita -->
      <button @click="next" class="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-30">
        <img :src="setaDireita" alt="next" class="w-16 h-16 md:w-12 md:h-12" />
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
