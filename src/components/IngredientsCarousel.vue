<script setup>
import { ref, computed } from 'vue';
import setaDireita from '@/assets/image/seta-direita.png';
import setaEsquerda from '@/assets/image/seta-esquerda.png';
import ArrowCircle from '@/components/ArrowCircle.vue';

const items = [
  { 
    title: 'Passion Flower', 
    subtitle: 'Calming and relaxing.', 
    image: new URL('@/assets/image/passion-flower.png', import.meta.url).href },
  { 
    title: 'Marshmallow Root', 
    subtitle: 'Calms digestion, supports sleep.', 
    image: new URL('@/assets/image/marshmallow-root.png', import.meta.url).href },
  { 
    title: 'Corydalis', subtitle
    : 'Gentle pain and sleep relief.', 
    image: new URL('@/assets/image/corydalis.png' , import.meta.url).href},
  { 
    title: 'California Poppy', 
    subtitle: 'Promotes calm and sleep.', 
    image: new URL('@/assets/image/california-poppy.png', import.meta.url).href },
  { 
    title: 'Prickly Pear', 
    subtitle: 'Antioxidant support.', 
    image: new URL('@/assets/image/prickly-pear.png', import.meta.url).href }
]

const currentIndex = ref(2)
const carouselContainer = ref(null)

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + items.length) % items.length
}
const next = () => {
  currentIndex.value = (currentIndex.value + 1) % items.length
}

const translateX = computed(() => {
  const cardWidth = 170;// largura do card + espaçamento (mx-4 = 16px de cada lado)
  const containerWidth = carouselContainer.value?.offsetWidth || 0
  const offset = (cardWidth * currentIndex.value) - (containerWidth / 2) + (cardWidth / 2)
  return `translateX(${offset * -1}px)` // permite valores negativos (resolve o bug do primeiro item)
})

</script>

<template>
  <div class="relative w-full bg-[#E1DCCD] py-3 overflow-hidden flex justify-center items-center" >
    <!-- Faixa visível -->
    <div ref="carouselContainer" class="w-full max-w-[1000px] overflow-hidden px-4" >
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: translateX }"
        style="will-change: transform;"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="relative flex-none w-[full] mx-0 text-center transition-all duration-300 ease-in-out"
          :class="{
            'scale-100 opacity-100 z-10': index === currentIndex,
            'scale-90 opacity-40 z-0': index !== currentIndex
          }"
        >
          <!-- Setas visíveis apenas no item atual -->
          <template v-if="index === currentIndex">
            <button @click="prev" class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
              <ArrowCircle direction="left" style="margin-top: -30px;"/>
            </button>
            <button @click="next" class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20">
              <ArrowCircle direction="right" style="margin-top: -30px;"/>
            </button>
          </template>

          <!-- Card com imagem -->
          <div class="bg-white rounded-xl shadow rounded-2x1">
            <img :src="item.image" :alt="item.title" class="w-32 h-32 md:w-48 md:h-48 object-contain mx-auto" style="border-radius: 16px" />
          </div>
          <div class="mt-2">
            <h3 class="title">{{ item.title }}</h3>
            <p class="description">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.title {
  font-family: 'Gelasio';
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: #370F1E;
}
.description {
  font-family: 'DM Sans';
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  text-align: center;
  color: #370F1E;
  margin-top: 3px;
}
</style>
