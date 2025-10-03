<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  asks:{
    type: Array,
    default: () => [
      {
        question: 'What is Super Relax?',
        answer: `Super Relax is a natural, plant-based supplement that helps restore nervous system balance — easing stress and anxiety during the day, supporting focus and mood, relieving pain and inflammation, and promoting deep, restorative sleep at night.`,
        open: true
      },
      {
        question: 'What are the ingredients?',
        answer: `The formula combines 5 science-backed botanicals:
                Passionflower. Calms a restless mind so you can slow down and find peace.

                California Poppy. Relaxes the body and helps you drift into restorative sleep.

                Corydalis. Eases physical tension and reduces nighttime discomfort.

                Prickly Pear. Supports lower stress hormones for deeper rest and recovery.

                Marshmallow Root. Soothes irritation and promotes physical comfort through the night.`,
        open: false
      },
      {
        question: 'Is Super Relax safe?',
        answer: 'Yes. It’s 100% plant-based, non-habit forming, and made in the USA in FDA-registered, GMP-certified labs. No sedation, no dependency, no morning fog.',
        open: false
      },
      {
        question: 'How do I take it?',
        answer: `To gradually restore your nervous system, take 2 capsules with water every evening before bedtime. 

                  You can also take 1–2 capsules as needed during stressful moments to ease tension and maintain focus. 

                  Safe for daily use and non-habit forming.`,
        open: false
      },
      {
        question: 'How long does shipping take?',
        answer: `Orders are processed within 24 hours and typically arrive in 3–5 business days within the U.S. You’ll receive tracking information as soon as your order ships.`,
        open: false
      },
      {
        question: 'How can I reach you if I have questions?',
        answer: 'You can always reach us at superhelp@superment.co. Our team is here to answer your questions and support you every step of the way.',
        open: false
      },
      {
        question: 'What if I’m not satisfied?',
        answer: 'We stand by our formula. That’s why every order is protected by our Money-Back Guarantee: 30 days for a 1-bottle pack, 60 days for a 3-bottle pack, and 120 days for a 6-bottle pack. If you’re not happy with your results, simply reach out at superhelp@superment.co and we’ll refund your purchase — no hassle, no risk.',
        open: false
      },
      {
        question: 'Are there any side effects?',
        answer: 'Super Relax is well-tolerated and free from synthetic additives or harsh sedatives. Still, if you have a medical condition or take other medications, check with your doctor before starting any supplement.',
        open: false
      }
    ]
  }
})

const faqs = ref(props.asks.map(f => ({ ...f })))

watch(
  () => props.asks,
  (v) => { faqs.value = v.map(f => ({ ...f })) },
  { deep: true }
)

function toggle(index) {
  faqs.value = faqs.value.map((faq, i) => ({
    ...faq,
    open: i === index ? !faq.open : false
  }))
}

</script>

<style scoped>
.faq {
  padding: 0;
  font-family: 'DM Sans', sans-serif;
  color: #370f1e;
  width: 100%;
}

.faq-item {
  border-top: 1px solid #370f1e;
  padding: 10px 0;
  cursor: pointer;
}

.faq-item:last-child {
  border-bottom: 1px solid #370f1e;
}

.question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
}

div.question p.question {
  font-family: 'DM Sans';
  font-weight: 700;
  font-style: Bold;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #370f1e;
}

.answer {
  color: #370f1e;
  font-family: 'DM Sans';
  font-weight: 500;
  font-style: Regular;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0%;
}

@media(min-width: 730px) {
  .faq {
    width: 100%;
  }

  div.question p.question {
    font-size: 18px;
  }

  .question {
    font-size: 18px;
  }

  .answer {
    font-size: 16px;
  }
}
</style>

<template>
  <section class="faq">
    <div v-for="(faq, i) in faqs" :key="i" class="faq-item" @click="toggle(i)">
      <div class="question">
        <p class="question">{{ faq.question }}</p>
        <span>{{ faq.open ? '↓' : '↑' }}</span>
      </div>
      <div v-if="faq.open && faq.answer" class="answer">
        <p class="whitespace-pre-line py-4">{{ faq.answer }}</p>
      </div>
    </div>
  </section>
</template>
