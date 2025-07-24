<script setup>
import FaqAccordion from '@/components/FaqAccordion.vue'
import SuperHeader from '../components/SuperHeader.vue';
import SuperFooter from '../components/SuperFooter.vue';

const faqData = [
    {
        question: 'What is Super Natural Sleep?',
        answer: `Super Natural Sleep is a premium, plant-based supplement that helps you fall asleep faster, stay asleep longer, and wake up refreshed.`,
        open: true
    },
]
</script>

<template>
  <SuperHeader/>
  <div class="max-w-[80%] md:max-w-[70%] mx-auto">
      <FaqAccordion :items="faqData" />
  </div>

  <SuperFooter/>
</template>