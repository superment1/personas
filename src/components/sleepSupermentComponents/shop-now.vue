<template>
  <div
    class="bg-image-mobile sm:bg-image-desktop flex flex-col items-center justify-between py-5 px-0 bg-cover bg-center bg-no-repeat"
  >
    <!-- Título no topo -->
    <p class="title">
      Botanical blend helping you to relax. 
    </p>

    <!-- Itens em grade 2x2 -->
    <div class="grid grid-cols-2">
      <!-- Primeira Coluna -->
      <div class="flex flex-row items-center pl-6">
        <span class="w-5 h-5 bg-[url('@/assets/image/icons/icone-circle.png')] bg-contain bg-no-repeat bg-center"></span>
        <p class="text-[#FFFAF0] text-sm ml-1 description">Soothe tension</p>
      </div>
      <!-- Segunda Coluna -->
      <div class="flex flex-row items-center pr-6">
        <span class="w-5 h-5 bg-[url('@/assets/image/icons/icone-circle.png')] bg-contain bg-no-repeat bg-center"></span>
        <p class="text-[#FFFAF0] text-sm ml-1 description">Sleep longer</p>
      </div>
      <!-- Primeira Coluna -->
      <div class="flex flex-row items-center pl-6">
        <span class="w-5 h-5 bg-[url('@/assets/image/icons/icone-circle.png')] bg-contain bg-no-repeat bg-center"></span>
        <p class="text-[#FFFAF0] text-sm ml-1 description">Relaxation</p>
      </div>
      <!-- Segunda Coluna -->
      <div class="flex flex-row items-center pr-6">
        <span class="w-5 h-5 bg-[url('@/assets/image/icons/icone-circle.png')] bg-contain bg-no-repeat bg-center"></span>
        <p class="text-[#FFFAF0] text-sm ml-1 description">Wake up recharged</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
@font-face {
  font-family: 'Crossfit';
  src: url('../../assets/fonts/crossfit/Crossfit-Black.otf') format('truetype');
  font-weight: 900;
  font-style: normal;
}

.bg-image-mobile {
  @apply w-[full] h-[494px] bg-cover bg-center bg-no-repeat;
  background-image: url('@/assets/image/sleepSuperment/frascos.png');
}

@media (min-width: 640px) {
  .bg-image-desktop {
    background-image: url('@/assets/image/sleepSuperment/frascos.png');
  }
}

p.title {
  font-family: 'Crossfit';
  font-weight: 900;
  font-size: 28px;
  line-height: 28px;
  text-align: center;
  color: #FFFAF0;
  width: 280px;
}

p.description {
  font-family: 'DM Sans';
  font-weight: 700;
  font-style: Bold;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0%;

}
</style>
