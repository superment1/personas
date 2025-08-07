<template>
  <footer
    :class="['relative z-10 -mt-10 pt-10 pb-20 rounded-t-3xl']"
    :style="{ backgroundColor: color }"
  >
    <div class="max-w-7xl mx-auto px-4 text-center">
      <div class="text-white text-xl lg:text-2xl font-bold mb-6 flex justify-center">
        <img :src="imageSrc" alt="Superment" class="w-200 h-38" />
      </div>
      <p class="text-white/80 text-[16px] text-xs lg:text-sm">
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
