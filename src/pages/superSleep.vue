<script setup lang="ts">
import '../styles/superSleep.scss';
import SuperHeader from '../components/SuperHeader.vue';
import SuperHeader2 from '../components/SuperHeader2.vue';
import ShopButton from '../components/ShopButton.vue';
import { useSeo } from '../composables/useSeo';
import { defineAsyncComponent } from 'vue'
import LazyIsland from '@/components/LazyIsland.vue'
import BannerModal from '../components/BannerModal.vue';
import VslBadges from '../components/VslBadges.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SuperFooter from '../components/SuperFooter.vue';

const IngredientsCarousel = defineAsyncComponent(() => import('../components/IngredientsCarousel.vue'))
const TestimonialsCarousel = defineAsyncComponent(() => import('../components/TestimonialsCarousel.vue'))
const Frascos = defineAsyncComponent(() => import('../components/sleepSupermentComponents/Frascos.vue'))
const Stress  = defineAsyncComponent(() => import('../components/sleepSupermentComponents/Stress.vue'))
const FAQ = defineAsyncComponent(() => import('../components/Faq.vue'))
const NotificationDisplay = defineAsyncComponent(() => import('../components/NotificationDisplay.vue'))
const BannerRetention = defineAsyncComponent(() => import('../components/BannerRetention.vue'))

  useSeo({
    title: 'Get Restful Sleep Naturally with Superment Super Sleep Aid',
    description: "Experience deep, natural, and restful sleep with Superment Super Sleep. Our melatonin-free botanical blend helps you fall asleep faster & wake up refreshed. Made in USA.",
    keywords: 'natural sleep aid sleep supplement restful sleep deep sleep fall asleep faster stay asleep longer wake up refreshed'
  })

const anchorId = 'id-vsl-badges'

// ===== Exit-intent / retenção (sem vídeo) =====
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
  <SuperHeader2 :show-redirect="false"/>
  <section 
      id="super-sleep-pequeno"
      class="relative overflow-hidden w-full aspect-[14/15] min-h-[420px] block sm:hidden" 
  >
    <picture class="absolute inset-0 z-0">
      <!-- AVIF preferido -->
      <source
        type="image/avif"
        srcset="/assets/hero-m-768.avif 768w"
        sizes="100vw" />

      <!-- WebP fallback responsivo -->
      <source
        type="image/webp"
        srcset="/assets/hero-m-360.webp 360w,
                /assets/hero-m-480.webp 480w,
                /assets/hero-m-640.webp 640w,
                /assets/hero-m-768.webp 768w,
                /assets/hero-m-960.webp 960w"
        sizes="100vw" />

      <img
        src="/assets/hero-m-768.webp"
        alt="Super Natural Sleep no travesseiro"
        class="w-full h-full object-cover object-[50%_50%]"
        width="768" height="820"
        loading="eager" fetchpriority="high" decoding="async" />
    </picture>
    <div class="">
      <div class="title-super-natural-sleep relative z-10">
        <span class="product-title">FINALLY, <br> RESTFUL SLEEP.</span>
        <span class="product-sub-title">Natural, safe, and effective.</span>
      </div>
      <div class="description !pl-[35px] relative z-10">
        <span class="description">Try our premium <br> natural sleep formula,</span>
        <span class="description" style="font-weight: bold;">now 30% off <br> for a limited time!</span>
        <ShopButton
          type="button"
          id="buy-button"
          :anchorId="anchorId"
          :showIcon="false"
          class="botao-shop rounded-md !hover:bg-none !px-0 !pb-2 !bg-transparent mt-[1.65rem]">
          <div class="bg-[#370F1E] text-[1.2rem] gap-1 flex transition-transform duration-300 hover:scale-110 items-center justify-center rounded-md w-[165px] font-crossfit h-9">
            <span class="relative inline-block text-[#ecd68b]
            before:content-[''] before:absolute before:-left-1 before:-right-1
            before:top-1/2 before:h-[1px] before:bg-[#5d4503]
            before:-translate-y-1/2 before:rotate-[-25deg] before:rounded-full">$60</span><span class="text-[#ffdf01]">$42</span><span class="text-[#ffdf01]">|</span><span class="text-[#ffdf01]">SHOP REST</span>
          </div>

        </ShopButton>
        <div class="place-self-center">
          <span class="stripe justify-items-center">
            <img 
              loading="lazy" 
              alt="logo-stripe"
              src="../assets/image/sleepSuperment/stripe.png" ></img>
          </span>
        </div>
      </div>
    </div>
   
  </section>
  <section  class="relative overflow-hidden w-full h-[380px] hidden sm:block" id="super-sleep-grande" 
    >   
    <picture class="absolute inset-0 z-0 w-full h-full">
      <source
        media="(min-width: 640px)"
        type="image/avif"
        srcset="../assets/image/sleepSuperment/BannerPaginaD2.avif"
        sizes="100vw" />
      <!-- WebP fallback (desktop) -->
      <source
        media="(min-width: 640px)"
        type="image/webp"
        srcset="../assets/image/sleepSuperment/BannerPaginaD2.webp"
        sizes="100vw" />

      <!-- Fallback final -->
      <img
        src="../assets/image/sleepSuperment/BannerPaginaD2.webp"
        alt="bg-desktop"
        width="1600" height="900"
        loading="lazy" decoding="async" fetchpriority="low"
        class="w-full h-full object-cover object-top" />
    </picture>
    <div class="flex flex-row title md:relative gap-52">
      <div class="flex flex-col">
        <span class="product-title">FINALLY, <br> RESTFUL SLEEP.</span>
        <span class="product-sub-title">Natural, safe, and effective.</span>
        <div class="description">
          <span class="description">Try our premium natural <br> sleep formula, <strong>now 30% off</strong> <br>for a limited time!</span>
        </div>
      </div>      
      <div class="button relative bottom-20">
        <ShopButton
          type="button"
          id="buy-button"
          :anchorId="anchorId"
          :showIcon="false"
          class="botao-shop rounded-md !hover:bg-none !px-0 !bg-transparent">
          <div class="bg-[#370F1E] text-[1.2rem] gap-1 flex items-center transition-transform duration-300 hover:scale-110 justify-center rounded-md w-[165px] font-crossfit h-9">
            <span class="relative inline-block text-[#ecd68b]
            before:content-[''] before:absolute before:-left-1 before:-right-1
            before:top-1/2 before:h-[1px] before:bg-[#5d4503]
            before:-translate-y-1/2 before:rotate-[-25deg] before:rounded-full">$60</span><span class="text-[#ffdf01]">$42</span><span class="text-[#ffdf01]">|</span><span class="text-[#ffdf01]">SHOP REST</span>
          </div>
        </ShopButton>
        <img 
          src="../assets/image/sleepSuperment/stripe.png" 
          loading="lazy"
          alt="logo-stripe" 
          class="self-center md:bottom-1 md:relative strip max-w-[150px] md:max-w-[100px]">
      </div>
    </div>
    
  </section>
  <section class="non-habit-forming">
    <div class="description-forming">
      <p>"We’re proud to share our true purpose: to offer real relief from anxiety and deep, natural sleep, without
        anything harmful."</p>
      <p class="superment-team">The Superment Team</p>
    </div>
    <div class="img-non">
      <picture>
        <source type="image/webp"
          srcset="/assets/capsula-flores-324.webp 1x, 
          /assets/capsula-flores-648.webp 2x"
          sizes="324px">
        <img
          src="/assets/capsula-flores-324.webp"         
          width="324" height="182"
          alt="cápsula e flores"
          loading="lazy" decoding="async"
          class="image-forming"
          style="max-width:324px;height:auto"
        />
      </picture>

    </div>
  </section>
  <section class="ingredients relative z-10">
    <div class="title">
      <p>The ingredients you can trust.</p>
    </div>
    <div class="description">
      <p>Tired of being tired? We created a clean botanical blend to help your body rediscover natural, restful sleep.
      </p>
    </div>
    <div class="carrossel-ingredients">
      <LazyIsland><IngredientsCarousel /></LazyIsland>
    </div>
  </section>
  <LazyIsland><Stress /></LazyIsland>
  <section class="shop-rest">
    <div class="imagem-centralizada">
      <img 
        src="../assets/image/sleepSuperment/moca.webp" 
        loading="lazy" 
        alt="Mulher com pílula" 
      />

    </div>
    <div class="infos">
      <p class="title">The numbers behind Super Natural Sleep</p>
      <p class="description-title md:mb-[14px]">What people are saying about our powerful botanical blend:</p>
      <div class="infos-users md:mb-6 flex-col gap-0 md:justify-center md:flex-row md:gap-16">
        <div class="flex gap-8 md:gap-16">
          <div class="info mt-2 max-w-[200px] mx-auto">
            <p class="number">75%</p>
            <p class="description md:w-[200px]">of users <br>reported better<br> sleep quality.</p>
            <span class="info-ref my-[2px] text-[9px]">30-day trial results - 2025</span>
          </div>
          <div class="info mt-2 max-w-[240px] mx-auto">
            <p class="number">0%</p>
            <p class="description" id="description-maior">experienced <br> grogginess or unwanted<br>side effects.</p>
            <span class="info-ref my-[2px] text-[9px]">30-day trial results - 2025</span>
          </div>
        </div>
        <div class="info max-w-[200px]">
          <p class="number mt-5 md:mt-0">100%</p>
          <p class="description">of users reported reduced anxiety and greater relaxation.</p>
          <span class="info-ref my-[2px] text-[9px]">30-day trial results - 2025</span>
        </div>
      </div>
      <ShopButton
        type="button"
        id="buy-button"
        :anchorId="anchorId"
        :showIcon="false"
        class="botao-shop rounded-md !hover:bg-none pb-4 pt-[20px] !px-0 !bg-transparent">
        <div class="bg-[#370F1E] text-[1.25rem] gap-1 flex items-center transition-transform duration-300 hover:scale-110 justify-center rounded-sm w-[165px] font-crossfit h-9">
          <span class="text-[#ffdf01]">SHOP REST</span>
        </div>
      </ShopButton>
      <div>
        <span class="stripe">
          <img alt="logo-stripe" loading="lazy" src="../assets/image/sleepSuperment/stripe.png"></img>
        </span>
      </div>
    </div>
  </section>
  <section class="testimonials">
    <p class="title">What Supersleepers are saying.</p>
    <div class="assessment">
      <p class="notice">Rated 4.9/5.0</p>
      <p class="description"><strong>98%</strong> would recommend it for deeper, better sleep.</p>
    </div>
    <div class="testimonials">
    <LazyIsland><TestimonialsCarousel /></LazyIsland> 
    </div>
  </section>
  <section class="everyone">
    <p class="title">Why everyone is switching to Super Natural Sleep.</p>
    <picture>
      <source type="image/webp"
          srcset="/assets/tabela-350.webp 350w,
                  /assets/tabela-600.webp 600w"
          sizes="(min-width: 1024px) 600px, 350px"> 
      <img
        src="/assets/tabela-350.webp"
        srcset="/assets/tabela-350.webp 350w, /assets/tabela-600.webp 600w"
        sizes="(min-width: 1024px) 600px, 350px"
        width="350" height="233"
        alt="table"
        loading="lazy" decoding="async"
        class="table"
        style="aspect-ratio: 350 / 233;"
      />
    </picture>
    <picture>
      <source type="image/webp"
          srcset="/assets/selos-350.webp 1x, /assets/selos-700.webp 2x">
      <img
        src="/assets/selos-350.webp"
        srcset="/assets/selos-350.webp 1x, /assets/selos-700.webp 2x"
        width="350" height="67"
        alt="Selos de garantia e certificações"
        loading="lazy" decoding="async"
        class="mt-4"
        style="max-width:350px;height:auto"
      />
    </picture>

  </section>
 
  <LazyIsland><Frascos /></LazyIsland>
  <VslBadges
    id="id-vsl-badges"
    :duration-ms="7 * 60 * 1000"
    start-on="mount"
    @expired="onCountdownExpired"
  />
  <div class="bg-[#fffaf0] w-full py-[45px] flex flex-col">
    <div class="px-0 sm:px-10 flex flex-col gap-0 sm:gap-[40px]">
      <div class="w-full max-w-[349px] md:max-w-[700px] mx-auto">
        <h1 class="text-center w-full sm:hidden pb-[30px] leading-none text-[#370F1E] text-[34px] font-crossfit">
          Frequently asked <br>
          questions:</h1>
        <h1 class="text-start hidden w-full sm:block pb-[30px] leading-none text-[#370F1E] text-[62px] font-crossfit">
          Frequently asked questions:</h1>
        <LazyIsland><div class="faq-wrap"><FAQ /></div></LazyIsland>
      </div>
    </div>
  </div>
  <div class="bg-[#370F1E] w-full">
    <div class="max-w-[330px] sm:max-w-[700px] mx-auto">
     <SuperFooter />
    </div>
  </div>
  <LazyIsland><NotificationDisplay /></LazyIsland>
  <BannerModal />
  <BannerRetention
    v-model:open="modalOpen"
    title="WAIT!"
    subtitle="LOW STOCK WARNING!"
    buttonText="Yes, stay on this page!"
    :disable-backdrop-close="true"
    :disable-esc="false"
  >
    <template #message>
      <p>
        <span class="text-[#FFDC03]">Super Natural Sleep</span> is selling out fast!<br>
        Secure your order today to avoid any disappointment.<br><br>
        Get our <q class="text-[#FFDC03]">Best Value</q> 6-bottle pack and enjoy your best natural sleep ever!
      </p>
    </template>
  </BannerRetention>
</template>
<style>
html { scroll-behavior: smooth; }
.scroll-target { height: 0; }
#id-shop-now, #id-shop-now-desk { scroll-margin-top: 80px; }
  
</style>