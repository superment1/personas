<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps<{
  images?: string[]
  initialIndex?: number
  autoplayMs?: number
}>()

// defaults
const images = props.images ?? [
  '/assets/passion_flower_relax.webp',
  '/assets/marshmallow.webp',
  '/assets/corydalis-128.webp',
  '/assets/california_poppy_relax.webp',
  '/assets/prickly-pear-128.webp'
]
const AUTOPLAY_INTERVAL = props.autoplayMs ?? 2000

const currentIndex = ref(
  Math.min(Math.max(props.initialIndex ?? 0, 0), Math.max(images.length - 1, 0))
)

const carouselContainer = ref<HTMLDivElement | null>(null)

const CARD_WIDTH = 260
const GAP = 16
const EFFECTIVE_WIDTH = CARD_WIDTH + GAP
const sidePadding = ref(0)

const computeSidePadding = () => {
  const el = carouselContainer.value
  if (!el) return
  sidePadding.value = Math.max(el.offsetWidth / 2 - EFFECTIVE_WIDTH / 2 - 8, 0)
}

const scrollToIndex = (index: number) => {
  const el = carouselContainer.value
  if (!el) return
  const cardEl = el.querySelector<HTMLElement>(`[data-index="${index}"]`)
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

let autoplayTimer: number | null = null
const next = () => {
  if (!images.length) return
  const nextIndex = (currentIndex.value + 1) % images.length
  scrollToIndex(nextIndex)
}

const startAutoplay = () => {
  stopAutoplay()
  if (AUTOPLAY_INTERVAL > 0) {
    autoplayTimer = window.setInterval(next, AUTOPLAY_INTERVAL)
  }
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

const onScroll = () => {
  const el = carouselContainer.value
  if (!el) return

  const cardEls = el.querySelectorAll<HTMLElement>('[data-index]')
  let closestIndex = 0
  let smallestDistance = Infinity

  const elRect = el.getBoundingClientRect()
  const center = elRect.left + el.offsetWidth / 2

  cardEls.forEach((card) => {
    const rect = card.getBoundingClientRect()
    const cardCenter = rect.left + rect.width / 2
    const distance = Math.abs(cardCenter - center)
    const index = parseInt(card.getAttribute('data-index') || '0', 10)
    if (distance < smallestDistance) {
      smallestDistance = distance
      closestIndex = index
    }
  })
  currentIndex.value = closestIndex
}

const onResize = () => {
  computeSidePadding()
  nextTick(() => scrollToIndex(currentIndex.value))
}

onMounted(() => {
  const el = carouselContainer.value
  if (el) {
    el.addEventListener('scroll', onScroll, { passive: true })
    computeSidePadding()
  }

  nextTick(() => {
    scrollToIndex(currentIndex.value)
    startAutoplay()
  })

  window.addEventListener('resize', onResize, { passive: true })
})

onBeforeUnmount(() => {
  stopAutoplay()
  const el = carouselContainer.value
  if (el) el.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <div class="relative overflow-hidden w-full flex justify-center items-center">
    <div
      ref="carouselContainer"
      class="w-full max-w-[1000px] overflow-x-auto py-6 overflow-y-hidden scroll-smooth px-4 carousel-container snap-x snap-mandatory"
      @mouseenter="stopAutoplay"
      @mouseleave="startAutoplay"
      @touchstart.passive="stopAutoplay"
      @touchend.passive="startAutoplay"
    >
      <div class="flex w-max space-x-4 items-center relative z-0">
        <div class="shrink-0 pointer-events-none" :style="{ width: sidePadding + 'px' }"></div>

        <div
          v-for="(src, index) in images"
          :key="index"
          :data-index="index"
          class="relative flex-none origin-center snap-center w-[220px] md:w-[260px] mx-0 text-center transition-all duration-300 ease-in-out cursor-pointer"
          @click="scrollToIndex(index)"
        >
          <div
            class="transform origin-center transition-all duration-300 ease-in-out"
            :class="{
              'scale-110 opacity-100 z-[1]': index === currentIndex,
              'scale-90 opacity-40 z-0': index !== currentIndex
            }"
          >
            <div class="shadow rounded-2xl">
              <img
                :src="src"
                loading="lazy"
                decoding="async"
                class="w-32 h-32 md:w-48 md:h-48 object-contain mx-auto rounded-xl"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="shrink-0 pointer-events-none" :style="{ width: sidePadding + 'px' }"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-container { scrollbar-width: none; }
.carousel-container::-webkit-scrollbar { display: none; }
</style>
