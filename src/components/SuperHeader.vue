<script setup>
  defineProps({
    showRedirect: Boolean
  })
</script>

<style scoped>
  .topo {
    background: #E1DCCD;
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .topo img {
      width: 250px;
      height: auto;
      object-fit: cover;  
  }

  .scroll-link-products {
      background: #370F1E;
      height: 28px;
      width: 100%;
      overflow: hidden;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .scroll-text-wrapper {
      display: flex;
      width: max-content; 
      align-items: center;
      justify-content: center;
      animation: scroll-text 40s linear infinite;
  }

  .scroll-text-wrapper p {
      font-family: 'DM Sans';
      margin: 0;
      padding: 0 2rem;
      color: white;
      font-size: 13px;
      font-weight: 300;
      line-height: 25px;
      white-space: nowrap;
  }

  .espacada {
    letter-spacing: 8px;
    margin-left: 8px;
  }


  @keyframes scroll-text {
      0% {
          transform: translateX(0%);
      }
      100% {
          transform: translateX(-50%);
      }
  }
</style>

<template>
  <section class="topo">
    <a 
      v-if="showRedirect"
      href="/sleep/" 
      class="absolute bg-[#fff9ed] rounded-2xl left-4 top-[3.5rem] flex items-center text-sm text-[#370f1e] hover:text-gray-700"
    >
      <svg class="w-8 h-8 mr-[1px]" fill="none" stroke="currentColor" stroke-width="1.2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </a>
    <img src="@/assets/image/sleepSuperment/superment.gif" alt="Logo animado" />
  </section>
  <section class="scroll-link-products">
    <div class="scroll-text-wrapper">
      <p>Made in the USA <span class="espacada">|</span> Clean, natural, no fillers <span class="espacada">|</span> Save 30% <span class="espacada">|</span> 30-day money-back guarantee <span class="espacada">|</span> Real reviews rated 4.9/5.0 <span class="espacada">|</span> 98% would recommend this product</p>
      <p>Made in the USA <span class="espacada">|</span> Clean, natural, no fillers <span class="espacada">|</span> Save 30% <span class="espacada">|</span> 30-day money-back guarantee <span class="espacada">|</span> Real reviews rated 4.9/5.0 <span class="espacada">|</span> 98% would recommend this product</p>
      <p>Made in the USA <span class="espacada">|</span> Clean, natural, no fillers <span class="espacada">|</span> Save 30% <span class="espacada">|</span> 30-day money-back guarantee <span class="espacada">|</span> Real reviews rated 4.9/5.0 <span class="espacada">|</span> 98% would recommend this product</p>
      <p>Made in the USA <span class="espacada">|</span> Clean, natural, no fillers <span class="espacada">|</span> Save 30% <span class="espacada">|</span> 30-day money-back guarantee <span class="espacada">|</span> Real reviews rated 4.9/5.0 <span class="espacada">|</span> 98% would recommend this product</p>
      <p>Made in the USA <span class="espacada">|</span> Clean, natural, no fillers <span class="espacada">|</span> Save 30% <span class="espacada">|</span> 30-day money-back guarantee <span class="espacada">|</span> Real reviews rated 4.9/5.0 <span class="espacada">|</span> 98% would recommend this product</p>
      <p>Made in the USA <span class="espacada">|</span> Clean, natural, no fillers <span class="espacada">|</span> Save 30% <span class="espacada">|</span> 30-day money-back guarantee <span class="espacada">|</span> Real reviews rated 4.9/5.0 <span class="espacada">|</span> 98% would recommend this product</p>
    </div>
  </section>
</template>

