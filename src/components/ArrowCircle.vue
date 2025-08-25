<template>
  <div
    @click="onClick"
    :class="containerClass"
    :style="{ backgroundColor }"
  >
    <svg
      v-if="direction === 'right'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      :class="arrowClass"
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
      :class="arrowClass"
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
import { computed } from 'vue'

const props = defineProps({
  direction: {
    type: String,
    default: 'right',
  },
  backgroundColor: {
    type: String,
    default: '#FFF',
  },
  responsive: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['click'])

function onClick() {
  emit('click')
}

const arrowClass = computed(() => {
  return props.responsive
    ? 'w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6'
    : 'w-6 h-6'
})

const containerClass = computed(() =>
  `flex items-center justify-center rounded-full border border-[#370F1E] bg-white cursor-pointer ${
    props.responsive ? 'w-8 h-8 md:w-10 md:h-10' : 'w-10 h-10'
  }`
)
</script>
