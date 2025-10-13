<script setup lang="ts">
import '../styles/superSleep.scss';
import Footer from '../components/Footer.vue';
import { useSeo } from '../composables/useSeo';
import { ref, onMounted } from 'vue'
import ShopButton from '../components/ShopButton.vue';

const STAR_PATH = `M1.88672 0.572754C1.97421 0.31806 2.31558 0.29894 2.43457 0.525879L2.45605 0.57373V0.574707L2.67383 1.23096L3.33203 1.24561C3.47912 1.24914 3.57809 1.35162 3.61133 1.4585C3.64439 1.56513 3.62086 1.70221 3.50977 1.79053L2.97754 2.2124L3.17188 2.88525C3.21001 3.01727 3.15743 3.14454 3.06445 3.21533C2.96999 3.28708 2.82698 3.30408 2.70898 3.21826V3.21729L2.1709 2.82666L1.63281 3.21826C1.51441 3.30461 1.3715 3.28607 1.27734 3.21436C1.18494 3.14371 1.13167 3.01738 1.16992 2.88525L1.36328 2.2124L0.832031 1.79053L0.831055 1.78955C0.720402 1.70087 0.697756 1.56416 0.730469 1.4585C0.763494 1.35213 0.862598 1.2487 1.01074 1.24561L1.66699 1.23096L1.88574 0.574707L1.88672 0.572754Z`
const DROP_P1 = 'M6.5774 4.1062C6.43042 2.99363 5.99284 1.99236 5.35435 1.16246C5.19971 0.961737 5.35412 0.668052 5.60583 0.698181C8.5076 1.04815 10.8879 3.4325 11.0352 6.55414C11.1736 9.50077 9.13275 12.1904 6.25671 12.8477C4.26118 13.3039 2.31941 12.7508 0.900285 11.5626C0.708672 11.4019 0.81248 11.0862 1.06135 11.0639C1.12739 11.0583 1.19422 11.0508 1.26086 11.042C4.64414 10.595 7.02443 7.49015 6.5774 4.1062Z';
const DROP_P2 = 'M5.63338 0.468044C5.15795 0.411137 4.90303 0.956431 5.17074 1.30391C5.78529 2.10274 6.20619 3.06597 6.34762 4.13656C6.77789 7.39362 4.48687 10.382 1.23051 10.8122C1.1669 10.8206 1.10363 10.8277 1.04157 10.833L1.04111 10.833L1.04065 10.8331C0.594534 10.8731 0.395407 11.4416 0.751323 11.7402L0.751493 11.7403C2.22338 12.9726 4.23863 13.5468 6.30835 13.0737C9.29388 12.3914 11.4104 9.60186 11.2667 6.54326L11.2667 6.54322C11.1139 3.30471 8.64378 0.83112 5.63358 0.468069L5.63338 0.468044ZM10.8037 6.56502C10.6619 3.5603 8.37147 1.26525 5.57819 0.928306L10.8037 6.56502ZM5.57819 0.928306C5.56407 0.926634 5.55634 0.929517 5.55138 0.932276C5.54516 0.935743 5.53779 0.942424 5.53204 0.953169C5.52046 0.974795 5.52119 0.99924 5.53796 1.021L5.53805 1.02113C6.20043 1.88208 6.65467 2.92134 6.80718 4.07585C7.27098 7.58669 4.80142 10.8081 1.29122 11.2718C1.22179 11.2809 1.15167 11.2888 1.08189 11.2948C1.06839 11.296 1.06 11.3005 1.05378 11.3057C1.04655 11.3118 1.03988 11.3213 1.03605 11.333C1.03222 11.3448 1.03235 11.3554 1.03429 11.363C1.03587 11.3693 1.03926 11.3767 1.04925 11.385C2.41559 12.5289 4.28382 13.061 6.20506 12.6218C8.97161 11.9895 10.9368 9.3997 10.8037 6.56506';

const isOn = ref(false)

function applyTheme(on: boolean) {
  const r = document.documentElement;
  r.style.setProperty('--bg',     on ? '#2B1C33' : '#FFFFFF');
  r.style.setProperty('--bgtx',   on ? '#221629' : '#370F1E');
  r.style.setProperty('--bgc1',   on ? '#815499' : '#fbf0ff');
  r.style.setProperty('--bgc2',   on ? '#AC70CC' : '#EECCFF');
  r.style.setProperty('--bgc3',   on ? '#221629' : '#370F1E');
  r.style.setProperty('--fg',     on ? '#F0FAD7' : '#111827');
  r.style.setProperty('--tx',     on ? '#F5D7FF' : '#370F1E');
  r.style.setProperty('--txft',   on ? '#F0FAD7' : '#D78CFF');
  r.style.setProperty('--h1',     on ? '#FFF' : '#370F1E');
  r.style.setProperty('--accent', on ? '#370F1E' : '#6EC8F0');
  r.style.setProperty('--panel',  on ? '#1E293B' : '#FFFFFF');
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', on ? '#0B1320' : '#FFFFFF');
}

function toggle() {
  isOn.value = !isOn.value
  applyTheme(isOn.value)
}

onMounted(() => applyTheme(isOn.value))

  useSeo({
    title: 'Get Restful Sleep Naturally with Superment Super Sleep Aid',
    description: "Experience deep, natural, and restful sleep with Superment Super Sleep. Our melatonin-free botanical blend helps you fall asleep faster & wake up refreshed. Made in USA.",
    keywords: 'natural sleep aid sleep supplement restful sleep deep sleep fall asleep faster stay asleep longer wake up refreshed'
  })
  
</script>

<template>
    <section class="relative">
        <div class="relative w-full">
            <button
                id="switch"
                role="switch"
                :aria-checked="isOn"
                @click="toggle"
                class="absolute top-8 right-8 sm:top-6 sm:right-6 border-none z-50 rounded-[999px]"
                :title="isOn ? 'Tema B' : 'Tema A'"
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 24" width="60" height="32" class="block">
                    <rect x="0" y="0" width="45" height="24" rx="12"
                        :fill="isOn ? '#370F1E' : '#6EC8F0'"
                        class="transition-colors duration-200" />
                    <g class="transition-all duration-200"
                        :class="isOn ? 'opacity-0 scale-95' : 'opacity-100 scale-100'">
                        <circle cx="33" cy="10" r="4" fill="#FFFFFF"/>
                        <circle cx="26" cy="18" r="2" fill="#FFFFFF"/>
                    </g>
                    <!-- ON -->
                    <g class="transition-all duration-200"
                        :class="isOn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'">
                        <!-- estrela grande no lugar do círculo grande -->
                        <path :d="STAR_PATH" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="0.25"
                                transform="translate(13,08) scale(1.3) translate(0,-2)"/>
                        <!-- estrela pequena no lugar do círculo pequeno -->
                        <path :d="STAR_PATH" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="0.25"
                                transform="translate(16,18) scale(1.3) translate(0,-2)"/>
                    </g>
                    <g class="origin-center transition-transform duration-200"
                        :style="{ transform: `translateX(${isOn ? 21 : 0}px)` }">
                        <!-- OFF: bola -->
                        <circle cx="12" cy="12" r="8" fill="#FFFFFF"
                                class="origin-center transition-all duration-200"
                                :class="isOn ? 'opacity-0 scale-75' : 'opacity-100 scale-100'"/>

                        <g class="origin-center transition-all duration-200"
                            :class="isOn ? 'opacity-100 scale-80' : 'opacity-0 scale-95'"
                            transform="translate(12,12) translate(3,2) scale(1.15) translate(-6,-7)">
                            <path :d="DROP_P1" fill="#FFFFFF"/>
                            <path :d="DROP_P2" fill="#FFFFFF" fill-rule="evenodd" clip-rule="evenodd"/>
                        </g>
                    </g>
                </svg>
            </button>
            <div class="relative flex flex-col px-[32px] pt-[90px] pb-[10px] items-center z-20 bg-[var(--bg)]">
                <div class="border p-2 text-center text-[var(--tx)] border-[var(--tx)] w-[251px] justify-center rounded-3xl">
                    Download Your <span class="font-semibold italic"> Free Ebook </span>
                </div>
                <div class="leading-[1] text-center ">
                    <p class="font-semibold pt-3 font-gelasio italic text-[44px] text-[var(--h1)]">
                        3 Steps to Stop Binge Eating
                    </p>
                    <p class="text-[var(--tx)] pt-[10px] text-[20px]">
                        A practical guide to regain control, stop the cycle, and build a healthy relationship with food.
                    </p>
                </div>
            </div>            
            <div class="relative z-30  bg-[var(--bg)] *:flex items-center justify-center h-[320px] sm:h-[220px]">
                <img                        
                    src="/assets/ebook.webp"
                    alt="slim-ebook"
                    loading="lazy" decoding="async"
                    class="absolute top-0 left-[65%] -translate-x-[50%] w-[186px] h-auto"
                />
                <img                        
                    src="/assets/ebook.webp"
                    alt="slim-ebook"
                    loading="lazy" decoding="async"
                    class="absolute top-[40px] left-[17%] -translate-x-[10%] w-[186px] h-auto -rotate-[25deg]"
                />
            </div>
        </div>
    </section>
    <div class="bg-[var(--bg)] p-[32px]">
         <section class="relative rounded-2xl overflow-hidden h-[300px]">
            <img                        
                src="/assets/hero_slim.webp"
                alt="slim-hero"
                loading="lazy" decoding="async"
                class="absolute inset-0 object-cover -translate-y-6  translate-x-[0.5rem] scale-[1.65] w-full h-auto"
            />
            
            <div class="relative gap-[5px] z-10 flex px-[20px] leading-[1] flex-col italic pt-[20px] justify-center h-full">
                <p class="text-[#fff] font-gelasio text-[36px] font-medium">Take back<br> control, lose weight, and...</p>
                <p class="text-[#F5D7FF] font-gelasio" >stop constant <br>cravings in 3<br> simple steps.</p>
            </div>
        </section>
    </div>
    <section class="relative">
        <div class="absolute bg-[var(--bg)] inset-0 justify-items-center -z-10">
            <div class="z-0 absolute top-[14rem] w-[161vw] h-[60vh] bg-[var(--bgc1)] rounded-[200px] "></div>
            <div class="z-0 absolute top-[30rem] w-[161vw] h-[60vh] bg-[var(--bgc2)] rounded-[200px] "></div>
            <div class="z-0 absolute top-[40rem] w-[161vw] h-[60vh] bg-[var(--bgc3)] rounded-[200px]"></div>
        </div>
        <div class="justify-items-center pt-[30px]">
            <div class="flex flex-col px-[32px]">
                <div class="bg-[var(--bgtx)] z-20 max-h-[120px] w-full font-semibold items-center justify-center  flex gap-4 rounded-[28px] font-gelasio">
                    <span class="text-[93px] text-[#F5D7FF]">3</span>
                    <span class="text-[32px] text-[#E6B4FF] leading-[26px]">The <br>simple<br> steps.</span>
                </div>
                <div>
                <ul class="bg-[#F5D7FF] z-10 relative -top-[40px] font-gelasio leading-[18px] px-[30px] pt-[43px] rounded-[28px]">
                    <li class="flex gap-3 items-end text-[#370F1E] border-b pt-[19px] pb-[17px] border-[#D78CFF]">
                        <span class="text-[45px] mb-[5px] font-medium">1</span>
                        <span class="text-[18px] italic">
                            The type of food that reduces hunger instead of fueling it.
                        </span>
                    </li>
                    <li class="flex gap-3 items-end  text-[#370F1E] border-b pt-[24px] pb-[10px] border-[#D78CFF]">
                        <span class="text-[45px] mb-[15px] font-medium">2</span>
                        <span class="text-[18px] italic">
                            A simple change in your environment that makes cravings lose their power.
                        </span>
                    </li>
                    <li class="flex gap-3 items-end text-[#370F1E] pt-[25px] pb-[35px] ">
                        <span class="text-[45px] mb-[15px] font-medium">3</span>
                        <span class="text-[18px] italic">
                           A quick routine that resets your brain and body — and helps stop the binge cycle.
                        </span>
                    </li>                    
                </ul>
            </div>           
            </div>             
        </div>    
        <div class="px-[32px] flex flex-col items-center justify-center">   
            <div class="bg-[#370F1E] px-[20px] py-[5px] w-max text-center text-[20px] text-[#F5D7FF] rounded-3xl">
                What You’ll Gain
            </div>  
            <div class="">
                <p class="text-center py-[20px] italic text-[28px] text-[var(--tx)] leading-[1] font-medium font-gelasio">
                    With this guide, you’ll<br> discover how to:</p>
                <picture class="w-full flex">
                    <source class="" media="(min-width:1024px)" srcset="/assets/bannerSlim_desk.webp" type="image/webp">
                    <img                        
                        src="/assets/bannerSlim.webp"
                        alt="slim-ebook"
                        loading="lazy" decoding="async"
                        class="w-[358px] h-auto object-contain object-center"
                    />
                </picture>
                <p class="text-center pt-[20px] pb-[40px] leading-[1] font-sans text-[20px] text-[#fff] ">
                    It's simple. It's based on science. <br>And it's <span class="text-[var(--txft)]">completely free.</span></p>

            </div>
        </div>
    </section>
    <div class="bg-[var(--bgc3)]">
        <Footer class="relative bottom-0" color="bg-[var(--bgc3)]"
                colortext="#F0FAD7"
                title="SUPERMENT"
                subtitle="This material is 100% free and<br> for educational purposes only."/>
    </div>
   
    <div class="bg-[var(--bgc3)] flex justify-center" >
        <div class="items-center flex justify-center rounded-[25px] border border-[#ffffff40] bg-[#ffffff30] px-11 pb-6 pt-3">
            <ShopButton 
            class="bg-[#D2F58C] w-[300px] flex items-center justify-center gap-2  rounded-[25px]" 
            type="button" 
            id="buy-button" 
            textColorClass="text-[#370F1E]" :showIcon="false">
                <span class="whitespace-nowrap text-[20px]">Download Free Guide</span>
                <img src="/assets/iconBtn.webp" width="36" height="36" alt="icon">
            </ShopButton>
        </div>
    </div>
</template>