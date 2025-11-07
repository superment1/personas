<script setup lang="ts">
import '../styles/superSleep.scss';
import { useSeo } from '../composables/useSeo'
import DepoimentsD from '../components/newPageD/DepoimentsD.vue';
import Questions from '../components/Questions.vue';
import infoBlock from '../components/infoBlock.vue';
import StopWatch2 from '../components/StopWatch2.vue';
import ShopButton from '../components/ShopButton.vue';
import { ref } from 'vue'

const durationMs =  120 * 60 * 1000             
const persistKey  = 'super-sleep-offer-timer'

const testimonials = [
  {
    avatarDesk: new URL('../assets/image/newPageD/ligiani-desk.png', import.meta.url).href,
    avatarMobile: new URL('../assets/image/newPageD/ligiani.png', import.meta.url).href,
    title: 'Stress Relief',
    testimonial: 'I’d come home tense and tired from work, and still unable to relax. With Super  Relax, I actually relax, and sleep comes easily.',
    name: 'Ligiani G., 44',
    city: 'Boston, MA'
  },
  {
    avatarDesk: '',
    avatarMobile: '',
    title: 'Calm & Mood',
    testimonial: 'I’m less worried and way more patient. Even my family noticed I’m calmer, and I finally feel like myself again.',
    name: 'Danielle A., 37',
    city: 'Los Angeles, CA'
  },
  {
    avatarDesk: new URL('@/assets/image/newPageD/eliseu-desk.png', import.meta.url).href,
    avatarMobile: new URL('@/assets/image/newPageD/eliseu.png', import.meta.url).href,
    title: 'Calm & Clarity',
    testimonial: 'I used to wake up already anxious, and spend the whole day feeling tense and on edge. Since taking Super  Relax, I feel calmer, more patient, and way more in control of my reactions — even when things get chaotic.',
    name: 'Eliseu C., 40',
    city: 'Fort Lauderdale, FL'
  },
  {
    avatarDesk: new URL('@/assets/image/newPageD/bruna-desk.png', import.meta.url).href,
    avatarMobile: new URL('@/assets/image/newPageD/bruna.png', import.meta.url).href,
    title: 'No More Burnout Fog',
    testimonial: 'I’ve tried meds to calm down before, but they either made me numb or completely drained the next day. With Super  Relax, I stay clear-headed, sleep deeply, and still wake up myself — just less overwhelmed.',
    name: 'Bruna R., 38',
    city: 'New York, NY'
  },
]
useSeo({
  title: 'Get Restful Sleep Naturally with Superment Super Sleep Aid',
  description: "Experience deep, natural, and restful sleep with Superment Super Sleep. Our melatonin-free botanical blend helps you fall asleep faster & wake up refreshed. Made in USA.",
  keywords: 'natural sleep aid sleep supplement restful sleep deep sleep fall asleep faster stay asleep longer wake up refreshed'
})
const imgSrc = "/assets/depo.webp" 
</script>

<template>
  <section class="">
    <div class="bg-[#370F1E] flex items-center justify-center w-full h-[45px] lg:h-[80px]">
      <div class="flex gap-4 lg:gap-24 items-center text-white">
        <h1 class="font-gelasio text-[8px] lg:text-[20px] uppercase italic "> Today Only ⚡</h1>
        <div class="bg-white text-[10px] font-medium lg:text-[20px] text-[#370F1E] rounded-[20px] py-1 px-3 lg:px-14">
          Save up to 58% + Free Shipping
        </div>
        <div class="flex flex-col">
          <p class="uppercase italic font-medium font-gelasio text-[8px] lg:text-[16px]">
            Offer Ends in
          </p>
          <stop-watch2
            :duration-ms="durationMs"
            start-on="mount"
            :persist-key="persistKey"
            @expired="$emit('expired')"
          />
        </div>
      </div>
    </div>
  </section>
  <section class="px-[35px] pt-[25px] lg:pt-[60px] max-w-[950px] mx-auto">
    <div>
      <h1 class="text-[20px] lg:text-[50px] leading-[1] lg:leading-[1.1] font-bold font-gelasio italic text-[#370F1E]">
        7 Reasons Why I Quit Anxiety Meds for a Natural Way to<br><span class="text-[#4DBCB6]"> Sleep Deep and Stay Calm.</span></h1>
    </div>
    <div class="flex font-gelasio gap-2 items-center pt-[20px] lg:pt-[26px] pb-[24px] lg:pb-[60px] italic border-b">
      <div class="relative w-8 h-8 rounded-full overflow-hidden shrink-0 ring-1 ring-black/10">
        <template v-if="imgSrc">
          <img :src="imgSrc" 
          class="absolute inset-0 w-[48px] h-full object-contain origin-top scale-150" width="48" alt="avatar" />
        </template>
        <template v-else>
          <svg class="lg:w-[59px] lg:h-[59px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <circle cx="11.6182" cy="11.6182" r="11.6182" fill="#E1DCCD"/>
            <circle cx="11.6182" cy="7.74549" r="3.87275" fill="#C1BAA5"/>
            <ellipse cx="11.6182" cy="17.4274" rx="7.2614" ry="4.35684" fill="#C1BAA5"/>
          </svg>
        </template>
      </div>

      <div class="flex-col leading-[1] text-[#370F1E]">
        <p class="font-semibold text-[8px] lg:text-[18px]">By Sarah M.</p>
        <p class="font-normal text-[7px]  lg:text-[16px]">Last updated Sep. 24, 2025</p>
      </div>
    </div>
    <img class="pt-[23px] lg:hidden" src="/assets/tabelaAdv1.webp" alt="table">
    <img class="pt-[60px] hidden lg:block" src="/assets/tabelaAdv2.webp" alt="table">
  </section>
  <section class="px-[35px] max-w-[950px] mx-auto pb-[30px] pt-[24px] lg:py-[60px]">
    <infoBlock 
    :items="[
      { 
        title: '1. Quiet anxiety and racing thoughts. ', 
        subtitle: 'Stress keeps your body in constant high alert and your mind refuses to switch off. That’s why you lie awake replaying worries night after night. Super  Relax, with Passionflower and Prickly Pear, gently calms the nervous system, eases anxiety, and helps you finally feel at peace.', 
        image: '/assets/1.webp' 
      },
      { 
        title: '2. Fix the root cause, not just the symptoms.', 
        subtitle: 'Prescription pills often sedate, create dependency, or leave you foggy the next day. Super  Relax goes deeper by calming an overstimulated nervous system, the real source of the problem. Because it is natural, gentle, and free from side effects, the calm, focus, and deep sleep it restores feel lasting and real.', 
        image: '/assets/6.webp'
      },
      { 
        title: '3. Restore energy and focus during \n the day.', 
        subtitle: 'When stress steals your nights, it also robs your days. You feel foggy, tired, and unable to concentrate. Super  Relax helps break that cycle, reducing exhaustion and restoring clarity, so you can move through the day with steady energy and a clear mind.', 
        image: '/assets/3.webp'
      },
      { 
        title: '4. Relieve muscle pain and body tension.', 
        subtitle: 'Stress doesn’t just affect your mind, it builds in your body. Stiff shoulders, sore back, and nerve pain are all signs your system is overloaded. Super Relax, with Corydalis, helps release tight muscles, ease discomfort, and unlock the physical calm your body needs so your mind can finally relax.', 
        image: '/assets/relieve_muscle.webp'
      },
      { 
        title: '5. Restore balance naturally and safely.', 
        subtitle: 'Living in overdrive drains your patience, energy, and focus. Super Relax helps your system reset so calm and clarity return naturally. The formula is 100% plant-based, safe for daily use, and non-habit forming. No chemicals. No melatonin. No sedation. Just safe, natural relief you can trust.', 
        image: '/assets/5.webp'
      },
      { 
        title: '6. Sleep deeply and wake up clear.', 
        subtitle: 'Broken nights leave you drained, and pills only sedate without restoring real rest. Super Relax works with your body’s natural rhythm so sleep flows from bedtime until morning. You wake up refreshed, energized, and ready to take on the day, without grogginess.', 
        image: '/assets/2.webp' 
      },

      { 
        title: '7. Guaranteed results or your \n money back.', 
        subtitle: 'We stand behind every bottle. Try Super Relax for up to 120 days. If you don’t feel calmer, clearer, and more rested, you get every cent back. No hassle, no fine print, just results. Love it, or it’s free.', 
        image: '/assets/7.webp'
      },

    ]"
    />
  </section>
  <section id="shop-relax" class="bg-[#4DBCB6] flex flex-col items-center py-[29px]">
    <div class="px-[35px]">
      <h1 class="font-crossfit leading-[1] w-[329px] lg:w-[890px] text-[32px] lg:px-0 lg:text-[60px] text-[#370F1E]">
          Stress and Sleepless Nights End Here. Order Super Relax Today.
      </h1>
      <div class="pt-[20px] lg:justify-items-center"> 
        
        <div class="justify-items-center pb-[20px]">
          <img class="lg:hidden" src="/assets/botleAdv3.webp" alt="bottle">
          <img class="hidden lg:block w-[976px]" src="/assets/botleAdv3Desk.webp" alt="bottle">
        </div>
      <ShopButton type="button" id="buy-button" paymentLink="/relax" textColorClass="text-[#370F1E]"
        :showIcon="false"
        class="botao-shop font-bold font-crossfit !m-0 text-[20px] lg:text-[32px] w-full lg:w-[637px] rounded-3xl text-center !h-[41px] lg:!h-[75px] !hover:bg-none !px-5 !pb-0 !bg-[#FFDC03] mt-[1.65rem]">
        Try Super Relax Risk-Free
      </ShopButton>
      </div>
      
    </div>
    <div class="flex justify-center md:justify-start lg:justify-center">
      <div
        class="w-[270px] md:w-[540px] lg:w-[500px] gap-[11px] lg:mt-8 mt-[12px] flex flex-row justify-betwween md:justify-start justify-between">
        <div class="flex flex-row items-center gap-4 w-[120px] lg:w-[210px]">
          <svg class="lg:w-[70px] lg:h-[60px]" xmlns="http://www.w3.org/2000/svg" width="35" height="27"
            viewBox="0 0 43 28" fill="none">
            <path
              d="M42.7333 11.5984C42.7333 10.2907 42.3212 9.0117 41.5351 7.97445C40.294 6.33815 38.3205 4.66138 36.7035 3.83336C36.182 3.56689 35.6039 3.43168 35.019 3.43168H31.7937V14.4259C31.7937 16.1491 29.8563 18.2255 28.1318 18.2255H11.678L12.9454 18.6716C15.0732 19.5904 16.412 21.4379 17.0145 23.6585L26.507 23.6407C26.9522 21.4409 28.4697 19.5332 30.5252 18.6716C34.5093 17.0018 38.8381 19.4661 39.712 23.6437C41.0088 23.6516 42.7343 23.9941 42.7343 22.2265V11.5984H42.7333ZM39.5949 11.5737H33.7945V5.98779H34.9419C37.512 5.98779 39.5949 8.09288 39.5949 10.6904V11.5737Z"
              fill="#370F1E" />
            <path
              d="M8.94476 18.2749C6.38929 18.8957 4.20781 20.98 3.7635 23.6496C0.797899 23.6496 0.936561 23.773 0.936561 22.5186V18.2255H2.96083C3.88166 18.2621 4.80737 18.2423 5.73309 18.2255C6.49865 18.2117 7.26422 18.1999 8.02589 18.2255C8.3325 18.2354 8.63912 18.2512 8.94476 18.2749Z"
              fill="#370F1E" />
            <path
              d="M28.5859 0.0643311H2.40423C1.59312 0.0643311 0.935584 0.728884 0.935584 1.54865V14.9292C0.935584 15.749 1.59312 16.4136 2.40423 16.4136H28.5859C29.397 16.4136 30.0546 15.749 30.0546 14.9292V1.54865C30.0546 0.728884 29.397 0.0643311 28.5859 0.0643311Z"
              fill="#370F1E" />
            <path
              d="M10.3372 27.694C12.5333 27.694 14.3135 25.8948 14.3135 23.6753C14.3135 21.4558 12.5333 19.6566 10.3372 19.6566C8.14121 19.6566 6.36097 21.4558 6.36097 23.6753C6.36097 25.8948 8.14121 27.694 10.3372 27.694Z"
              fill="#370F1E" />
            <path
              d="M33.1217 27.694C35.3177 27.694 37.098 25.8948 37.098 23.6753C37.098 21.4558 35.3177 19.6566 33.1217 19.6566C30.9257 19.6566 29.1454 21.4558 29.1454 23.6753C29.1454 25.8948 30.9257 27.694 33.1217 27.694Z"
              fill="#370F1E" />
          </svg>
          <div>
            <p class="font-DMSans text-[13px] md:text-[23px] text-[#370F1E]">Free U.S. <br>Shipping</p>
          </div>
        </div>
        <div class="w-[1px] h-[42px] md:h-[70px] bg-[#370F1E]"></div>

        <div class="flex flex-row items-center justify-end gap-4 w-[120px] md:w-[270px] lg:w-[240px]">
          <svg class="lg:w-[55px] lg:h-[70px] md:w-[50px] md:h-[65px]" xmlns="http://www.w3.org/2000/svg" width="25" height="35"

            viewBox="0 0 33 48" fill="none">
            <path
              d="M32.5275 20.5256C32.473 13.2452 32.1232 10.8504 26.193 10.8504C20.2629 10.8504 19.8614 13.3988 19.8614 20.5256C19.8614 27.6524 20.2342 30.1761 26.193 30.1761C32.1519 30.1761 32.5791 27.8993 32.5275 20.5256ZM27.0676 25.6334C27.0676 26.4317 26.9472 26.931 26.193 26.931C25.4388 26.931 25.3184 26.418 25.3184 25.6334V15.533C25.3184 14.6058 25.3987 14.145 26.2188 14.145C27.039 14.145 27.0676 14.6058 27.0676 15.5083V25.6334Z"
              fill="#370F1E" />
            <path
              d="M0.892345 17.2365L3.06884 15.832C3.88323 15.3273 4.07823 15.1737 4.95571 15.1737C6.23465 15.1737 6.55582 15.4425 6.55582 16.2902V28.9198C6.55582 29.7729 6.30921 30.1734 5.44033 30.1734H3.36994C2.57848 30.1734 2.36055 29.7537 2.36055 28.821V18.9209L1.01852 18.9428C0.513824 18.9538 0.298756 18.7096 0.298756 18.2351C0.287285 17.6617 0.513824 17.4779 0.889477 17.2393L0.892345 17.2365Z"
              fill="#370F1E" />
            <path
              d="M22.3763 33.5722C22.0838 32.6148 22.5971 32.346 23.2509 32.346H25.5335C26.1557 32.346 26.3249 32.5325 26.4425 33.1964L27.2569 37.5279L27.3286 38.584C27.3286 38.6526 27.3573 38.6965 27.3917 38.6965H27.4519C27.5035 38.6965 27.515 38.6526 27.515 38.5895L27.601 37.5416L28.3695 33.2403C28.4957 32.5325 28.6505 32.3515 29.3904 32.3515H31.5267C32.2809 32.3515 32.7454 32.6423 32.4357 33.6216L29.4965 42.3339V46.0729C29.4965 46.9205 29.2757 47.321 28.3839 47.321H26.3278C25.5249 47.321 25.327 46.9013 25.327 45.9659V42.3147L22.3791 33.5777L22.3763 33.5722Z"
              fill="#370F1E" />
            <path
              d="M7.26411 32.346H3.83735C2.50966 32.346 2.25445 32.7273 2.25445 33.7203V45.8315C2.25445 47.0275 2.58709 47.3155 3.86029 47.3155H7.39602C10.3439 47.3155 12.0989 46.8629 12.0989 43.0142V37.4675C12.0989 33.3884 11.0264 32.3487 7.26124 32.3487H7.26411V32.346ZM7.83189 42.7399C7.83189 44.5833 7.61109 44.8961 6.85978 44.8961H6.44112V34.7792H6.85118C7.56808 34.7792 7.83476 35.0398 7.83476 37.0478V42.7427L7.83189 42.7399Z"
              fill="#370F1E" />
            <path
              d="M22.9182 45.9604L21.3353 33.7121C21.1805 32.4447 20.4808 32.346 19.6664 32.346H15.8382C15.0324 32.346 14.3442 32.4475 14.1692 33.7121L12.5519 45.9604C12.4344 46.8958 12.6523 47.3155 13.4495 47.3155H15.993C16.3687 47.3155 16.6726 47.0686 16.6784 46.6764L16.8734 44.3913H18.6054L18.7746 46.6764C18.7975 47.0522 19.0958 47.3155 19.4714 47.3155H22.0436C22.8466 47.3155 23.0444 46.8958 22.9211 45.9604H22.9182ZM17.0598 42.098L17.5702 36.2111L17.5903 35.3031C17.5989 35.1358 17.6734 35.1139 17.7251 35.1139H17.7652C17.8484 35.1139 17.9028 35.1578 17.9028 35.3031L17.9258 36.2111L18.4161 42.098H17.0598Z"
              fill="#370F1E" />
            <path
              d="M13.4552 13.1273C17.0942 13.1273 18.4534 14.6552 18.4534 17.0445C18.4649 20.3994 17.4698 21.7436 15.7866 23.5102L13.2631 26.2342H17.6448C18.0892 26.2342 18.4477 26.5908 18.4477 27.027V29.4026C18.4477 29.8278 18.0892 30.1707 17.6448 30.1707H10.2493C9.00187 30.1707 8.30505 29.4026 8.30505 28.3108V27.208C8.30505 25.5648 9.21694 24.6349 10.8027 22.8518L12.8559 20.4762C13.6846 19.5216 14.1291 18.9017 14.1434 17.7193V16.7784C14.1434 16.238 14.0488 15.8951 13.4122 15.8951C12.7756 15.8951 12.6437 16.238 12.6437 16.7565L12.6322 17.456C12.6322 18.2241 12.2852 18.3283 11.6945 18.3283H9.07642C8.34519 18.3283 8.19894 17.9498 8.19894 16.9842V16.9156C8.21041 14.2273 10.1317 13.1245 13.4581 13.1245L13.4552 13.1273Z"
              fill="#370F1E" />
            <path
              d="M2.25445 1.94605C2.25445 1.23282 2.52687 1.07098 3.51045 1.07098H4.29903C5.13063 1.07098 5.57224 1.10389 5.57224 1.94605V10.1783C5.57224 10.7873 5.6726 10.9739 6.10561 10.9739C6.53861 10.9739 6.65618 10.7956 6.65618 10.1783V1.94605C6.65618 1.12584 6.84258 1.07098 7.94373 1.07098H8.71511C9.71589 1.07098 9.97111 1.23282 9.97111 1.94605V9.97534C9.97111 12.3592 8.71511 13.0751 6.11995 13.0751C3.52478 13.0751 2.25445 12.3619 2.25445 9.97534V1.94605Z"
              fill="#370F1E" />
            <path
              d="M11.4881 1.81438C11.4881 1.14504 11.7892 1.07098 12.5978 1.07098H14.7284C17.5817 1.04354 18.1724 2.07772 18.1638 4.81816C18.1638 7.5394 17.4211 8.45014 14.8431 8.45014H14.304V10.3045C14.304 10.8779 14.1463 11.1439 13.5556 11.1439H12.1648C11.6314 11.1439 11.4881 10.8614 11.4881 10.2332V1.81438ZM14.499 6.95236C15.0754 6.95236 15.2417 6.62043 15.2417 5.67129V3.87999C15.2417 3.02687 15.0467 2.70317 14.4933 2.70317H14.3069V6.9551H14.5019L14.499 6.95236Z"
              fill="#370F1E" />
            <path
              d="M20.1826 2.65379V1.46874C20.1826 1.25477 20.3632 1.06823 20.5869 1.06823H25.2754C25.4991 1.06823 25.6797 1.25477 25.6797 1.46874V2.65379C25.6797 2.87325 25.4991 3.0543 25.2754 3.0543H24.1083V8.92745C24.1083 9.33893 23.9506 9.52821 23.552 9.52821H22.3189C21.9146 9.52821 21.7569 9.33618 21.7569 8.92745V3.0543H20.5898C20.3661 3.0543 20.1854 2.87599 20.1854 2.65379H20.1826Z"
              fill="#370F1E" />
            <path
              d="M29.0233 0.917358C31.7991 0.917358 31.8278 2.09418 31.845 5.22964C31.845 8.20051 31.8823 9.53095 29.0233 9.53095C26.1643 9.53095 26.2303 8.37881 26.193 5.22964C26.193 2.26426 26.1873 0.917358 29.0233 0.917358ZM28.6276 7.50648C28.6276 7.85761 28.6649 8.08529 29.0233 8.08529C29.3818 8.08529 29.4133 7.86035 29.4133 7.50648V2.99395C29.4133 2.60442 29.4133 2.38496 29.0348 2.38496C28.6563 2.38496 28.6276 2.59619 28.6276 3.00492V7.50648Z"
              fill="#370F1E" />
          </svg>
          <div>
            <p class="font-DMSans text-[13px] md:text-[23px] text-[#370F1E] ">Money-Back<br>Guarantee</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <DepoimentsD 
    primary= 'What Real Users Are Saying.'
    :testimonials="testimonials"/>
  </section>
  <section class=" bg-[#FFFAF0] px-[35px]">
    <Questions :show-cta="true" 
      title="Everything You Need to Know."
      :items="[
        { question: 'Q: Will this make me groggy the next day?', resp: 'No. Super Relax has no melatonin or sedatives. 0% reported grogginess.' },
        { question: 'Q: Is it addictive or habit-forming?', resp: 'Never. It’s 100% plant-based and non-habit forming.' },
        { question: 'Q: How quickly does it work?', resp: 'Some feel it the first night. Most see the best results within 2–6 weeks.' },
        { question: 'Q: I’ve tried everything. How is this different?', resp: 'Super Relax supports mind, body, and stomach together: mental stress, physical tension, gastric discomfort.' },
        { question: 'Q: Can I take it with my anxiety/depression medication?', resp: 'It’s all-natural, but consult your doctor if on prescription meds.' }
      ]"    
      auxText="* These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary."

    />
  </section>
  <div class="flex flex-col gap-3 bg-[#370F1E] p-[35px] items-center">
      <div class="leading-[1] text-[#fffaf0] text-[2rem] font-crossfit">
        <span class="inline-flex items-baseline">SUPERMENT<sub
            class="font-sans text-sm leading-none font-thin">®</sub></span>
      </div>
      <p class="label-reserved leading-[1] text-center italic text-[9px] font-gelasio text-[#fffaf0]">
        © Super Relax Research 2025.<br>All Rights Reserved.
      </p>
      <p class="text-[#FFFAF0] font-dmsans font-extralight text-[10px] leading-[12px] text-justify mt-3 md:w-[950px]">
        Super Relax is a supplement formulated with natural ingredients designed to support the nervous system and help
        the body manage stress and anxiety naturally. It promotes a calm, focused state during the day and supports
        deeper, more restorative rest at night. It does not contain sedatives or harsh chemicals. Super Relax is
        manufactured in the United States in an FDA-registered, GMP-compliant facility. All product quality, safety, and
        compliance certifications are managed by our manufacturing partner. This product is not intended to diagnose,
        treat, cure, or prevent any disease. Always consult your physician before starting any dietary supplement,
        especially if you are taking medications, are pregnant, or have a medical condition. Super Relax is part of the
        commercial portfolio of Superment. </p>
    </div>
</template>
