<script setup>
  import ShopNow from './ShopNow.vue';
</script>

<template>
  <div class="bg-[#370F1E] bg-image-parent-lg flex flex-col lg:flex-row items-center justify-center px-0 lg:px-12 py-0 relative">
    <div class="hidden lg:flex flex-col justify-center items-end w-1/2 gap-5 ">
      <div class="grid grid-cols-1 gap-y-3 w-[180px] lg:flex flex-col justify-center items-start">
        <div class="flex flex-row items-center">
          <span class="w-5 h-5 bg-[url('@/assets/image/icons/icone-circle.png')] bg-contain bg-no-repeat bg-center"></span>
          <p class="text-[#FFFAF0] text-sm ml-2 description">Soothe tension</p>
        </div>
        <div class="flex flex-row items-center">
          <span class="w-5 h-5 bg-[url('@/assets/image/icons/icone-circle.png')] bg-contain bg-no-repeat bg-center"></span>
          <p class="text-[#FFFAF0] text-sm ml-2 description">Relaxation</p>
        </div>
        <div class="flex flex-row items-center">
          <span class="w-5 h-5 bg-[url('@/assets/image/icons/icone-circle.png')] bg-contain bg-no-repeat bg-center"></span>
          <p class="text-[#FFFAF0] text-sm ml-2 description">Sleep longer</p>
        </div>
        <div class="flex flex-row items-center">
          <span class="w-5 h-5 bg-[url('@/assets/image/icons/icone-circle.png')] bg-contain bg-no-repeat bg-center"></span>
          <p class="text-[#FFFAF0] text-sm ml-2 description">Wake up recharged</p>
        </div>
      </div>
    </div>

    <div class="w-full lg:w-1/2 h-[494px] bg-image-mobile bg-image-desktop flex flex-col items-center justify-between py-[40px] px-0">

    <p class="text-[28px] leading-[28px] text-[#FFFAF0] font-[900] font-crossfit text-center w-full max-w-[280px] mx-auto mb-5">
      Botanical blend helping you to relax.
    </p>

      <div class="grid grid-cols-2 lg:hidden">
        <div class="flex flex-row items-center pl-5">
          <span class="w-5 h-5 bg-[url('@/assets/image/icons/icone-circle.png')] bg-contain bg-no-repeat bg-center"></span>
          <p class="text-[#FFFAF0] text-sm ml-1 description">Soothe tension</p>
        </div>
        <div class="flex flex-row items-center pr-1">
          <span class="w-5 h-5 bg-[url('@/assets/image/icons/icone-circle.png')] bg-contain bg-no-repeat bg-center"></span>
          <p class="text-[#FFFAF0] text-sm ml-1 description">Sleep longer</p>
        </div>
        <div class="flex flex-row items-center pl-5">
          <span class="w-5 h-5 bg-[url('@/assets/image/icons/icone-circle.png')] bg-contain bg-no-repeat bg-center"></span>
          <p class="text-[#FFFAF0] text-sm ml-1 description">Relaxation</p>
        </div>
        <div class="flex flex-row items-center pr-1">
          <span class="w-5 h-5 bg-[url('@/assets/image/icons/icone-circle.png')] bg-contain bg-no-repeat bg-center"></span>
          <p class="text-[#FFFAF0] text-sm ml-1 description">Wake up recharged</p>
        </div>
      </div>
    </div>
    <div class="w-full h-full lg:w-1/2 mt- lg:mt-0 flex flex-row items-start justify-start">
      <ShopNow  />
    </div>
  </div>
</template>


<style scoped>
@font-face {
  font-family: 'Crossfit';
  src: url('../../assets/fonts/crossfit/Crossfit-Black.otf') format('woff2');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

/* Imagem mobile: ativa até 639px */
@media (max-width: 639px) {
  .bg-image-mobile {
    width: 100%;
    height: 540px;
    background-image: url('@/assets/image/sleepSuperment/frascos.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
}

/* Imagem desktop: ativa somente entre 640px e 1023px */
@media (min-width: 640px) and (max-width: 1023px) {
  .bg-image-desktop {
    @apply w-full h-[494px] bg-contain bg-center bg-no-repeat !important;
    background-image: url('@/assets/image/sleepSuperment/frascos-sem-fundo.png');
  }
}

@media (min-width: 1024px) {
  .bg-image-parent-lg {
    @apply bg-contain bg-center bg-no-repeat;
    background-image: url('@/assets/image/sleepSuperment/frascos-sem-fundo.png');
  }
}

p.description {
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
}
</style>
