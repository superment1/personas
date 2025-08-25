<template>
  <footer :class="['relative z-10 -mt-10  rounded-t-3xl']" :style="{ backgroundColor: color }">
    <div class="w-full h-[215px] flex flex-col justify-start items-center">
      <img :src="imageSrc" alt="Superment" class="w-[200px] h-38 mt-[43px]" />
      <p class="text-white/80 text-[14px] text-center mt-[27px] leading-[1.08] font-light">
        &copy; Super Natural Sleep Research 2025.<br />All Rights Reserved
      </p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
defineProps<{
  color: string
  imageSrc: string
}>()
</script>
