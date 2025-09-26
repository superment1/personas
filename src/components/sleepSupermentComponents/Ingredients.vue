<script setup>
  defineProps({
    bgImage:{
        type: String,
    },
    primary: {
      type: String,
      default: 'The ancient American secret for restorative sleep and vitality.',
    },
    secondary: {
      type: String,
      default: 'Now science-backed and boosted specially for you.',
    },
    subtitle: {
        type: String,
        default: 'At the heart of Super Natural Sleep lies the California Poppy, a golden flower once trusted by Native Californians to quiet the mind, ease sleep and strengthen health. We blended it with other soothing herbs to help you release daily tension, and sleep faster and deeper - restoring energy, balance and vitality in a long term.'
    },
    symbol:{
        type: String,
    }
  });
</script>

<template>
    <section
        class="relative overflow-hidden min-h-[961px] bg-no-repeat bg-cover"
        :style="{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }"
    >
    <div class="relative flex flex-col text-center leading-[1] z-10 min-h-[660px] justify-between px-[50px] py-8">
        <h1 class="text-white font-crossfit text-[32px] lg:text-[56px] leading-tight">
            {{ primary }}
        </h1>
        <h2 class="text-white/90 px-[20px] font-crossfit text-[32px] lg:text-[56px]">
            {{ secondary }}
        </h2>
    </div>
    <div class="flex px-[40px] gap-8">
        <img v-if="symbol"
            :src="symbol"
            :alt="primary || 'symbol'"
            class="w-[113px] h-[125px] object-contain" >
        <p class="text-white/90 px-[10px] font-gelasio italic text-[14px] lg:text-[20px]">
            {{ subtitle }}
        </p>
    </div>
    </section>
</template>