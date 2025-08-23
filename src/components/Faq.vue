<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    question: 'What is Super Natural Sleep?',
    answer: `Super Natural Sleep is a premium, plant-based supplement that helps you fall asleep faster, stay asleep longer, and wake up refreshed. It combines Passionflower, California Poppy, Corydalis, and Prickly Pear to promote calm, reduce restlessness, and support deep, restorative sleep, without grogginess or dependency.`,
    open: true
  },
  {
    question: 'Is it safe to take with medications?',
    answer: 'While Super Natural Sleep uses gentle plant-based ingredients, it’s best to consult your healthcare provider before combining it with prescription medications, especially if you’re managing a chronic condition.',
    open: false
  },
  {
    question: 'Are there any side effects?',
    answer: 'Super Natural Sleep is well-tolerated and free from synthetic additives or harsh sedatives. Still, if you have a medical condition or take other medications, check with your doctor before starting any supplement.',
    open: false
  },
  {
    question: 'How long does shipping take?',
    answer: 'Orders are processed and shipped within the U.S., and delivery can take up to 7 business days. Once your order is on its way, you’ll receive a tracking link to follow its progress.',
    open: false
  },
  {
    question: 'What if I’m not satisfied?',
    answer: `If you’re not happy with your results, just send us an email at superhelp@superment.co within the guarantee period of your purchase.
            
                •	120 days for the 6-bottle combo
                •	90 days for the 3-bottle combo
                •	30 days for a single bottle
        
        We accept returns on any unopened bottles and will do everything we can to make it right.`,
    open: false
  },
  {
    question: 'How can I talk to Superment?',
    answer: 'You can email us at superhelp@superment.co or send us a DM on Instagram @superment.co. It will be a pleasure to talk to you.',
    open: false
  }
])

function toggle(index) {
  faqs.value.forEach((faq, i) => {
    faq.open = i === index ? !faq.open : false
  })
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

  @media(max-width: 730px) {
    .faq {
      max-width: 345px;
    }
  }

  @media(min-width: 730px) {
    .faq {
      width: 100%;
    }
  }

</style>

<template>
  <section class="faq">
    <div
      v-for="(faq, i) in faqs"
      :key="i"
      class="faq-item"
      @click="toggle(i)"
    >
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

