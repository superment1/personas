<template>
  <div
    @click="onClick"
    class="flex items-center justify-center rounded-full border border-[#370F1E] bg-white
           w-8 h-8 md:w-10 md:h-10 cursor-pointer"
    :style="{ backgroundColor: background}"
  >
    <svg
      v-if="direction === 'right'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
      fill="none"
      stroke="#370F1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="14 6 20 12 14 18" />
    </svg>

    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
      fill="none"
      stroke="#370F1E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="20" y1="12" x2="4" y2="12" />
      <polyline points="10 6 4 12 10 18" />
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  direction: {
    type: String,
    default: 'right',
  },
  background: {
    type: String,
    default: '#FFF'
  }
})
const emit = defineEmits(['click'])

function onClick() {
  emit('click')
}
</script>
