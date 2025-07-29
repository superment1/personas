<script setup>
import { useSeo } from '../composables/useSeo'
import FaqAccordion from '../components/FaqAccordion.vue';
import SuperHeader from '../components/SuperHeader.vue'
import SuperFooter from '../components/SuperFooter.vue'
    useSeo({
            title: 'SUPERMENT - Super Natural Sleep',
            description: 'Natural, deep sleep is essential for healthy, radiant skin.',
            keywords: 'superment, super natural sleep, sleep, natural, radiant skin'
        })

const faqData = [
    {
        question: 'What is Super Natural Sleep?',
        answer: 'Super Natural Sleep is a premium, plant-based supplement that helps you fall asleep faster, stay asleep longer, and wake up refreshed. It combines Passionflower, California Poppy, Corydalis, and Prickly Pear to promote calm, reduce restlessness, and support deep, restorative sleep, without grogginess or dependency.',
        open: true
    },
    {
        question: 'Where is Super Natural Sleep produced?',
        answer: `Super Natural Sleep is proudly made in the USA, in an FDA-registered and GMP-certified lab. Our manufacturing partner has been a trusted leader in high-quality, rigorously tested supplements for over 20 years.
This product is part of Superment’s portfolio.
If you’d like to know more, feel free to email us at superhelp@superment.co or send us a DM on Instagram @superment.co — we’d love to hear from you.
`,
        open: false
    },
    {
        question: 'How is Super Natural Sleep different from other sleep aids?',
        answer: `Unlike melatonin and synthetic sleep aids that force your body into sleep and leave you feeling groggy, Super Natural Sleep is made with plant-based ingredients that support deep, consistent rest, without disrupting your natural rhythm. It’s a smarter, and safer alternative that works with your body, not against it.`,
        open: false
    },
    {
        question: 'Does Super Natural Sleep contain melatonin?',
        answer: `No, Super Natural Sleep is completely free of melatonin. This avoids common side effects like vivid dreams, hormonal disruption, or next-morning sluggishness, while supporting a more natural, sustained sleep cycle.`,
        open: false
    },
        {
        question: 'Is Super Natural Sleep habit-forming?',
        answer: `Not at all. Super Natural Sleep is non-habit-forming and safe for long-term use. Its ingredients gently support your body’s ability to sleep better over time, without creating reliance or tolerance.`,
        open: false
    },
    {
        question: 'Will I wake up groggy the next day?',
        answer: `No, Super Natural Sleep is designed to help you wake up clear and energized. Unlike melatonin-based products, it doesn’t knock you out—it supports natural sleep processes without residual drowsiness.`,
        open: false
    },
        {
        question: 'How do I take Super Natural Sleep?',
        answer: `Take 2 capsules 30 to 45 minutes before bed with water. For best results, dim the lights, avoid screens, and let your body wind down naturally. Super Natural Sleep promotes relaxation on night one and improves sleep quality progressively over 30 days.`,
        open: false
    },
    {
        question: 'How fast does it start working?',
        answer: `Some users feel the calming effects the first night, with benefits like easier sleep onset and fewer interruptions. For most, optimal results, like deeper, more consistent sleep, build over 1 to 4 weeks of nightly use`,
        open: false
    },
        {
        question: 'Can I take it every night?',
        answer: `Yes, Super Natural Sleep is formulated for daily use. It’s non-sedating, non-addictive, and designed to improve your sleep cycle over time without disrupting your body’s natural rhythms`,
        open: false
    },
    {
        question: 'Are there any side effects?',
        answer: `Super Natural Sleep is well-tolerated and free from synthetic additives or harsh sedatives. Still, if you have a medical condition or take other medications, check with your doctor before starting any supplement.`,
        open: false
    },
        {
        question: 'What if I wake up during the night?',
        answer: `Super Natural Sleep helps you stay in deep sleep longer, but if you do wake up, its calming effects may help you fall back asleep faster and reduce sleep fragmentation over time.`,
        open: false
    },
    {
        question: 'Is it safe to take with medications?',
        answer: `While Super Natural Sleep uses gentle plant-based ingredients, it’s best to consult your healthcare provider before combining it with prescription medications, especially if you’re managing a chronic condition.`,
        open: false
    },
    {
        question: 'How long does shipping take??',
        answer: `Orders are processed and shipped within the U.S., and delivery can take up to 7 business days. Once your order is on its way, you’ll receive a tracking link to follow its progress.`,
        open: false
    },
    {
        question: 'What if I’m not satisfied?',
        answer: `If you’re not happy with your results, just give us a call at (855) 273-0040 within 30 days of your purchase. We accept returns on any unopened bottles and will do everything we can to make it right.`,
        open: false
    },
    {
        question: 'How can I talk to Superment?',
        answer: `You can email us at superhelp@superment.co or send us a DM on Instagram @superment.co. It will be a pleasure to talk to you.`,
        open: false
    }
]
</script>

<template>
  <SuperHeader :show-redirect="true"/>
  <div class="w-full bg-[#fffaf0] ">
    <div class="max-w-[80%] md:max-w-[70%] mx-auto">
        <FaqAccordion :items="faqData" />
    </div>
  </div>
  <SuperFooter/>
</template>