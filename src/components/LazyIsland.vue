<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({ rootMargin: { type: String, default: '400px' } })
const el = ref(null)
const show = ref(false)
let io

onMounted(() => {
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver((entries) => {
      if (entries.some(e => e.isIntersecting)) { show.value = true; io.disconnect() }
    }, { rootMargin: props.rootMargin })
    io.observe(el.value)
  } else {
    show.value = true
  }
})
onBeforeUnmount(() => io?.disconnect())
</script>

<template>
  <div ref="el"><slot v-if="show" /></div>
</template>
