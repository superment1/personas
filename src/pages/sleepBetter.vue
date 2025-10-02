<script setup lang="ts">
import '../styles/superSleep.scss';
import { ref, onMounted, onBeforeUnmount } from 'vue'
import FAQ from '../components/Faq.vue';
import SuperFooter from '../components/SuperFooter.vue';
import BeyoundC from '../components/pageC/BeyoundC.vue'
import CtaPageC from '../components/pageC/CtaPageC.vue';
import IngredientsC from '../components/pageC/IngredientsC.vue';
import TestimonialsCarousel from '../components/TestimonialsCarousel.vue';
import { useSeo } from '../composables/useSeo';
import ShopNowV1 from '../components/ShopNowV1.vue';
import NotificationDisplay from '../components/NotificationDisplay.vue';
import BannerRetention from '../components/BannerRetention.vue'

useSeo({
  title: 'Get Restful Sleep Naturally with Superment Super Sleep Aid',
  description: "Experience deep, natural, and restful sleep with Superment Super Sleep. Our melatonin-free botanical blend helps you fall asleep faster & wake up refreshed. Made in USA.",
  keywords: 'natural sleep aid sleep supplement restful sleep deep sleep fall asleep faster stay asleep longer wake up refreshed'
})
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

function openExitModal(force = false) {
  const now = Date.now()
  if (modalOpen.value) return
  if (!force) {
    if (now - lastShown < COOLDOWN_MS) return
  }
  modalOpen.value = true
  lastShown = now
}
onMounted(() => {
  const load = () => {
    if (document.getElementById('rdstation-forms-script')) return
    const s = document.createElement('script')
    s.id = 'rdstation-forms-script'
    s.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js'
    s.async = true
    document.head.appendChild(s)
  }
  if ('requestIdleCallback' in window) (window as any).requestIdleCallback(load, { timeout: 2000 })
  else setTimeout(load, 1500)
})
let lcpObs: PerformanceObserver | null = null
onMounted(() => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return
  if ((window as any).__LCP_OBS_ATTACHED) return
    ; (window as any).__LCP_OBS_ATTACHED = true

  lcpObs = new PerformanceObserver((list) => {
    for (const e of list.getEntries() as PerformanceEntry[]) {
      const el = (e as any).element as Element | null
      const src = el && (el as HTMLImageElement).tagName === 'IMG'
        ? (el as HTMLImageElement).currentSrc
        : ''
      console.log('[LCP]', Math.round(e.startTime), el?.tagName, src)
    }
  })
  lcpObs.observe({ type: 'largest-contentful-paint', buffered: true as any })
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
function onCountdownExpired() { }

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

onBeforeUnmount(() => {
  lcpObs?.disconnect()
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
  <div class="w-full min-h-screen bg-white flex flex-col">
    <main>
      <section class="relative justify-items-center w-full">
        <picture>
          <source media="(min-width: 640px)" type="image/webp" srcset="/assets/hero_womam_desk_2.avif" />
          <source type="image/avif" media="(max-width: 639px)" srcset="/assets/hero_womam.avif" sizes="100vw" />
          <img src="/assets/hero_womam_desk_2.avif" alt="driver" class="w-full object-cover" width="768" height="432"
            decoding="async" fetchpriority="high" />
        </picture>
        <div
          class="absolute py-[46px] inset-0 hidden sm:flex flex-col text-white w-[996px] justify-self-center justify-between text-start">
          <h1 class="font-semibold leading-[41px] italic text-[42px] font-gelasio">
            I Blank in Meetings. <br>
            I Miss Games.<br>
            I Cry in Cabs.
            <br><span class="text-[#FFDC03]">The Real Problem?
              <br>No Sleep </span>

          </h1>
          <p class="text-[26px] leading-[29px]">
            I thought burnout was just part <br> of the job. Turns out, my nights <br> were running me into the ground.
          </p>

        </div>
      </section>
      <section>
        <div class="w-full bg-[#FFFAF0] flex items-center justify-center relative">
          <div
            class="px-[42px] lg:px-0 items-center text-[15px] sm:text-[18px] md:text-[30px] max-w-[400px] sm:max-w-[480px] md:max-w-[996px] font-normal text-[#370F1E] leading-[17.7px] sm:leading-[21px] md:leading-[35px] py-8">
            <p class="sm:hidden block">
              That night, it hit me — I wasn’t just tired. I was half-present everywhere: at work, at home, even with
              myself.
            </p>
            <p class="hidden sm:block">
              That night, it hit me — I wasn’t just tired. I was half-present everywhere: <br>at work, at home, even
              with myself.
            </p>
            <p class="pt-5">I didn’t need another late coffee or some knock-out pill. I needed a way to switch my brain
              off, to let my body reset.
            </p>
            <p class="pt-5">That’s when I found <span class="font-bold">Super Natural Sleep.</span><br> No melatonin. No
              morning fog. Just a natural way to calm the spin and sink into real, restorative sleep.
            </p>
            <p class="pt-5 block sm:hidden">The first night, I actually stayed asleep. No 2 a.m. wake-ups, no scrolling
              emails in the dark. The next morning, I made pancakes for my son before school. He looked at me and said,
              “You’re happy today, Mom.” That one line hit harder than any performance review<br> ever could.
            </p>
            <p class="pt-5 hidden sm:block">The first night, I actually stayed asleep. No 2 a.m. wake-ups, no scrolling
              emails in the dark. The next morning, I made pancakes for my son before school. He looked at me and said,
              “You’re happy today, Mom.” <br>That one line hit harder than any performance review ever could.
            </p>
            <p class="pt-5 hidden sm:block">By the end of the week, I was walking into meetings, sharp, clear,
              confident. I didn’t blank. I didn’t snap.
            </p>
            <p class="pt-5 sm:hidden block">By the end of the week, I was walking into meetings, sharp, clear,
              confident. I didn’t blank.<br>I didn’t snap.
            </p>
            <p class="pt-5">At home, I laughed more. My son started opening up again. </p>
            <p class="pt-5">I thought exhaustion was the price of ambition. Turns out, it was stealing the best parts of
              me.</p>
            <p class="italic pt-5 font-gelasio font-semibold">Super Natural Sleep gave me back my focus at work — and my
              patience at home. It can do the same for you.
            </p>
          </div>
          <span class="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-4 translate-y-[1px] z-10
                  w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent
                  border-t-[28px] border-t-[#FFFAF0]">
          </span>
        </div>
      </section>
      <section>
        <div class="w-full flex bg-[#E1DCCD] justify-center relative">
          <div
            class="px-[42px] sm:px-0 sm:max-w-[996px] pt-[38px] pb-[35px] lg:py-[125px] flex flex-col items-center justify-center">
            <h1
              class="text-[#370F1E] lg:hidden block text-center font-gelasio text-[25px] sm:text-[28px] md:text-[34px] italic font-normal leading-[29.5px]">
              Signs your sleep<br> may be compromised too:
            </h1>
            <h1
              class="text-[#370F1E] lg:block hidden text-star font-gelasio text-[51px] italic font-normal leading-[29.5px]">
              Signs your sleep may be compromised too:
            </h1>
            <ul
              class="grid grid-cols-2 md:grid-cols-3 text-[14px] lg:text-[30px] font-gelasio italic pt-[27px] lg:pt-[74px] gap-x-3 gap-y-[27.58px] lg:gap-x-[37px] lg:gap-y-[63px] list-none">
              <li
                class="bg-[#FFFAF0] relative rounded-[7px] w-[150px] h-[55px] sm:w-[190px] sm:h-[60px] lg:w-[308px] lg:h-[156px]">
                <img src="../assets/image/pagec/emoji/face_with_spiral_eyes.webp" alt="" aria-hidden="true" width="22"
                  height="22" loading="lazy"
                  class="absolute left-1/2 -translate-x-1/2 top-0 lg:w-[54px] -translate-y-1/2 z-10 pointer-events-none select-none" />
                <div
                  class="leading-[15.4px] pb-[11px] pt-[15px] lg:py-[37px] lg:leading-[33px] px-[10px] text-[#370F1E] text-center text-[14px] sm:text-[16px] lg:text-[30px]">
                  Mental fog or forgetfulness</div>
              </li>
              <li
                class="bg-[#FFFAF0] relative rounded-[7px] w-[150px] h-[55px] sm:w-[190px] sm:h-[60px] lg:w-[308px] lg:h-[156px]">
                <img src="../assets/image/pagec/emoji/angry_face.webp" alt="" aria-hidden="true" width="22" height="22"
                  loading="lazy"
                  class="absolute left-1/2 -translate-x-1/2 top-0 lg:w-[54px] -translate-y-1/2 z-10 pointer-events-none select-none" />
                <div
                  class="leading-[15.4px] lg:leading-[33px] lg:py-[37px] pb-[11px] pt-[15px] px-[10px] text-[#370F1E] text-center text-[14px] sm:text-[16px] lg:text-[30px]">
                  Mood swings and irritability</div>
              </li>
              <li
                class="bg-[#FFFAF0] relative rounded-[7px] w-[150px] h-[55px] sm:w-[190px] sm:h-[60px] lg:w-[308px] lg:h-[156px]">
                <img src="../assets/image/pagec/emoji/face_with_steam_from_nose.webp" alt="" aria-hidden="true"
                  width="22" height="22" loading="lazy"
                  class="absolute left-1/2 -translate-x-1/2 top-0 lg:w-[54px] -translate-y-1/2 z-10 pointer-events-none select-none" />
                <div
                  class="leading-[15.4px] lg:leading-[33px] lg:py-[37px] pb-[11px] pt-[15px] px-[10px] text-[#370F1E] text-center text-[14px] sm:text-[16px] lg:text-[30px]">
                  Increased stress<br>or anxiety</div>
              </li>
              <li
                class="bg-[#FFFAF0] relative rounded-[7px] w-[150px] h-[55px] sm:w-[190px] sm:h-[60px] lg:w-[308px] lg:h-[156px]">
                <img src="../assets/image/pagec/emoji/face_with_thermometer.webp" alt="" aria-hidden="true" width="22"
                  height="22" loading="lazy"
                  class="absolute left-1/2 -translate-x-1/2 top-0 lg:w-[54px] -translate-y-1/2 z-10 pointer-events-none select-none" />
                <div
                  class="leading-[15.4px] lg:py-[37px] lg:leading-[33px] pb-[11px] pt-[15px] px-[10px] text-[#370F1E] text-center text-[14px] sm:text-[16px] lg:text-[30px]">
                  Getting sick <br>more often</div>
              </li>
              <li
                class="bg-[#FFFAF0] relative rounded-[7px] w-[150px] h-[55px] sm:w-[190px] sm:h-[60px] lg:w-[308px] lg:h-[156px]">
                <img src="../assets/image/pagec/emoji/weary_face.webp" alt="" aria-hidden="true" width="22" height="22"
                  loading="lazy"
                  class="absolute left-1/2 -translate-x-1/2 top-0 lg:w-[54px] -translate-y-1/2 z-10 pointer-events-none select-none" />
                <div
                  class="leading-[15.4px] lg:py-[37px] lg:leading-[33px] pb-[11px] pt-[15px] px-[10px] text-[#370F1E] text-center text-[14px] sm:text-[16px] lg:text-[30px]">
                  Fatigue that <br> rest doesn’t fix</div>
              </li>
              <li
                class="bg-[#FFFAF0] relative rounded-[7px] w-[150px] h-[55px] sm:w-[190px] sm:h-[60px] lg:w-[308px] lg:h-[156px]">
                <img src="../assets/image/pagec/emoji/older_person001.webp" alt="" aria-hidden="true" width="22"
                  height="22" loading="lazy"
                  class="absolute left-1/2 -translate-x-1/2 top-0 lg:w-[54px] -translate-y-1/2 z-10 pointer-events-none select-none" />
                <div
                  class="leading-[15.4px] lg:py-[37px] lg:leading-[33px] pb-[11px] pt-[15px] px-[10px] text-[#370F1E] text-center text-[14px] sm:text-[16px] lg:text-[30px]">
                  Early signs <br> of aging</div>
              </li>
            </ul>
          </div>
          <span class="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-4 translate-y-[1px] z-10
                  w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent
                  border-t-[28px] border-t-[#E1DCCD]">
          </span>
        </div>
      </section>
      <section>
        <div class="w-full bg-[#370F1E] justify-center relative">
          <div class="hidden lg:py-[125px] gap-[47px] sm:flex sm:max-w-[996px] justify-self-center">
            <div>
              <h1 class="text-[#FFDC03] italic leading-[57px] font-gelasio text-[52px]">The deeper risks <br>you can’t
                see.</h1>
              <p class="text-[25px] pt-[25px] leading-[29px] font-normal text-[#fff]"><span class="font-bold">Surface
                  symptoms are just the beginning. </span> Beneath <br> them, chronic sleep loss quietly disrupts the
                body’s <br> most vital systems.</p>
              <ul class="grid pt-[65px] grid-cols-2 gap-x-[36px] gap-y-[30px]">
                <li class="bg-[#FFFAF0] rounded-[7px] flex items-center">
                  <div
                    class="bg-[#FFDC03] content-center rounded-l-md h-full w-[110px] px-2 text-[#370F1E] text-[34px] leading-[1] text-center font-gelasio">
                    +48%</div>
                  <p class="text-[18px] px-[30px] py-[25px] leading-[1.1] font-gelasio italic text-[#370F1E]">higher
                    risk of <br> heart disease</p>
                </li>
                <li class="bg-[#FFFAF0] rounded-[7px] flex items-center">
                  <div
                    class="bg-[#FFDC03] content-center rounded-l-md h-full w-[110px] px-2 text-[#370F1E] text-[34px] leading-[1] text-center font-gelasio">
                    +33%</div>
                  <p class="text-[18px] px-[30px] py-[25px] leading-[1.1] font-gelasio italic text-[#370F1E]">higher
                    risk of <br> memory loss</p>
                </li>
                <li class="bg-[#FFFAF0] rounded-[7px] flex items-center">
                  <div
                    class="bg-[#FFDC03] content-center rounded-l-md h-full w-[110px] px-2 text-[#370F1E] text-[34px] leading-[1] text-center font-gelasio">
                    +46%</div>
                  <p class="text-[18px] px-[30px] py-[14px] leading-[1.1] font-gelasio italic text-[#370F1E]">higher
                    risk of<br>anxiety and<br>depression</p>
                </li>
                <li class="bg-[#FFFAF0] rounded-[7px] flex items-center">
                  <div
                    class="bg-[#FFDC03] content-center rounded-l-md h-full w-[110px] px-2 text-[#370F1E] text-[34px] leading-[1] text-center font-gelasio">
                    4X</div>
                  <p class="text-[18px] px-[30px] py-[14px] leading-[1.1] font-gelasio italic text-[#370F1E]">more
                    likely<br> to get sick</p>
                </li>
                <li class="bg-[#FFFAF0] rounded-[7px] flex items-center">
                  <div
                    class="bg-[#FFDC03] content-center rounded-l-md h-full w-[110px] px-2 text-[#370F1E] text-[34px] leading-[1] text-center font-gelasio">
                    3X</div>
                  <p class="text-[18px] pl-[30px] py-[25px] leading-[1.1] font-gelasio italic text-[#370F1E]">higher
                    risk of<br> type 2 diabetes</p>
                </li>
                <li class="bg-[#FFFAF0] rounded-[7px] flex items-center">
                  <div
                    class="bg-[#FFDC03] content-center rounded-l-md h-full w-[110px] px-2 text-[#370F1E] text-[34px] leading-[1] text-center font-gelasio">
                    +700</div>
                  <p
                    class="text-[18px] pl-[15px] w-[180px] pt-[4px] pb-[1px] leading-[1.1] font-gelasio italic text-[#370F1E]">
                    genes disrupted<br> after just one week<br>of poor sleep</p>
                </li>
                <li class="bg-[#FFFAF0] rounded-[7px] flex items-center col-span-2">
                  <div
                    class="bg-[#FFDC03] content-center rounded-l-md h-full px-2 w-[291px] text-[#370F1E] text-[34px] leading-[1] text-center font-gelasio">
                    24 hours awake=</div>
                  <p class="text-[24px] px-[30px] py-9 leading-[1.1] font-gelasio italic text-[#370F1E]">similar of
                    being drunk</p>
                </li>
              </ul>
            </div>
            <div class="flex flex-col  justify-between">
              <img class="mt-[8px]" src="/assets/iceberg_desk.webp" width="346px" height="599px" alt="iceberg">
              <p class="text-white leading-[33px] text-[28px]">This isn’t just data —  <br>
                <span class="font-black">
                  it’s your body sending <br>
                  early warnings.
                </span>
              </p>

            </div>
          </div>
          <div class="px-[42px] pt-[43px] sm:hidden ">
            <div class="flex gap-[15px]">
              <div class="flex flex-col gap-[15px]">
                <h1 class="text-[#FFDC03] leading-[32px] font-gelasio text-[33px]">The deeper risks you can’t see.</h1>
                <p class="text-[14px] leading-[16.52px] text-[#fff]"><span class="font-bold">Surface symptoms <br> are
                    just the beginning. </span> <br>Beneath them, chronic sleep loss quietly <br>disrupts the body’s
                  <br> most vital systems.
                </p>
              </div>
              <img class="max-w-[150px] max-h-[215px]" src="../assets/image/pagec/iceberg.webp" loading="lazy"
                alt="iceberg">
            </div>
            <div>
              <ul class="grid pt-[31px] grid-cols-2  gap-x-[15px] gap-y-[15px]">
                <li class="bg-[#FFFAF0] flex flex-col rounded-[7px] justify-center items-center">
                  <div
                    class="bg-[#FFDC03] w-[80px] pt-[2px] pb-[2px] px-2 text-[#370F1E] text-[26px] leading-[1]  justify-self-center font-gelasio rounded-b-[7px]">
                    +48%</div>
                  <p
                    class="text-[14px] text-center px-[30px] pt-[10px] pb-[11px] leading-[1.1] font-gelasio italic text-[#370F1E]">
                    higher risk of heart disease</p>
                </li>
                <li class="bg-[#FFFAF0] flex flex-col rounded-[7px] justify-center items-center">
                  <div
                    class="bg-[#FFDC03] w-[80px] pt-[2px] pb-[2px] px-2 text-[#370F1E] text-[26px] leading-[1]  justify-self-center font-gelasio rounded-b-[7px]">
                    +33%</div>
                  <p
                    class="text-[14px] text-center px-[30px] pt-[10px] pb-[11px] leading-[1.1] font-gelasio italic text-[#370F1E]">
                    higher risk of memory loss</p>
                </li>
                <li class="bg-[#FFFAF0] flex flex-col rounded-[7px] justify-center items-center">
                  <div
                    class="bg-[#FFDC03] w-[80px] pt-[2px] pb-[2px] px-2 text-[#370F1E] text-[26px] leading-[1]  justify-self-center font-gelasio rounded-b-[7px]">
                    +46%</div>
                  <p
                    class="text-[14px] text-center px-[7px] pt-[10px] pb-[11px] leading-[1.1] font-gelasio italic text-[#370F1E]">
                    higher risk of anxiety and depression</p>
                </li>
                <li class="bg-[#FFFAF0] flex flex-col rounded-[7px] justify-center items-center">
                  <div
                    class="bg-[#FFDC03] w-[80px] pt-[2px] pb-[2px] px-6 text-[#370F1E] text-[26px] leading-[1]  justify-self-center font-gelasio rounded-b-[7px]">
                    4X</div>
                  <p
                    class="text-[14px] text-center px-[30px] pt-[10px] pb-[11px] leading-[1.1] font-gelasio italic text-[#370F1E]">
                    more likely to get sick</p>
                </li>
                <li class="bg-[#FFFAF0] flex flex-col rounded-[7px] justify-center items-center">
                  <div
                    class="bg-[#FFDC03] w-[80px] pt-[2px] pb-[2px] px-6 text-[#370F1E] text-[26px] leading-[1]  justify-self-center font-gelasio rounded-b-[7px]">
                    3X</div>
                  <p
                    class="text-[14px] text-center px-[15px] pt-[10px] pb-[11px] leading-[1.1] font-gelasio italic text-[#370F1E]">
                    higher risk of type 2 diabetes</p>
                </li>
                <li class="bg-[#FFFAF0] flex flex-col rounded-[7px] justify-center items-center">
                  <div
                    class="bg-[#FFDC03] w-[80px] pt-[2px] pb-[2px] px-2 text-[#370F1E] text-[26px] leading-[1]  justify-self-center font-gelasio rounded-b-[7px]">
                    +700</div>
                  <p
                    class="text-[14px] text-center px-[5px] pt-[4px] pb-[1px] leading-[1.1] font-gelasio italic text-[#370F1E]">
                    genes disrupted after just one week of <br> poor sleep</p>
                </li>
                <li class="bg-[#FFFAF0] flex flex-col rounded-[7px] justify-center items-center col-span-2">
                  <div
                    class="bg-[#FFDC03] w-[255px]  pt-[2px] pb-[2px] px-[19px] text-[#370F1E] text-[26px] leading-[1]  justify-self-center font-gelasio rounded-b-[7px]">
                    24 hours awake=</div>
                  <p
                    class="text-[14px] text-center px-[15px] pt-[10px] pb-[12px] leading-[1.1] font-gelasio italic text-[#370F1E]">
                    similar of being drunk</p>
                </li>
              </ul>
              <p class="text-center text-[15px] leading-[18px] pt-[15px] pb-[30px] text-[#fff]">This isn’t just data —
                <span class="font-semibold">  it’s your body sending <br> early warnings.</span>
              </p>
            </div>
          </div>
          <span class="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-4 translate-y-[1px] z-10
                  w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent
                  border-t-[28px] border-t-[#370F1E]">
          </span>
        </div>
      </section>
      <CtaPageC />
      <IngredientsC />
      <BeyoundC />
      <div class="bg-[#FFFAF0] w-full items-center lg:pb-[40px]">
        <div
          class="w-[349px] mx-auto lg:w-full pt-[31px] lg:pt-[90px] lg:pb-[30px] font-gelasio font-medium  italic text-center justify-self-center">
          <p class="title text-[#370F1E] lg:pb-[52px] pb-[20px] font-semibold text-[25px] lg:text-[44px] leading-none">
            Everyday, more people <br><span class="text-[#6EC8F0] font-semibold leading-[1.1] pb-[25px]"> finally sleep
              again.</span></p>
          <div
            class="bg-gradient-to-b from-[#E2DCCE] to-[#CAC0AA] w-[318px] lg:w-[420px] justify-self-center relative text-right flex font-gelasio p-[16px] lg:p-[26px] text-[#370F1E] rounded-[10px]">
            <img class="absolute left-3 top-1/2 -translate-y-1/2 w-[80px] lg:w-[130px] h-auto"
              src="../assets/image/seloRated.webp" loading="lazy" alt="rated">
            <p
              class="description w-[200px] ml-[80px] lg:w-[305px] lg:ml-[133px] text-left leading-[1] lg:text-[20px] text-[17px]">
              <strong>98%</strong> would recommend it <br>for
              deeper, better
              sleep.
            </p>
          </div>
        </div>
        <div class="max-w-[349px] sm:max-w-[1260px] mx-auto items-center">
          <TestimonialsCarousel />
        </div>
      </div>
      <!-- v-show="showAfterVideo"  -->
      <div class="bg-[#370F1E]">
        <div
          class="overflow-hidden max-w-[100%] text-[12px] sm:text-[19px] border-[#ffffff69] border-b-[0.579px]  border-t-[0.579px] bg-[#370F1E] text-white">
          <div class="flex whitespace-nowrap pt-[3px] pb-[2px] animate-marquee">
            <p>Made in the USA <span class="espacada px-2">|</span> Clean, natural, no fillers <span
                class="espacada px-2">|</span> Save up to 57% <span class="espacada px-2">|</span> Up to 120-day
              money-back guarantee <span class="espacada px-2">|</span> Real reviews rated 4.9/5.0 <span
                class="espacada px-2">|</span> Free U.S shipping <span class="espacada px-2">|</span> </p>
            <p>Made in the USA <span class="espacada px-2">|</span> Clean, natural, no fillers <span
                class="espacada px-2">|</span> Save up to 57% <span class="espacada px-2">|</span> Up to 120-day
              money-back guarantee <span class="espacada px-2">|</span> Real reviews rated 4.9/5.0 <span
                class="espacada px-2">|</span> Free U.S shipping <span class="espacada px-2">|</span> </p>
            <p>Made in the USA <span class="espacada px-2">|</span> Clean, natural, no fillers <span
                class="espacada px-2">|</span> Save up to 57% <span class="espacada px-2">|</span> Up to 120-day
              money-back guarantee <span class="espacada px-2">|</span> Real reviews rated 4.9/5.0 <span
                class="espacada px-2">|</span> Free U.S shipping <span class="espacada px-2">|</span> </p>
          </div>
        </div>
      </div>
      <div class="">
        <ShopNowV1 @expired="onCountdownExpired" />
      </div>
      <section>
        <div class="w-full bg-[#E1DCCD] justify-items-center relative">
          <div class="px-[42px] lg:px-0 lg:py-[130px] py-[35px] lg:max-w-[996px] ">
            <h1
              class="text-[#370F1E] text-center font-gelasio text-[25px] lg:text-[60px] italic font-bold leading-[29.5px] lg:leading-[46px]">
              Most sleep aids fail.
              <p
                class="font-normal text-[16px] leading-[1] lg:leading-[46px] lg:text-[42px] pt-[0px] pb-[18px] lg:pb-[40px] lg:pt-[18px]">
                They don’t restore — they override.</p>
            </h1>
            <p class="text-[#370F1E] sm:hidden leading-[1.2] text-[15px]">
              Melatonin, sleep teas, OTC pills, harsh <br> chemicals and sedatives may help you fall <br> asleep faster.
              But rather than supporting <br>your natural sleep cycles, they often <br> suppress them — <span
                class="font-bold"> leading to shallow, disconnected rest.</span>
            </p>
            <p class="text-[#370F1E] sm:block hidden leading-[1.2] lg:text-center text-[15px] lg:text-[30px]">
              Melatonin, sleep teas, OTC pills, harsh chemicals and sedatives may <br> help you fall asleep faster. But
              rather than supporting your natural <br> sleep cycles, they often suppress them — <span class="font-bold">
                leading to shallow, disconnected rest.</span>
            </p>
            <p
              class="font-bold sm:hidden block leading-[1.2] text-[#370F1E] lg:text-center lg:text-[30px] text-[15px] pt-[18px]">
              Common side effects of conventional <br>sleep aids:
            </p>
            <p
              class="font-bold sm:block hidden leading-[1.2] text-[#370F1E] lg:text-center lg:text-[30px] text-[15px] pt-[18px]">
              Common side effects of conventional sleep aids:
            </p>
            <ul
              class="grid grid-cols-2 text-[14px] leading-[15.4px] font-gelasio italic pt-[37px] lg:pt-[115px] gap-x-3 gap-y-[27px] lg:gap-x-[71px] lg:gap-y-[81px] list-none">
              <li class="bg-[#370F1E] relative rounded-[7px]">
                <img src="../assets/image/pagec/emoji/woozy_face.webp" alt="" aria-hidden="true" width="22" height="22"
                  loading="lazy"
                  class="absolute left-1/2 lg:w-[70px] -translate-x-1/2 top-0 -translate-y-1/2 z-10 pointer-events-none select-none" />
                <div
                  class="leading-[15.4px] lg:leading-[40px] lg:py-[70px] pb-[9px] pt-[15px] px-[10px] lg:text-[38px] text-[#fff] text-center">
                  Next-day <br>grogginess</div>
              </li>
              <li class="bg-[#370F1E] relative rounded-[7px]">
                <img src="../assets/image/pagec/emoji/dizzy_face.webp" alt="" aria-hidden="true" width="22" height="22"
                  loading="lazy"
                  class="absolute left-1/2  lg:w-[70px] -translate-x-1/2 top-0 -translate-y-1/2 z-10 pointer-events-none select-none" />
                <div
                  class="leading-[15.4px] lg:leading-[40px] lg:py-[70px] pb-[9px] pt-[15px] px-[10px] lg:text-[38px] text-[#fff] text-center">
                  Restless or vivid <br>dreams</div>
              </li>
              <li class="bg-[#370F1E] relative rounded-[7px]">
                <img src="../assets/image/pagec/emoji/persevering_face.webp" alt="" aria-hidden="true" width="22"
                  height="22" loading="lazy"
                  class="absolute left-1/2  lg:w-[70px] -translate-x-1/2 top-0 -translate-y-1/2 z-10 pointer-events-none select-none" />
                <div
                  class="leading-[15.4px] lg:leading-[40px] lg:py-[70px] pb-[9px] pt-[15px] px-[10px] text-[#fff] lg:text-[38px] text-center">
                  Disrupted <br>hormonal rhythms</div>
              </li>
              <li class="bg-[#370F1E] relative rounded-[7px]">
                <img src="../assets/image/pagec/emoji/shocked_face_with_exploding.webp" alt="" aria-hidden="true"
                  width="22" height="22" loading="lazy"
                  class="absolute left-1/2 lg:w-[70px] -translate-x-1/2 top-0 -translate-y-1/2 z-10 pointer-events-none select-none" />
                <div
                  class="leading-[15.4px] lg:py-[70px] pb-[9px] lg:leading-[40px] pt-[15px] px-[4px] text-[#fff] lg:text-[38px] text-center">
                  Short-term relief,<br> long-term dependence</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div class="bg-[#FFFAF0] w-full pt-[42px] items-center justify-start">
        <div class="px-[42px] lg:px-0 flex flex-col items-center justify-start">
          <div class="w-full max-w-[349px] md:max-w-[996px]">
            <h1
              class="text-[#350E1D] sm:hidden w-full leading-[0.9] pb-[46px] font-gelasio font-bold italic text-[25px] text-center sm:text-[68px] ">
              Scientific <br> references:</h1>
            <h1
              class="text-[#350E1D] hidden text-center sm:block w-full leading-[1] pb-[46px] font-bold font-gelasio italic sm:text-[52px] ">
              Scientific references:</h1>
          </div>
          <ul
            class="w-full columns-1 gap-x-8 sm:gap-y-6 max-w-[349px] md:max-w-[996px] text-[#350E1D] font-sans font-medium">
            <li class="flex gap-5 pt-[11px] pb-[11px] sm:pb-[18px] sm:pt-[17px] border-b border-t border-[#370F1E]">
              <div class="flex-col">
                <h1 class="text-[14px] font-normal sm:text-[16px] leading-[1.3]"><strong>Montana State
                    University</strong>
                  <p>Study by Montana State researcher finds sleep deprivation makes people less
                    happy, more anxious. (n.d.)</p>
                </h1>
              </div>
            </li>
            <li class="flex gap-5  pt-[11px] pb-[11px] sm:pb-[17px] sm:pt-[22px] border-b border-[#370F1E]">
              <div class="flex-col">
                <h1 class="text-[14px] font-normal sm:text-[16px] leading-[1.3]"><strong>Colten, H. R., &
                    Altevogt, B. M. (Eds.)</strong>
                  <p>Sleep disorders and sleep deprivation: An unmet public health
                    problem. (2006)</p>
                </h1>
              </div>
            </li>
            <li class="flex gap-5 pt-[12px] pb-[12px] sm:pb-[18px] sm:pt-[26px] border-b border-[#370F1E]">
              <div class="flex-col">
                <h1 class="text-[14px] font-normal sm:text-[16px] leading-[1.3]"><strong>Sleep Foundation
                  </strong>
                  <p> How sleep deprivation affects your heart. (n.d.)</p>
                </h1>
              </div>
            </li>
            <li class="flex gap-5  pt-[12px] pb-[12px] sm:pb-[18px] sm:pt-[26px] border-b border-[#370F1E]">
              <div class="flex-col">
                <h1 class="text-[14px] font-normal sm:text-[16px] leading-[1.3]"><strong>Calhoun, D. A., &
                    Harding, S. M.</strong>
                  <p> Sleep and hypertension. (2010)</p>
                </h1>
              </div>
            </li>
            <li class="flex gap-5  pt-[12px] pb-[12px] sm:pb-[18px] sm:pt-[16px] border-b border-[#370F1E]">
              <div class="flex-col">
                <h1 class="text-[14px] font-normal sm:text-[16px] leading-[1.3]"><strong>Mesarwi, O., Polak,
                    J., Jun, J., & Polotsky, V. Y.</strong>
                  <p> Sleep disorders and the development of insulin resistance
                    and obesity. (2013)</p>
                </h1>
              </div>
            </li>
            <li class="flex gap-5 pt-[12px] pb-[12px] sm:pb-[18px] sm:pt-[22px] border-b border-[#370F1E]">
              <div class="flex-col">
                <h1 class="text-[14px] font-normal sm:text-[16px] leading-[1.3]"><strong>Spiegel, K.,
                    Tasali, E., Leproult, R., & Van Cauter, E.</strong>
                  <p> Effects of poor and short sleep on glucose
                    metabolism and obesity risk. (2009)</p>
                </h1>
              </div>
            </li>
            <li class="flex gap-5 pt-[12px] pb-[12px] sm:pb-[18px] sm:pt-[25px] border-b border-[#370F1E]">
              <div class="flex-col">
                <h1 class="text-[14px] font-normal sm:text-[16px]  leading-[1.3]"><strong>Ungvari, Z.,
                    Fekete, M., Varga, P., Fekete, J. T., Lehoczki, A., Buda, A., … & Győrffy, B.</strong>
                  <p> Imbalanced
                    sleep increases mortality risk by 14–34%: A meta-analysis. (2025)</p>
                </h1>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="bg-[#fffaf0] w-full pt-[50px] pb-[45px] flex flex-col">
        <div class="px-[42px] sm:px-10 flex flex-col">
          <div class="w-full max-w-[349px] md:max-w-[996px] mx-auto">
            <h1
              class="text-center w-full sm:hidden pb-[46px] font-bold leading-none text-[#370F1E] text-[25px] font-gelasio italic">
              Frequently asked <br>
              questions:</h1>
            <h1
              class="text-center hidden w-full sm:block pb-[46px] font-bold leading-none text-[#370F1E] text-[52px] font-gelasio italic">
              Frequently asked questions:</h1>
            <FAQ />
          </div>
        </div>
      </div>

    </main>
    <div class="bg-[#350E1D] w-full items-center">
      <div class="px-[42px] max-w-[996px] justify-self-center lg:px-0">
        <SuperFooter />
      </div>
    </div>
    <NotificationDisplay />
  </div>
  <!-- <BannerRetention v-model:open="modalOpen" title="WAIT!" subtitle="DON'T LEAVE" buttonText="SLEEP20"
    :disable-backdrop-close="true" :disable-esc="false">
    <template #message>
      <p class="text-[#fff] sm:text-[31px] text-[16px]">Get <span class="text-[#FFDC03] sm:text-[28px]">20% OFF </span>
        to shop now <br> — today only.>
      </p>
    </template>
  </BannerRetention> -->
</template>