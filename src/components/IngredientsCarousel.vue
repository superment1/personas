<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

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

const CARD_WIDTH = 260
const GAP = 16
const EFFECTIVE_WIDTH = CARD_WIDTH + GAP
const sidePadding = ref(0)

const scrollToIndex = (index) => {
  const el = carouselContainer.value
  if (!el) return

  const cardEl = el.querySelector(`[data-index="${index}"]`)
  if (!cardEl) return

  const elRect = el.getBoundingClientRect()
  const cardRect = cardEl.getBoundingClientRect()

  const currentScroll = el.scrollLeft
  const cardCenter = cardRect.left + cardRect.width / 2
  const containerCenter = elRect.left + el.offsetWidth / 2
  const delta = cardCenter - containerCenter

  el.scrollTo({ left: currentScroll + delta, behavior: 'smooth' })
  currentIndex.value = index
}

const onScroll = () => {
  const el = carouselContainer.value
  if (!el) return

  const containerCenter = el.scrollLeft + el.offsetWidth / 2
  const cardEls = el.querySelectorAll('[data-index]')

  let closestIndex = 0
  let smallestDistance = Infinity

  cardEls.forEach((card) => {
    const rect = card.getBoundingClientRect()
    const cardCenter = rect.left + rect.width / 2
    const distance = Math.abs(cardCenter - el.getBoundingClientRect().left - el.offsetWidth / 2)

    const index = parseInt(card.getAttribute('data-index'))
    if (distance < smallestDistance) {
      smallestDistance = distance
      closestIndex = index
    }
  })

  currentIndex.value = closestIndex
}
let hoverTimeout = null
const handleMouseEnter = (index) => {
  if (window.innerWidth >= 1024) {
    clearTimeout(hoverTimeout)
    hoverTimeout = setTimeout(() => {
      requestAnimationFrame(() => {
        nextTick(() => {
          scrollToIndex(index)
        })
      })
    }, 100)
  }
}
const handleMouseLeave = () => {
  if (window.innerWidth >= 1024) {
    clearTimeout(hoverTimeout)
  }
}
onMounted(() => {
  const el = carouselContainer.value
  if (el) {
    el.addEventListener('scroll', onScroll, { passive: true })
    sidePadding.value = el.offsetWidth / 2 - EFFECTIVE_WIDTH / 2
  }
  nextTick(() => scrollToIndex(currentIndex.value))
})

onBeforeUnmount(() => {
  carouselContainer.value?.removeEventListener('scroll', onScroll)
})

</script>

<template>
  <div class="relative w-full bg-[#E1DCCD] flex justify-center items-center">
    <!-- Faixa visível -->
    <div 
        ref="carouselContainer" 
        class="w-full max-w-[1000px] overflow-x-auto py-6 overflow-y-hidden scroll-smooth px-4 carousel-container snap-x snap-mandatory"
      >
      <!-- Linha de cards -->
      <div class="flex w-max space-x-4 items-center relative z-0"
        @mousedown="onMouseDown"
        @mousemove="onMouseMove"
        @mouseup="onMouseUp"
        @mouseleave="onMouseUp">
        <div class="shrink-0" :style="{ width: sidePadding + 'px' }"></div>
        <div
          v-for="(item, index) in items"
          :key="index"
          :data-index="index"
          class="relative flex-none snap-center w-[220px] md:w-[260px] mx-0 text-center transition-all duration-300 ease-in-out  cursor-pointer"
          :class="{
            'scale-110 opacity-100 z-[1]': index === currentIndex,
            'scale-90  opacity-40  z-0': index !== currentIndex
          }"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave"
          @click="scrollToIndex(index)"
        >
          <!-- Card com imagem -->
          <div class="bg-white rounded-xl shadow rounded-2x1">
            <img 
            :src="item.image" 
            :alt="item.title" 
            class="w-32 h-32 md:w-48 md:h-48 object-contain mx-auto rounded-xl" />
          </div>
          <div class="mt-2">
            <h3 class="title">{{ item.title }}</h3>
            <p class="description">{{ item.subtitle }}</p>
          </div>
          
        </div>
        <div class="shrink-0" :style="{ width: sidePadding + 'px' }"></div>
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
.carousel-container {
  scrollbar-width: none; /* Firefox */
}
.carousel-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}
</style>
