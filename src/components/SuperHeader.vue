<script setup>

</script>

<style scoped>
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
      overflow: hidden;
      position: relative;
  }

  .scroll-text-wrapper {
      display: flex;
      width: max-content; 
      animation: scroll-text 15s linear infinite;
  }

  .scroll-text-wrapper p {
      font-family: 'DM Sans';
      margin: 0;
      padding: 0 2rem;
      color: white;
      font-size: 12px;
      font-weight: 400;
      line-height: 25px;
      white-space: nowrap;
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
    <a href="/" class="absolute bg-[#fff9ed] rounded-2xl left-4 top-[3.5rem] flex items-center text-sm text-[#370f1e] hover:text-gray-700">
      <svg class="w-8 h-8 mr-[1px]" fill="none" stroke="currentColor" stroke-width="1.2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </a>
    <img src="@/assets/image/sleepSuperment/superment.gif" alt="Logo animado" />
  </section>
  <section class="scroll-link-products">
    <div class="scroll-text-wrapper">
      <p>Made in the USA | Clean, natural, no fillers | Save 30% | 30-day money-back guarantee | Real reviews rated 4.9/5.0 | 98% would recommend this product</p>
      <p>Made in the USA | Clean, natural, no fillers | Save 30% | 30-day money-back guarantee | Real reviews rated 4.9/5.0 | 98% would recommend this product</p>
    </div>
  </section>
</template>

