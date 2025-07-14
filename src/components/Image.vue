<!-- src/components/BaseImage.vue -->
<template>
  <img
    :src="src"
    :alt="alt"
    :class="imgClass"
    loading="lazy"
  />
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Imagem'
  },
  imgClass: {
    type: String,
    default: ''
  }

})
</script>
