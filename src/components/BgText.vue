<script setup lang="ts">
import '../styles/superSleep.scss';

const props = defineProps({
  logo: { type: String, default: "" },
  bgImage: { type: String, default: "" },
  primary: { type: String, default: "" },
  secondary: { type: String, default: "" },
  extraTexts: { type: Array as PropType<string[]>, default: () => [] },
})
</script>

<template>
  <div
    class="relative flex flex-col justify-end text-center min-h-[620px] lg:min-h-[832px] bg-cover"
    :style="{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }"
  >
    <div class="max-w-3xl flex flex-col items-center  px-6 lg:px-0 py-[23px] text-white z-10">
      <div v-if="logo" class="w-[80px] h-[15px] lg:w-[201px] lg:h-[38px]">
        <img :src="logo" alt="">
      </div>
      <div class="flex flex-col gap-[298px] pt-[42px] pb-[13px]">
        <h1 v-if="primary" class="font-gelasio font-bold italic text-[20px] lg:text-[28px]">
        {{ primary }}
        </h1>
        <h2 v-if="secondary" class="font-gelasio px-[30px] lg:px-0 italic text-[16px] lg:text-[32px] leading-[1]">
          {{ secondary }}
        </h2>
      </div>
      
      <div v-if="extraTexts.length" class="flex flex-col gap-4 lg:gap-[32px] mt-4 leading-[14px] lg:leading-[24px]">
        <p v-for="(text, i) in extraTexts" :key="i" class="text-[13px] lg:text-[24px]">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>
