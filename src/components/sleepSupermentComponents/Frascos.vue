<script setup>
  import ShopNow from './ShopNow.vue';
  
  defineProps({
    description: {
      type: String,
      default: 'A botanical blend that helps you relax.',
    }
  });
</script>

<template>
  <!-- MOBILE  -->
  <div class="bg-[#370F1E] sm:hidden">
      <img
        src="/assets/frascos-427.webp"
        srcset="/assets/frascos-427.webp 427w, /assets/frascos-560.webp 560w"
        alt="Frascos Superment Mobile"
        sizes="427px"
        loading="lazy" decoding="async"
        class="w-full h-[540px] object-cover absolute mb-6"
        width="540"
        height="540"
      />
    <div class="relative w-full h-[540px] flex flex-col justify-between pt-8 pb-10">
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
    <ShopNow id="id-shop-now"/>
  </div>

  <!-- DESKTOP -->
  <div class="w-full h-[429px] hidden md:flex items-center flex-col bg-[#370F1E] p-8" id="id-shop-now-desk">
    <p v-html="description" class="text-[28px] leading-[28px] text-[#FFFAF0] font-[900] font-crossfit text-center lg:text-[34px] w-full mx-auto mb-8">
    </p>
      <img
        src="@/assets/image/sleepSuperment/frascos-sem-fundo.webp"
        alt="Frascos Super Natural Sleep"
        loading="lazy"
        width="600"
        height="494"
        class="object-contain -ml-20"
      />
      <div class=" absolute sm:max-w-[700px] flex sm:pt-8 sm:gap-44 flex-row justify-between ">
        <div class="w-full grid grid-cols-1 gap-y-1 lg:flex flex-col justify-end items-start mt-40">
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
}

@media (min-width: 1024px) {
  .mobile {
    display: none;
  }

  .desktop {
    display: block
  }
}

p.description {
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
}
</style>
