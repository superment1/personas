<script setup lang="ts">
import '../styles/superSleep.scss';
import SuperHeader2 from '../components/SuperHeader2.vue';
import ShopButton from '../components/ShopButton.vue';
import { useSeo } from '../composables/useSeo';
import { defineAsyncComponent } from 'vue'
import LazyIsland from '@/components/LazyIsland.vue'
import BannerModal from '../components/BannerModal.vue';
import ShopNowD from '../components/newPageD/ShopNowD.vue';
import DepoimentsD from '../components/newPageD/DepoimentsD.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SuperFooter2 from '../components/SuperFooter2.vue';

const IngredientsCarousel = defineAsyncComponent(() => import('../components/IngredientsCarousel.vue'))
const FAQ = defineAsyncComponent(() => import('../components/Faq.vue'))
const NotificationDisplay2 = defineAsyncComponent(() => import('../components/NotificationDisplay2.vue'))
const BannerRetention = defineAsyncComponent(() => import('../components/BannerRetention.vue'))

useSeo({
  title: 'Get Restful Sleep Naturally with Superment Super Sleep Aid',
  description: "Experience deep, natural, and restful sleep with Superment Super Sleep. Our melatonin-free botanical blend helps you fall asleep faster & wake up refreshed. Made in USA.",
  keywords: 'natural sleep aid sleep supplement restful sleep deep sleep fall asleep faster stay asleep longer wake up refreshed'
})

const anchorId = 'shop-now-d'

const modalOpen = ref(false)

const BACK_STATE = { exitGuard: true }
let backGuardActive = false

function onBackPress(e: PopStateEvent) {
  if (!backGuardActive) return
  history.pushState(BACK_STATE, document.title, location.href)
  openExitModal(true)
}
function enableBackExitGuard() {
  if (backGuardActive) return
  backGuardActive = true
  history.pushState(BACK_STATE, document.title, location.href)
  window.addEventListener('popstate', onBackPress)
}
function disableBackExitGuard() {
  if (!backGuardActive) return
  backGuardActive = false
  window.removeEventListener('popstate', onBackPress)
}

// cooldown e gatilhos
const COOLDOWN_MS = 20000
const TOP_ZONE = 8
let lastShown = 0
let lastY = 9999

function onCountdownExpired() {
  modalOpen.value = true
  lastShown = Date.now()
}
function openExitModal(force = false) {
  const now = Date.now()
  if (modalOpen.value) return
  if (!force) {
    if (now - lastShown < COOLDOWN_MS) return
  }
  modalOpen.value = true
  lastShown = now
}
function onPageHide() { openExitModal() }

function onMouseMove(e: MouseEvent) {
  const goingUp = e.clientY < lastY
  if (goingUp && e.clientY <= TOP_ZONE) openExitModal(true)
  lastY = e.clientY
}
function onMouseOut(e: MouseEvent) {
  if (!e.relatedTarget && e.clientY <= 0) openExitModal(true)
}
function onVisibilityChange() {
  if (document.visibilityState === 'hidden') openExitModal()
}
function onWindowBlur() { openExitModal() }
function onPopState() { openExitModal() }

let lastScrollY = window.scrollY || 0
let lastScrollT = performance.now()
function onScroll() {
  const y = window.scrollY
  const t = performance.now()
  const dy = lastScrollY - y
  const dt = Math.max(t - lastScrollT, 1)
  const vel = dy / dt
  if (dy > 120 && vel > 0.6) openExitModal()
  if (y <= 12 && dy > 0) openExitModal()
  lastScrollY = y
  lastScrollT = t
}
onMounted(() => {
  // listeners de retenção
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  document.addEventListener('mouseout', onMouseOut, { passive: true })
  document.addEventListener('visibilitychange', onVisibilityChange)
  window.addEventListener('blur', onWindowBlur)
  window.addEventListener('popstate', onPopState)
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('pagehide', onPageHide)

  // guard de back apenas em touch (igual VSL)
  if (window.matchMedia?.('(pointer: coarse)').matches) {
    enableBackExitGuard()
  }
})
onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseout', onMouseOut)
  document.removeEventListener('visibilitychange', onVisibilityChange)
  window.removeEventListener('blur', onWindowBlur)
  window.removeEventListener('popstate', onPopState)
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('pagehide', onPageHide)
  disableBackExitGuard()
})

</script>

<template>
  <SuperHeader2 :show-redirect="false" :items="[
    'Save 14%',
    'Free Shipping',
    '120-Day Money-Back Guarantee',
    '100% Plant-Based',
    'Science-Backed',
    'Non-Sedative',
    'Non-Habit Forming',
    'Caffeine-Free',
    'Gluten, Soy & Dairy-Free',
    'Made in the USA',
    'GMP-Certified Facility',
  ]" />
  <section class="firtsection bg-[#50b5b2]">
    <div class="relative z-0 min-h-[640px] lg:min-h-[820px]">
      <picture class="pointer-events-none select-none">
        <source media="(min-width:1024px)" srcset="/assets/hero_relax_desk.webp" type="image/webp">
        <img
          id="hero-lcp"
          src="/assets/hero_relax_new1.webp"
          width="1280" height="800"
          alt="relax-hero"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          class="absolute inset-0 z-0 w-full h-full object-cover" />
      </picture>

      <div class="relative w-full lg:w-[750px] pl-0 lg:pl-[7.5rem] pb-[25px] lg:pb-[36px]">
        <div class="px-12">
          <div class="text-[#370F1E] gap-[127px] lg:gap-[20px] flex flex-col">
            <h1 class="italic block sm:hidden font-gelasio mt-[43px] text-[13px] leading-[15px] font-bold">A Powerful Plant-Based
             <br>Formula <span class="font-medium">that Restores<br> Nervous System Balance.</span>
            </h1>
            <h1 class="hidden sm:block italic font-gelasio mt-[75px] text-[24px] leading-[30px] font-bold">A Powerful
              <br>Plant-Based
              Formula <span class="font-medium">that <br>Restores Nervous System Balance.</span>
            </h1>
            <div class="font-gelasio">
              <svg class="sm:hidden" xmlns="http://www.w3.org/2000/svg" width="69" height="17" viewBox="0 0 69 17"
                fill="none">
                <g filter="url(#filter0_d_155_121)">
                  <path
                    d="M9.1692 1.1606C9.17006 1.1606 9.17082 1.16116 9.17109 1.16198L9.70274 2.80026C10.02 3.77789 10.9308 4.43992 11.9587 4.43992H13.6819C14.2342 4.43992 14.4656 5.14841 14.0173 5.4723C12.3548 6.68125 11.6593 8.82353 12.2938 10.7788C12.4644 11.3051 11.8629 11.7418 11.4147 11.4179C9.7527 10.2093 7.50126 10.2093 5.83927 11.4179C5.39104 11.7418 4.78954 11.3051 4.96016 10.7788C5.59467 8.82353 4.89917 6.68125 3.23664 5.4723C2.78841 5.14841 3.01975 4.43992 3.57209 4.43992C5.62736 4.43992 7.44892 3.11551 8.08332 1.1606C8.25379 0.634758 8.99582 0.634292 9.1673 1.1592C9.16756 1.16002 9.16834 1.1606 9.1692 1.1606Z"
                    fill="url(#paint0_linear_155_121)" />
                  <path
                    d="M22.1058 1.15963C22.1066 1.15963 22.1074 1.16018 22.1077 1.161L22.6393 2.79928C22.9566 3.77692 23.8674 4.43894 24.8953 4.43894H26.6185C27.1708 4.43894 27.4021 5.14744 26.9539 5.47132C25.2914 6.68028 24.5959 8.82256 25.2304 10.7778C25.401 11.3041 24.7995 11.7408 24.3513 11.4169C22.6893 10.2083 20.4378 10.2083 18.7759 11.4169C18.3276 11.7408 17.7261 11.3041 17.8967 10.7778C18.5313 8.82256 17.8358 6.68028 16.1732 5.47132C15.725 5.14744 15.9563 4.43894 16.5087 4.43894C18.5639 4.43894 20.3855 3.11453 21.0199 1.15963C21.1904 0.633782 21.9324 0.633315 22.1039 1.15823C22.1041 1.15905 22.1049 1.15963 22.1058 1.15963Z"
                    fill="url(#paint1_linear_155_121)" />
                  <path
                    d="M35.0422 1.15963C35.0431 1.15963 35.0439 1.16018 35.0441 1.161L35.5758 2.79928C35.893 3.77692 36.8039 4.43894 37.8317 4.43894H39.5549C40.1073 4.43894 40.3386 5.14744 39.8904 5.47132C38.2278 6.68028 37.5323 8.82256 38.1668 10.7778C38.3375 11.3041 37.736 11.7408 37.2877 11.4169C35.6257 10.2083 33.3743 10.2083 31.7123 11.4169C31.2641 11.7408 30.6626 11.3041 30.8332 10.7778C31.4677 8.82256 30.7722 6.68028 29.1097 5.47132C28.6615 5.14744 28.8928 4.43894 29.4451 4.43894C31.5004 4.43894 33.322 3.11453 33.9564 1.15963C34.1268 0.633782 34.8689 0.633315 35.0403 1.15823C35.0406 1.15905 35.0414 1.15963 35.0422 1.15963Z"
                    fill="url(#paint2_linear_155_121)" />
                  <path
                    d="M47.9788 1.15963C47.9796 1.15963 47.9804 1.16018 47.9807 1.161L48.5123 2.79928C48.8296 3.77692 49.7404 4.43894 50.7682 4.43894H52.4914C53.0438 4.43894 53.2751 5.14744 52.8269 5.47132C51.1644 6.68028 50.4689 8.82256 51.1034 10.7778C51.274 11.3041 50.6725 11.7408 50.2243 11.4169C48.5623 10.2083 46.3108 10.2083 44.6488 11.4169C44.2006 11.7408 43.5991 11.3041 43.7697 10.7778C44.4042 8.82256 43.7087 6.68028 42.0462 5.47132C41.598 5.14744 41.8293 4.43894 42.3817 4.43894C44.4369 4.43894 46.2585 3.11453 46.8929 1.15963C47.0634 0.633782 47.8054 0.633315 47.9769 1.15823C47.9771 1.15905 47.9779 1.15963 47.9788 1.15963Z"
                    fill="url(#paint3_linear_155_121)" />
                  <path
                    d="M60.9152 1.15963C60.9161 1.15963 60.9169 1.16018 60.9171 1.161L61.4488 2.79928C61.766 3.77692 62.6769 4.43894 63.7047 4.43894H65.4279C65.9802 4.43894 66.2116 5.14744 65.7634 5.47132C64.1008 6.68028 63.4053 8.82256 64.0398 10.7778C64.2105 11.3041 63.609 11.7408 63.1607 11.4169C61.4987 10.2083 59.2473 10.2083 57.5853 11.4169C57.1371 11.7408 56.5356 11.3041 56.7062 10.7778C57.3407 8.82256 56.6452 6.68028 54.9827 5.47132C54.5344 5.14744 54.7658 4.43894 55.3181 4.43894C57.3734 4.43894 59.195 3.11453 59.8294 1.15963C59.9998 0.633782 60.7418 0.633315 60.9133 1.15823C60.9136 1.15905 60.9144 1.15963 60.9152 1.15963Z"
                    fill="url(#paint4_linear_155_121)" />
                </g>
                <defs>
                  <filter id="filter0_d_155_121" x="0.329362" y="0.764893" width="68.3413" height="16.1052"
                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha" />
                    <feOffset dy="2.67064" />
                    <feGaussianBlur stdDeviation="1.33532" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_155_121" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_155_121" result="shape" />
                  </filter>
                  <linearGradient id="paint0_linear_155_121" x1="12.423" y1="10.7174" x2="6.25383" y2="1.15136"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFE5A6" />
                    <stop offset="0.307692" stop-color="#E49C21" />
                    <stop offset="0.697115" stop-color="#FFE5A6" />
                    <stop offset="1" stop-color="#E49C21" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_155_121" x1="25.3595" y1="10.7164" x2="19.1904" y2="1.15038"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFE5A6" />
                    <stop offset="0.307692" stop-color="#E49C21" />
                    <stop offset="0.697115" stop-color="#FFE5A6" />
                    <stop offset="1" stop-color="#E49C21" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_155_121" x1="38.296" y1="10.7164" x2="32.1269" y2="1.15038"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFE5A6" />
                    <stop offset="0.307692" stop-color="#E49C21" />
                    <stop offset="0.697115" stop-color="#FFE5A6" />
                    <stop offset="1" stop-color="#E49C21" />
                  </linearGradient>
                  <linearGradient id="paint3_linear_155_121" x1="51.2325" y1="10.7164" x2="45.0634" y2="1.15038"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFE5A6" />
                    <stop offset="0.307692" stop-color="#E49C21" />
                    <stop offset="0.697115" stop-color="#FFE5A6" />
                    <stop offset="1" stop-color="#E49C21" />
                  </linearGradient>
                  <linearGradient id="paint4_linear_155_121" x1="64.169" y1="10.7164" x2="57.9999" y2="1.15038"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFE5A6" />
                    <stop offset="0.307692" stop-color="#E49C21" />
                    <stop offset="0.697115" stop-color="#FFE5A6" />
                    <stop offset="1" stop-color="#E49C21" />
                  </linearGradient>
                </defs>
              </svg>
              <svg class="hidden sm:flex" xmlns="http://www.w3.org/2000/svg" width="112" height="27"
                viewBox="0 0 112 27" fill="none">
                <g filter="url(#filter0_d_198_867)">
                  <path
                    d="M15.0039 1.53413C15.0053 1.53413 15.0066 1.53502 15.007 1.53635L15.8648 4.17975C16.3767 5.75718 17.8464 6.82537 19.5048 6.82537H22.2852C23.1764 6.82537 23.5497 7.96855 22.8265 8.49114C20.144 10.4418 19.0218 13.8984 20.0456 17.0533C20.3208 17.9025 19.3503 18.607 18.6271 18.0844C15.9454 16.1344 12.3127 16.1344 9.63103 18.0844C8.9078 18.607 7.93727 17.9025 8.21257 17.0533C9.23636 13.8984 8.11416 10.4418 5.43163 8.49114C4.7084 7.96855 5.08168 6.82537 5.97289 6.82537C9.2891 6.82537 12.2282 4.68841 13.2519 1.53413C13.5269 0.685667 14.7242 0.684914 15.0009 1.53187C15.0013 1.53319 15.0025 1.53413 15.0039 1.53413Z"
                    fill="url(#paint0_linear_198_867)" />
                  <path
                    d="M35.877 1.53266C35.8784 1.53266 35.8796 1.53356 35.88 1.53488L36.7379 4.17829C37.2498 5.75571 38.7194 6.82391 40.3778 6.82391H43.1583C44.0495 6.82391 44.4228 7.96708 43.6995 8.48967C41.017 10.4403 39.8948 13.897 40.9186 17.0518C41.1939 17.901 40.2234 18.6056 39.5001 18.083C36.8185 16.1329 33.1857 16.1329 30.5041 18.083C29.7808 18.6056 28.8103 17.901 29.0856 17.0518C30.1094 13.897 28.9872 10.4403 26.3047 8.48967C25.5814 7.96708 25.9547 6.82391 26.8459 6.82391C30.1622 6.82391 33.1013 4.68695 34.1249 1.53266C34.3999 0.684202 35.5972 0.683449 35.8739 1.5304C35.8743 1.53173 35.8756 1.53266 35.877 1.53266Z"
                    fill="url(#paint1_linear_198_867)" />
                  <path
                    d="M56.751 1.53266C56.7524 1.53266 56.7536 1.53356 56.7541 1.53488L57.6119 4.17829C58.1238 5.75571 59.5935 6.82391 61.2519 6.82391H64.0323C64.9235 6.82391 65.2968 7.96708 64.5736 8.48967C61.891 10.4403 60.7688 13.897 61.7926 17.0518C62.0679 17.901 61.0974 18.6056 60.3742 18.083C57.6925 16.1329 54.0598 16.1329 51.3781 18.083C50.6549 18.6056 49.6843 17.901 49.9596 17.0518C50.9834 13.897 49.8612 10.4403 47.1787 8.48967C46.4555 7.96708 46.8287 6.82391 47.72 6.82391C51.0362 6.82391 53.9753 4.68695 54.9989 1.53266C55.274 0.684202 56.4713 0.683449 56.7479 1.5304C56.7484 1.53173 56.7496 1.53266 56.751 1.53266Z"
                    fill="url(#paint2_linear_198_867)" />
                  <path
                    d="M77.625 1.53266C77.6264 1.53266 77.6277 1.53356 77.6281 1.53488L78.4859 4.17829C78.9978 5.75571 80.4675 6.82391 82.1259 6.82391H84.9063C85.7975 6.82391 86.1708 7.96708 85.4476 8.48967C82.7651 10.4403 81.6429 13.897 82.6666 17.0518C82.9419 17.901 81.9714 18.6056 81.2482 18.083C78.5665 16.1329 74.9338 16.1329 72.2521 18.083C71.5289 18.6056 70.5584 17.901 70.8337 17.0518C71.8575 13.897 70.7352 10.4403 68.0527 8.48967C67.3295 7.96708 67.7028 6.82391 68.594 6.82391C71.9102 6.82391 74.8493 4.68695 75.8729 1.53266C76.148 0.684202 77.3453 0.683449 77.622 1.5304C77.6224 1.53173 77.6236 1.53266 77.625 1.53266Z"
                    fill="url(#paint3_linear_198_867)" />
                  <path
                    d="M98.4971 1.53266C98.4985 1.53266 98.4997 1.53356 98.5002 1.53488L99.358 4.17829C99.8699 5.75571 101.34 6.82391 102.998 6.82391H105.778C106.67 6.82391 107.043 7.96708 106.32 8.48967C103.637 10.4403 102.515 13.897 103.539 17.0518C103.814 17.901 102.843 18.6056 102.12 18.083C99.4386 16.1329 95.8059 16.1329 93.1242 18.083C92.401 18.6056 91.4304 17.901 91.7057 17.0518C92.7295 13.897 91.6073 10.4403 88.9248 8.48967C88.2016 7.96708 88.5748 6.82391 89.466 6.82391C92.7823 6.82391 95.7214 4.68695 96.745 1.53266C97.0201 0.684202 98.2173 0.683449 98.494 1.5304C98.4945 1.53173 98.4957 1.53266 98.4971 1.53266Z"
                    fill="url(#paint4_linear_198_867)" />
                </g>
                <defs>
                  <filter id="filter0_d_198_867" x="0.740674" y="0.895752" width="110.27" height="25.9862"
                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha" />
                    <feOffset dy="4.30913" />
                    <feGaussianBlur stdDeviation="2.15457" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_198_867" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_198_867" result="shape" />
                  </filter>
                  <linearGradient id="paint0_linear_198_867" x1="20.254" y1="16.9543" x2="10.2999" y2="1.51921"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFE5A6" />
                    <stop offset="0.307692" stop-color="#E49C21" />
                    <stop offset="0.697115" stop-color="#FFE5A6" />
                    <stop offset="1" stop-color="#E49C21" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_198_867" x1="41.127" y1="16.9528" x2="31.173" y2="1.51774"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFE5A6" />
                    <stop offset="0.307692" stop-color="#E49C21" />
                    <stop offset="0.697115" stop-color="#FFE5A6" />
                    <stop offset="1" stop-color="#E49C21" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_198_867" x1="62.001" y1="16.9528" x2="52.047" y2="1.51774"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFE5A6" />
                    <stop offset="0.307692" stop-color="#E49C21" />
                    <stop offset="0.697115" stop-color="#FFE5A6" />
                    <stop offset="1" stop-color="#E49C21" />
                  </linearGradient>
                  <linearGradient id="paint3_linear_198_867" x1="82.8751" y1="16.9528" x2="72.921" y2="1.51774"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFE5A6" />
                    <stop offset="0.307692" stop-color="#E49C21" />
                    <stop offset="0.697115" stop-color="#FFE5A6" />
                    <stop offset="1" stop-color="#E49C21" />
                  </linearGradient>
                  <linearGradient id="paint4_linear_198_867" x1="103.747" y1="16.9528" x2="93.7931" y2="1.51774"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFE5A6" />
                    <stop offset="0.307692" stop-color="#E49C21" />
                    <stop offset="0.697115" stop-color="#FFE5A6" />
                    <stop offset="1" stop-color="#E49C21" />
                  </linearGradient>
                </defs>
              </svg>
              <p class="text-[13px] lg:text-[22px] font-bold">4.9/5 <span class="font-medium"> Rated.</span> <br>98%
                <span class="font-medium">Recommend.</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            class="font-crossfit px-0 lg:px-12 pt-[18px] lg:pt-[62px] text-[29px] lg:text-[51px] leading-[31px] lg:leading-[57px] justify-center items-center text-center lg:text-start">
            <p class="text-white">Feel Calm, Clear, and<br> Energized by Day. <br><span class="text-[#370F1E]">Sleep
                Peacefully All Night.</span> </p>
          </div>
          <div class="flex flex-col px-6 lg:px-12">
            <div class="flex pt-[24px] pb-[20px] lg:pb-[22px] gap-[5px] ">
              <svg class="lg:w-[30px] lg:h-[120px]" xmlns="http://www.w3.org/2000/svg" width="22" height="90"
                viewBox="0 0 19 81" fill="none">
                <path
                  d="M8.99362 48.8975C9.33579 47.7402 10.0805 46.9211 10.9963 46.3914C11.0517 46.3603 11.0416 46.2846 10.9762 46.2712C8.7068 45.7104 6.11032 46.6897 5.18445 49.0088C4.72151 50.1661 4.89763 51.4659 5.65745 52.4897C7.17709 54.5507 9.96478 54.9602 12.0178 53.9364C12.0732 53.9097 12.0631 53.834 12.0027 53.8162C10.9712 53.4913 10.0252 52.8503 9.38108 51.7953C8.84266 50.9095 8.70177 49.8679 8.98859 48.8975H8.99362Z"
                  stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
                <path
                  d="M9.71819 54.4927C12.3388 54.4927 14.4633 52.6134 14.4633 50.2951C14.4633 47.9769 12.3388 46.0975 9.71819 46.0975C7.09754 46.0975 4.97308 47.9769 4.97308 50.2951C4.97308 52.6134 7.09754 54.4927 9.71819 54.4927Z"
                  stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
                <path
                  d="M12.9286 44.3215C12.8581 44.0455 12.4958 43.9164 12.2291 44.0633C11.4995 44.4683 10.6441 44.6998 9.71819 44.6998C8.79232 44.6998 7.93689 44.4639 7.20726 44.0633C6.93553 43.9119 6.57827 44.0455 6.50782 44.3215C6.31661 45.0604 5.89392 45.7637 5.24481 46.3424C4.59065 46.921 3.80064 47.2905 2.96031 47.4596C2.64833 47.522 2.5024 47.8425 2.66846 48.0784C3.12636 48.7238 3.38802 49.4805 3.38802 50.2996C3.38802 51.1186 3.12133 51.8754 2.66846 52.5208C2.49737 52.7612 2.64833 53.0772 2.96031 53.1395C3.79561 53.3087 4.59065 53.6826 5.24481 54.2568C5.89896 54.831 6.31661 55.5343 6.50782 56.2777C6.57827 56.5537 6.94057 56.6828 7.20726 56.5359C7.93689 56.1308 8.79232 55.8993 9.71819 55.8993C10.6441 55.8993 11.4995 56.1353 12.2291 56.5359C12.5008 56.6872 12.8581 56.5537 12.9286 56.2777C13.1198 55.5388 13.5425 54.8355 14.1916 54.2568C14.8407 53.6781 15.6357 53.3087 16.4761 53.1395C16.7881 53.0772 16.934 52.7567 16.7679 52.5208C16.31 51.8754 16.0484 51.1186 16.0484 50.2996C16.0484 49.4805 16.3151 48.7238 16.7679 48.0784C16.939 47.838 16.7881 47.522 16.4761 47.4596C15.6408 47.2905 14.8457 46.9166 14.1916 46.3424C13.5374 45.7637 13.1198 45.0648 12.9286 44.3215Z"
                  stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
                <path
                  d="M7.79494 66L5.14311 74.5109C5.07769 74.7157 5.25381 74.916 5.49031 74.916H7.9308C8.1673 74.916 8.33839 75.1119 8.278 75.3166L7.09047 79.4074C6.99486 79.7368 7.46283 79.9505 7.71443 79.6923L14.2157 72.2319C14.417 72.0226 14.2509 71.7066 13.944 71.7066H11.3525C11.0808 71.7066 10.9047 71.4484 11.0355 71.2348L14.1452 66.4718C14.2761 66.2582 14.105 66 13.8282 66H7.79494Z"
                  stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
                <path
                  d="M7.30681 78.6684C4.56944 77.8716 2.59692 75.5925 2.59692 72.9039C2.59692 70.2153 4.63989 67.8605 7.45274 67.0994"
                  stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
                <path
                  d="M13.2496 67.8473C15.0963 68.9334 16.314 70.7941 16.314 72.904C16.314 76.2558 13.2446 78.9711 9.45551 78.9711C9.12844 78.9711 8.80639 78.9489 8.48938 78.9133"
                  stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
                <path
                  d="M11.5772 5.03735C11.5772 3.36365 10.7067 1.88581 9.38325 1C8.05985 1.88581 7.18933 3.36365 7.18933 5.03735C7.18933 6.71105 8.05985 8.18889 9.38325 9.0747C10.7067 8.18889 11.5772 6.71105 11.5772 5.03735Z"
                  stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
                <path
                  d="M7.2649 4.15601C6.13272 3.39929 4.759 3.13666 3.45573 3.36367C3.16891 4.89493 3.63688 6.53302 4.86467 7.71707C6.09246 8.90112 7.78822 9.35071 9.37831 9.07472"
                  stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
                <path
                  d="M11.4916 4.15161C12.6188 3.39934 13.9975 3.13671 15.2958 3.36373C15.5826 4.89499 15.1146 6.53307 13.8868 7.71713C12.659 8.90118 10.9633 9.35076 9.37317 9.07478"
                  stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
                <path
                  d="M4.27579 7.03601C2.9222 7.27193 1.75479 8.0242 1 9.07472C1.92084 10.3522 3.45055 11.1935 5.18657 11.1935C6.92258 11.1935 8.45229 10.3567 9.37313 9.07472"
                  stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
                <path
                  d="M14.4755 7.03601C15.8291 7.27193 16.9965 8.0242 17.7513 9.07472C16.8305 10.3522 15.3008 11.1935 13.5647 11.1935C11.8287 11.1935 10.299 10.3567 9.37817 9.07472"
                  stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
                <path
                  d="M8.88368 34.1788C12.6854 34.1788 15.7674 31.4525 15.7674 28.0894C15.7674 24.7263 12.6854 22 8.88368 22C5.08193 22 2 24.7263 2 28.0894C2 31.4525 5.08193 34.1788 8.88368 34.1788Z"
                  stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
                <path
                  d="M12.2551 28.0896C12.5016 28.0896 12.6878 28.281 12.6576 28.4947C12.4312 30.1595 10.831 31.4504 8.88366 31.4504C6.9363 31.4504 5.33615 30.1595 5.10971 28.4947C5.07952 28.281 5.27073 28.0896 5.51227 28.0896H12.25H12.2551Z"
                  stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
                <path
                  d="M8.11388 25.9706C7.81699 25.4988 7.25342 25.1738 6.59927 25.1738C5.94512 25.1738 5.38154 25.4988 5.08466 25.9706"
                  stroke="white" stroke-width="0.79845" stroke-miterlimit="10" stroke-linecap="round" />
                <path
                  d="M12.6879 25.9706C12.391 25.4988 11.8275 25.1738 11.1733 25.1738C10.5192 25.1738 9.95558 25.4988 9.65869 25.9706"
                  stroke="white" stroke-width="0.79845" stroke-miterlimit="10" stroke-linecap="round" />
              </svg>
              <ul
                class="text-[#370F1E] relative bottom-[3px] gap-[2px] text-[14px] lg:text-[23px] leading-[22px] lg:leading-[30px] font-bold flex flex-col">
                <li>
                  <p>Stress, Anxiety & Exhaustion Relief </p>
                </li>
                <li>
                  <p>Pain & Inflammation Reduction</p>
                </li>
                <li>
                  <p>Mood, Focus & Energy </p>
                </li>
                <li>
                  <p>Calm by Day, Rest by Night </p>
                </li>
              </ul>
            </div>
            <div class="">
              <ShopButton type="button" id="buy-button" :anchorId="anchorId" textColorClass="text-[#370F1E]"
                :showIcon="false"
                class="botao-shop font-bold !m-0 text-[18px] lg:text-[32px] w-full rounded-3xl text-center !h-[41px] lg:!h-[75px] !hover:bg-none !px-5 !pb-0 !bg-[#FFDC03] mt-[1.65rem]">
                Yes, I Want to Relax Now
              </ShopButton>
            </div>
          </div>
          <div class="px-6">
            <div
              class="w-[320px] lg:w-[500px] justify-self-center lg:mt-8 mt-[12px] flex flex-row items-center justify-between px-5">
              <div class="flex flex-row items-center gap-6 w-[200px] lg:w-[210px]">
                <svg class="lg:w-[60px] lg:h-[50px]" xmlns="http://www.w3.org/2000/svg" width="32" height="26"
                  viewBox="0 0 43 28" fill="none">
                  <path
                    d="M42.7333 11.5984C42.7333 10.2907 42.3212 9.0117 41.5351 7.97445C40.294 6.33815 38.3205 4.66138 36.7035 3.83336C36.182 3.56689 35.6039 3.43168 35.019 3.43168H31.7937V14.4259C31.7937 16.1491 29.8563 18.2255 28.1318 18.2255H11.678L12.9454 18.6716C15.0732 19.5904 16.412 21.4379 17.0145 23.6585L26.507 23.6407C26.9522 21.4409 28.4697 19.5332 30.5252 18.6716C34.5093 17.0018 38.8381 19.4661 39.712 23.6437C41.0088 23.6516 42.7343 23.9941 42.7343 22.2265V11.5984H42.7333ZM39.5949 11.5737H33.7945V5.98779H34.9419C37.512 5.98779 39.5949 8.09288 39.5949 10.6904V11.5737Z"
                    fill="#370F1E" />
                  <path
                    d="M8.94476 18.2749C6.38929 18.8957 4.20781 20.98 3.7635 23.6496C0.797899 23.6496 0.936561 23.773 0.936561 22.5186V18.2255H2.96083C3.88166 18.2621 4.80737 18.2423 5.73309 18.2255C6.49865 18.2117 7.26422 18.1999 8.02589 18.2255C8.3325 18.2354 8.63912 18.2512 8.94476 18.2749Z"
                    fill="#370F1E" />
                  <path
                    d="M28.5859 0.0643311H2.40423C1.59312 0.0643311 0.935584 0.728884 0.935584 1.54865V14.9292C0.935584 15.749 1.59312 16.4136 2.40423 16.4136H28.5859C29.397 16.4136 30.0546 15.749 30.0546 14.9292V1.54865C30.0546 0.728884 29.397 0.0643311 28.5859 0.0643311Z"
                    fill="#370F1E" />
                  <path
                    d="M10.3372 27.694C12.5333 27.694 14.3135 25.8948 14.3135 23.6753C14.3135 21.4558 12.5333 19.6566 10.3372 19.6566C8.14121 19.6566 6.36097 21.4558 6.36097 23.6753C6.36097 25.8948 8.14121 27.694 10.3372 27.694Z"
                    fill="#370F1E" />
                  <path
                    d="M33.1217 27.694C35.3177 27.694 37.098 25.8948 37.098 23.6753C37.098 21.4558 35.3177 19.6566 33.1217 19.6566C30.9257 19.6566 29.1454 21.4558 29.1454 23.6753C29.1454 25.8948 30.9257 27.694 33.1217 27.694Z"
                    fill="#370F1E" />
                </svg>
                <div>
                  <p class="font-DMSans text-[13px] lg:text-[23px] text-[#370F1E]">Free U.S. <br>Shipping</p>
                </div>
              </div>
              <div class="w-[1px] h-[42px] lg:h-[70px] bg-[#370F1E]"></div>

              <div class="flex flex-row items-center justify-end gap-6 w-[200px] lg:w-[240px]">
                <svg class="lg:w-[50px] lg:h-[65px]" xmlns="http://www.w3.org/2000/svg" width="22" height="33"
                  viewBox="0 0 33 48" fill="none">
                  <path
                    d="M32.5275 20.5256C32.473 13.2452 32.1232 10.8504 26.193 10.8504C20.2629 10.8504 19.8614 13.3988 19.8614 20.5256C19.8614 27.6524 20.2342 30.1761 26.193 30.1761C32.1519 30.1761 32.5791 27.8993 32.5275 20.5256ZM27.0676 25.6334C27.0676 26.4317 26.9472 26.931 26.193 26.931C25.4388 26.931 25.3184 26.418 25.3184 25.6334V15.533C25.3184 14.6058 25.3987 14.145 26.2188 14.145C27.039 14.145 27.0676 14.6058 27.0676 15.5083V25.6334Z"
                    fill="#370F1E" />
                  <path
                    d="M0.892345 17.2365L3.06884 15.832C3.88323 15.3273 4.07823 15.1737 4.95571 15.1737C6.23465 15.1737 6.55582 15.4425 6.55582 16.2902V28.9198C6.55582 29.7729 6.30921 30.1734 5.44033 30.1734H3.36994C2.57848 30.1734 2.36055 29.7537 2.36055 28.821V18.9209L1.01852 18.9428C0.513824 18.9538 0.298756 18.7096 0.298756 18.2351C0.287285 17.6617 0.513824 17.4779 0.889477 17.2393L0.892345 17.2365Z"
                    fill="#370F1E" />
                  <path
                    d="M22.3763 33.5722C22.0838 32.6148 22.5971 32.346 23.2509 32.346H25.5335C26.1557 32.346 26.3249 32.5325 26.4425 33.1964L27.2569 37.5279L27.3286 38.584C27.3286 38.6526 27.3573 38.6965 27.3917 38.6965H27.4519C27.5035 38.6965 27.515 38.6526 27.515 38.5895L27.601 37.5416L28.3695 33.2403C28.4957 32.5325 28.6505 32.3515 29.3904 32.3515H31.5267C32.2809 32.3515 32.7454 32.6423 32.4357 33.6216L29.4965 42.3339V46.0729C29.4965 46.9205 29.2757 47.321 28.3839 47.321H26.3278C25.5249 47.321 25.327 46.9013 25.327 45.9659V42.3147L22.3791 33.5777L22.3763 33.5722Z"
                    fill="#370F1E" />
                  <path
                    d="M7.26411 32.346H3.83735C2.50966 32.346 2.25445 32.7273 2.25445 33.7203V45.8315C2.25445 47.0275 2.58709 47.3155 3.86029 47.3155H7.39602C10.3439 47.3155 12.0989 46.8629 12.0989 43.0142V37.4675C12.0989 33.3884 11.0264 32.3487 7.26124 32.3487H7.26411V32.346ZM7.83189 42.7399C7.83189 44.5833 7.61109 44.8961 6.85978 44.8961H6.44112V34.7792H6.85118C7.56808 34.7792 7.83476 35.0398 7.83476 37.0478V42.7427L7.83189 42.7399Z"
                    fill="#370F1E" />
                  <path
                    d="M22.9182 45.9604L21.3353 33.7121C21.1805 32.4447 20.4808 32.346 19.6664 32.346H15.8382C15.0324 32.346 14.3442 32.4475 14.1692 33.7121L12.5519 45.9604C12.4344 46.8958 12.6523 47.3155 13.4495 47.3155H15.993C16.3687 47.3155 16.6726 47.0686 16.6784 46.6764L16.8734 44.3913H18.6054L18.7746 46.6764C18.7975 47.0522 19.0958 47.3155 19.4714 47.3155H22.0436C22.8466 47.3155 23.0444 46.8958 22.9211 45.9604H22.9182ZM17.0598 42.098L17.5702 36.2111L17.5903 35.3031C17.5989 35.1358 17.6734 35.1139 17.7251 35.1139H17.7652C17.8484 35.1139 17.9028 35.1578 17.9028 35.3031L17.9258 36.2111L18.4161 42.098H17.0598Z"
                    fill="#370F1E" />
                  <path
                    d="M13.4552 13.1273C17.0942 13.1273 18.4534 14.6552 18.4534 17.0445C18.4649 20.3994 17.4698 21.7436 15.7866 23.5102L13.2631 26.2342H17.6448C18.0892 26.2342 18.4477 26.5908 18.4477 27.027V29.4026C18.4477 29.8278 18.0892 30.1707 17.6448 30.1707H10.2493C9.00187 30.1707 8.30505 29.4026 8.30505 28.3108V27.208C8.30505 25.5648 9.21694 24.6349 10.8027 22.8518L12.8559 20.4762C13.6846 19.5216 14.1291 18.9017 14.1434 17.7193V16.7784C14.1434 16.238 14.0488 15.8951 13.4122 15.8951C12.7756 15.8951 12.6437 16.238 12.6437 16.7565L12.6322 17.456C12.6322 18.2241 12.2852 18.3283 11.6945 18.3283H9.07642C8.34519 18.3283 8.19894 17.9498 8.19894 16.9842V16.9156C8.21041 14.2273 10.1317 13.1245 13.4581 13.1245L13.4552 13.1273Z"
                    fill="#370F1E" />
                  <path
                    d="M2.25445 1.94605C2.25445 1.23282 2.52687 1.07098 3.51045 1.07098H4.29903C5.13063 1.07098 5.57224 1.10389 5.57224 1.94605V10.1783C5.57224 10.7873 5.6726 10.9739 6.10561 10.9739C6.53861 10.9739 6.65618 10.7956 6.65618 10.1783V1.94605C6.65618 1.12584 6.84258 1.07098 7.94373 1.07098H8.71511C9.71589 1.07098 9.97111 1.23282 9.97111 1.94605V9.97534C9.97111 12.3592 8.71511 13.0751 6.11995 13.0751C3.52478 13.0751 2.25445 12.3619 2.25445 9.97534V1.94605Z"
                    fill="#370F1E" />
                  <path
                    d="M11.4881 1.81438C11.4881 1.14504 11.7892 1.07098 12.5978 1.07098H14.7284C17.5817 1.04354 18.1724 2.07772 18.1638 4.81816C18.1638 7.5394 17.4211 8.45014 14.8431 8.45014H14.304V10.3045C14.304 10.8779 14.1463 11.1439 13.5556 11.1439H12.1648C11.6314 11.1439 11.4881 10.8614 11.4881 10.2332V1.81438ZM14.499 6.95236C15.0754 6.95236 15.2417 6.62043 15.2417 5.67129V3.87999C15.2417 3.02687 15.0467 2.70317 14.4933 2.70317H14.3069V6.9551H14.5019L14.499 6.95236Z"
                    fill="#370F1E" />
                  <path
                    d="M20.1826 2.65379V1.46874C20.1826 1.25477 20.3632 1.06823 20.5869 1.06823H25.2754C25.4991 1.06823 25.6797 1.25477 25.6797 1.46874V2.65379C25.6797 2.87325 25.4991 3.0543 25.2754 3.0543H24.1083V8.92745C24.1083 9.33893 23.9506 9.52821 23.552 9.52821H22.3189C21.9146 9.52821 21.7569 9.33618 21.7569 8.92745V3.0543H20.5898C20.3661 3.0543 20.1854 2.87599 20.1854 2.65379H20.1826Z"
                    fill="#370F1E" />
                  <path
                    d="M29.0233 0.917358C31.7991 0.917358 31.8278 2.09418 31.845 5.22964C31.845 8.20051 31.8823 9.53095 29.0233 9.53095C26.1643 9.53095 26.2303 8.37881 26.193 5.22964C26.193 2.26426 26.1873 0.917358 29.0233 0.917358ZM28.6276 7.50648C28.6276 7.85761 28.6649 8.08529 29.0233 8.08529C29.3818 8.08529 29.4133 7.86035 29.4133 7.50648V2.99395C29.4133 2.60442 29.4133 2.38496 29.0348 2.38496C28.6563 2.38496 28.6276 2.59619 28.6276 3.00492V7.50648Z"
                    fill="#370F1E" />
                </svg>
                <div>
                  <p class="font-DMSans text-[13px] lg:text-[23px] text-[#370F1E] ">Money-Back<br>Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
  <section class="bg-[#370F1E] relative">
    <div class="sm:hidden px-[30px] pt-[26px] pb-[36px]">
      <img src="/assets/why_exhausted.webp" loading="lazy" alt="exhausted-2">
    </div>

    <!-- <div class="px-8 flex flex-col sm:hidden pt-[27px] pb-8">

      <p class="text-center pb-[32px] text-white text-[32px] leading-[1] font-crossfit">Why You’re<br><span class="text-[#FFDC03]"> Exhausted by Day</span> <br>and Wired by Night.</p>
      <div class="bg-[#5C2841] p-3 px-[20px] rounded-2xl font-sans text-white text-[13px] leading-[1]">
        <div class="flex justify-between  pb-[10px] items-center border-b border-[#48152b]">
          <div class="relative flex items-center justify-center w-[72px] h-[72px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none" class="absolute inset-0">
              <circle cx="36" cy="36" r="36" transform="matrix(-1 0 0 1 72 0)" fill="url(#paint0_linear_44_292)"/>
              <defs>
                <linearGradient id="paint0_linear_44_292" x1="73.13" y1="-5.40001" x2="21.4564" y2="-18.8426" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#370F1E"/>
                  <stop offset="1" stop-color="#4C152A"/>
                </linearGradient>
              </defs>
            </svg>
            <img src="../assets/image/newPageD/mind.webp" alt="mind" loading="lazy" class="relative max-w-none z-10 w-20 h-20">
          </div>
          <p class="p-[15px]">Modern life keeps your nervous<br> system stuck in “fight-or-flight.”</p>
        </div>
        <div class="flex justify-between py-[10px] items-center border-b border-[#48152b]">
          <p class="">Deadlines, screens, and constant pressure push cortisol up when it <br> should fall, leaving you wired at<br> night and exhausted by day.</p>
          <div class="relative flex items-center justify-center w-[72px] h-[72px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none" class="absolute inset-0">
              <circle cx="36" cy="36" r="36" transform="matrix(-1 0 0 1 72 0)" fill="url(#paint0_linear_44_292)"/>
              <defs>
                <linearGradient id="paint0_linear_44_292" x1="73.13" y1="-5.40001" x2="21.4564" y2="-18.8426" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#370F1E"/>
                  <stop offset="1" stop-color="#4C152A"/>
                </linearGradient>
              </defs>
            </svg>
            <img src="../assets/image/newPageD/batery.webp" alt="mind" loading="lazy" class="relative max-w-none z-10 w-24 h-20">
          </div>          
        </div>
        <div class="flex justify-between  py-[10px] items-center border-b border-[#48152b]">
          <div class="relative flex items-center justify-center w-[72px] h-[72px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none" class="absolute inset-0">
              <circle cx="36" cy="36" r="36" transform="matrix(-1 0 0 1 72 0)" fill="url(#paint0_linear_44_292)"/>
              <defs>
                <linearGradient id="paint0_linear_44_292" x1="73.13" y1="-5.40001" x2="21.4564" y2="-18.8426" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#370F1E"/>
                  <stop offset="1" stop-color="#4C152A"/>
                </linearGradient>
              </defs>
            </svg>
            <img src="../assets/image/newPageD/ray.webp" alt="mind" loading="lazy" class="relative max-w-none z-10 w-20 h-16">
          </div>
          <p class="p-[15px] pr-2">Over time, this nonstop overdrive<br> steals your sleep, drains your <br> energy, and clouds your clarity.</p>
        </div>
        <div class="flex py-[10px] justify-between items-center">
          <p class="">Pills can sedate you, but they <br>don’t fix the real problem: a<br> nervous system out of balance.</p>
          <div class="relative flex items-center justify-center w-[72px] h-[72px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none" class="absolute inset-0">
              <circle cx="36" cy="36" r="36" transform="matrix(-1 0 0 1 72 0)" fill="url(#paint0_linear_44_292)"/>
              <defs>
                <linearGradient id="paint0_linear_44_292" x1="73.13" y1="-5.40001" x2="21.4564" y2="-18.8426" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#370F1E"/>
                  <stop offset="1" stop-color="#4C152A"/>
                </linearGradient>
              </defs>
            </svg>
            <img src="../assets/image/newPageD/pills.webp" alt="mind" loading="lazy" class="relative max-w-none z-10 w-20 h-16">
          </div>          
        </div>
      </div>
      <img src="../assets/image/newPageD/exhausted.webp" class="py-9" loading="lazy" alt="exhausted">
      <img src="../assets/image/newPageD/statistics.webp" loading="lazy" alt="exhausted">
      </img>
    </div> -->
    <div class="hidden px-40 py-20 sm:flex">
      <img src="/assets/why_exhausted_desktop.webp" loading="lazy" alt="exhausted-2">
    </div>
  </section>
  <section class="bg-[#FFFAF0] pb-[12px]">
    <div class="flex flex-col">
      <div class="flex relative z-30 bg-[#FFDC03] gap-6 lg:gap-10 pt-[20px] pl-16 lg:px-40 w-full">
        <img class="lg:hidden" src="/assets/pills_womam.webp" width="120" height="138" loading="lazy" alt="exhausted">
        <img class="hidden lg:block" src="/assets/pills_womam_desk.webp" width="366" height="422" loading="lazy"
          alt="exhausted"></img>
        <div class="flex flex-col text-[#370F1E] gap-[10px] lg:gap-[20px]">
          <p class="font-crossfit leading-[1] lg:text-[76px] text-[26px]">But here’s the <br>good news:</p>
          <p class="font-gelasio italic leading-[1.3] lg:text-[40px] text-[14px]">You don’t have to stay in
            <br>fight-or-flight. With the right<br> natural support, your body <br>can return to balance.
          </p>
        </div>
        <div class="pointer-events-none -z-10 absolute bottom-[-55px] lg:bottom-[-120px] left-0 w-full h-32 lg:h-80
                bg-[#FFDC03]
                [clip-path:polygon(0_0,100%_0,100%_65%,50%_95%,0_65%)]">
        </div>
      </div>
      <div class="pt-[74px] lg:pt-[180px]">
        <p class="font-crossfit text-center leading-[1] text-[#370F1E] text-[32px] lg:text-[60px]">
          Break the Cycle of Stress,<br>Anxiety & Exhaustion.</p>
      </div>
      <div class="flex justify-center">
        <img class="w-[230px] lg:w-[500px] " src="/assets/bottle_relax1.webp" width="227" height="236" loading="lazy" alt="bottle">
        <!-- <img class="hidden lg:block" src="/assets/bottle_relax1.webp" width="688" height="793" loading="lazy" alt="bottle"> -->
        <div
          class="flex-col relative right-6 self-center w-[150px] lg:w-[400px] text-[14px] pt-0 lg:pt-[60px] lg:text-[40px] leading-[1.1] lg:leading-[1.3] text-[#370F1E] italic font-gelasio flex">
          <img class="lg:w-[150px]" src="/assets/selo_rated.webp" width="85" height="85" loading="lazy" alt="selo">
          <p class="border-b font-semibold py-2  border-[#370F1E]">Restores Nervous<br> System Balance.</p>
          <p class="border-b font-semibold py-2 border-[#370F1E]">100% plant-based.</p>
          <p class="font-semibold py-2">No sedation. <br>No dependency.<br>No fog.</p>
        </div>
      </div>
      <div class="px-8 lg:px-40">
        <img class="lg:hidden block" src="/assets/box41.webp" alt="blocks">
        <img class="hidden lg:block" src="/assets/box4_desk1.webp" alt="blocks">
      </div>
    </div>

  </section>
  <section class="ingredients relative z-10 bg-[#FFFAF0]">
    <div class="font-crossfit text-[#370F1E] text-center ">
      <p class="lg:hidden leading-[1] block text-[32px]">Five Powerful Plants,<br><span class="text-[#4DBCB6]"> Proven
          to Restore <br> Calm and Clarity.</span></p>
      <p class="hidden leading-[1] text-[60px] lg:block">Five Powerful Plants,<br><span class="text-[#4DBCB6]"> Proven
          to Restore Calm and Clarity.</span></p>
    </div>
    <div class="carrossel-ingredients">
      <LazyIsland>
        <IngredientsCarousel />
      </LazyIsland>
    </div>
  </section>
  <DepoimentsD />
  <section class="bg-[#FFFAF0] px-12 lg:px-40 pb-[20px] pt-[30px]">
    <div class="font-crossfit text-[32px] lg:text-[70px] text-center text-[#370F1E]">
      <p class="lg:hidden leading-[1]">What Customers<br>Experience With <br><span
          class="text-[#4DBCB6] leading-[40px]">Super Relax:</span></p>
      <p class="hidden lg:block leading-[1]">What Customers Experience With <br><span class="text-[#4DBCB6]">Super
          Relax:</span></p>
    </div>
    <div class="flex flex-col pt-[14px]">
      <div class="flex items-center lg:self-center pb-[2px] border-b border-[#370F1E] gap-3 text-[#370F1E]">
        <span class="font-crossfit text-[43px] lg:text-[100px]">100% </span>
        <span class="font-sans font-bold leading-[1.1] text-[13px] lg:text-[36px]">of users reported reduced<br>anxiety
          and greater
          relaxation.</span>
      </div>
      <div class="flex pl-[17px] pt-[5px] lg:self-center items-center border-b border-[#370F1E] gap-3 text-[#370F1E]">
        <span class="font-crossfit text-[43px] lg:text-[100px]">75% </span>
        <span class="font-sans font-bold leading-[1.1] text-[13px] lg:text-[36px]">of users reported better<br> sleep
          quality.</span>
      </div>
      <div class="flex pl-[35px] pt-[5px] lg:self-center items-center gap-3 text-[#370F1E]">
        <span class="font-crossfit text-[43px] lg:text-[100px]">0% </span>
        <span class="font-sans font-bold leading-[1.1] text-[13px] lg:text-[36px]">experienced grogginess <br> or
          unwanted side
          effects.</span>
      </div>
    </div>
  </section>
  <ShopNowD id="shop-now-d" />

  <section class="bg-[#370F1E] px-10 lg:px-40 py-8">
    <div class="lg:hidden">
      <img src="/assets/tabela_relax.webp" alt="table" loading="lazy">
    </div>
    <div class="hidden lg:block">
      <p class="font-crossfit text-center pt-10 pb-12 text-[60px] text-white">Why everyone is <span
          class="text-[#4DBCB6]"> switching to Super Relax.</span></p>
      <img src="/assets/tabela_relax_desk.webp" alt="table" loading="lazy">
      <img class="pt-10" src="/assets/selos_table.webp" alt="table" loading="lazy">
    </div>
  </section>
  <section class="bg-[#FFDC03] px-[40px] lg:px-40 pb-[42px]">
    <div class="justify-self-center max-w-[950px]">
      <img class="justify-self-center lg:h-[700px]" src="/assets/superbottleNew.webp" alt="" loading="lazy">
      <div>
        <p
          class="text-center leading-[1] lg:leading-[0] pb-0 lg:pb-[60px] text-[44px] lg:text-[72px] font-crossfit text-[#370F1E]">
          Take Back Your Days and Nights.</p>
      </div>
      <div class="pt-[30px]">
        <ShopButton type="button" id="buy-button" :anchorId="anchorId" iconColorClass="text-[#FFDC03]" textColorClass="text-[#FFDC03]" :showIcon="true"
          class="botao-shop font-bold !gap-2 !m-0 text-[18px] lg:text-[45px] w-full rounded-3xl text-center lg:!h-[124px] !h-[60px] !hover:bg-none !px-5 !pb-0 !bg-[#370F1E] mt-[1.65rem]">
          Get Calm, Clarity & Rest Now
        </ShopButton>
      </div>
    </div>

  </section>
  <div class="bg-[#fffaf0] w-full py-[45px] flex flex-col">
    <div class="px-0 sm:px-10 flex flex-col gap-0 sm:gap-[40px]">
      <div class="w-full max-w-[330px] sm:max-w-[950px] mx-auto">
        <h1
          class="text-center w-full sm:hidden pb-[30px] leading-none text-[#370F1E] text-[32px] font-bold font-crossfit">
          Frequently asked <br>
          questions:</h1>
        <h1
          class="text-start hidden w-full sm:block pb-[30px] leading-none text-[#370F1E] text-[52px] font-bold font-crossfit">
          Frequently asked questions:</h1>
        <LazyIsland>
          <div class="faq-wrap">
            <FAQ />
          </div>
        </LazyIsland>
      </div>
    </div>
  </div>
  <div class="bg-[#350e1d] w-full">
    <div class="max-w-[330px] sm:max-w-[950px] mx-auto">
      <SuperFooter2 />
    </div>
  </div>
  <LazyIsland>
    <NotificationDisplay2 />
  </LazyIsland>
  <!-- <BannerModal /> -->
  <!-- <BannerRetention v-model:open="modalOpen" title="WAIT!" subtitle="DON'T LEAVE" buttonText="SLEEP20"
    :disable-backdrop-close="true" :disable-esc="false">
    <template #message>
      <p>
        <span class="text-[#fff] sm:text-[31px] text-[16px]">Get <span class="text-[#FFDC03] sm:text-[24px]">20% OFF
          </span> to shop now <br> — today only.</span>
      </p>
    </template>
</BannerRetention> -->
</template>
<style>
html {
  scroll-behavior: smooth;
}

.scroll-target {
  height: 0;
}

#id-shop-now,
#id-shop-now-desk {
  scroll-margin-top: 80px;
}
</style>