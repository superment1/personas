<script setup>
  import ShopNow from './ShopNow.vue';
  
  defineProps({
    description: {
      type: String,
      default: 'Botanical blend helping you to relax.',
    }
  });
</script>

<template>
  <!-- MOBILE  -->
  <div class="bg-[#370F1E] mobile">
    <div class="w-full h-full bg-image flex flex-col justify-between pt-8 pb-8">
      <p v-html="description" class="text-[28px] leading-[28px] text-[#FFFAF0] font-[900] font-crossfit text-center lg:text-[34px] w-full max-w-[280px] mx-auto mb-5">
      </p>
      <div class="grid grid-cols-2">
          <div class="flex flex-row items-center pl-8">
            <span class="w-5 h-5 bg-[url('@/assets/image/icons/icone-circle.png')] bg-contain bg-no-repeat bg-center"></span>
            <p class="text-[#FFFAF0] text-sm ml-1 description">Soothe tension</p>
          </div>
          <div class="flex flex-row items-center pr-1">
            <span class="w-5 h-5 bg-[url('@/assets/image/icons/icone-circle.png')] bg-contain bg-no-repeat bg-center"></span>
            <p class="text-[#FFFAF0] text-sm ml-1 description">Sleep longer</p>
          </div>
          <div class="flex flex-row items-center pl-8">
            <span class="w-5 h-5 bg-[url('@/assets/image/icons/icone-circle.png')] bg-contain bg-no-repeat bg-center"></span>
            <p class="text-[#FFFAF0] text-sm ml-1 description">Relaxation</p>
          </div>
          <div class="flex flex-row items-center pr-1">
            <span class="w-5 h-5 bg-[url('@/assets/image/icons/icone-circle.png')] bg-contain bg-no-repeat bg-center"></span>
            <p class="text-[#FFFAF0] text-sm ml-1 description">Wake up recharged</p>
          </div>
      </div>
    </div>
    <ShopNow/>
  </div>

  <!-- DESKTOP -->
  <div class="w-full h-[500px] desktop md:flex flex-col bg-[#370F1E] p-8">
    <p v-html="description" class="text-[28px] leading-[28px] text-[#FFFAF0] font-[900] font-crossfit text-center lg:text-[34px] w-full mx-auto mb-8">
    </p>
    <div class="w-[full] bg-image flex items-start justify-center">
        <div class="w-[1000px] flex flex-row justify-between ">
          <div class="w-[full] grid grid-cols-1 gap-y-1 lg:flex flex-col justify-start items-start mt-40 ml-36">
            <div class="flex flex-row items-center">
              <span class="w-5 h-5 bg-[url('@/assets/image/icons/icone-circle.png')] bg-contain bg-no-repeat bg-center"></span>
              <p class="text-[#FFFAF0] text-[28px] ml-2 description">Soothe tension</p>
            </div>
            <div class="flex flex-row items-center">
              <span class="w-5 h-5 bg-[url('@/assets/image/icons/icone-circle.png')] bg-contain bg-no-repeat bg-center"></span>
              <p class="text-[#FFFAF0] text-[28px] ml-2 description">Relaxation</p>
            </div>
            <div class="flex flex-row items-center">
              <span class="w-5 h-5 bg-[url('@/assets/image/icons/icone-circle.png')] bg-contain bg-no-repeat bg-center"></span>
              <p class="text-[#FFFAF0] text-[28px] ml-2 description">Sleep longer</p>
            </div>
            <div class="flex flex-row items-center">
              <span class="w-5 h-5 bg-[url('@/assets/image/icons/icone-circle.png')] bg-contain bg-no-repeat bg-center"></span>
              <p class="text-[#FFFAF0] text-[28px] ml-2 description">Wake up recharged</p>
            </div>
          </div>
          <div class="w-[350px] flex flex-col justify-end items-end mt-8">
            <div> 
              <ShopNow/>
            </div>
          </div>
        </div>
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
@media (max-width: 1024px) {
  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }

  .bg-image {
    /* width: 100%; */
    height: 540px;
    background-image: url('@/assets/image/sleepSuperment/frascos.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}

@media (min-width: 1024px) {
  .mobile {
    display: none;
  }

  .desktop {
    display: block
  }

  .bg-image {
    @apply w-full h-[494px] bg-contain bg-center bg-no-repeat !important;
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
