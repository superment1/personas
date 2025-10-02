<script setup lang="ts">
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'
import ShopButton from './ShopButton.vue'

const props = defineProps({
    bottles: {
        type: Array,
        default: () => [
            {
                imgBottle: '/assets/nn1_1.webp',
                imgIcon: '/assets/group_467-desk.webp',
                textButton: 'Boston, MA'
            },
            {
                imgBottle: '/assets/nn2_tsl.webp',
                imgIcon: '/assets/group_467.webp',
                textButton: 'Boston, MA'
            },
            {
                imgBottle: '/assets/nn3.webp',
                imgIcon: '/assets/group_467.webp',
                textButton: 'Boston, MA'
            },
            // {
            //     avatarDesk: new URL('@/assets/image/newPageD/nuala-desk.png', import.meta.url).href,
            //     avatarMobile: new URL('@/assets/image/newPageD/nuala.png', import.meta.url).href,
            //     title: 'Didn’t expect it to work this well.',
            //     testimonial: 'I wasn’t expecting much, but I’m sleeping better and waking up with more energy.',
            //     name: 'Nuala O., 35',
            //     city: 'Miami, FL'
            // },
        ]
    }
})

const track = ref(null)
const itemEls = ref([])
const current = ref(0)
const spacer = ref(0)
let ticking = false

function centerToIndex(i, behavior = 'smooth') {
  const el = track.value, item = itemEls.value[i]
  if (!el || !item) return
  const index = Math.max(0, Math.min(i, itemEls.value.length - 1))
  const spl = spacer.value
  const target = itemEls.value[index].offsetLeft
              - (el.clientWidth - itemEls.value[index].clientWidth) / 2
              + spl;             
  current.value = index;                 
  el.scrollTo({ left: target, behavior })
}

function nearestIndex() {
  const el = track.value
  if (!el) return 0
  const spl = spacer.value
  const mid = el.scrollLeft - spl + el.clientWidth / 2; 
  let best = 0, dist = Infinity
  itemEls.value.forEach((it, i) => {
    const center = it.offsetLeft + it.offsetWidth / 2
    const d = Math.abs(center - mid)
    if (d < dist) { dist = d; best = i }
  })
  return best
}
function updateCurrent() { current.value = nearestIndex() }
let dragging = false, startX = 0, startLeft = 0
function onPointerDown(e) {
  dragging = true
  startX = e.clientX
  startLeft = track.value?.scrollLeft ?? 0
  track.value?.setPointerCapture?.(e.pointerId)
  if (track.value) {
    track.value.style.scrollSnapType = 'none'     
    track.value.style.scrollBehavior = 'auto'   
  }
}
function onPointerMove(e) {
    if (!dragging || !track.value) return
    const dx = e.clientX - startX
    track.value.scrollLeft = startLeft - dx
}

function onPointerUp(e) {
  dragging = false
  const el = track.value
  el?.releasePointerCapture?.(e.pointerId)

  // liga o snap novamente
  if (el) {
    el.style.scrollSnapType = 'x mandatory'
    el.style.scrollBehavior = '' // volta ao scroll-smooth via CSS
  }

  // ➜ regra de avanço: se o swipe passou do limiar, anda só ±1; senão, fica no mais próximo
  const dx = e.clientX - startX
  const w =
    itemEls.value[current.value]?.clientWidth ||
    itemEls.value[0]?.clientWidth || 1
  const threshold = w * 0.2 // 20% da largura

  let target = current.value
  if (Math.abs(dx) >= threshold) {
    target = dx < 0 ? current.value + 1 : current.value - 1
  } else {
    target = nearestIndex()
  }

  // limites [0, last]
  target = Math.max(0, Math.min(target, itemEls.value.length - 1))

  // centraliza (auto = sem animação para não ultrapassar)
  centerToIndex(target, 'auto') // centerToIndex já atualiza current
}

function onPointerCancel(e) {
  dragging = false
  const el = track.value
  el?.releasePointerCapture?.(e.pointerId)
  if (el) {
    el.style.scrollSnapType = 'x mandatory'
    el.style.scrollBehavior = ''
  }
  centerToIndex(nearestIndex(), 'auto')
}

function recomputeSpacer() {
  if (!track.value || !itemEls.value.length) return
  const cs = getComputedStyle(track.value)
  const pl = parseFloat(cs.paddingLeft) || 0
  const pr = parseFloat(cs.paddingRight) || 0
  const trackW = track.value.clientWidth - pl - pr
  const cardW = itemEls.value[0].clientWidth
  spacer.value = Math.max(0, (trackW - cardW) / 2)
}
let ro: ResizeObserver | null = null
const onResize = () => {
  recomputeSpacer()
  centerToIndex(current.value, 'auto')
}
function onScroll() {
  if (dragging) return           
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => { updateCurrent(); ticking = false })
}
onMounted(async () => {
  await nextTick()
  recomputeSpacer()
  centerToIndex(0, 'auto')
  current.value = 0

  ro = new ResizeObserver(recomputeSpacer)
  ro.observe(track.value!)

  window.addEventListener('resize', onResize)
  window.addEventListener('pointerup', onPointerUp)
  window.addEventListener('pointercancel', onPointerCancel)
})

onBeforeUnmount(() => {
  ro?.disconnect?.()
  window.removeEventListener('resize', onResize)
  window.removeEventListener('pointerup', onPointerUp)
  window.removeEventListener('pointercancel', onPointerCancel)
})
</script>

<template>
    <div ref="track" 
        class="w-full max-w-[1150px] mt-4 md:mt-[25px] px-4 flex gap-2 md:gap-10 lg:gap-20 overflow-x-auto scroll-smooth
             snap-x snap-mandatory select-none cursor-grab active:cursor-grabbing scrollbar-hide"
        :style="{ scrollPaddingLeft: spacer + 'px', scrollPaddingRight: spacer + 'px' }"
        style="touch-action: pan-y"  
        @wheel.prevent       
        @pointerdown="onPointerDown" 
        @pointermove="onPointerMove" 
        @pointerup="onPointerUp"
        @pointercancel="onPointerCancel"
        @scroll.passive="onScroll">
        <div v-for="(t, i) in bottles" :key="i" :ref="el => (itemEls[i] = el)"
            class="shrink-0 w-[814px]  snap-center snap-always">
            <div class="bg-[#90DAF4] rounded-[34px] grid justify-items-center gap-4 py-6">
                <!-- Wrapper da imagem -->
                <div class="relative w-[500px]">
                    <img
                        :src="t.imgBottle"
                        :alt="t.altBottle || 'Bottle'"
                        class="block w-[500px] h-auto"
                        />
                    <img
                        v-if="t.imgIcon"
                        :src="t.imgIcon"
                        :alt="t.altIcon || ''"
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] z-10 pointer-events-none"
                    />
                    <ShopButton textColorClass="text-[#370F1E]" iconColorClass="text-[#370F1E]" :show-icon="false"
                        productId="prod_T2jNgj5cCjXcvG"
                        class="relative left-1/2 -translate-x-1/2 bottom-4 z-20
                            h-[72px] w-[321px] md:w-[361px]
                            bg-[linear-gradient(132deg,#FFDC03_2.9%,#C9B11C_94.39%)]
                            shadow-[0px_4px_10px_0px_rgba(77,188,182,1.00)]
                            !rounded-[13px] justify-center">
                        <div class="flex flex-row items-center justify-center gap-3">                        
                            <span class="font-DMSans text-[18px] md:text-[20px] leading-[1.2] font-bold text-[#370F1E]">
                                1 Bottle: A 30-day supply to<br> experience the difference.
                            </span>
                        </div>
                    </ShopButton>    
                </div> 
            </div>
        </div>
    </div>
    <svg :width="6 + (bottles.length - 1) * 12" height="6"
        :viewBox="`0 0 ${6 + (bottles.length - 1) * 12} 6`" fill="none" class="mt-3">
        <g v-for="(_, i) in bottles" :key="`dot-${i}`" @click="centerToIndex(i)" class="cursor-pointer">
            <circle :cx="3 + i * 12" cy="3" r="3" :fill="i === current ? '#370F1E' : '#FFFAF0'" />
        </g>
    </svg>
</template>
<!-- trilho -->
<style>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>