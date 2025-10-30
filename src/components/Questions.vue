<script setup lang="ts">
import '../styles/superSleep.scss';
import ShopButton from './ShopButton.vue';
defineProps({
  title: String,
  items: {
    type: Array,
    default: () => []
  },
  auxText: String,
  showCta: {
    type: Boolean,
    default: true
  }
})
const anchorId = 'shop-relax'
</script>

<template>
  <section class="justify-items-center py-[36px] lg:px-0 lg:py-[60px] w-full">
    <h2 class="text-[32px] lg:text-[60px] leading-[1] px-[50px] text-center text-[#370F1E] font-crossfit mb-6 lg:mb-12">
      {{ title }}</h2>

    <ul class="font-sans border-t border-[#370F1E] max-w-[950px]">
      <li v-for="(item, i) in items" :key="i" class="lg:pt-[40px] pt-[12px]">
        <p class="text-[14px] lg:text-[26px] font-bold leading-[1.15] text-[#370F1E]">{{ item.question }}</p>
        <p
          class="text-[14px] font-medium lg:text-[26px] border-b pt-[19px] pb-[14px] lg:pb-[34px] leading-[1] border-[#370F1E] text-[#370F1E]">
          {{ item.resp }}</p>
      </li>
    </ul>
    <div v-if="showCta" class="flex mt-6 lg:mt-[60px] w-full lg:w-[650px]  justify-center">
      <ShopButton paymentLink="/relax" title="Try Super Relax Risk-Free" textColorClass="text-[#370F1E]"
        iconColorClass="text-[#370F1E]"
        :custom-class="'bg-[#FFDC03] lg:h-[100px] shadow-lg lg:text-[33px] font-bold w-full gap-2 mx-0'" />
    </div>
    <p v-if="auxText" class="mt-6 text-[9px] lg:w-[509px] leading-[1] lg:text-[16px] text-[#370F1E]">
      {{ auxText }}
    </p>
  </section>
</template>