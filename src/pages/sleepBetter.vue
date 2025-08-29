<script setup lang="ts">
import '../styles/superSleep.scss';
import { onBeforeMount } from 'vue';
import FAQ from '../components/Faq.vue';
import SuperFooter from '../components/SuperFooter.vue';
import BeyoundC from '../components/pagec/BeyoundC.vue';
import CtaPageC from '../components/pagec/CtaPageC.vue';
import IngredientsC from '../components/pagec/IngredientsC.vue';
import VslBadges from '../components/VslBadges.vue';
import TestimonialsCarousel from '../components/TestimonialsCarousel.vue';
import { useSeo } from '../composables/useSeo';

useSeo({
  title: 'Get Restful Sleep Naturally with Superment Super Sleep Aid',
  description: "Experience deep, natural, and restful sleep with Superment Super Sleep. Our melatonin-free botanical blend helps you fall asleep faster & wake up refreshed. Made in USA.",
  keywords: 'natural sleep aid sleep supplement restful sleep deep sleep fall asleep faster stay asleep longer wake up refreshed'
})

onBeforeMount(() => {
  if (typeof window === 'undefined') return;
  if (document.getElementById('rdstation-forms-script')) return;

  const s = document.createElement('script');
  s.id = 'rdstation-forms-script';
  s.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
  s.async = true;            // sem type="module"
  document.head.appendChild(s);
});

function onCountdownExpired() { }

</script>

<template>
  <div class="w-full min-h-screen bg-white flex flex-col">
    <!-- Header -->
    <main>
      <CtaPageC />
      <IngredientsC />
      <BeyoundC />
      <div class="bg-[#350E1D] w-full items-center">
        <div class="w-[349px] mx-auto pt-[36px] font-crossfit font-medium  text-center justify-self-center">
          <p class="title pt-[20px] text-[#fff] font-semibold text-[34px] leading-none">Every day, more people</p>
          <p class="text-[#6EC8F0] font-semibold leading-[1.3] text-[34px] pb-[32px]"> finally sleep again.</p>
          <div class="bg-white/10 font-gelasio px-3 pb-[17px] pt-[10px] text-[#fff] rounded-[20px]">
            <p class="notice leading-[1.2] text-[18px]"><strong>Rated</strong> 4.9/5.0</p>
            <p class="description leading-[1.2] text-[17px]"><strong>98%</strong> would recommend it for
              deeper,<br>better
              sleep.</p>
          </div>
        </div>
        <div class="max-w-[349px] sm:max-w-[1260px] mx-auto items-center">
          <TestimonialsCarousel />
        </div>
      </div>
      <!-- v-show="showAfterVideo"  -->
      <div class="bg-[#370F1E]">
        <div
          class="overflow-hidden max-w-[100%] xl:max-w-[65%] text-[12px] sm:text-[19px] border-[#ffffff69] border-b-[0.579px]  border-t-[0.579px] bg-[#370F1E] text-white">
          <div class="flex whitespace-nowrap pt-[3px] pb-[2px] animate-marquee">
            <p>Made in the USA <span class="espacada px-2">|</span> Clean, natural, no fillers <span
                class="espacada px-2">|</span> Save up to 57% <span class="espacada px-2">|</span> Up to 120-day
              money-back guarantee <span class="espacada px-2">|</span> Real reviews rated 4.9/5.0 <span
                class="espacada px-2">|</span> Free U.S shipping <span class="espacada px-2">|</span> </p>
            <p>Made in the USA <span class="espacada px-2">|</span> Clean, natural, no fillers <span
                class="espacada px-2">|</span> Save up to 57% <span class="espacada px-2">|</span> Up to 120-day
              money-back guarantee <span class="espacada px-2">|</span> Real reviews rated 4.9/5.0 <span
                class="espacada px-2">|</span> Free U.S shipping <span class="espacada px-2">|</span> </p>
            <p>Made in the USA <span class="espacada px-2">|</span> Clean, natural, no fillers <span
                class="espacada px-2">|</span> Save up to 57% <span class="espacada px-2">|</span> Up to 120-day
              money-back guarantee <span class="espacada px-2">|</span> Real reviews rated 4.9/5.0 <span
                class="espacada px-2">|</span> Free U.S shipping <span class="espacada px-2">|</span> </p>
          </div>
        </div>
      </div>
      <div class="">
        <VslBadges @expired="onCountdownExpired" />
      </div>
      <div class="bg-[#FFFAF0] w-full py-[54px] items-center justify-start">
        <div class="px-0 flex flex-col items-center justify-start">
          <div class="w-full max-w-[349px] md:max-w-[1260px]">
            <h1
              class="text-[#350E1D] sm:hidden w-full leading-[1] pb-[46px] font-crossfit text-[34px] text-center sm:text-[68px] ">
              Scientific <br> references:</h1>
            <h1
              class="text-[#350E1D] hidden sm:block w-full leading-[1] pb-[46px] font-crossfit text-[34px] text-start sm:text-[68px] ">
              Scientific references:</h1>
          </div>
          <ul
            class="w-full columns-1 gap-x-8 sm:gap-y-6 max-w-[349px] sm:max-w-[1260px] text-[#350E1D] font-sans font-medium">
            <li class="flex gap-5 pt-[11px] pb-[11px] sm:pb-[18px] sm:pt-[17px] border-b border-t border-[#370F1E]">
              <div class="flex-col">
                <h1 class="text-[14px] font-normal sm:text-[16px] leading-[1.3]"><strong>Montana State
                    University</strong>
                  <p>Study by Montana State researcher finds sleep deprivation makes people less
                    happy, more anxious. (n.d.)</p>
                </h1>
              </div>
            </li>
            <li class="flex gap-5  pt-[11px] pb-[11px] sm:pb-[17px] sm:pt-[22px] border-b border-[#370F1E]">
              <div class="flex-col">
                <h1 class="text-[14px] font-normal sm:text-[16px] leading-[1.3]"><strong>Colten, H. R., &
                    Altevogt, B. M. (Eds.)</strong>
                  <p>Sleep disorders and sleep deprivation: An unmet public health
                    problem. (2006)</p>
                </h1>
              </div>
            </li>
            <li class="flex gap-5 pt-[12px] pb-[12px] sm:pb-[18px] sm:pt-[26px] border-b border-[#370F1E]">
              <div class="flex-col">
                <h1 class="text-[14px] font-normal sm:text-[16px] leading-[1.3]"><strong>Sleep Foundation
                  </strong>
                  <p> How sleep deprivation affects your heart. (n.d.)</p>
                </h1>
              </div>
            </li>
            <li class="flex gap-5  pt-[12px] pb-[12px] sm:pb-[18px] sm:pt-[26px] border-b border-[#370F1E]">
              <div class="flex-col">
                <h1 class="text-[14px] font-normal sm:text-[16px] leading-[1.3]"><strong>Calhoun, D. A., &
                    Harding, S. M.</strong>
                  <p> Sleep and hypertension. (2010)</p>
                </h1>
              </div>
            </li>
            <li class="flex gap-5  pt-[12px] pb-[12px] sm:pb-[18px] sm:pt-[16px] border-b border-[#370F1E]">
              <div class="flex-col">
                <h1 class="text-[14px] font-normal sm:text-[16px] leading-[1.3]"><strong>Mesarwi, O., Polak,
                    J., Jun, J., & Polotsky, V. Y.</strong>
                  <p> Sleep disorders and the development of insulin resistance
                    and obesity. (2013)</p>
                </h1>
              </div>
            </li>
            <li class="flex gap-5 pt-[12px] pb-[12px] sm:pb-[18px] sm:pt-[22px] border-b border-[#370F1E]">
              <div class="flex-col">
                <h1 class="text-[14px] font-normal sm:text-[16px] leading-[1.3]"><strong>Spiegel, K.,
                    Tasali, E., Leproult, R., & Van Cauter, E.</strong>
                  <p> Effects of poor and short sleep on glucose
                    metabolism and obesity risk. (2009)</p>
                </h1>
              </div>
            </li>
            <li class="flex gap-5 pt-[12px] pb-[12px] sm:pb-[18px] sm:pt-[25px] border-b border-[#370F1E]">
              <div class="flex-col">
                <h1 class="text-[14px] font-normal sm:text-[16px]  leading-[1.3]"><strong>Ungvari, Z.,
                    Fekete, M., Varga, P., Fekete, J. T., Lehoczki, A., Buda, A., … & Győrffy, B.</strong>
                  <p> Imbalanced
                    sleep increases mortality risk by 14–34%: A meta-analysis. (2025)</p>
                </h1>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="bg-[#fffaf0] w-full pb-[45px] flex flex-col">
        <div class="px-0 sm:px-10 flex flex-col">
          <div class="w-full max-w-[349px] md:max-w-[1260px] mx-auto">
            <h1 class="text-center w-full sm:hidden pb-[46px] leading-none text-[#370F1E] text-[34px] font-crossfit">
              Frequently asked <br>
              questions:</h1>
            <h1
              class="text-start hidden w-full sm:block pb-[46px] leading-none text-[#370F1E] text-[62px] font-crossfit">
              Frequently asked questions:</h1>
            <FAQ />
          </div>
        </div>
      </div>

    </main>
    <div class="bg-[#350E1D] w-full items-center">
      <div class="max-w-[349px] mx-auto">
        <SuperFooter />
      </div>
    </div>
  </div>
</template>