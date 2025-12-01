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
        class="relative flex flex-col items-center lg:gap-[180px] overflow-hidden bg-no-repeat min-h-[675px] bg-cover"
        :style="{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }"
    >
    <div class="relative flex lg:max-w-[634px] flex-col text-center leading-[1] min-h-[650px] lg:min-h-full z-10 justify-between px-[50px] lg:px-0 py-8">
        <h1 class="text-white font-crossfit text-[32px] leading-tight">
            {{ primary }}
        </h1>
        <h2 class="lg:hidden text-white/90 px-[20px] font-crossfit text-[32px]">
            {{ secondary }}
        </h2>
    </div>
    <div class="flex px-[38px] lg:items-center lg:px-0 pb-[35px] lg:pb-[45px] gap-8">
        <img v-if="symbol"
            :src="symbol"
            :alt="primary || 'symbol'"
            class="w-[113px] h-[125px] lg:mt-[25px] object-contain" >
            <div class="flex flex-col  gap-[32px]">
                <h2 class="hidden lg:block text-white/90 max-w-[430px] font-crossfit leading-[1] text-[32px]">
                    {{ secondary }}
                </h2>
                <p class="text-white/90 font-gelasio italic max-w-[477px] text-[14px] lg:text-[20px]">
                    {{ subtitle }}
                </p>
            </div>
    </div>
    </section>
</template>