<script setup>
  import '../styles/superSleep.scss';
  import { defineProps, useAttrs } from 'vue'
  import FAQ from '../components/Faq.vue';
  import IngredientsCarousel from '../components/IngredientsCarousel.vue';
  import NotificationDisplay from '../components/NotificationDisplay.vue';
  import SuperHeader from '../components/SuperHeader.vue';
  import SuperFooter from '../components/SuperFooter.vue';
  import TestimonialsCarousel from '../components/TestimonialsCarousel.vue';
  import Stopwatch from '../components/Stopwatch.vue';
  import Frascos from '../components/sleepSupermentComponents/Frascos.vue';
  import Stress from '../components/sleepSupermentComponents/Stress.vue';
  import ShopButton from '../components/ShopButton.vue';
  import { useSeo } from '../composables/useSeo';
  import { useWindowSize } from '@vueuse/core';
  import BannerModal from '../components/BannerModal.vue'


  const { width } = useWindowSize();

  useSeo({
    title: 'Get Restful Sleep Naturally with Superment Super Sleep Aid',
    description: "Experience deep, natural, and restful sleep with Superment Super Sleep. Our melatonin-free botanical blend helps you fall asleep faster & wake up refreshed. Made in USA.",
    keywords: 'natural sleep aid sleep supplement restful sleep deep sleep fall asleep faster stay asleep longer wake up refreshed'
  })
  const attrs = useAttrs();
</script>

<template>
  <SuperHeader :show-redirect="false"/>
  <section class="super-natural-sleep" id="super-sleep-pequeno">
    <div class="title-super-natural-sleep">
      <span class="product-title">FINALLY, <br> RESTFUL SLEEP.</span>
      <span class="product-sub-title">Natural, safe, and effective.</span>
    </div>
    <div class="description !pl-[35px]">
      <span class="description">Try our premium <br> natural sleep formula,</span>
      <span class="description" style="font-weight: bold;">now 30% off <br> for a limited time!</span>
      <ShopButton
        type="button"
        id="buy-button"
        :anchorId="width < 1024 ? 'id-shop-now' : 'id-shop-now-desk'"
        :showIcon="false"
        class="botao-shop rounded-md !hover:bg-none !px-0 !bg-transparent mt-7">
        <img
          src="../assets/image/sleepSuperment/button-shop.webp"
          loading="lazy"
          alt="button-shop"
          class="1 w-[200px] h-[36px] rounded object-cover transition-transform duration-300 hover:scale-110"
        />
      </ShopButton>
      <div>
        <span class="stripe">
          <img 
            loading="lazy" 
            alt="logo-stripe"
            src="../assets/image/sleepSuperment/stripe.png" ></img>
        </span>
      </div>
    </div>
  </section>
  <section class="super-natural-sleep" id="super-sleep-grande">
    <div class="title md:relative md:right-14">
      <span class="product-title">FINALLY, <br> RESTFUL SLEEP.</span>
      <span class="product-sub-title">Natural, safe, and effective.</span>
      <div class="description">
        <span class="description">Try our premium natural <br> sleep formula, <strong>now 30% off</strong> <br>for a limited time!</span>
      </div>
    </div>
    <div class="button">
      <div>
        <ShopButton
          type="button"
          id="buy-button"
          :anchorId="width < 1024 ? 'id-shop-now' : 'id-shop-now-desk'"
          :showIcon="false"
          class="botao-shop rounded-md !hover:bg-none !px-0 !bg-transparent">
          <img
            loading="lazy"
            alt="button-shop"
            src="../assets/image/sleepSuperment/button-shop.webp"
            class="1 w-[200px] h-[36px] rounded object-cover transition-transform duration-300 hover:scale-110"
          />
        </ShopButton>
        <img 
          src="../assets/image/sleepSuperment/stripe.png" 
          loading="lazy"
          alt="logo-stripe" 
          class="md:left-12 md:bottom-1 md:relative strip max-w-[150px] md:max-w-[100px]">
      </div>
    </div>
  </section>
  <section class="non-habit-forming">
    <div class="description-forming">
      <p>"We’re proud to share our true purpose: to offer real relief from anxiety and deep, natural sleep, without anything harmful."</p>
      <p class="superment-team">The Superment Team</p>
    </div>
    <div class="img-non">
      <img 
        src="../assets/image/sleepSuperment/capsula-flores.png" 
        loading="lazy"
        alt="capsula e flores" 
        class="image-forming">
    </div>
  </section>
  <section class="ingredients relative z-10">
    <div class="title">
      <p>The ingredients you can trust.</p>
    </div>
    <div class="description">
      <p>Tired of being tired? We created a clean botanical blend to help your body rediscover natural, restful sleep.</p>
    </div>
    <div class="carrossel-ingredients">
      <IngredientsCarousel></IngredientsCarousel>
    </div>
  </section>
  <Stress/>
  <section class="shop-rest">
    <div class="imagem-centralizada">
      <img 
        src="../assets/image/sleepSuperment/moca.png" 
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
        :anchorId="width < 1024 ? 'id-shop-now' : 'id-shop-now-desk'"
        :showIcon="false"
        class="botao-shop rounded-md !hover:bg-none pb-1 !px-0 !bg-transparent">
        <img
          alt="button-shop"
          loading="lazy"
          src="../assets/image/sleepSuperment/botao-shop-rest.png"
          class="1 w-[200px] h-[36px] rounded object-cover transition-transform duration-300 hover:scale-110"

        />
      </ShopButton>
      <div>
        <span class="stripe">
          <img 
            alt="logo-stripe"
            loading="lazy"
            src="../assets/image/sleepSuperment/stripe.png" ></img>
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
      <TestimonialsCarousel/>
    </div>
  </section>
  <section class="everyone">
    <p class="title">Why everyone is switching to Super Natural Sleep.</p>
    <img 
      loading="lazy"
      src="../assets/image/sleepSuperment/tabela.png" 
      alt="table" 
      class="table">
    <img 
      loading="lazy"
      src="../assets/image/sleepSuperment/selos.png" 
      alt="selos" 
      class="selos">
  </section>
  <Frascos/>
  <Stopwatch />
  <section class="questions">
    <p class="title">Frequently asked questions:</p>
    <section class="faq">
      <FAQ />
    </section>
  </section>
  <SuperFooter/>
  <NotificationDisplay/>
  <BannerModal/>
</template>