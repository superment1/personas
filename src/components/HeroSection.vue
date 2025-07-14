<script setup>
defineOptions({
  name: 'HeroSection'
})

defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
})

</script>

<template>
  <section
    class="bg-contain bg-center bg-no-repeat w-full min-h-screen"
    :style="{ backgroundImage: `url(${imageUrl})` }"
  >
    <div class="w-full min-h-screen h-full bg-opacity-40 flex items-center justify-center">
      <slot />
    </div>
  </section>
</template>
