<script setup lang="ts">
import '../styles/superSleep.scss';
import SuperHeader2 from '../components/SuperHeader2.vue';
import ShopButton from '../components/ShopButton.vue';
import { useSeo } from '../composables/useSeo';
import { defineAsyncComponent, computed } from 'vue'
import LazyIsland from '@/components/LazyIsland.vue'
import ShopNowD from '../components/newPageD/ShopNowD.vue';
import DepoimentsD from '../components/newPageD/DepoimentsD.vue';
import { ref, onMounted, reactive, onBeforeUnmount } from 'vue'
import SuperFooter2 from '../components/SuperFooter2.vue';
import CarouselImage from '../components/CarouselImage.vue';
import { detectUserCurrency } from '../composables/useCountry2.js'
import FAQ from '../components/Faq.vue';

const IngredientsCarousel = defineAsyncComponent(() => import('../components/IngredientsCarousel.vue'))
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


onMounted(async () => {
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
const faqItems = [
  {
    question: 'What is Super Relax?',
    answer: `Super Relax is a natural, plant-based supplement that helps calm overactive nerves and restore balance to the nervous system. It supports relief from stress and anxiety during the day, eases discomfort linked to nerve pain and inflammation, and promotes deep, restorative sleep at night.`,
    open: true
  },
  {
    question: 'What are the ingredients?',
    answer: `The formula combines 5 science-backed botanicals:

• Passionflower – Calms a restless mind so you can slow down and find peace.
• California Poppy – Relaxes the body and supports restorative sleep without sedation.
• Corydalis – Helps ease physical tension and nighttime nerve discomfort.
• Prickly Pear – Supports healthy stress response for deeper rest and recovery.
• Marshmallow Root – Soothes irritation and promotes physical comfort through the night.`,
    open: false
  },
  {
    question: 'Is Super Relax safe?',
    answer: 'Yes. 100% natural, non-habit forming, manufactured in FDA-registered, GMP-compliant labs in the USA.',
    open: false
  },
  {
    question: 'How do I take it?',
    answer: `Take 2 capsules with water every evening before bedtime to help calm nerves and promote restful sleep.`,
    open: false
  },
  {
    question: 'How long does shipping take?',
    answer: `Orders are processed within 24 hours and typically arrive in 5-7 business days within the U.S. Please note that delivery times may vary depending on your location and local carrier delays. Once your order ships, you’ll receive a confirmation email with tracking information.`,
    open: false
  },
  {
    question: 'How can I reach you if I have questions?',
    answer: 'You can always reach us at superhelp@superment.co. Our team is here to answer your questions and support you every step of the way.',
    open: false
  },
  {
    question: 'What if I’m not satisfied?',
    answer: 'We stand by our formula. Every order is protected by our Money-Back Guarantee: 30 days for a 1-bottle pack, 60 days for a 3-bottle pack, and 120 days for a 6-bottle pack. If you’re not happy with your results, simply contact us at superhelp@superment.co and we’ll refund your purchase — no hassle, no risk. For safety reasons, refunds apply to unopened bottles.',
    open: false
  },
  {
    question: 'Are there any side effects?',
    answer: 'Super Relax is well-tolerated and free from heavy drugs or harsh side effects. Still, if you have a medical condition or take prescription medications, check with your doctor before starting any supplement.',
    open: false
  }
]

</script>

<template>
  <SuperHeader2 :show-redirect="false" :items="[
    'Save Up To 58%',
    'Free Shipping',
    'Up to 120-Day Money-Back Guarantee',
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
    <div class="relative z-0 min-h-[624px] lg:min-h-[820px]">
      <picture class="pointer-events-none select-none">
        <source 
        media="(max-width: 1024px)"
        srcset="/assets/hero_relax_mobile2.webp"
        type="image/webp">
        <img id="hero-lcp" 
        src="/assets/desk_hero_relax2.webp" 
        width="1280" height="800" alt="relax-hero"
          loading="eager" 
          fetchpriority="high" 
          decoding="async"
          class="absolute inset-0 z-0 w-full h-full object-cover" />
      </picture>

      <div class="relative w-full lg:w-[750px] pl-0 lg:pl-[11.5rem] pb-[25px] lg:pb-[70px]">
        <div class="px-[50px]">
          <div class="text-[#370F1E] gap-0 lg:gap-[20px] flex flex-col">
            <h1 class="italic block sm:hidden font-gelasio mt-[38px] text-[13px] leading-[15px] font-bold">A Powerful
              Plant-Based
              <br>Formula <span class="font-medium">that Restores<br> Nervous System Balance.</span>

            </h1>
            <h1 class="hidden sm:block italic font-gelasio mt-[75px] text-[24px] leading-[30px] font-bold">
              A Powerful Plant-Based Formula 
              <br><span class="font-medium">that Restores Nervous System Balance.</span>
            </h1>
            <div class="font-gelasio mt-[150px] lg:mt-[0px]">
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

              <p class="text-[13px] md:text-[22px] font-bold">4.9/5 <span class="font-medium"> Rated.</span> <br>98%
                <span class="font-medium">Recommend.</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            class="font-crossfit px-0 md:pl-12 pt-[18px] md:pt-[62px] text-[29px] md:text-[50px] leading-[31px] md:leading-[57px] justify-center items-center text-center md:text-start">
            <p class="text-white">Feel Calm, Clear, and<br> Energized by Day. <br><span class="text-[#370F1E]">
              Sleep Peacefully All Night.</span> </p>
          </div>
          <div class="flex flex-col px-[50px] lg:pl-12 lg:pr-0">
            <div class="flex pt-[24px] pb-[0px] lg:pb-[22px] gap-[5px] ">
              <ul
                class="text-[#370F1E] relative bottom-[3px] gap-[4px] text-[14px] md:text-[18px] lg:text-[23px] leading-[22px] lg:leading-[30px] font-bold flex flex-col">
                <li class="flex gap-2 items-center">
                  <svg class="lg:w-[28px] lg:h-[17px]" xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 12" fill="none">
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
                  </svg>

                  <p>Stress, Anxiety & Exhaustion Relief </p>
                </li>
                <li class="flex gap-3 items-center">
                  <svg class="lg:w-[23px] lg:h-[20px]" xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                    <path
                      d="M7.88368 13.1788C11.6854 13.1788 14.7674 10.4525 14.7674 7.08941C14.7674 3.72632 11.6854 1 7.88368 1C4.08193 1 1 3.72632 1 7.08941C1 10.4525 4.08193 13.1788 7.88368 13.1788Z"
                      stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
                    <path
                      d="M11.2551 7.0896C11.5016 7.0896 11.6878 7.28101 11.6576 7.49467C11.4312 9.15947 9.83102 10.4504 7.88366 10.4504C5.9363 10.4504 4.33615 9.15947 4.10971 7.49467C4.07952 7.28101 4.27073 7.0896 4.51227 7.0896H11.25H11.2551Z"
                      stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
                    <path
                      d="M7.11388 4.97062C6.81699 4.49878 6.25342 4.17383 5.59927 4.17383C4.94512 4.17383 4.38154 4.49878 4.08466 4.97062"
                      stroke="white" stroke-width="0.79845" stroke-miterlimit="10" stroke-linecap="round" />
                    <path
                      d="M11.6879 4.97062C11.391 4.49878 10.8275 4.17383 10.1733 4.17383C9.51915 4.17383 8.95558 4.49878 8.65869 4.97062"
                      stroke="white" stroke-width="0.79845" stroke-miterlimit="10" stroke-linecap="round" />
                  </svg>
                  <p>Nerve Pain & Inflammation Reduction</p>
                </li>
                <li class="flex gap-3  items-center">
                  <svg class="lg:w-[23px] lg:h-[21px]" xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                    <path
                      d="M6.99362 5.89752C7.33579 4.74017 8.08052 3.92113 8.99633 3.39142C9.05168 3.36026 9.04162 3.28459 8.9762 3.27124C6.7068 2.71037 4.11032 3.68966 3.18445 6.0088C2.72151 7.16614 2.89763 8.46593 3.65745 9.48974C5.17709 11.5507 7.96478 11.9602 10.0178 10.9364C10.0732 10.9097 10.0631 10.834 10.0027 10.8162C8.97117 10.4913 8.02517 9.85029 7.38108 8.79533C6.84266 7.90952 6.70177 6.86791 6.98859 5.89752H6.99362Z"
                      stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
                    <path
                      d="M7.71819 11.4927C10.3388 11.4927 12.4633 9.6134 12.4633 7.29513C12.4633 4.97686 10.3388 3.09753 7.71819 3.09753C5.09754 3.09753 2.97308 4.97686 2.97308 7.29513C2.97308 9.6134 5.09754 11.4927 7.71819 11.4927Z"
                      stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
                    <path
                      d="M10.9286 1.32145C10.8581 1.04547 10.4958 0.916385 10.2291 1.06328C9.49949 1.46835 8.64407 1.69982 7.71819 1.69982C6.79232 1.69982 5.93689 1.4639 5.20726 1.06328C4.93553 0.911934 4.57827 1.04547 4.50782 1.32145C4.31661 2.06037 3.89392 2.76368 3.24481 3.34236C2.59065 3.92103 1.80064 4.29049 0.960308 4.45964C0.648329 4.52196 0.502403 4.84245 0.668457 5.07837C1.12636 5.72381 1.38802 6.48054 1.38802 7.29958C1.38802 8.11863 1.12133 8.87535 0.668457 9.52079C0.497371 9.76116 0.648329 10.0772 0.960308 10.1395C1.79561 10.3087 2.59065 10.6826 3.24481 11.2568C3.89896 11.831 4.31661 12.5343 4.50782 13.2777C4.57827 13.5537 4.94057 13.6828 5.20726 13.5359C5.93689 13.1308 6.79232 12.8993 7.71819 12.8993C8.64407 12.8993 9.49949 13.1353 10.2291 13.5359C10.5008 13.6872 10.8581 13.5537 10.9286 13.2777C11.1198 12.5388 11.5425 11.8355 12.1916 11.2568C12.8407 10.6781 13.6357 10.3087 14.4761 10.1395C14.7881 10.0772 14.934 9.75671 14.7679 9.52079C14.31 8.87535 14.0484 8.11863 14.0484 7.29958C14.0484 6.48054 14.3151 5.72381 14.7679 5.07837C14.939 4.838 14.7881 4.52196 14.4761 4.45964C13.6408 4.29049 12.8457 3.91658 12.1916 3.34236C11.5374 2.76368 11.1198 2.06483 10.9286 1.32145Z"
                      stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
                  </svg>
                  <p>Mood, Focus & Energy </p>
                </li>
              </ul>
            </div>
            <div class="pt-[22px]">
              <ShopButton type="button" id="buy-button" :anchorId="anchorId" textColorClass="text-[#370F1E]"
                :showIcon="false"
                class="botao-shop font-bold !m-0 text-[18px] md:text-[24px] lg:text-[32px] w-full rounded-3xl text-center !h-[41px] md:!h-[58px] lg:!h-[75px] !hover:bg-none !px-5 !pb-0 !bg-[#FFDC03] mt-[1.65rem] md:max-w-[540px] ">
                Yes, I Want to Relax Now
              </ShopButton>
            </div>
          </div>
          <div class="px-[50px] lg:pr-0 flex justify-center md:justify-start lg:justify-center">
            <div
              class="w-[260px] md:w-[540px] lg:w-[450px] gap-[11px] lg:mt-8 mt-[12px] flex flex-row justify-betwween md:justify-start justify-between">
              <div class="flex flex-row items-center gap-4 w-[120px] lg:w-[210px]">
                <svg class="lg:w-[59px] lg:h-[37px]" xmlns="http://www.w3.org/2000/svg" width="38" height="30"
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
                  <p class="font-DMSans text-[13px] md:text-[23px] text-[#370F1E]">Free U.S. <br>Shipping</p>
                </div>
              </div>
              <div class="w-[1px] h-[42px] md:h-[70px] bg-[#370F1E]"></div>

              <div class="flex flex-row items-center justify-end gap-[14px] w-[120px] md:w-[270px] lg:w-[240px]">
                <svg class="lg:w-[43px] lg:h-[61px]" xmlns="http://www.w3.org/2000/svg"
                  width="25" height="43" viewBox="0 0 33 48" fill="none">
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
                  <p class="font-DMSans text-[13px] md:text-[23px] text-[#370F1E] ">Money-Back<br>Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
  <section class="bg-[#370F1E] relative">
    <div class="px-[40px] sm:px-0 lg:max-w-[975px] lg:justify-self-center pt-[26px] lg:pt-[90px] pb-[36px]">
      <h1
        class="pb-[35px] lg:pb-[80px] font-crossfit text-center px-[30px] leading-[1] text-[32px] lg:text-[60px] text-[#fff]">
        Why You’re <span class="text-[#FFDC03]">Exhausted by Day</span><br>and Wired by Night.
      </h1>
      <img src="/assets/why_exhausted1.webp" class="lg:hidden" loading="lazy" alt="exhausted-2">
      <img src="/assets/why_exhausted_desk.webp" class="hidden lg:flex mb-[50px]" loading="lazy" alt="exhausted-2">
      <div>
        <CarouselImage />
      </div>
      <div class="pt-[26px] lg:pt-[80px] pb-[36px]">
        <img src="/assets/data_mobile.webp" class="lg:hidden" loading="lazy" alt="data-2">
        <img src="/assets/data_desk_relax.webp" class="hidden lg:flex" loading="lazy" alt="data-2">
      </div>
    </div>
  </section>
  <section class="bg-[#FFFAF0] pb-[12px]">
    <div class="flex flex-col">
      <div class="flex relative z-30 bg-[#FFDC03] justify-center gap-6 lg:gap-16 pt-[20px] lg:pt-[45px] pl-0 lg:px-40 w-full">
        <img class="lg:hidden w-[120px] h-[138px] md:w-[240px] md:h-[280px]" src="/assets/pills_womam.webp"
          loading="lazy" alt="exhausted">
        <img class="hidden lg:block" src="/assets/pills_womam_desk.webp" width="366" height="422" loading="lazy"
          alt="exhausted"></img>
        <div class="flex flex-col text-[#370F1E] lg:self-center gap-[10px] lg:gap-[20px]">
          <p class="font-crossfit leading-[1] lg:text-[76px] text-[26px] md:text-[50px]">But here’s the <br>good news:
          </p>
          <p class="font-gelasio italic leading-[1.3] lg:text-[40px] text-[14px] md:text-[26px]">You don’t have to stay
            in
            <br>fight-or-flight. With the right<br> natural support, your body <br>can return to balance.
          </p>
        </div>
        <div class="pointer-events-none -z-10 absolute bottom-[-55px] lg:bottom-[-120px] left-0 w-full h-32 lg:h-80
                bg-[#FFDC03]
                [clip-path:polygon(0_0,100%_0,100%_65%,50%_95%,0_65%)]">
        </div>
      </div>
      <div class="pt-[74px] md:pt-[180px]">
        <p class="font-crossfit text-center leading-[1] text-[#370F1E] text-[32px] md:text-[60px]">
          Break the Cycle of Stress,<br>Anxiety & Exhaustion.</p>
      </div>
      <div class="flex justify-center pt-[20px] lg:pt-[40px]">
        <img class="w-[230px] md:w-[500px]" src="/assets/bottleRelax.webp" width="227" height="236" loading="lazy"
          alt="bottle">
        <!-- <img class="hidden md:block" src="/assets/bottle_relax1.webp" width="688" height="793" loading="lazy" alt="bottle"> -->
        <div
          class="flex-col relative right-6 w-[150px] md:w-[400px] text-[14px] pt-0 md:pt-[40px] md:text-[30px] leading-[1.1] md:leading-[1.3] text-[#370F1E] italic font-gelasio flex">
          <img class="md:w-[150px]" src="/assets/selo_rated.webp" width="85" height="85" loading="lazy" alt="selo">
          <p class="border-b font-semibold py-2  border-[#370F1E]">Restores Nervous<br> System Balance.</p>
          <p class="border-b font-semibold py-2 border-[#370F1E]">100% plant-based.</p>
          <p class="font-semibold py-2">No sedation. <br>No dependency.<br>No fog.</p>
        </div>
      </div>
      <div class="px-8 md:px-[230px] lg:pt-[30px]">
        <img class="md:hidden block" src="/assets/box41.webp" alt="blocks">
        <img class="hidden md:block" src="/assets/box4_desk1.webp" alt="blocks">
      </div>
    </div>

  </section>
  <section class="relative z-10 bg-[#FFFAF0]">
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
  <DepoimentsD subtitle="4.9/5 (460+ Reviews) | 98% Recommend" />
  <section class="bg-[#FFFAF0] xs:px-12 justify-items-center lg:px-40 pb-[20px] pt-[28px] lg:pt-[94px]">
    <div class="font-crossfit text-[32px] md:text-[50px] lg:text-[70px] text-center text-[#370F1E]">
      <p class="md:hidden leading-[34.7px]">What Customers<br>Experience With <br><span class="text-[#4DBCB6]">Super
          Relax:</span></p>
      <p class="hidden md:block leading-[1]">What Customers Experience With <br><span class="text-[#4DBCB6]">Super
          Relax:</span></p>
    </div>
    <div class="flex flex-col pt-[14px] lg:max-w-[938px]">
      <div class="flex items-center w-full lg:self-center pt-[5px] lg:pt-[44px] pb-[11px] lg:pb-[35px] gap-[16px] lg:gap-[96px] text-[#370F1E] lg:px-[45px]">
        <span class="font-crossfit text-[43px] md:text-[70px] lg:text-[100px] leading-none">100% </span>
        <span class="font-sans font-bold leading-[1.1] text-[13px] md:text-[24px] lg:text-[36px]">
          of users reported reduced<br>anxiety and greater relaxation.</span>
      </div>
      <div class="w-full h-[1px] lg:h-[2px] bg-[#370F1E]"></div>
      <div class="flex items-center w-full pt-[16px] pb-[12px] lg:pt-[44px] lg:pb-[30px] gap-[16px]  lg:gap-[99px] pl-[15px] lg:pl-[83px] text-[#370F1E]">
        <span class="font-crossfit text-[43px] md:text-[70px] lg:text-[100px] leading-none">75% </span>
        <span class="font-sans font-bold leading-[1.1] text-[13px] md:text-[24px] lg:text-[36px]">
          of users reported better<br> sleep quality.</span>
      </div>
      <div class="w-full h-[1px] lg:h-[2px] bg-[#370F1E]"></div>
      <div class="flex  items-center justify-center w-full pt-[14px] lg:pt-[40px] lg:pb-[66px] pb-[7px] gap-[16px] lg:gap-[94px] text-[#370F1E]">
        <span class="font-crossfit text-[43px] md:text-[70px] lg:text-[100px] leading-none">0% </span>
        <span class="font-sans font-bold leading-[1.1] text-[13px] md:text-[24px] lg:text-[36px]">
          experienced grogginess <br> or unwanted side effects.</span>
      </div>
    </div>
  </section>
  <ShopNowD id="shop-now-d"  />

  <section class="bg-[#370F1E] px-8 lg:px-40 py-8">
    <div class="lg:hidden">
      <img src="/assets/group_4555.webp" alt="table" loading="lazy">
    </div>
    <div class="hidden lg:block justify-items-center">
      <p class="font-crossfit text-center pt-10 pb-12 text-[60px] text-white">Why everyone is <span
          class="text-[#4DBCB6]"> switching to Super Relax.</span></p>
      <img src="/assets/tabela_relax_nerve.webp" alt="table" loading="lazy">
      <img class="pt-10 max-w-[1064px]" src="/assets/selos_table.webp" alt="table" loading="lazy">
    </div>
  </section>
  <section class="bg-[#FFDC03] px-[40px] lg:px-40 pb-[42px] lg:pb-[90px]">
    <div class="justify-self-center max-w-[950px]">
      <img class="justify-self-center lg:hidden h-auto" src="/assets/super_nerve.webp" alt="" loading="lazy">
      <img class="justify-self-center hidden lg:block" src="/assets/super_nerve_desk.webp" alt="" loading="lazy">
      <div>
        <p
          class="text-center leading-[1] lg:leading-[0] px-[35px] lg:px-0 pb-0 lg:pb-[60px] lg:pt-[36px] text-[34px] lg:text-[72px] font-crossfit text-[#370F1E]">
          Take Back Your Days and Nights.</p>
      </div>
      <div class="pt-[30px] flex flex-col items-center">
        <ShopButton type="button" id="buy-button" :anchorId="anchorId" :show-icon="false"
          class="rounded-3xl text-center !m-0 lg:!h-[124px] !h-[60px] !hover:bg-none !pb-0 !bg-[#370F1E] mt-[1.65rem] w-full lg:w-[918px]">
          <div class="flex flex-row items-center justify-center gap-2 lg:gap-6">
            <svg class="block lg:hidden" width="21" height="21" viewBox="0 0 21 21" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_520_19)">
                <path
                  d="M0.542581 1.23025C0.242888 1.23025 0 0.954885 0 0.615124C0 0.275362 0.242888 0 0.542581 0H3.36191C3.62308 0 3.84116 0.209483 3.89274 0.487806L4.31584 2.27914H20.2302C20.5299 2.27914 20.7728 2.5545 20.7728 2.89427C20.7728 2.94164 20.7683 2.98753 20.7591 3.03195L20.0644 7.62798C20.0618 7.65093 20.0585 7.67313 20.054 7.69534L19.3547 12.3232C19.3096 12.623 19.0804 12.8347 18.8206 12.834H6.81067L7.2638 14.7504H18.2427C18.5424 14.7504 18.7853 15.0258 18.7853 15.3655C18.7853 15.7053 18.5424 15.9806 18.2427 15.9806H6.84788C6.60826 15.9806 6.38953 15.7985 6.32424 15.5239L5.58839 12.4106C5.58251 12.3898 5.57729 12.3684 5.57337 12.3462L4.93351 9.63916L4.48625 7.74716C4.48038 7.72643 4.47515 7.7057 4.47124 7.68424L3.37628 3.05193V3.05045L2.946 1.22877H0.542581V1.23025ZM16.3186 17.7194C16.0959 17.7194 15.8955 17.8216 15.7499 17.9866C15.6043 18.1517 15.5142 18.3797 15.5142 18.6314C15.5142 18.883 15.6043 19.111 15.7499 19.2761C15.8955 19.4412 16.0966 19.5433 16.3186 19.5433C16.5406 19.5433 16.7417 19.4412 16.8873 19.2761C17.0329 19.111 17.123 18.883 17.123 18.6314C17.123 18.3797 17.0329 18.1517 16.8873 17.9866C16.7417 17.8216 16.5406 17.7194 16.3186 17.7194ZM14.9827 17.1161C15.3248 16.7283 15.7969 16.4884 16.3186 16.4884C16.8403 16.4884 17.3123 16.7283 17.6545 17.1161C17.9966 17.504 18.2081 18.0392 18.2081 18.6306C18.2081 19.2221 17.9966 19.7572 17.6545 20.1451C17.3123 20.533 16.8403 20.7728 16.3186 20.7728C15.7969 20.7728 15.3248 20.533 14.9827 20.1451C14.6406 19.7572 14.429 19.2221 14.429 18.6306C14.429 18.0392 14.6406 17.504 14.9827 17.1161ZM9.23825 17.7194C9.01625 17.7194 8.81515 17.8216 8.66955 17.9866C8.5246 18.1517 8.43384 18.3797 8.43384 18.6314C8.43384 18.883 8.52394 19.111 8.66955 19.2761C8.81515 19.4412 9.01625 19.5433 9.23825 19.5433C9.46024 19.5433 9.66134 19.4412 9.80694 19.2761C9.95255 19.111 10.0426 18.883 10.0426 18.6314C10.0426 18.3797 9.95255 18.1517 9.80694 17.9866C9.66134 17.8216 9.46024 17.7194 9.23825 17.7194ZM7.90236 17.1161C8.24449 16.7283 8.71656 16.4884 9.23825 16.4884C9.75993 16.4884 10.232 16.7283 10.5741 17.1161C10.9163 17.504 11.1278 18.0392 11.1278 18.6306C11.1278 19.2221 10.9163 19.7572 10.5741 20.1451C10.232 20.533 9.75993 20.7728 9.23825 20.7728C8.71656 20.7728 8.24449 20.533 7.90236 20.1451C7.56023 19.7572 7.34868 19.2221 7.34868 18.6306C7.34868 18.0392 7.56023 17.5033 7.90236 17.1161ZM18.8833 8.17204H15.556L15.3483 11.6044H18.3648L18.8833 8.17204ZM14.4701 8.17204H9.84351L10.168 11.6044H14.2625L14.4701 8.17204ZM8.75443 8.17204H5.70983L6.52142 11.6044H9.07958L8.75508 8.17204H8.75443ZM5.41863 6.9418H8.63755L8.31305 3.50939H4.60704L5.41863 6.9418ZM9.72663 6.9418H14.5439L14.7515 3.50939H9.40213L9.72663 6.9418ZM15.6297 6.9418H19.0687L19.5871 3.50939H15.8367L15.6291 6.9418H15.6297Z"
                  fill="#FFDC03" />
              </g>
              <defs>
                <clipPath id="clip0_520_19">
                  <rect width="20.7728" height="20.7728" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg class="hidden lg:block" width="55" height="55" viewBox="0 0 55 55" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_520_25)">
                <path
                  d="M1.42242 3.22518C0.636749 3.22518 0 2.5033 0 1.61259C0 0.721882 0.636749 0 1.42242 0H8.8135C9.49818 0 10.0699 0.549174 10.2051 1.27882L11.3143 5.97493H53.035C53.8207 5.97493 54.4575 6.69681 54.4575 7.58752C54.4575 7.71172 54.4455 7.83203 54.4215 7.94846L52.6003 19.9973C52.5934 20.0575 52.5849 20.1157 52.5729 20.1739L50.7397 32.3062C50.6216 33.0921 50.0208 33.6471 49.3395 33.6451H17.8547L19.0426 38.6692H47.8247C48.6103 38.6692 49.2471 39.3911 49.2471 40.2818C49.2471 41.1725 48.6103 41.8944 47.8247 41.8944H17.9522C17.324 41.8944 16.7506 41.417 16.5794 40.6971L14.6504 32.5351C14.635 32.4808 14.6213 32.4245 14.611 32.3663L12.9335 25.2698L11.761 20.3097C11.7456 20.2554 11.7319 20.2011 11.7217 20.1448L8.85116 8.00086V7.99698L7.72315 3.2213H1.42242V3.22518ZM42.7803 46.4527C42.1966 46.4527 41.6711 46.7205 41.2894 47.1533C40.9077 47.586 40.6715 48.1837 40.6715 48.8435C40.6715 49.5033 40.9077 50.1009 41.2894 50.5337C41.6711 50.9664 42.1983 51.2342 42.7803 51.2342C43.3623 51.2342 43.8895 50.9664 44.2712 50.5337C44.6529 50.1009 44.8891 49.5033 44.8891 48.8435C44.8891 48.1837 44.6529 47.586 44.2712 47.1533C43.8895 46.7205 43.3623 46.4527 42.7803 46.4527ZM39.2782 44.8712C40.1751 43.8543 41.4127 43.2256 42.7803 43.2256C44.1479 43.2256 45.3855 43.8543 46.2824 44.8712C47.1794 45.888 47.7339 47.291 47.7339 48.8415C47.7339 50.392 47.1794 51.795 46.2824 52.8119C45.3855 53.8287 44.1479 54.4575 42.7803 54.4575C41.4127 54.4575 40.1751 53.8287 39.2782 52.8119C38.3813 51.795 37.8267 50.392 37.8267 48.8415C37.8267 47.291 38.3813 45.888 39.2782 44.8712ZM24.2187 46.4527C23.6367 46.4527 23.1095 46.7205 22.7278 47.1533C22.3478 47.586 22.1099 48.1837 22.1099 48.8435C22.1099 49.5033 22.3461 50.1009 22.7278 50.5337C23.1095 50.9664 23.6367 51.2342 24.2187 51.2342C24.8007 51.2342 25.3279 50.9664 25.7096 50.5337C26.0913 50.1009 26.3275 49.5033 26.3275 48.8435C26.3275 48.1837 26.0913 47.586 25.7096 47.1533C25.3279 46.7205 24.8007 46.4527 24.2187 46.4527ZM20.7166 44.8712C21.6135 43.8543 22.8511 43.2256 24.2187 43.2256C25.5864 43.2256 26.8239 43.8543 27.7208 44.8712C28.6178 45.888 29.1724 47.291 29.1724 48.8415C29.1724 50.392 28.6178 51.795 27.7208 52.8119C26.8239 53.8287 25.5864 54.4575 24.2187 54.4575C22.8511 54.4575 21.6135 53.8287 20.7166 52.8119C19.8197 51.795 19.2651 50.392 19.2651 48.8415C19.2651 47.291 19.8197 45.8861 20.7166 44.8712ZM49.5038 21.4236H40.781L40.2367 30.4219H48.1447L49.5038 21.4236ZM37.9345 21.4236H25.8055L26.6562 30.4219H37.3902L37.9345 21.4236ZM22.9504 21.4236H14.9687L17.0964 30.4219H23.8028L22.9521 21.4236H22.9504ZM14.2053 18.1984H22.644L21.7933 9.20011H12.0777L14.2053 18.1984ZM25.4991 18.1984H38.1279L38.6722 9.20011H24.6484L25.4991 18.1984ZM40.9745 18.1984H49.9899L51.349 9.20011H41.5171L40.9728 18.1984H40.9745Z"
                  fill="#FFDC03" />
              </g>
              <defs>
                <clipPath id="clip0_520_25">
                  <rect width="54.4575" height="54.4575" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span class="font-DMSans text-[16px] lg:text-[45px] font-bold leading-[1.2] text-[#FFDC03]">Get Calm,
              Clarity & Rest
              Now</span>
          </div>
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
        <div class="faq-wrap">
          <FAQ :asks="faqItems" />
        </div>
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