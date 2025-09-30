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
  <section
    class="relative flex flex-col justify-end text-center px-6 py-[23px] min-h-[620px] bg-cover"
    :style="{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }"
  >
    <div class="max-w-3xl flex flex-col items-center text-white z-10">
      <div v-if="logo" class="w-[80px] h-[15px]">
        <img :src="logo" alt="">
      </div>
      <div class="flex flex-col gap-[298px] pt-[42px] pb-[13px]">
        <h1 v-if="primary" class="font-gelasio font-bold italic text-[20px] lg:text-5xl">
        {{ primary }}
        </h1>
        <h2 v-if="secondary" class="font-gelasio px-[30px] italic text-[16px] lg:text-3xl leading-[1]">
          {{ secondary }}
        </h2>
      </div>
      
      <div v-if="extraTexts.length" class="flex flex-col gap-4 mt-4 leading-[14px]">
        <p v-for="(text, i) in extraTexts" :key="i" class="text-[13px] lg:text-base">
          {{ text }}
        </p>
      </div>
    </div>
  </section>
</template>
