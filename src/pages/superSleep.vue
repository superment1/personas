<script setup>
  import '@/styles/superSleep.scss';
  import { defineProps, useAttrs } from 'vue'
  import FAQ from '@/components/Faq.vue';
  import IngredientsCarousel from '@/components/IngredientsCarousel.vue';
  import SuperHeader from '../components/SuperHeader.vue';
  import SuperFooter from '../components/SuperFooter.vue';
  import TestimonialsCarousel from '../components/TestimonialsCarousel.vue';
  import Stopwatch from '../components/Stopwatch.vue';
  import Frascos from '../components/sleepSupermentComponents/Frascos.vue';
  import Stress from '../components/sleepSupermentComponents/Stress.vue';
  import ShopButton from '../components/ShopButton.vue';

  // function handleClick() {
  //   console.log('veio k')
  //   // window.location.href = `${props.url}`;
  // }
  const attrs = useAttrs();
</script>

<template>
  <SuperHeader :show-redirect="false"/>
  <section class="super-natural-sleep" id="super-sleep-pequeno">
    <div class="title-super-natural-sleep">
      <span class="product-title">FINALLY, <br> RESTFUL SLEEP.</span>
      <span class="product-sub-title">Natural, safe, and effective.</span>
    </div>
    <div class="description">
      <span class="description">Try our premium <br> natural sleep formula,</span>
      <span class="description" style="font-weight: bold;">now 36% off <br> for a limited time!</span>
      <ShopButton
        type="button"
        id="buy-button"
        :showIcon="false"
        class="botao-shop rounded-md ml-550px !hover:bg-none !transition-none !px-0 !bg-transparent mt-10">
        <img
          src="@/assets/image/sleepSuperment/botao-shop.png"
          class="1 w-[200px] h-[36px] rounded object-cover transition-transform duration-300 hover:scale-110"
        />
      </ShopButton>
      <!-- <button>
        <img src="@/assets/image/sleepSuperment/botao-shop.png" alt="botao-shop" class="botao-shop">
      </button> -->
      <div>
        <span class="stripe">Powered by <span class="stripe-bold">stripe</span></span>
      </div>
    </div>
  </section>
  <section class="super-natural-sleep" id="super-sleep-grande">
    <div class="title">
      <span class="product-title">FINALLY, <br> RESTFUL SLEEP.</span>
      <span class="product-sub-title">Natural, safe, and effective.</span>
      <div class="description">
        <span class="description">Try our premium natural <br> sleep formula, <strong>now 36% off</strong> <br>for a limited time!</span>
      </div>
    </div>
    <div class="button">
      <div>
        <ShopButton
          type="button"
          id="buy-button"
          productId="prod_SbKYsQrxStW8wB"
          :showIcon="false"
          class="botao-shop rounded-md ml-550px !hover:bg-none !transition-none !px-0 !bg-transparent">
          <img
            src="@/assets/image/sleepSuperment/botao-shop.png"
            class="1 w-[200px] h-[36px] rounded object-cover transition-transform duration-300 hover:scale-110"
          />
        </ShopButton>
        <img src="@/assets/image/sleepSuperment/stripe.png" alt="" class="2 strip">
      </div>
    </div>
  </section>
  <section class="non-habit-forming">
    <div class="description-forming">
      <p>"We proudly bring this to you with <br> one purpose: to provide real, <br>natural sleep support, <br> free of anything harmful."</p>
      <p class="superment-team">Superment Team</p>
    </div>
    <div class="img-non">
      <img src="@/assets/image/sleepSuperment/capsula-flores.png" alt="capsula e flores" class="image-forming">
    </div>
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
  <Stress/>
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
          <p class="description" id="description-maior">experienced grogginess or unwanted side effects.</p>
        </div>
      </div>
      <ShopButton
        type="button"
        id="buy-button"
        :showIcon="false"
        class="botao-shop rounded-md ml-550px !hover:bg-none !transition-none !px-0 !bg-transparent">
        <img
          src="@/assets/image/sleepSuperment/botao-shop-rest.png"
          class="1 w-[200px] h-[36px] rounded object-cover transition-transform duration-300 hover:scale-110"

        />
      </ShopButton>
      <!-- <button @click="handleClick">
        <div class="botao-shop-rest"></div>
      </button> -->
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
    <img src="@/assets/image/sleepSuperment/tabela.png" alt="table" class="table">
    <img src="@/assets/image/sleepSuperment/selos.png" alt="selos" class="selos">
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
</template>