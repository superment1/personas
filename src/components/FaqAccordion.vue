<script setup>
import { ref, watch, toRef } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})

const faqs = ref([...props.items])

watch(() => props.items, (newItems) => {
  faqs.value = [...newItems]
})

function toggle(index) {
  faqs.value.forEach((faq, i) => {
    faq.open = i === index ? !faq.open : false
  })
}
</script>

<template>
  <section class="faq !px-0">
    <div
      v-for="(faq, i) in faqs"
      :key="i"
      class="faq-item cursor-pointer py-4 border-b border-[#ccc]"
      @click="toggle(i)"
    >
      <div class="flex justify-between items-center">
        <p class="text-base font-semibold text-[#370f1e]">{{ faq.question }}</p>
        <span class="text-xl">{{ faq.open ? '↑' : '↓' }}</span>
      </div>
      <div v-if="faq.open && faq.answer" class="mt-2 text-[#370f1e] text-sm leading-relaxed">
        {{ faq.answer }}
      </div>
    </div>
  </section>
</template>