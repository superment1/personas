<script setup>
  import '@/styles/superSleep.scss';
  import ButtonShop from '@/components/ButtonShopNow.vue';
  import FAQ from '@/components/Faq.vue';
  import IngredientsCarousel from '@/components/IngredientsCarousel.vue'
</script>

<template>
  <section class="topo">
    <img src="../assets/image/superment.gif" alt="Logo animado" />
  </section>
  <section class="scroll-link-products">
    <div class="scroll-text-wrapper">
      <p>Made in the USA | Clean, natural, no fillers | Save 30% | 30-day money-back guarantee | Real reviews rated 4.9/5.0 | 98% would recommend this product</p>
      <p>Made in the USA | Clean, natural, no fillers | Save 30% | 30-day money-back guarantee | Real reviews rated 4.9/5.0 | 98% would recommend this product</p>
    </div>
  </section>
  <section class="header-desktop">
    <div class="header-content">
      <img src="@/assets/image/selos.png" alt="super-natural-sleep" class="super-natural-sleep-header">
      <img src="@/assets/image/selos.png" alt="selos" class="super-natural-sleep-header">
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
        <img src="@/assets/image/botao-shop.png" alt="botao-shop" class="botao-shop">
      </button>
      <img src="@/assets/image/stripe.png" alt="" class="strip">
    </div>
  </section>
  <section class="non-habit-forming">
    <div class="description-forming">
      <p>"We proudly bring this with one purpose: to give you real, natural sleep support, free of anything harmful."</p>
    </div>
    <img src="@/assets/image/capsula-flores.png" alt="capsula e flores" class="image-forming">
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
      <img src="../assets/image/moca.png" alt="Mulher com pílula" />
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
    <img src="@/assets/image/tabela.png" alt="table" class="table">
    <img src="@/assets/image/selos.png" alt="selos" class="selos">
  </section>
  <section class="supplement">
    <p class="description">“Why isn’t there a cleaner, natural way to help you truly rest, without worrying about side effects?”</p>
    <div class="image-text">
      <div class="image"></div>
      <div class="text">
        <p class="text">We’re not just a supplement company. We’re people who care about living well — and we see how poor sleep affects us and the people we love.</p>
        <br>
        <p class="text">We get it. No one wants to rely on strong pills that leave you groggy or make you feel stuck in a cycle. That’s not real rest.</p>
        <br>
        <p class="text">So we partnered with one of the most trusted labs in the U.S. to create Super Natural Sleep.</p>
      </div>
    </div>
    <div class="description-finally">
      <p >Our friends and family tried it first and loved it. Now, we’re excited to finally share it with you.</p>
    </div>
  </section>
  <section class="frascos">
    <img src="@/assets/image/frascos.png" alt="frascos" class="frascos">
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
  <section class="questions">
    <p class="title">Frequently asked questions:</p>
    <section class="faq">
      <FAQ show="true" question="da pra fazer?" response="sim, dá demais"></FAQ>
    </section>
  </section>
  <section class="footer">
    <p class="description">Super Natural Sleep is a supplement formulated with natural ingredients that relax the nervous system and guide the user into deep, restorative sleep. It does not contain melatonin or harsh chemicals. Super Natural Sleep is manufactured in the United States by an FDA registered and GMP-compliant laboratories. All product’s quality, safety, and compliance certifications are managed by our manufacturing partner. This product is not intended to diagnose, treat, cure or prevent any disease. Always consult your physician before starting any dietary supplement, especially if you are taking medications, are pregnant, or have a medical condition. Super Natural Sleep  is part of the commercial portfolio of Superment, a brand owned and operated by an internacional company in the United States.</p>
    <div class="line"></div>
    <img src="../assets/image/superment1.png" alt="superment">
    <p class="reserved">© Super Natural Sleep Research 2025. All Rights Reserved.</p>
  </section>
</template>