<script setup>
  import CTAButton from '../components/CtaButton.vue';
  import ButtonShop from '../components/ButtonShopNow.vue';
</script>

<style scoped>
  @font-face {
    font-family: 'Crossfit';
    src: url('@/assets/fonts/crossfit/Crossfit-Black.otf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Crossfit-Black';
    src: url('../assets/fonts/crossfit/CrossfitDemo-Black.otf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Crossfit-Bold';
    src: url('../assets/fonts/crossfit/CrossfitDemo-Bold.otf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  .topo {
    background: #E1DCCD;
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 50px 0 0 0;
  }

  .topo img {
    width: 250px;
    height: auto;
    object-fit: cover;  
  }

  .scroll-link-products {
    background: #370F1E;
    height: 25px;
    width: 100%;  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    overflow-x: auto;
    white-space: nowrap;
    overflow: hidden; /* oculta texto que sai fora da área */
    position: relative;
    -webkit-overflow-scrolling: touch;
  }

  .scroll-link-products p {
    padding: 0 26px;
    display: inline-block; 
    color: white;
    text-align: center;
    width: 100%;
    font-size: 12px;
    font-family: 'DM Sans';
    font-weight: 200;
    word-spacing: 2px;
    animation: scroll-text 20s linear infinite;
  }

  @keyframes scroll-text {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(-100%);
    }
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
    font-family: 'Crossfit-Black';
    font-weight: bold;
    color:#6EC8F0;
    
    display: block;
    line-height: 44px; 
    word-spacing: 0%;

  }

  span.product-sub-title {
    font-family: 'Crossfit-Black';
    font-weight: 900;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0%;
    color: #370F1E;
  }

  div.description {
    width: 200px;
    height: 280px;
    padding: 35px 0 0 25px;
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
    margin-top: 55px;
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

  .non-habit-forming {
    width: 100%;
    height: 337px;
    background: #FFFAF0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  div.description-forming {
    width: 400px;
    height: 100;
    top: 571px;
    left: 51px;
    opacity: 1;
    padding: 30px 50px 0 50px;
  }

  div.description-forming p {
    font-family: 'Gelasio';
    font-weight: 600;
    font-style: Italic;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -2%;
    text-align: center;
    color: #370F1E;
    text-align: center;     /* Justifica o texto */

  }

  div.image-forming {
    background-image: url('../assets/image/capsula-flores.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 182px;
    width: 324px;

    margin-top: 20px;
    margin-left: 30px;
  }

  section.ingredients {
    background: #E1DCCD;
    width: 100%;
    height: 403px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 0;
  }

  section.ingredients div.title {
    width: 234px;
    height: 64px;
  }

  section.ingredients div.title p {
    font-family: 'Crossfit-Black';
    font-weight: bold;
    font-size: 32px;
    line-height: 32px;
    letter-spacing: 0%;
    text-align: center;
    color: #370F1E;
  }

  section.ingredients div.description {
    width: 340px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  section.ingredients div.description p {
    font-family: 'DM Sans';
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: center;
    color: #370F1E;
    width: 340px;
  }

  section.ingredients div.carrossel-ingredients {
    width: 100%;
    height: 249px;
  }

  section.stress {
    width: 100%;
    height: 527px;
    background: #370F1E;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 40px 0 0 0;
  }

  section.stress div.title {
    width: 304px;
    height: 77px;
  }

  section.stress div.title p {
    font-family: 'Crossfit-Bold';
    font-size: 28px;
    line-height: 28px;
    font-weight: 400;
    letter-spacing: 0%;
    text-align: center;
    color: #FFFAF0;
  }

  section.stress div.description {
    width: 254px;
    height: 39px;
    margin-top: -30px;
  }

  section.stress div.description p {
    font-family: 'DM Sans';
    font-weight: 400;
    font-style: 'Regular';
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: center;
    color: #FFFAF0;
  }

  section.stress div.item-1-content {
    width: 165px;
    height: 130px;
  }

  section.stress div.item-2-content {
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
  }

  #title-stress {
    height: 60px;
    font-family: 'Crossfit';
    font-weight: 900;
    font-style: black;
    font-size: 50px;
    text-align: center;
    color: #FFFAF0;
    margin-top: 20px;

  }

  #description-stress {
    width: 150px;
    font-family: 'DM Sans';
    font-weight: 400;
    font-style: 'Medium';
    line-height: 16px;
    font-size: 14px;
    letter-spacing: 0%;
    text-align: center;
    color: #FFFAF0;
  }

  #sub-description-stress {
    font-family: 'DM Sans';
    font-weight: 200;
    font-style: 'Medium';
    font-size: 8px;
    line-height: 16px;
    letter-spacing: 0%;
    text-align: center;
    color: #FFFAF0;
  }

  section.shop-rest {
    width: 100%;
    height: 434px;
    background-color: #E1DCCD;
    position: relative;
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .imagem-centralizada {
    position: absolute;
    top: -100px; /* faz a imagem subir para invadir a section de cima */
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

  .imagem-centralizada img {
    width: 233px;
    height: 203px;
    border-radius: 12px; /* ou 16px, se quiser arredondar */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  section.shop-rest div.infos {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    height: 370px;
  }

  section.shop-rest div.infos p.title {
    width: 272px;
    font-family: 'Crossfit-Black';
    font-weight: bold;
    font-style: Black;
    font-size: 28px;
    line-height: 28px;
    letter-spacing: 0%;
    text-align: center;
    color: #370F1E;
  }

  section.shop-rest div.infos p.description-title {
    margin-top: 10px;
    width: 238px;
    font-family: 'DM Sans';
    font-weight: 500;
    font-style: Regular;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: center;
    color: #370F1E;
    margin-bottom: 30px;
  }

  section.shop-rest div.infos div.infos-users {
    width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  section.shop-rest div.infos div.infos-users div.info {
    width: 112px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  section.shop-rest div.infos div.infos-users div.info p.number {
    font-family: 'Crossfit';
    font-weight: 900;
    font-style: Black;
    font-size: 50px;
    line-height: 35px;
    letter-spacing: 0%;
    text-align: center;
    color: #370F1E;
  }
  
  section.shop-rest div.infos div.infos-users div.info p.description {
    width: 110px;
    font-family: 'DM Sans';
    font-weight: 600;
    font-style: Medium;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0%;
    text-align: center;
    color: #370F1E;
  }
  
  section.shop-rest div.botao-shop-rest {
    background-image: url('../assets/image/botao-shop-rest.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 36px;
    width: 200px;
  }

  section.everyone {
    width: 100%;
    height: 442px;
    background-color: #370F1E;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  section.everyone p.title {
    font-family: 'Crossfit-Black';
    font-weight: 100;
    font-size: 28px;
    line-height: 28px;
    letter-spacing: 0%;
    text-align: center;
    color: #FFFAF0;
    width: 306px;
    margin-top: 40px;
  }

  div.table {
    background-image: url('../assets/image/tabela.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 219px;
    width: 328px;
    margin-top: 20px;
  }

  div.selos {
    background-image: url('../assets/image/selos.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 74px;
    width: 341px;
    margin-top: 5px;
  }

  section.supplement {
    background-color: #FFFAF0;
    width: 100%;
    height: 529px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
  
  section.supplement p.description {
    font-family: 'Gelasio';
    font-weight: 600;
    font-style: Italic;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -2%;
    text-align: center;
    color: #370F1E;
    width: 290px;
    margin-top: 30px;
  }

  section.supplement div.image-text {
    width: 100%;
    height: 280px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin-top: 20px;
  }
  
  section.supplement div.image-text div.image {
    background-image: url('../assets/image/homem-acordando.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 270px;
    width: 158px;
    margin-top: 5px;
  }

  section.supplement div.image-text div.text {
    width: 50%;
    height: 269px;
    margin-left: 15px;
  }
  
  section.supplement div.image-text div.text p.text {
    font-family: 'DM Sans';
    font-weight: 500;
    font-style: Regular;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0%;
    color: #370F1E;
  }

  section.supplement p.description-finally {
    width: 330px;
    margin-top: 25px;
    color: #370F1E;
    font-family: 'DM Sans';
    font-weight: 700;
    font-style: Bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0%;
  }

  section.frascos {
    background-image: url('../assets/image/frascos.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 530px;
    width: 100%;
  }

  section.shop-now {
    background-color: #370F1E;
    width: 100%;
    height: 315px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  section.shop-now p.shop {
    font-family: Gelasio;
    font-weight: 100;
    font-style: Italic;
    font-size: 31px;
    line-height: 28px;
    letter-spacing: 0%;
    text-align: center;
    color: #FFFAF0;
    margin-top: 40px;
  }

  section.shop-now div.stripe-white {
    background-image: url('../assets/image/stripe-branco.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 17px;
    width: 102px;
    margin-top: 5px;
  }

  section.shop-now div.buttons {
    width: 100%;
    height: 155px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 35px;
  }

</style>

<template>
  <section class="topo">
    <img src="../assets/image/superment.gif" alt="Logo animado" />
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
      <span class="description">Try our premium natural sleep formula,</span>
      <span class="description" style="font-weight: bold;">now 36% off</span>
      <span class="description" style="font-weight: bold;">for a limited time!</span>
      <div class="botao-shop"></div>
      <div class="strip"></div>
    </div>
  </section>
  <section class="non-habit-forming">
    <div class="description-forming">
      <p>"We proudly bring this with one purpose: to give you real, natural sleep support, free of anything harmful."</p>
    </div>
    <div class="image-forming"></div>
  </section>
  <section class="ingredients">
    <div class="title">
      <p>The ingredients you can trust.</p>
    </div>
    <div class="description">
      <p>Tired of being tired? We created a clean botanical blend to help your body rediscover natural, restful sleep.</p>
    </div>
    <div class="carrossel-ingredients"></div>
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
          <p class="description" style="width: 150px;">experienced grogginess or unwanted side effects.</p>
        </div>
      </div>
      <div class="botao-shop-rest"></div>
    </div>
  </section>
  <section class="everyone">
    <p class="title">Why everyone is switching to Super Natural Sleep.</p>
    <div class="table"></div>
    <div class="selos"></div>
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
    <p class="description-finally">Our friends and family tried it first and loved it. Now, we’re excited to finally share it with you.</p>
  </section>
  <section class="frascos">
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
</template>