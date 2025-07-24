<script setup>
import FaqAccordion from '@/components/FaqAccordion.vue'

const faqData = [
    {
        question: 'What is Super Natural Sleep?',
        answer: `Super Natural Sleep is a premium, plant-based supplement that helps you fall asleep faster, stay asleep longer, and wake up refreshed.`,
        open: true
    },
]
</script>

<template>
  <FaqAccordion :items="faqData" />
</template>