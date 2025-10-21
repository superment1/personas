<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ShopButton from './ShopButton.vue'

const props = defineProps({
  bottles: {
    type: Array,
    default: () => [
      { imgBottle: '/assets/n1.webp', imgIcon: '/assets/group_467_tsl_desk1.webp',productId:'prod_SbKYsQrxStW8wB' , iconBaseClass: "absolute top-[30%] left-[7%] w-[550px] z-10 pointer-events-none", textButton: ' 1 Bottle: A 30-day supply to \n experience the difference.' },
      { imgBottle: '/assets/n3.webp', imgIcon: '/assets/selo3.webp',productId:'prod_SbKa8ag01A2TGX' , iconBaseClass: "absolute top-[30%] left-[78%] w-[80px] z-10 pointer-events-none" ,textButton: '3 Bottles: Our most popular\n option steady support for\n months of deep rest.' },
      { imgBottle: '/assets/n6.webp', imgIcon: '/assets/selo6.webp',productId:'prod_SbKaRuJpDVBEzx' , iconBaseClass: "absolute top-[30%] left-[86%] w-[80px] z-10 pointer-events-none", textButton: '6 Bottles: The best value, ensuring\n you never run out of calm nights.' }
    ]
  }
})

const track = ref<HTMLElement | null>(null)
const itemEls = ref<HTMLElement[]>([])
const current = ref(0)

const updateCurrent = () => {
  if (!track.value) return
  const index = Math.round(track.value.scrollLeft / track.value.clientWidth)
  current.value = index
}

const centerToIndex = (i: number) => {
  if (!track.value) return
  current.value = i

  const width = track.value.clientWidth
  const target = i * width

  animateScroll(track.value, track.value.scrollLeft, target, 500)
}

let isDown = false
let startX = 0
let scrollLeftStart = 0
let lastX = 0
let lastTime = 0
let velocity = 0

const handleDown = (e: MouseEvent | TouchEvent) => {
  isDown = true
  velocity = 0
  track.value?.classList.add("dragging")

  if (e instanceof MouseEvent) startX = e.pageX
  else startX = e.touches[0].pageX

  scrollLeftStart = track.value?.scrollLeft || 0
  lastX = startX
  lastTime = Date.now()
}

const handleMove = (e: MouseEvent | TouchEvent) => {
  if (!isDown || !track.value) return

  let x
  if (e instanceof MouseEvent) x = e.pageX
  else x = e.touches[0].pageX

  const walk = x - startX
  track.value.scrollLeft = scrollLeftStart - walk

  const now = Date.now()
  const deltaX = x - lastX
  const deltaT = now - lastTime
  velocity = deltaX / (deltaT || 1)

  lastX = x
  lastTime = now
}

const handleUp = () => {
  if (!track.value) return
  isDown = false
  track.value.classList.remove("dragging")

  const container = track.value
  const width = container.clientWidth
  let index = Math.round((container.scrollLeft - velocity * 150) / width)

  index = Math.max(0, Math.min(index, props.bottles.length - 1))

  current.value = index
  const target = index * width
  animateScroll(container, container.scrollLeft, target, 500)
}

function animateScroll(el: HTMLElement, from: number, to: number, duration: number) {
  const start = performance.now()
  function step(now: number) {
    const progress = Math.min((now - start) / duration, 1)
    const ease = 1 - Math.pow(1 - progress, 4) // easeOutQuart
    el.scrollLeft = from + (to - from) * ease
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  if (track.value) {
    track.value.addEventListener('scroll', updateCurrent, { passive: true })
    track.value.addEventListener('mousedown', handleDown)
    track.value.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseup', handleUp)
    track.value.addEventListener('touchstart', handleDown, { passive: true })
    track.value.addEventListener('touchmove', handleMove, { passive: true })
    window.addEventListener('touchend', handleUp)
  }
})

onBeforeUnmount(() => {
  if (track.value) {
    track.value.removeEventListener('scroll', updateCurrent)
    track.value.removeEventListener('mousedown', handleDown)
    track.value.removeEventListener('mousemove', handleMove)
    window.removeEventListener('mouseup', handleUp)
    track.value.removeEventListener('touchstart', handleDown)
    track.value.removeEventListener('touchmove', handleMove)
    window.removeEventListener('touchend', handleUp)
  }
})
</script>

<template>
  <div
    ref="track"
    class="w-full overflow-x-auto flex snap-x snap-mandatory 
           select-none cursor-grab active:cursor-grabbing scrollbar-hide"
  >
    <div
      v-for="(t, i) in bottles"
      :key="i"
      :ref="el => (itemEls[i] = el as HTMLElement)"
      class="shrink-0 min-w-full snap-center flex justify-center items-center"
    >
      <div class="bg-[#90DAF4] rounded-[34px] max-w-[655px] max-h-[634px] grid justify-items-center gap-4 w-full flex justify-center">
        <div class="relative mx-auto max-h-[655px]">
          <img :src="t.imgBottle" class="block h-auto mx-auto" />
          <img v-if="t.imgIcon" :src="t.imgIcon"
            :class="[t.iconBaseClass]" />
          <ShopButton
            textColorClass="text-[#370F1E]" 
            iconColorClass="text-[#370F1E]"
            :show-icon="false"
            :productId="t.productId"
            class="relative left-1/2 -translate-x-1/2 translate-y-[-175px] bottom-4 z-20
                   h-[72px] w-[321px] md:w-[367px]
                   bg-[linear-gradient(132deg,#FFDC03_2.9%,#C9B11C_94.39%)]
                   shadow-[0px_4px_10px_0px_rgba(77,188,182,1.00)]
                   !rounded-[13px] justify-center"
          >
            <div class="flex flex-row items-center justify-center gap-3">
              <span class="font-DMSans leading-[1] whitespace-pre-line text-[18px] md:text-[20px] font-bold text-[#370F1E]">
               {{ t.textButton }}
              </span>
            </div>
          </ShopButton>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-center mt-4 gap-3">
    <button
      v-for="(_, i) in bottles"
      :key="`dot-${i}`"
      @click="centerToIndex(i)"
      class="w-3 h-3 rounded-full transition-colors"
      :class="i === current ? 'bg-[#370F1E]' : 'bg-[#FFFAF0]'"
    />
  </div>

</template>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.dragging {
  cursor: grabbing !important;
  scroll-behavior: auto !important;
}
</style>
