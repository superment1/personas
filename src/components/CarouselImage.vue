<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps<{
  images?: { mobile: string; desktop: string; alt?: string }[]
  initialIndex?: number
  autoplayMs?: number
}>()

// defaults
const images = props.images ?? [
  { mobile: '/assets/relaxfum.webp', desktop: '/assets/relaxfum-desk.webp', alt: 'Relax fum'},
  { mobile: '/assets/relaxbar.webp', desktop: '/assets/relaxbar-desk.webp', alt: 'Relax fum'},
  { mobile: '/assets/relaxpc.webp', desktop: '/assets/relaxpc-desk.webp', alt: 'Relax fum'},
  { mobile: '/assets/relaxcaf.webp', desktop: '/assets/relaxcaf-desk.webp', alt: 'Relax fum'},
  { mobile: '/assets/relaxmob.webp', desktop: '/assets/relaxmob-desk.webp', alt: 'Relax fum'}
]

const AUTOPLAY_INTERVAL = props.autoplayMs ?? 3000
const currentIndex = ref(0)
const carouselContainer = ref<HTMLDivElement | null>(null)
const sidePadding = ref(0)

const computeSidePadding = () => {
  const el = carouselContainer.value
  if (!el) return
  const firstCard = el.querySelector<HTMLElement>('[data-index="0"]')
  if (!firstCard) return
  const cardWidth = firstCard.offsetWidth
  sidePadding.value = Math.max(el.offsetWidth / 2 - cardWidth / 2, 0)
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
    computeSidePadding()
    requestAnimationFrame(() => {
      scrollToIndex(0)
      startAutoplay()
    })
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
      class="w-full max-w-[1000px] overflow-x-auto pb-6 pt-[45px] overflow-y-hidden scroll-smooth carousel-container snap-x snap-mandatory"
      @mouseenter="stopAutoplay"
      @mouseleave="startAutoplay"
      @touchstart.passive="stopAutoplay"
      @touchend.passive="startAutoplay"
    >
      <div class="flex w-max items-center relative z-0 gap-x-[24px] md:gap-x-6">
        <div class="shrink-0 pointer-events-none" :style="{ width: sidePadding + 'px' }"></div>

        <div
          v-for="(img, index) in images"
          :key="index"
          :data-index="index"
          class="relative flex-none origin-center snap-center w-[318px] md:w-[975px] mx-0 text-center transition-all duration-300 ease-in-out cursor-pointer"
          @click="scrollToIndex(index)"
        >
          <div
            class="transform origin-center transition-all duration-300 ease-in-out"
            :class="{
              ' opacity-100 z-[1]': index === currentIndex,
              ' opacity-40 z-0': index !== currentIndex
            }"
          >
            <div class="shadow rounded-[20px] overflow-hidden w-full">
              <picture>
                <source media="(min-width:768px)" :srcset="img.desktop" />
                <img
                  :src="img.mobile"
                  :alt="img.alt || ''"
                  loading="lazy"
                  decoding="async"
                  class="block w-full h-auto md:h-[424px] object-cover"
                />
              </picture>

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
