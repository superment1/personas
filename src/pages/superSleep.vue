<script setup>
  import '@/styles/superSleep.scss';
  import ButtonShop from '@/components/ButtonShopNow.vue';
  import FAQ from '@/components/Faq.vue';
  import IngredientsCarousel from '@/components/IngredientsCarousel.vue';
  import SuperHeader from '../components/SuperHeader.vue';
  import SuperFooter from '../components/SuperFooter.vue';
  import TestimonialsCarousel from '../components/TestimonialsCarousel.vue';
  import Stopwatch from '../components/Stopwatch.vue';
</script>

<template>
  <SuperHeader :show-redirect="false"/>
  <section class="header-desktop">
    <div class="header-content">
      <img src="@/assets/image/sleepSuperment/selos.png" alt="super-natural-sleep" class="super-natural-sleep-header">
      <img src="@/assets/image/sleepSuperment/selos.png" alt="selos" class="super-natural-sleep-header">
    </div>
  </section>
  <section class="super-natural-sleep">
    <div class="title-super-natural-sleep">
      <span class="product-title">FINALLY,</span>
      <span class="product-title">RESTFUL SLEEP.</span>
      <span class="product-sub-title">Natural, safe, and effective.</span>
    </div>
    <div class="description">
      <span class="description">Try our premium natural sleep formula,</span>
      <span class="description" style="font-weight: bold;">now 36% off for a limited time!</span>
      <button>
        <img src="@/assets/image/sleepSuperment/botao-shop.png" alt="botao-shop" class="botao-shop">
      </button>
      <img src="@/assets/image/sleepSuperment/stripe.png" alt="" class="strip">
    </div>
  </section>
  <section class="non-habit-forming">
    <div class="description-forming">
      <p>"We proudly bring this with one purpose: to give you real, natural sleep support, free of anything harmful."</p>
    </div>
    <img src="@/assets/image/sleepSuperment/capsula-flores.png" alt="capsula e flores" class="image-forming">
  </section>
  <section class="ingredients">
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
  <section class="stress">
    <div class="title">
      <p>Stress, screens, and burnout leave you drained.</p>
    </div>
    <div class="description">
      <p>Super Natural Sleep helps you rest, even on stressful days.</p>
    </div>
    <div class="item-1-content">
      <p id="title-stress">45%</p>
      <p id="description-stress">of people lose sleep because of stress — the top reason for insomnia.</p>
      <p id="sub-description-stress">American Psychological Association</p>
    </div>
    <div class="item-2-content">
      <div class="item">
        <p id="title-stress">35%</p>
        <p id="description-stress">of people sleep less than 7 hours, harming focus and mood.</p>
        <p id="sub-description-stress">CDC</p>
      </div>
      <div class="item">
        <p id="title-stress">46%</p>
        <p id="description-stress">of people feel burned out, draining their energy and wellbeing.</p>
        <p id="sub-description-stress">CDC / AJC.com</p>
      </div>
    </div>
  </section>
  <section class="shop-rest">
    <div class="imagem-centralizada">
      <img src="@/assets/image/sleepSuperment/moca.png" alt="Mulher com pílula" />
    </div>
    <div class="infos">
      <p class="title">The numbers behind Super Natural Sleep</p>
      <p class="description-title">What people are saying about our powerful botanical blend:</p>
      <div class="infos-users">
        <div class="info">
          <p class="number">75%</p>
          <p class="description">of users reported better sleep quality.</p>
        </div>
        <div class="info">
          <p class="number">0%</p>
          <p class="description" >experienced grogginess or unwanted side effects.</p>
        </div>
      </div>
      <div class="botao-shop-rest"></div>
    </div>
  </section>
  <section class="everyone">
    <p class="title">Why everyone is switching to Super Natural Sleep.</p>
    <img src="@/assets/image/sleepSuperment/tabela.png" alt="table" class="table">
    <img src="@/assets/image/sleepSuperment/selos.png" alt="selos" class="selos">
  </section>
  <section class="testimonials">
    <p class="title">What Supersleepers are saying?</p>
    <div class="assessment">
      <p class="notice">Rated 4.9/5.0</p>
      <p class="description"><strong>98%</strong> would recommend it for deeper, better sleep.</p>
    </div>
    <div class="testimonials">
      <TestimonialsCarousel/>
    </div>
  </section>
  <section class="frascos">
    <img src="@/assets/image/sleepSuperment/frascos.png" alt="frascos" class="frascos">
  </section>
  <section class="shop-now">
    <p class="shop">SHOP NOW</p>
    <div class="stripe-white"></div>
    <div class="buttons">
      <ButtonShop label="BUY ONE | PAY $32"></ButtonShop>
      <ButtonShop label="BUY THREE | PAY $28 PER BOTTLE"></ButtonShop>
      <ButtonShop label="BUY SIX | PAY $24 PER BOTTLE"></ButtonShop>
    </div>
  </section>
  <Stopwatch />
  <section class="questions">
    <p class="title">Frequently asked questions:</p>
    <section class="faq">
      <FAQ />
    </section>
  </section>
  <SuperFooter/>
</template>