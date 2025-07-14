<script setup>
import { defineProps, useAttrs } from 'vue'

const props = defineProps({
  checkoutUrl: String,
  anchorId: String,
  icon: String,

})
const attrs = useAttrs()

function handleClick() {
  if (props.anchorId) {
    const el = document.getElementById(props.anchorId)
    if (el) {
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  } else if (!props.anchorId && props.checkoutUrl) {
    window.location.href = `https://checkout.stripe.com/pay/${props.checkoutUrl}`
  }
}

</script>
<template>
  <button
    @click="handleClick"
     :class="[
      'group relative max-w-full flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out rounded-lg font-bold hover:opacity-90',
      props.icon 
      ? 'w-10 hover:gap-2 hover:w-48 min-h-[40px] pl-2 pr-2' 
      : 'px-4 py-2',
      attrs.class
    ]"
    v-bind="attrs"
  >
    <template v-if="props.icon">
      <img :src="props.icon" alt="icone" class="w-5 h-5 shrink-0" />
      <span
        class="max-w-0 group-hover:max-w-[200px] overflow-hidden whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
      >
        <slot>Quero Me Inscrever</slot>
      </span>
    </template>
    <template v-else>
      <slot>Quero Me Inscrever</slot>
    </template>

  </button>
</template>

