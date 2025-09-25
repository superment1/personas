<script setup>
defineProps({
    items: {
    type: Array,
    default: () => [] 
  },
})
</script>
<template>
    <div class="grid gap-[30px] lg:gap-[60px] sm:grid-cols-2 lg:grid-cols-1">
      <div
        v-for="(item, i) in items"
        :key="i"
        :class="['flex flex-col gap-4 lg:gap-14',
         i % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row']"
      ><div class="flex flex-col gap-4 ">
        <h3 class="text-[16px] lg:text-[40px] leading-[1] font-gelasio italic font-bold text-[#370F1E]">
          {{ item.title }}
        </h3>
        <p class="text-[12px] lg:text-[26px] text-[#370F1E] font-gelasio italic leading-[1.3] pb-[7px]">{{ item.subtitle }}</p>
      </div>
         <img
          :src="item.image"
          :alt="item.title"
          :width="660"
          :height="400"
          class="w-[330px] lg:rounded-md h-[190px] lg:w-[350px] lg:h-[400px] object-cover"
        />
      </div>
    </div>
</template>