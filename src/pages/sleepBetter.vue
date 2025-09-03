<script setup lang="ts">
import '../styles/superSleep.scss';
import { onBeforeMount } from 'vue';
import FAQ from '../components/Faq.vue';
import SuperFooter from '../components/SuperFooter.vue';
import BeyoundC from '../components/pageC/BeyoundC.vue'
import CtaPageC from '../components/pageC/CtaPageC.vue';
import IngredientsC from '../components/pageC/IngredientsC.vue';
import TestimonialsCarousel from '../components/TestimonialsCarousel.vue';
import { useSeo } from '../composables/useSeo';
import ShopNowV1 from '../components/ShopNowV1.vue';
import NotificationDisplay from '../components/NotificationDisplay.vue';

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
    s.async = true; 
    document.head.appendChild(s);
  });
  function onCountdownExpired() { }
</script>

<template>
  <div class="w-full min-h-screen bg-white flex flex-col">
    <!-- Header -->
    <main>
      <section class="relative w-full">
        <picture>
          <source media="(min-width: 640px)" 
            srcset="../assets/image/pagec/hero_desk.webp" />
          <source
            type="image/webp"
            media="(max-width: 639px)"
            srcset="/assets/hero_womam.avif"
            sizes="100vw"
          />
          <img
            src="/assets/hero_womam.avif"
            alt="driver"
            class="w-full object-cover"
            width="768" height="432"
            decoding="async"
            fetchpriority="high"
          />
        </picture>
      </section>
      <section>
        <div class="w-full bg-[#FFFAF0] relative">
          <div class="px-[42px] text-[15px] font-normal text-[#370F1E] leading-[17.7px] py-8">
            <p>
             That night, it hit me — I wasn’t just tired. I was half-present everywhere: at work, at home, even with myself.
            </p>
            <p class="pt-5">I didn’t need another late coffee or some knock-out pill. I needed a way to switch my brain off, to let my body reset.
            </p>
            <p class="pt-5">That’s when I found <span class="font-bold">Super Natural Sleep.</span> No melatonin. No morning fog. Just a natural way to calm the spin and sink into real, restorative sleep.
            </p>
            <p class="pt-5">The first night, I actually stayed asleep. No 2 a.m. wake-ups, no scrolling emails in the dark. The next morning, I made pancakes for my son before school. He looked at me and said, “You’re happy today, Mom.” That one line hit harder than any performance review ever could.
            </p>
            <p class="pt-5">By the end of the week, I was walking into meetings sharp, clear, confident. I didn’t blank. I didn’t snap.
            </p>
            <p class="pt-5">At home, I laughed more. My son started opening up again. </p>
            <p class="pt-5">I thought exhaustion was the price of ambition. Turns out, it was stealing the best parts of me.</p>
            <p class="italic pt-5 font-gelasio font-semibold">Super Natural Sleep gave me back my focus at work — and my patience at home. It can do the same for you.
            </p>
          </div>
          <span
            class="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-4 translate-y-[1px] z-10
                  w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent
                  border-t-[28px] border-t-[#FFFAF0]">
          </span>
      </div>
    </section>
    <section>
      <div class="w-full bg-[#E1DCCD] relative">
        <div class="px-[42px] pt-[38px] pb-[35px]">
          <h1 class="text-[#370F1E] text-center font-gelasio text-[25px] italic font-normal leading-[29.5px]">
            Signs your sleep<br> may be compromised too:
          </h1>
          <ul class="grid grid-cols-2 text-[14px] leading-[15.4px] font-gelasio italic pt-[27px] gap-x-3 gap-y-[27.58px] list-none">
            <li class="bg-[#FFFAF0] relative rounded-[7px]">
              <img
                src="../assets/image/pagec/emoji/face_with_spiral_eyes.webp"
                alt="" aria-hidden="true"
                width="22" height="22"
                loading="lazy"
                class="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 z-10 pointer-events-none select-none"
              />
              <div class="leading-[15.4px] pb-[11px] pt-[15px] px-[10px] text-[#370F1E] text-center">Mental fog or forgetfulness</div>
            </li>
            <li class="bg-[#FFFAF0] relative rounded-[7px]">
              <img
                src="../assets/image/pagec/emoji/angry_face.webp"
                alt="" aria-hidden="true"
                width="22" height="22"
                loading="lazy"
                class="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 z-10 pointer-events-none select-none"
              />
              <div class="leading-[15.4px] pb-[11px] pt-[15px] px-[10px] text-[#370F1E] text-center">Mood swings and irritability</div>
            </li>
            <li class="bg-[#FFFAF0] relative rounded-[7px]">
              <img
                src="../assets/image/pagec/emoji/face_with_steam_from_nose.webp"
                alt="" aria-hidden="true"
                width="22" height="22"
                loading="lazy"
                class="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 z-10 pointer-events-none select-none"
              />
              <div class="leading-[15.4px] pb-[11px] pt-[15px] px-[10px] text-[#370F1E] text-center">Increased stress or anxiety</div>
            </li>
            <li class="bg-[#FFFAF0] relative rounded-[7px]">
              <img
                src="../assets/image/pagec/emoji/face_with_thermometer.webp"
                alt="" aria-hidden="true"
                width="22" height="22"
                loading="lazy"
                class="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 z-10 pointer-events-none select-none"
              />
              <div class="leading-[15.4px] pb-[11px] pt-[15px] px-[10px] text-[#370F1E] text-center">Getting sick more often</div>
            </li>
            <li class="bg-[#FFFAF0] relative rounded-[7px]">
              <img
                src="../assets/image/pagec/emoji/weary_face.webp"
                alt="" aria-hidden="true"
                width="22" height="22"
                loading="lazy"
                class="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 z-10 pointer-events-none select-none"
              />
              <div class="leading-[15.4px] pb-[11px] pt-[15px] px-[10px] text-[#370F1E] text-center">Fatigue that <br> rest doesn’t fix</div>
            </li>
            <li class="bg-[#FFFAF0] relative rounded-[7px]">
              <img
                src="../assets/image/pagec/emoji/older_person001.webp"
                alt="" aria-hidden="true"
                width="22" height="22"
                loading="lazy"
                class="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 z-10 pointer-events-none select-none"
              />
              <div class="leading-[15.4px] pb-[11px] pt-[15px] px-[10px] text-[#370F1E] text-center">Early signs <br> of aging</div>
            </li>
          </ul>
        </div>
        <span
          class="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-4 translate-y-[1px] z-10
                  w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent
                  border-t-[28px] border-t-[#E1DCCD]">
        </span>
      </div>
    </section>
    <section>
      <div class="w-full bg-[#370F1E] relative">
        <div class="px-[42px] pt-[43px] sm:max-w-[996px]">
          <div class="flex gap-[15px]">
            <div class="flex flex-col gap-[15px]">
              <h1 class="text-[#FFDC03] leading-[32px] font-gelasio text-[32px]">The deeper risks you can’t see.</h1>
              <p class="text-[14px] leading-[16.52px] text-[#fff]"><span class="font-bold">Surface symptoms <br> are just the beginning. </span> <br>Beneath them, chronic sleep loss quietly <br>disrupts the body’s <br> most vital systems.</p>
            </div>
            <img class="max-w-[150px] max-h-[225px]" src="../assets/image/pagec/iceberg.webp" alt="iceberg">
          </div>
          <div>
            <ul class="grid pt-[31px] grid-cols-2  gap-x-[15px] gap-y-[15px]">
              <li class="bg-[#FFFAF0] rounded-[7px] justify-center items-center">
                <div class="bg-[#FFDC03] pt-[2px] pb-[2px] px-2 text-[#370F1E] text-[26px] leading-[1]  justify-self-center font-gelasio rounded-b-[7px]">+48%</div>
                <p class="text-[14px] text-center px-[30px] pt-[10px] pb-[11px] leading-[1.1] font-gelasio italic text-[#370F1E]">higher risk of heart disease</p>
              </li>
              <li class="bg-[#FFFAF0] rounded-[7px] justify-center items-center">
                <div class="bg-[#FFDC03] pt-[2px] pb-[2px] px-2 text-[#370F1E] text-[26px] leading-[1]  justify-self-center font-gelasio rounded-b-[7px]">+33%</div>
                <p class="text-[14px] text-center px-[30px] pt-[10px] pb-[11px] leading-[1.1] font-gelasio italic text-[#370F1E]">higher risk of memory loss</p>
              </li>
              <li class="bg-[#FFFAF0] rounded-[7px] justify-center items-center">
                <div class="bg-[#FFDC03] pt-[2px] pb-[2px] px-2 text-[#370F1E] text-[26px] leading-[1]  justify-self-center font-gelasio rounded-b-[7px]">+46%</div>
                <p class="text-[14px] text-center px-[7px] pt-[10px] pb-[11px] leading-[1.1] font-gelasio italic text-[#370F1E]">higher risk of anxiety and depression</p>
              </li>
              <li class="bg-[#FFFAF0] rounded-[7px] justify-center items-center">
                <div class="bg-[#FFDC03] pt-[2px] pb-[2px] px-6 text-[#370F1E] text-[26px] leading-[1]  justify-self-center font-gelasio rounded-b-[7px]">4X</div>
                <p class="text-[14px] text-center px-[30px] pt-[10px] pb-[11px] leading-[1.1] font-gelasio italic text-[#370F1E]">more likely to get sick</p>
              </li>
              <li class="bg-[#FFFAF0] rounded-[7px] justify-center items-center">
                <div class="bg-[#FFDC03] pt-[2px] pb-[2px] px-6 text-[#370F1E] text-[26px] leading-[1]  justify-self-center font-gelasio rounded-b-[7px]">3X</div>
                <p class="text-[14px] text-center px-[15px] pt-[10px] pb-[11px] leading-[1.1] font-gelasio italic text-[#370F1E]">higher risk of type 2 diabetes</p>
              </li>
              <li class="bg-[#FFFAF0] rounded-[7px] justify-center items-center">
                <div class="bg-[#FFDC03] pt-[2px] pb-[2px] px-2 text-[#370F1E] text-[26px] leading-[1]  justify-self-center font-gelasio rounded-b-[7px]">700+</div>
                <p class="text-[14px] text-center px-[5px] pt-[4px] pb-[1px] leading-[1.1] font-gelasio italic text-[#370F1E]">genes disrupted after just one week of <br> poor sleep</p>
              </li>
              <li class="bg-[#FFFAF0] rounded-[7px] justify-center items-center col-span-2">
                <div class="bg-[#FFDC03] pt-[2px] pb-[2px] px-2 text-[#370F1E] text-[26px] leading-[1]  justify-self-center font-gelasio rounded-b-[7px]">24 hours awake=</div>
                <p class="text-[14px] text-center px-[15px] pt-[10px] pb-[12px] leading-[1.1] font-gelasio italic text-[#370F1E]">similar of being drunk</p>
              </li>
            </ul>
            <p class="text-center pt-[15px] pb-[22px] text-[#fff]">This isn’t just data — <span class="font-semibold">  it’s your body sending early warnings.</span></p>
          </div>
        </div>
        <span
          class="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-4 translate-y-[1px] z-10
                  w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent
                  border-t-[28px] border-t-[#370F1E]">
        </span>
      </div>
    </section>
      <CtaPageC />
      <IngredientsC />
      <BeyoundC />
      <div class="bg-[#FFFAF0] w-full items-center">
        <div class="w-[349px] mx-auto pt-[31px] font-gelasio font-medium  italic text-center justify-self-center">
          <p class="title text-[#370F1E] font-semibold text-[25px] leading-none">Everyday, more people</p>
          <p class="text-[#6EC8F0] font-semibold leading-[1.1] text-[25px] pb-[25px]"> finally sleep again.</p>
          <div class="bg-gradient-to-b from-[#E2DCCE] to-[#CAC0AA] w-[318px] justify-self-center relative text-right flex font-gelasio px-3 pb-[17px] pt-[10px] text-[#370F1E] rounded-[20px]">
             <img class="absolute left-3 top-1/2 -translate-y-1/2 w-[80px] h-auto" src="../assets/image/seloRated.webp" alt="rated">
            <p class="description w-full text-right pt-[9px] leading-[1] text-[17px]"><strong>98%</strong> would recommend <br> it for
              deeper,better
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
        <ShopNowV1 @expired="onCountdownExpired" />
      </div>
      <section>
      <div class="w-full bg-[#E1DCCD] relative">
        <div class="px-[42px] pt-[32px] pb-[35px]">
          <h1 class="text-[#370F1E] text-center font-gelasio text-[25px] italic font-bold leading-[29.5px]">
            Most sleep aids fail.
            <p class="font-normal text-[16px] leading-[1] pb-[18px]">They don’t restore — they override.</p>
          </h1>
          <p  class="text-[#370F1E] leading-[1.2] text-[15px]">
            Melatonin, sleep teas, OTC pilss, harsh chemicals and sedatives may help you fall asleep faster. But rather than supporting <br> your natural sleep cycles, they often suppress them — <span class="font-bold"> leading to shallow, disconnected rest.</span>
          </p>
          <p class="font-bold leading-[1.2] text-[#370F1E] pt-[18px]">
            Common side effects of conventional sleep aids:
          </p>
          <ul class="grid grid-cols-2 text-[14px] leading-[15.4px] font-gelasio italic pt-[37px] gap-x-3 gap-y-[27px] list-none">
            <li class="bg-[#370F1E] relative rounded-[7px]">
              <img
                src="../assets/image/pagec/emoji/woozy_face.webp"
                alt="" aria-hidden="true"
                width="22" height="22"
                loading="lazy"
                class="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 z-10 pointer-events-none select-none"
              />
              <div class="leading-[15.4px] pb-[9px] pt-[15px] px-[10px] text-[#fff] text-center">Next-day <br>grogginess</div>
            </li>
            <li class="bg-[#370F1E] relative rounded-[7px]">
              <img
                src="../assets/image/pagec/emoji/dizzy_face.webp"
                alt="" aria-hidden="true"
                width="22" height="22"
                loading="lazy"
                class="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 z-10 pointer-events-none select-none"
              />
              <div class="leading-[15.4px] pb-[9px] pt-[15px] px-[10px] text-[#fff] text-center">Restless or vivid dreams</div>
            </li>
            <li class="bg-[#370F1E] relative rounded-[7px]">
              <img
                src="../assets/image/pagec/emoji/persevering_face.webp"
                alt="" aria-hidden="true"
                width="22" height="22"
                loading="lazy"
                class="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 z-10 pointer-events-none select-none"
              />
              <div class="leading-[15.4px] pb-[9px] pt-[15px] px-[10px] text-[#fff] text-center">Disrupted hormonal rhythms</div>
            </li>
            <li class="bg-[#370F1E] relative rounded-[7px]">
              <img
                src="../assets/image/pagec/emoji/shocked_face_with_exploding.webp"
                alt="" aria-hidden="true"
                width="22" height="22"
                loading="lazy"
                class="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 z-10 pointer-events-none select-none"
              />
              <div class="leading-[15.4px] pb-[9px] pt-[15px] px-[4px] text-[#fff] text-center">Short-term relief, long-term dependence</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
      <div class="bg-[#FFFAF0] w-full pt-[42px] items-center justify-start">
        <div class="px-0 flex flex-col items-center justify-start">
          <div class="w-full max-w-[349px] md:max-w-[1260px]">
            <h1
              class="text-[#350E1D] sm:hidden w-full leading-[0.9] pb-[46px] font-gelasio font-bold italic text-[25px] text-center sm:text-[68px] ">
              Scientific <br> references:</h1>
            <h1
              class="text-[#350E1D] hidden sm:block w-full leading-[1] pb-[46px] font-bold font-gelasio italic text-start sm:text-[68px] ">
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
      <div class="bg-[#fffaf0] w-full pt-[50px] pb-[45px] flex flex-col">
        <div class="px-0 sm:px-10 flex flex-col">
          <div class="w-full max-w-[349px] md:max-w-[1260px] mx-auto">
            <h1 class="text-center w-full sm:hidden pb-[46px] font-bold leading-none text-[#370F1E] text-[25px] font-gelasio italic">
              Frequently asked <br>
              questions:</h1>
            <h1
              class="text-start hidden w-full sm:block pb-[46px] font-bold leading-none text-[#370F1E] text-[62px] font-gelasio italic">
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
    <NotificationDisplay />
  </div>
</template>