<script setup lang="ts">
import '../styles/superSleep.scss';
import { useSeo } from '../composables/useSeo';
import { defineAsyncComponent } from 'vue'
import BgText from '../components/BgText.vue';
import DepoimentsD from '../components/newPageD/DepoimentsD.vue';
import SuperFooter2 from '../components/SuperFooter2.vue';
import ShopButton from '../components/ShopButton.vue';

const FAQ = defineAsyncComponent(() => import('../components/Faq.vue'))

</script>

<template>
  <section>
    <BgText
      logo="/assets/logo-email.png"
      bgImage="/assets/sunset-tsl2.webp"
      primary="America’s Forgotten Secret for Restorative Sleep." 
      secondary="A timeless gift of the Earth, whispered from warrior to healer, now reborn for your nights." 
      :extraTexts="[
          'For over 200 years, America has been hiding a secret more valuable than gold. Not a treasure buried deep in the mountains… but a natural gift, blooming in plain sight. A delicate golden flower once trusted by Native Californians to bring calm to the mind, rest to the body, and strength for the day ahead.', 
          'Long before sleep labs and prescription pills, the tribes of California discovered something extraordinary. They knew that true rest isn’t about sedation. True rest is balance a calm mind, a quiet heart, and the power to rise with the dawn, clear and strong.'
      ]"
    >
    </BgText>
  </section>
  <section class="flex justify-end">
    <BgText
      bgImage="/assets/tribo-tsl.webp"
      secondary="Their secret was a flower of fire and gold, carrying a spirit of peace." 
      :extraTexts="[
        'For generations, it was used to ease racing thoughts, quiet the nervous system, and guide the body into nights of deep, refreshing rest. Warriors trusted it to let them sleep without weakness — waking sharp and ready when the sun rose.'
          ]"
    >
    </BgText>
  </section>
  <section class="flex justify-end">
    <BgText
      class="min-h-[690px]"
      bgImage="/assets/camp-tsl.webp"
      secondary="But then the world forgot." 
      :extraTexts="[
        'The Gold Rush came, the lands were broken, and this treasure of nature was left behind. This flower became nothing more than a roadside bloom, while millions of people lay awake through the night. Tossing, turning, fighting thoughts that never stop. Reaching for pills that sedate but steal the morning. Struggling through days that feel heavier and heavier.'
          ]"
    >
    </BgText>
  </section>
  <section class="">
    <BgText
      class="min-h-[534px]"
      bgImage="/assets/wom-tsl.webp"
    >
    </BgText>
  </section>
  <section>
    <div class="bg-[#370F1E] px-[40px] pt-[26px] pb-[24px] text-center text-[#fff] justify-center">
      <h1 class="font-crossfit leading-[1.1] px-[35px] text-[32px] text-[#6EC8F0]">It doesn’t have to be this way.</h1>
      <p class="text-[12px] pt-[26px] leading-[1.1] pb-[10px] px-[10px] ">Because today, this old American secret has returned — inside every capsule of<span class="text-[#6EC8F0] font-black">Super Natural Sleep.</span></p>
      <p class="text-[12px] leading-[1.1] px-[5px]">At the heart of this gentle, powerful formula lies the California Poppy, blended with other carefully chosen botanicals to quiet the mind, relax the body, and prepare you for the kind of deep sleep that restores health, mood, energy, and focus.</p>
    </div>
  </section>
  <section class="">
    <BgText
      class="min-h-[534px]"
      bgImage="/assets/superment-tsl.webp"
    >
    </BgText>
  </section>
  <section class="bg-[#6EC8F0]">
     <div>
    <div
      class="font-crossfit px-0 md:px-12 pt-[18px] md:pt-[62px] text-[29px] md:text-[51px] leading-[31px] md:leading-[57px] justify-center items-center text-center md:text-start">
      <p class="text-white">Feel Calm, Clear, and<br> Energized by Day. <br><span class="text-[#370F1E]">Sleep
          Peacefully All Night.</span> </p>
    </div>
    <div class="flex flex-col px-[50px] lg:px-12">

      <div class="flex pt-[24px] pb-[0px] lg:pb-[22px] gap-[5px] ">
        <ul
          class="text-[#370F1E] relative bottom-[3px] gap-[4px] text-[14px] md:text-[18px] lg:text-[23px] leading-[22px] lg:leading-[30px] font-bold flex flex-col">
          <li class="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 12" fill="none">
              <path
                d="M11.5772 5.03735C11.5772 3.36365 10.7067 1.88581 9.38325 1C8.05985 1.88581 7.18933 3.36365 7.18933 5.03735C7.18933 6.71105 8.05985 8.18889 9.38325 9.0747C10.7067 8.18889 11.5772 6.71105 11.5772 5.03735Z"
                stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
              <path
                d="M7.2649 4.15601C6.13272 3.39929 4.759 3.13666 3.45573 3.36367C3.16891 4.89493 3.63688 6.53302 4.86467 7.71707C6.09246 8.90112 7.78822 9.35071 9.37831 9.07472"
                stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
              <path
                d="M11.4916 4.15161C12.6188 3.39934 13.9975 3.13671 15.2958 3.36373C15.5826 4.89499 15.1146 6.53307 13.8868 7.71713C12.659 8.90118 10.9633 9.35076 9.37317 9.07478"
                stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
              <path
                d="M4.27579 7.03601C2.9222 7.27193 1.75479 8.0242 1 9.07472C1.92084 10.3522 3.45055 11.1935 5.18657 11.1935C6.92258 11.1935 8.45229 10.3567 9.37313 9.07472"
                stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
              <path
                d="M14.4755 7.03601C15.8291 7.27193 16.9965 8.0242 17.7513 9.07472C16.8305 10.3522 15.3008 11.1935 13.5647 11.1935C11.8287 11.1935 10.299 10.3567 9.37817 9.07472"
                stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
            </svg>

            <p>Stress, Anxiety & Exhaustion Relief </p>
          </li>
          <li class="flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
              <path
                d="M7.88368 13.1788C11.6854 13.1788 14.7674 10.4525 14.7674 7.08941C14.7674 3.72632 11.6854 1 7.88368 1C4.08193 1 1 3.72632 1 7.08941C1 10.4525 4.08193 13.1788 7.88368 13.1788Z"
                stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
              <path
                d="M11.2551 7.0896C11.5016 7.0896 11.6878 7.28101 11.6576 7.49467C11.4312 9.15947 9.83102 10.4504 7.88366 10.4504C5.9363 10.4504 4.33615 9.15947 4.10971 7.49467C4.07952 7.28101 4.27073 7.0896 4.51227 7.0896H11.25H11.2551Z"
                stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
              <path
                d="M7.11388 4.97062C6.81699 4.49878 6.25342 4.17383 5.59927 4.17383C4.94512 4.17383 4.38154 4.49878 4.08466 4.97062"
                stroke="white" stroke-width="0.79845" stroke-miterlimit="10" stroke-linecap="round" />
              <path
                d="M11.6879 4.97062C11.391 4.49878 10.8275 4.17383 10.1733 4.17383C9.51915 4.17383 8.95558 4.49878 8.65869 4.97062"
                stroke="white" stroke-width="0.79845" stroke-miterlimit="10" stroke-linecap="round" />
            </svg>
            <p>Pain & Inflammation Reduction</p>
          </li>
          <li class="flex gap-3  items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
              <path
                d="M6.99362 5.89752C7.33579 4.74017 8.08052 3.92113 8.99633 3.39142C9.05168 3.36026 9.04162 3.28459 8.9762 3.27124C6.7068 2.71037 4.11032 3.68966 3.18445 6.0088C2.72151 7.16614 2.89763 8.46593 3.65745 9.48974C5.17709 11.5507 7.96478 11.9602 10.0178 10.9364C10.0732 10.9097 10.0631 10.834 10.0027 10.8162C8.97117 10.4913 8.02517 9.85029 7.38108 8.79533C6.84266 7.90952 6.70177 6.86791 6.98859 5.89752H6.99362Z"
                stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
              <path
                d="M7.71819 11.4927C10.3388 11.4927 12.4633 9.6134 12.4633 7.29513C12.4633 4.97686 10.3388 3.09753 7.71819 3.09753C5.09754 3.09753 2.97308 4.97686 2.97308 7.29513C2.97308 9.6134 5.09754 11.4927 7.71819 11.4927Z"
                stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
              <path
                d="M10.9286 1.32145C10.8581 1.04547 10.4958 0.916385 10.2291 1.06328C9.49949 1.46835 8.64407 1.69982 7.71819 1.69982C6.79232 1.69982 5.93689 1.4639 5.20726 1.06328C4.93553 0.911934 4.57827 1.04547 4.50782 1.32145C4.31661 2.06037 3.89392 2.76368 3.24481 3.34236C2.59065 3.92103 1.80064 4.29049 0.960308 4.45964C0.648329 4.52196 0.502403 4.84245 0.668457 5.07837C1.12636 5.72381 1.38802 6.48054 1.38802 7.29958C1.38802 8.11863 1.12133 8.87535 0.668457 9.52079C0.497371 9.76116 0.648329 10.0772 0.960308 10.1395C1.79561 10.3087 2.59065 10.6826 3.24481 11.2568C3.89896 11.831 4.31661 12.5343 4.50782 13.2777C4.57827 13.5537 4.94057 13.6828 5.20726 13.5359C5.93689 13.1308 6.79232 12.8993 7.71819 12.8993C8.64407 12.8993 9.49949 13.1353 10.2291 13.5359C10.5008 13.6872 10.8581 13.5537 10.9286 13.2777C11.1198 12.5388 11.5425 11.8355 12.1916 11.2568C12.8407 10.6781 13.6357 10.3087 14.4761 10.1395C14.7881 10.0772 14.934 9.75671 14.7679 9.52079C14.31 8.87535 14.0484 8.11863 14.0484 7.29958C14.0484 6.48054 14.3151 5.72381 14.7679 5.07837C14.939 4.838 14.7881 4.52196 14.4761 4.45964C13.6408 4.29049 12.8457 3.91658 12.1916 3.34236C11.5374 2.76368 11.1198 2.06483 10.9286 1.32145Z"
                stroke="white" stroke-width="0.79845" stroke-miterlimit="10" />
            </svg>
            <p>Mood, Focus & Energy </p>
          </li>
        </ul>
      </div>
      <div class="w-full flex justify-center">
        <ShopButton type="button" id="buy-button" :anchorId="anchorId" textColorClass="text-[#370F1E]"
          :showIcon="false">
          <div class="flex flex-row items-center bg-[#FFDC03] p-3 rounded-full justify-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 27 27" fill="none">
                <g clip-path="url(#clip0_142_375)">
                    <path
                        d="M1.3642 1.95044C0.985705 1.95044 0.678955 1.60268 0.678955 1.17359C0.678955 0.744491 0.985705 0.396729 1.3642 0.396729H4.92481C5.25465 0.396729 5.53006 0.66129 5.59521 1.01279L6.12954 3.27512H26.2283C26.6068 3.27512 26.9135 3.62288 26.9135 4.05197C26.9135 4.1118 26.9078 4.16976 26.8962 4.22586L26.0188 10.0303C26.0155 10.0593 26.0114 10.0873 26.0056 10.1154L25.1225 15.96C25.0656 16.3386 24.7762 16.606 24.448 16.6051H9.28033L9.8526 19.0254H23.7182C24.0967 19.0254 24.4035 19.3732 24.4035 19.8023C24.4035 20.2313 24.0967 20.5791 23.7182 20.5791H9.32733C9.02471 20.5791 8.74847 20.3491 8.66601 20.0023L7.73669 16.0703C7.72926 16.0442 7.72267 16.0171 7.71772 15.989L6.90961 12.5703L6.34476 10.1808C6.33734 10.1546 6.33075 10.1285 6.3258 10.1014L4.94295 4.2511V4.24923L4.39954 1.94857H1.3642V1.95044ZM21.2881 22.7751C21.0069 22.7751 20.7538 22.9041 20.5699 23.1125C20.386 23.321 20.2722 23.6089 20.2722 23.9268C20.2722 24.2446 20.386 24.5326 20.5699 24.741C20.7538 24.9495 21.0078 25.0785 21.2881 25.0785C21.5685 25.0785 21.8225 24.9495 22.0063 24.741C22.1902 24.5326 22.304 24.2446 22.304 23.9268C22.304 23.6089 22.1902 23.321 22.0063 23.1125C21.8225 22.9041 21.5685 22.7751 21.2881 22.7751ZM19.601 22.0132C20.0331 21.5233 20.6293 21.2204 21.2881 21.2204C21.947 21.2204 22.5432 21.5233 22.9753 22.0132C23.4073 22.503 23.6745 23.1789 23.6745 23.9259C23.6745 24.6728 23.4073 25.3487 22.9753 25.8385C22.5432 26.3284 21.947 26.6313 21.2881 26.6313C20.6293 26.6313 20.0331 26.3284 19.601 25.8385C19.1689 25.3487 18.9017 24.6728 18.9017 23.9259C18.9017 23.1789 19.1689 22.503 19.601 22.0132ZM12.3462 22.7751C12.0658 22.7751 11.8118 22.9041 11.628 23.1125C11.4449 23.321 11.3303 23.6089 11.3303 23.9268C11.3303 24.2446 11.4441 24.5326 11.628 24.741C11.8118 24.9495 12.0658 25.0785 12.3462 25.0785C12.6265 25.0785 12.8805 24.9495 13.0644 24.741C13.2483 24.5326 13.3621 24.2446 13.3621 23.9268C13.3621 23.6089 13.2483 23.321 13.0644 23.1125C12.8805 22.9041 12.6265 22.7751 12.3462 22.7751ZM10.6591 22.0132C11.0911 21.5233 11.6873 21.2204 12.3462 21.2204C13.005 21.2204 13.6012 21.5233 14.0333 22.0132C14.4654 22.503 14.7326 23.1789 14.7326 23.9259C14.7326 24.6728 14.4654 25.3487 14.0333 25.8385C13.6012 26.3284 13.005 26.6313 12.3462 26.6313C11.6873 26.6313 11.0911 26.3284 10.6591 25.8385C10.227 25.3487 9.9598 24.6728 9.9598 23.9259C9.9598 23.1789 10.227 22.5021 10.6591 22.0132ZM24.5271 10.7174H20.325L20.0628 15.0523H23.8724L24.5271 10.7174ZM18.9537 10.7174H13.1106L13.5204 15.0523H18.6915L18.9537 10.7174ZM11.7352 10.7174H7.89006L8.91504 15.0523H12.1458L11.736 10.7174H11.7352ZM7.52229 9.16371H11.5876L11.1777 4.82883H6.49732L7.52229 9.16371ZM12.963 9.16371H19.0469L19.3091 4.82883H12.5532L12.963 9.16371ZM20.4182 9.16371H24.7613L25.4161 4.82883H20.6796L20.4173 9.16371H20.4182Z"
                        fill="#370F1E" />
                </g>
                <defs>
                    <clipPath id="clip0_142_375">
                        <rect width="26.2346" height="26.2346" fill="white"
                            transform="translate(0.678955 0.396729)" />
                    </clipPath>
                </defs>
            </svg>
            <span class="font-DMSans text-[18px] md:text-[20px] font-bold text-[#370F1E]">
                Claim the Golden Secret Tonight
            </span>
          </div>
        </ShopButton>
      </div>
    </div>
    <div class="px-[50px] flex justify-center md:justify-start lg:justify-center">
      <div
        class="w-[260px] md:w-[540px] lg:w-[500px] gap-[11px] lg:mt-8 mt-[12px] flex flex-row justify-betwween md:justify-start justify-between">
        <div class="flex flex-row items-center gap-4 w-[120px] lg:w-[210px]">
          <svg class="lg:w-[70px] lg:h-[60px]" xmlns="http://www.w3.org/2000/svg" width="38" height="30"

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

        <div class="flex flex-row items-center justify-end gap-[14px] w-[120px] md:w-[270px] lg:w-[240px]">
          <svg class="lg:w-[55px] lg:h-[70px] md:w-[50px] md:h-[65px]" xmlns="http://www.w3.org/2000/svg" width="25" height="43"

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
  </div>
  </section>
 
  <DepoimentsD 
    primary="The results speak for themselves."
    subtitle="4.9/5 (160+ Reviews) | 98% Recommend"
    extraText="Thousands of people who once dreaded bedtime now look forward to it. They’re sleeping calmly through the night. They’re waking up refreshed instead of exhausted. They’re living their days with more energy, more patience, more joy."
    />
  <section>
    <BgText
      class="min-h-[584px] !justify-start !pt-0"
      content-class="mt-0"
      bgImage="/assets/ind-tsl.webp"
      :extraTexts="[
        'Because sleep should never be a gamble. It should be a treasure.',
        'And now, the old American secret of the California Poppy can be yours — tonight, tomorrow, and for every night that follows.'
      ]"
    >
    </BgText>
  </section>
  <section class="bg-[#FFDC03] pb-[37px] pt-[26px] px-[35px]">
    <p class="text-center pb-[32px] leading-[1] font-gelasio text-[#3D0B1E] italic">Don’t wait. Supplies are limited, and every day spent without restful sleep is a day lost to fatigue, stress, and struggle.
       <br><br>Order now, and let nature’s forgotten treasure restore the rest you’ve been searching for.</p>
      <div class="bg-[#3D0B1E] font-bold rounded-full py-[10px] text-center px-4 text-[14px] text-[#FFDC03]" >  
        Awaken Tomorrow Rested and Renewed
      </div>  
  </section>

  <div class="bg-[#fffaf0] w-full py-[45px] flex flex-col">
    <div class="px-0 sm:px-10 flex flex-col gap-0 sm:gap-[40px]">
      <div class="w-full max-w-[330px] sm:max-w-[950px] mx-auto">
        <h1
          class="text-center w-full sm:hidden pb-[30px] leading-none text-[#370F1E] text-[32px] font-bold font-crossfit">
          Frequently asked <br>
          questions:</h1>
        <h1
          class="text-start hidden w-full sm:block pb-[30px] leading-none text-[#370F1E] text-[52px] font-bold font-crossfit">
          Frequently asked questions:</h1>
        <LazyIsland>
          <div class="faq-wrap">
            <FAQ />
          </div>
        </LazyIsland>
      </div>
    </div>
  </div>
  <div class="bg-[#350e1d] w-full">
    <div class="max-w-[330px] sm:max-w-[950px] mx-auto">
      <SuperFooter2 />
    </div>
  </div>
</template>