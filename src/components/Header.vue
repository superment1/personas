<template>
  <header :class="['rounded-b-2xl flex justify-center items-center h-[100px] lg:h-[105px] relative z-10']"
    :style="{ backgroundColor: color }">
    <img :src="imageSrc" alt="Superment" class="w-24 h-16 lg:w-36 lg:h-20" />
  </header>
</template>

<script lang="ts" setup>
defineProps<{
  color: string
  imageSrc: string
}>()
</script>
