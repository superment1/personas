<script setup>
  import CTAButton from '../components/CtaButton.vue';
</script>

<style scoped>
  @font-face {
    font-family: 'Crossfit';
    src: url('../assets/fonts/crossfit/CrossfitDemo-Black.otf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  .topo {
    background: #E1DCCD;
    height: 120px;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: end;
  }

  .title {
    font-size: 44px;
    font-family: 'Crossfit';
    color:#370F1E;
  }

  .scroll-link-products {
    background: #370F1E;
    height: 30px;
    width: 100%;  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
  }

  .scroll-link-products p {
    padding: 0 16px;
    display: inline-block; 
    color: white;
    text-align: center;
    width: 100%;
    font-size: 12px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-style: 'Regular';
  }

  .super-natural-sleep {
    background-image: url('../assets/image/super-natural-sleep.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 430px;
    width: 100%;
  }

  div.title-super-natural-sleep {
    width: 100%;
    height: 150px;
    padding: 35px 0 0 25px;
  }

  span.product-title {
    font-size: 44px;
    font-family: 'Crossfit';
    color:#6EC8F0;
    font-weight: 100;
    display: block;
    line-height: 1; 
    letter-spacing: 0%;
  }

  span.product-sub-title {
    font-family: Crossfit;
    font-weight: 200;
    font-style: Black;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0%;
    color: #370F1E;
  }

  div.description {
    width: 200px;
    height: 280px;
    padding: 20px 0 0 25px;
  }

  span.description {
    font-family: 'DM Sans';
    font-weight: 500;
    font-style: 'Regular';
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0%;
    display: block;
    color: #370F1E;
  }

  div.botao-shop {
    background-image: url('../assets/image/botao-shop.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 40px;
    width: 100%;
    margin-top: 70px;
  }

  div.strip {
    background-image: url('../assets/image/stripe.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 5px;
    margin-left: 40px;
    height: 15px;
    width: 92px;
  }
</style>

<template>
  <section class="topo">
    <h3 class="title">
      SUPERMENT&reg;
    </h3>
  </section>
  <section class="scroll-link-products">
    <p>Made in the USA   |   Clean, Natural, No Fillers   |   Save 30% | 30-Day Money-Back Guarantee</p>
  </section>
  <section class="super-natural-sleep">
    <div class="title-super-natural-sleep">
      <span class="product-title">FINALLY,</span>
      <span class="product-title">RESTFUL SLEEP.</span>
      <span class="product-sub-title">Natural, safe, and effective.</span>
    </div>
    <div class="description">
      <span class="description">Try our premium </span>
      <span class="description">natural sleep formula,</span>
      <span class="description" style="font-weight: bold;">now 36% off</span>
      <span class="description" style="font-weight: bold;">for a limited time!</span>
      <div class="botao-shop"></div>
      <div class="strip"></div>
    </div>
  </section>
</template>