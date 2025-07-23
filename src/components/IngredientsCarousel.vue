<script setup>
import { ref, computed } from 'vue'
import setaDireita from '@/assets/image/seta-direita.png'
import setaEsquerda from '@/assets/image/seta-esquerda.png'

const items = [
  { title: 'Passion Flower', subtitle: 'Calming and relaxing.', image: '/src/assets/image/passion-flower.png' },
  { title: 'Marshmallow Root', subtitle: 'Calms digestion, supports sleep.', image: '/src/assets/image/marshmallow-root.png' },
  { title: 'Corydalis', subtitle: 'Gentle pain and sleep relief.', image: '/src/assets/image/corydalis.png' },
  { title: 'California Poppy', subtitle: 'Promotes calm and sleep.', image: '/src/assets/image/california-poppy.png' },
  { title: 'Prickly Pear', subtitle: 'Antioxidant support.', image: '/src/assets/image/prickly-pear.png' }
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
  const cardWidth = 170 + 32 // largura do card + espaçamento (mx-4 = 16px de cada lado)
  const containerWidth = carouselContainer.value?.offsetWidth || 0
  const offset = (cardWidth * currentIndex.value) - (containerWidth / 2) + (cardWidth / 2)
  return `translateX(${offset * -1}px)` // permite valores negativos (resolve o bug do primeiro item)
})

</script>

<template>
  <div class="relative w-full bg-[#E1DCCD] py-12 overflow-hidden flex justify-center items-center">
    <!-- Faixa visível -->
    <div ref="carouselContainer" class="w-full max-w-[1000px] overflow-hidden px-4">
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: translateX }"
        style="will-change: transform;"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="relative flex-none w-[170px] mx-4 text-center transition-all duration-300 ease-in-out"
          :class="{
            'scale-100 opacity-100 z-10': index === currentIndex,
            'scale-90 opacity-40 z-0': index !== currentIndex
          }"
        >
          <!-- Setas visíveis apenas no item atual -->
          <template v-if="index === currentIndex">
            <button @click="prev" class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
              <img :src="setaEsquerda" alt="prev" class="w-12 h-12 md:w-14 md:h-14" style="margin-top: -50px;" />
            </button>
            <button @click="next" class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20">
              <img :src="setaDireita" alt="next" class="w-12 h-12 md:w-14 md:h-14" style="margin-top: -50px;"/>
            </button>
          </template>

          <!-- Card com imagem -->
          <div class="bg-white rounded-xl shadow p-4">
            <img :src="item.image" :alt="item.title" class="w-24 h-24 object-contain mx-auto"  />
          </div>
          <div class="mt-3">
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
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #370F1E;
}
.description {
  font-family: 'DM Sans';
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  text-align: center;
  color: #370F1E;
  margin-top: 3px;
}
</style>
