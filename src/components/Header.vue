<template>
  <header
    :class="['rounded-b-3xl flex justify-center items-center px-4 py-3 pt-14 lg:pt-18 relative z-10']"
    :style="{ backgroundColor: color }"
  >
    <img :src="imageSrc" alt="Superment" class="w-24 h-16 lg:w-36 lg:h-20" />
  </header>
</template>

<script lang="ts" setup>
    defineProps<{
        color: string
        imageSrc: string
    }>()
</script>
