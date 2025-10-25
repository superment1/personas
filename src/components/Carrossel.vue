<script setup lang="ts">
import { ref, onMounted, reactive, onBeforeUnmount } from 'vue'
import ShopButton from './ShopButton.vue'
import { getValuesShopNow } from '../composables/useCountry.js';

const props = defineProps({
  bottles: {
    type: Array,
    default: () => [
      { imgBottle: '/assets/n1.webp', imgIcon: '/assets/group_467_tsl_desk1_USD.webp', productId: 'prod_SbKYsQrxStW8wB', iconBaseClass: "absolute top-[30%] left-[7%] w-[550px] z-10 pointer-events-none", textButton: 'A 30-day supply to \n experience the difference.' },
      { imgBottle: '/assets/n3.webp', imgIcon: '/assets/Selo_3_USD.png', productId: 'prod_SbKa8ag01A2TGX', iconBaseClass: "absolute top-[30%] left-[78%] w-[80px] z-10 pointer-events-none", textButton: 'Our most popular option steady \nsupport for months of deep rest.' },
      { imgBottle: '/assets/n6.webp', imgIcon: '/assets/Selo_6_USD.png', productId: 'prod_SbKaRuJpDVBEzx', iconBaseClass: "absolute top-[30%] left-[86%] w-[80px] z-10 pointer-events-none", textButton: 'The best value, ensuring you \nnever run out of calm nights.' }
    ]
  }
})

const track = ref<HTMLElement | null>(null)
const itemEls = ref<HTMLElement[]>([])
const current = ref(0);

const frascos = reactive([...props.bottles]);

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

onMounted(async () => {
  const res = await getValuesShopNow();
  frascos.oneBottle = res.oneBottle;
  frascos.threeBottles = res.threeBottles;
  frascos.sixBottles = res.sixBottles;

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
  <div ref="track" class="w-full overflow-x-auto flex snap-x snap-mandatory 
           select-none cursor-grab active:cursor-grabbing scrollbar-hide">
    <div v-for="(t, i) in frascos" :key="i" :ref="el => (itemEls[i] = el as HTMLElement)"
      class="shrink-0 min-w-full snap-center flex justify-center items-center">
      <div
        class="bg-[#90DAF4] rounded-[34px] max-w-[655px] max-h-[834px] grid justify-items-center gap-4 w-full flex justify-center">
        <div class="relative mx-auto max-h-[655px]">
          <img :src="t.imgBottle" class="block h-auto mx-auto" />
          <img v-if="t.imgIcon" :src="t.imgIcon" :class="[t.iconBaseClass]" />
          <ShopButton textColorClass="text-[#370F1E]" iconColorClass="text-[#370F1E]" :show-icon="false"
            :productId="t.productId" class="relative left-1/2 -translate-x-1/2 translate-y-[-175px] bottom-4 z-20
                   !h-[108px] w-[480px]
                   bg-[linear-gradient(132deg,#FFDC03_2.9%,#C9B11C_94.39%)]
                   shadow-[0px_4px_10px_0px_rgba(77,188,182,1.00)]
                   !rounded-[24px] justify-center">
            <div class="flex flex-col items-center justify-center">
              <div class="flex flex-row items-center justify-center gap-4">
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_391_97)">
                    <path
                      d="M0.749435 1.69927C0.335487 1.69927 0 1.31893 0 0.849634C0 0.380341 0.335487 0 0.749435 0H4.64361C5.00435 0 5.30557 0.289346 5.37681 0.673777L5.96121 3.14804H27.9428C28.3568 3.14804 28.6923 3.52838 28.6923 3.99767C28.6923 4.06311 28.6859 4.1265 28.6733 4.18785L27.7138 10.5361C27.7101 10.5678 27.7056 10.5984 27.6993 10.6291L26.7334 17.0213C26.6712 17.4354 26.3547 17.7278 25.9957 17.7268H9.40717L10.033 20.3738H25.1976C25.6116 20.3738 25.947 20.7542 25.947 21.2235C25.947 21.6928 25.6116 22.0731 25.1976 22.0731H9.45857C9.12759 22.0731 8.82547 21.8216 8.73529 21.4423L7.71891 17.1419C7.71079 17.1133 7.70358 17.0837 7.69817 17.053L6.81436 13.314L6.19659 10.7007C6.18847 10.6721 6.18126 10.6434 6.17585 10.6138L4.66345 4.21545V4.21341L4.06913 1.69722H0.749435V1.69927ZM22.5399 24.4748C22.2323 24.4748 21.9555 24.6159 21.7544 24.8439C21.5532 25.0719 21.4288 25.3868 21.4288 25.7344C21.4288 26.082 21.5532 26.3969 21.7544 26.6249C21.9555 26.8529 22.2332 26.994 22.5399 26.994C22.8465 26.994 23.1243 26.8529 23.3254 26.6249C23.5265 26.3969 23.6509 26.082 23.6509 25.7344C23.6509 25.3868 23.5265 25.0719 23.3254 24.8439C23.1243 24.6159 22.8465 24.4748 22.5399 24.4748ZM20.6947 23.6415C21.1672 23.1057 21.8193 22.7745 22.5399 22.7745C23.2604 22.7745 23.9125 23.1057 24.385 23.6415C24.8576 24.1772 25.1498 24.9165 25.1498 25.7334C25.1498 26.5503 24.8576 27.2895 24.385 27.8252C23.9125 28.361 23.2604 28.6923 22.5399 28.6923C21.8193 28.6923 21.1672 28.361 20.6947 27.8252C20.2221 27.2895 19.9299 26.5503 19.9299 25.7334C19.9299 24.9165 20.2221 24.1772 20.6947 23.6415ZM12.7602 24.4748C12.4536 24.4748 12.1758 24.6159 11.9747 24.8439C11.7745 25.0719 11.6492 25.3868 11.6492 25.7344C11.6492 26.082 11.7736 26.3969 11.9747 26.6249C12.1758 26.8529 12.4536 26.994 12.7602 26.994C13.0669 26.994 13.3446 26.8529 13.5457 26.6249C13.7469 26.3969 13.8713 26.082 13.8713 25.7344C13.8713 25.3868 13.7469 25.0719 13.5457 24.8439C13.3446 24.6159 13.0669 24.4748 12.7602 24.4748ZM10.9151 23.6415C11.3876 23.1057 12.0397 22.7745 12.7602 22.7745C13.4808 22.7745 14.1328 23.1057 14.6054 23.6415C15.078 24.1772 15.3702 24.9165 15.3702 25.7334C15.3702 26.5503 15.078 27.2895 14.6054 27.8252C14.1328 28.361 13.4808 28.6923 12.7602 28.6923C12.0397 28.6923 11.3876 28.361 10.9151 27.8252C10.4425 27.2895 10.1503 26.5503 10.1503 25.7334C10.1503 24.9165 10.4425 24.1762 10.9151 23.6415ZM26.0823 11.2876H21.4865L21.1997 16.0285H25.3662L26.0823 11.2876ZM19.9867 11.2876H13.5962L14.0445 16.0285H19.6999L19.9867 11.2876ZM12.092 11.2876H7.88665L9.00765 16.0285H12.5411L12.0929 11.2876H12.092ZM7.48443 9.58828H11.9305L11.4823 4.84731H6.36343L7.48443 9.58828ZM13.4348 9.58828H20.0886L20.3754 4.84731H12.9866L13.4348 9.58828ZM21.5884 9.58828H26.3384L27.0545 4.84731H21.8743L21.5875 9.58828H21.5884Z"
                      fill="#370F1E" />
                  </g>
                  <defs>
                    <clipPath id="clip0_391_97">
                      <rect width="28.6923" height="28.6923" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span class="font-DMSans leading-[1] whitespace-pre-line text-[24px] font-bold text-[#370F1E]">
                  {{ i == 0 ? '1 Bottle:' : (i == 1 ? '3 Bottles:' : '6 Bottles:') }}</span>
              </div>
              <span class="font-DMSans leading-[1] whitespace-pre-line text-[24px] font-bold text-[#370F1E]">
                {{ t.textButton }}
              </span>
            </div>
          </ShopButton>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-center mt-4 gap-3">
    <button v-for="(_, i) in bottles" :key="`dot-${i}`" @click="centerToIndex(i)"
      class="w-3 h-3 rounded-full transition-colors" :class="i === current ? 'bg-[#370F1E]' : 'bg-[#FFFAF0]'" />
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
