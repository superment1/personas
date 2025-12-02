<script setup lang="ts">

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<template>
  <ul class="w-full flex flex-col gap-6">
    <li
      v-for="(item, i) in props.items"
      :key="i"
      class="flex px-[35px] flex-col lg:flex-row items-center text-center"
    >
      <div class="">
        <img :src="item.image" alt="" class="w-auto h-auto rounded-[14px]" />
      </div>
      <div>    
        <h1 class="font-gelasio text-[32px] text-[#370F1E] italic mt-4">
          {{ item.title }}
        </h1>

        <p v-if="item.subtitle" class="font-DMSans font-black text-[13.5px] text-[#370F1E] mt-2">
          {{ item.subtitle }}
        </p>
        <p v-if="item.info" class="font-DMSans text-[13.5px] text-[#370F1E] mt-2">
          {{ item.info }}
        </p>
      </div>
    </li>
  </ul>
</template>
