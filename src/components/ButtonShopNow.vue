<script setup>
import { defineProps, useAttrs } from 'vue'

const props = defineProps({
  url: String,
  label: String
})
const attrs = useAttrs()

function handleClick() {
  window.location.href = `https://checkout.stripe.com/pay/${props.url}`;
}

</script>

<style scoped>
  .button {
    background-color: #6EC8F0;
    width: 326px;
    height: 44px;
    border: none;
    border-radius: 6px;
    font-weight: 700;
    font-size: 14px;
  }

  .checkout-button:hover {
    background-color: #52b2e3;
  }
</style>

<template>
  <button
    @click="handleClick"
    class="button"
    style="background-color: #6EC8F0; width: 326px; height: 44px; border-radius: 5px; color: #370F1E;" 
    v-bind="attrs"
  >
      <span>
        {{ label }}
      </span>
  </button>
</template>

