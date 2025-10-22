<script setup>
import { ref } from 'vue'
import ShopButton from './ShopButton.vue'
import Questions from '../components/Questions.vue';
import Carrossel from './Carrossel.vue';

const faqs = ref([
    {
        question: 'Why Super Relax',
        answer: 'Super Relax is a natural, plant-based supplement that helps restore nervous system balance — easing stress and anxiety during the day, supporting focus and mood, relieving pain and inflammation, and promoting deep, restorative sleep at night.',
        open: true
    },
    {
        question: 'Ingredients',
        answer: 'Each plant was chosen because science shows how it acts on your nervous system — gently, but effectively: \n\nPassionflower – Boosts GABA, the brain’s natural “brake pedal,” to quiet mental overactivity and reduce anxiety. \n\nCalifornia Poppy – Eases physical tension, helps relax the body, and supports deeper, restorative sleep. \n\nCorydalis – Supports natural pain relief and reduces nerve inflammation that keeps the body on edge. \n\n Prickly Pear – Helps lower cortisol and improve blood flow, protecting your body from stress overload. \n\nMarshmallow Root – Soothes discomforts (like throat dryness or irritation) that can worsen anxiety, supporting calm comfort. \n\n No fillers. No hidden chemicals. Just plants that speak your body’s language.',
        open: false
    },
    {
        question: 'How to use',
        answer: 'To gradually restore your nervous system, take 2 capsules with water every evening before bedtime. \n\n You can also take 1–2 capsules as needed during stressful moments to ease tension and maintain focus. \n\n Safe for daily use and non-habit forming.',
        open: false
    },
    {
        question: 'Benefits',
        answer: 'With balance restored, here’s what customers report:\n\nAnxiety & Stress Relief – Feel lighter, calmer, and more in control.\n\nImproved Mood – Relief of depressive symptoms and mental fog.\n\nPain & Inflammation Support – Comfort for nerve-related pain without harsh meds.\n\nSteady Energy by Day – Clearer focus, less tension, more productivity.\n\nRestorative Sleep by Night – Fall asleep naturally, stay asleep, and wake up refreshed.\n\n100% Plant-Based – No sedation. No grogginess. No dependency.',
        open: false
    },
])

function toggle(index) {
    faqs.value = faqs.value.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : false
    }))
}
const anchorId = 'shop-now-tsl'

</script>
<template>
    <div class="bg-[#6EC8F0] w-full h-full flex flex-col items-center justify-start pt-[32px] pb-10 lg:py-[95px]">
        <div class="lg:max-w-[814px] max-w-[331px] ">
            <p
                class="text-[#370F1E] text-center font-crossfit pb-[35px] px-[20px] text-[32px] md:text-[50px] font-bold leading-[1.1] lg:text-[60px]">
                That’s why we’ve made it easy for you to begin today.
            </p>
            <div class="hidden lg:block">
                <Carrossel />
            </div>
            <div class="lg:hidden flex flex-col gap-8">
                <div class=" h-full bg-[#90DAF4] rounded-[30px] flex flex-col items-center justify-start ">
                    <div class="relative">
                        <img src="/assets/n1.webp" alt="" class="block w-full h-auto" />
                        <img src="/assets/group_467_tsl1.webp" alt="" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[78%] z-10
                                w-[90%] pointer-events-none" />
                        <ShopButton textColorClass="text-[#370F1E]" iconColorClass="text-[#370F1E]" :show-icon="false"
                            productId="prod_SbKYsQrxStW8wB" class="absolute inset-x-0 mx-auto bottom-[10px] z-20
                                h-[78px] w-[312px]
                                bg-[linear-gradient(132deg,#FFDC03_2.9%,#C9B11C_94.39%)]
                                shadow-[0px_4px_10px_0px_rgba(110,200,240)]
                                !rounded-[24px] justify-center justify-self-center !px-[32px]">
                            <div class="flex flex-col items-center justify-start gap-0">
                                <div class="flex flex-row items-center gap-2">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_391_62)">
                                            <path
                                                d="M0.458207 1.03894C0.205118 1.03894 0 0.806395 0 0.519469C0 0.232542 0.205118 0 0.458207 0H2.83912C3.05967 0 3.24384 0.176907 3.2874 0.411949L3.6447 1.92472H17.0843C17.3374 1.92472 17.5425 2.15726 17.5425 2.44419C17.5425 2.4842 17.5387 2.52295 17.531 2.56046L16.9443 6.44179C16.9421 6.46116 16.9393 6.47992 16.9355 6.49867L16.3449 10.4069C16.3069 10.66 16.1133 10.8388 15.8939 10.8382H5.75157L6.13423 12.4566H15.4059C15.659 12.4566 15.8641 12.6892 15.8641 12.9761C15.8641 13.263 15.659 13.4956 15.4059 13.4956H5.783C5.58064 13.4956 5.39592 13.3418 5.34078 13.1099L4.71936 10.4806C4.7144 10.4631 4.70999 10.445 4.70668 10.4263L4.16632 8.14022L3.78861 6.54243C3.78365 6.52493 3.77924 6.50742 3.77593 6.48929L2.85125 2.57734V2.57609L2.48788 1.03769H0.458207V1.03894ZM13.7809 14.9639C13.5929 14.9639 13.4236 15.0502 13.3007 15.1896C13.1777 15.329 13.1016 15.5215 13.1016 15.7341C13.1016 15.9466 13.1777 16.1392 13.3007 16.2786C13.4236 16.418 13.5935 16.5042 13.7809 16.5042C13.9684 16.5042 14.1382 16.418 14.2612 16.2786C14.3842 16.1392 14.4603 15.9466 14.4603 15.7341C14.4603 15.5215 14.3842 15.329 14.2612 15.1896C14.1382 15.0502 13.9684 14.9639 13.7809 14.9639ZM12.6528 14.4545C12.9417 14.1269 13.3404 13.9244 13.7809 13.9244C14.2215 13.9244 14.6202 14.1269 14.9091 14.4545C15.198 14.782 15.3767 15.234 15.3767 15.7335C15.3767 16.2329 15.198 16.6849 14.9091 17.0124C14.6202 17.34 14.2215 17.5425 13.7809 17.5425C13.3404 17.5425 12.9417 17.34 12.6528 17.0124C12.3639 16.6849 12.1852 16.2329 12.1852 15.7335C12.1852 15.234 12.3639 14.782 12.6528 14.4545ZM7.80164 14.9639C7.61417 14.9639 7.44434 15.0502 7.32138 15.1896C7.19897 15.329 7.12233 15.5215 7.12233 15.7341C7.12233 15.9466 7.19842 16.1392 7.32138 16.2786C7.44434 16.418 7.61417 16.5042 7.80164 16.5042C7.98912 16.5042 8.15895 16.418 8.28191 16.2786C8.40487 16.1392 8.48096 15.9466 8.48096 15.7341C8.48096 15.5215 8.40487 15.329 8.28191 15.1896C8.15895 15.0502 7.98912 14.9639 7.80164 14.9639ZM6.6735 14.4545C6.96243 14.1269 7.36108 13.9244 7.80164 13.9244C8.24221 13.9244 8.64086 14.1269 8.92979 14.4545C9.21872 14.782 9.39737 15.234 9.39737 15.7335C9.39737 16.2329 9.21872 16.6849 8.92979 17.0124C8.64086 17.34 8.24221 17.5425 7.80164 17.5425C7.36108 17.5425 6.96243 17.34 6.6735 17.0124C6.38457 16.6849 6.20592 16.2329 6.20592 15.7335C6.20592 15.234 6.38457 14.7814 6.6735 14.4545ZM15.9468 6.90124H13.1369L12.9616 9.79989H15.509L15.9468 6.90124ZM12.2199 6.90124H8.31278L8.58683 9.79989H12.0446L12.2199 6.90124ZM7.39306 6.90124H4.82192L5.5073 9.79989H7.66766L7.39361 6.90124H7.39306ZM4.576 5.86231H7.29436L7.02032 2.96366H3.89062L4.576 5.86231ZM8.21409 5.86231H12.2823L12.4576 2.96366H7.94004L8.21409 5.86231ZM13.1992 5.86231H16.1034L16.5412 2.96366H13.374L13.1987 5.86231H13.1992Z"
                                                fill="#370F1E" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_391_62">
                                                <rect width="17.5425" height="17.5425" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <span
                                        class="font-DMSans text-[18px] md:text-[20px] leading-[1.2] font-bold text-[#370F1E]">
                                        1 Bottle:
                                    </span>
                                </div>
                                <span
                                    class="font-DMSans text-[18px] md:text-[20px] leading-[1.2] font-bold text-[#370F1E]">
                                    A 30-day supply to<br> experience the difference.
                                </span>
                            </div>
                        </ShopButton>
                    </div>
                </div>
                <div class="h-full bg-[#90DAF4] rounded-[30px] flex flex-col items-center justify-start ">
                    <div class="relative h-[370px]">
                        <img src="/assets/n3.webp" alt="" class="block w-full h-auto" />
                        <img src="/assets/selo3.webp" alt="" class="absolute top-[140px] right-[11px] -translate-x-1/2 -translate-y-[78%] z-10
                                w-[44px] pointer-events-none" />
                        <ShopButton textColorClass=" text-[#370F1E]" :show-icon="false" productId="prod_SbKa8ag01A2TGX"
                            class="absolute inset-x-0 mx-auto bottom-[10px] z-20
                                h-[88px] max-w-[310px]
                                bg-[linear-gradient(132deg,#FFDC03_2.9%,#C9B11C_94.39%)]
                                shadow-[0px_4px_10px_0px_rgba(110,200,240)]
                                !rounded-[24px] justify-center">
                            <div class="flex flex-col items-center justify-start gap-0">
                                <div class="flex flex-row items-center gap-2">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_391_62)">
                                            <path
                                                d="M0.458207 1.03894C0.205118 1.03894 0 0.806395 0 0.519469C0 0.232542 0.205118 0 0.458207 0H2.83912C3.05967 0 3.24384 0.176907 3.2874 0.411949L3.6447 1.92472H17.0843C17.3374 1.92472 17.5425 2.15726 17.5425 2.44419C17.5425 2.4842 17.5387 2.52295 17.531 2.56046L16.9443 6.44179C16.9421 6.46116 16.9393 6.47992 16.9355 6.49867L16.3449 10.4069C16.3069 10.66 16.1133 10.8388 15.8939 10.8382H5.75157L6.13423 12.4566H15.4059C15.659 12.4566 15.8641 12.6892 15.8641 12.9761C15.8641 13.263 15.659 13.4956 15.4059 13.4956H5.783C5.58064 13.4956 5.39592 13.3418 5.34078 13.1099L4.71936 10.4806C4.7144 10.4631 4.70999 10.445 4.70668 10.4263L4.16632 8.14022L3.78861 6.54243C3.78365 6.52493 3.77924 6.50742 3.77593 6.48929L2.85125 2.57734V2.57609L2.48788 1.03769H0.458207V1.03894ZM13.7809 14.9639C13.5929 14.9639 13.4236 15.0502 13.3007 15.1896C13.1777 15.329 13.1016 15.5215 13.1016 15.7341C13.1016 15.9466 13.1777 16.1392 13.3007 16.2786C13.4236 16.418 13.5935 16.5042 13.7809 16.5042C13.9684 16.5042 14.1382 16.418 14.2612 16.2786C14.3842 16.1392 14.4603 15.9466 14.4603 15.7341C14.4603 15.5215 14.3842 15.329 14.2612 15.1896C14.1382 15.0502 13.9684 14.9639 13.7809 14.9639ZM12.6528 14.4545C12.9417 14.1269 13.3404 13.9244 13.7809 13.9244C14.2215 13.9244 14.6202 14.1269 14.9091 14.4545C15.198 14.782 15.3767 15.234 15.3767 15.7335C15.3767 16.2329 15.198 16.6849 14.9091 17.0124C14.6202 17.34 14.2215 17.5425 13.7809 17.5425C13.3404 17.5425 12.9417 17.34 12.6528 17.0124C12.3639 16.6849 12.1852 16.2329 12.1852 15.7335C12.1852 15.234 12.3639 14.782 12.6528 14.4545ZM7.80164 14.9639C7.61417 14.9639 7.44434 15.0502 7.32138 15.1896C7.19897 15.329 7.12233 15.5215 7.12233 15.7341C7.12233 15.9466 7.19842 16.1392 7.32138 16.2786C7.44434 16.418 7.61417 16.5042 7.80164 16.5042C7.98912 16.5042 8.15895 16.418 8.28191 16.2786C8.40487 16.1392 8.48096 15.9466 8.48096 15.7341C8.48096 15.5215 8.40487 15.329 8.28191 15.1896C8.15895 15.0502 7.98912 14.9639 7.80164 14.9639ZM6.6735 14.4545C6.96243 14.1269 7.36108 13.9244 7.80164 13.9244C8.24221 13.9244 8.64086 14.1269 8.92979 14.4545C9.21872 14.782 9.39737 15.234 9.39737 15.7335C9.39737 16.2329 9.21872 16.6849 8.92979 17.0124C8.64086 17.34 8.24221 17.5425 7.80164 17.5425C7.36108 17.5425 6.96243 17.34 6.6735 17.0124C6.38457 16.6849 6.20592 16.2329 6.20592 15.7335C6.20592 15.234 6.38457 14.7814 6.6735 14.4545ZM15.9468 6.90124H13.1369L12.9616 9.79989H15.509L15.9468 6.90124ZM12.2199 6.90124H8.31278L8.58683 9.79989H12.0446L12.2199 6.90124ZM7.39306 6.90124H4.82192L5.5073 9.79989H7.66766L7.39361 6.90124H7.39306ZM4.576 5.86231H7.29436L7.02032 2.96366H3.89062L4.576 5.86231ZM8.21409 5.86231H12.2823L12.4576 2.96366H7.94004L8.21409 5.86231ZM13.1992 5.86231H16.1034L16.5412 2.96366H13.374L13.1987 5.86231H13.1992Z"
                                                fill="#370F1E" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_391_62">
                                                <rect width="17.5425" height="17.5425" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <span
                                        class="font-DMSans text-[18px] md:text-[20px] leading-[1.2] font-bold text-[#370F1E]">
                                        3 Bottles:
                                    </span>
                                </div>
                                <span
                                    class="font-DMSans text-[18px] md:text-[20px] leading-[1.2] font-bold text-[#370F1E] tracking-tight">
                                    Our most popular option. Steady <br>
                                    support for months of deep rest.
                                </span>
                            </div>
                        </ShopButton>
                    </div>
                </div>
                <div class="h-full bg-[#90DAF4] rounded-[30px] flex flex-col items-center justify-start ">
                    <div class="relative h-[365px]">
                        <img src="/assets/n6.webp" alt="" class="block w-full h-auto" />
                        <img src="/assets/selo6.webp" alt="" class="absolute top-[115px] -right-[13px] -translate-x-1/2 -translate-y-[78%] z-10
                                w-[44px] pointer-events-none" />
                        <ShopButton textColorClass=" text-[#370F1E]" :show-icon="false" productId="prod_SbKaRuJpDVBEzx"
                            class="absolute inset-x-0 mx-auto bottom-[10px] z-20
                                h-[80px] max-w-[310px]
                                bg-[linear-gradient(132deg,#FFDC03_2.9%,#C9B11C_94.39%)]
                                shadow-[0px_4px_10px_0px_rgba(110,200,240)]
                                    !rounded-[24px] justify-center">
                            <div class="flex flex-col items-center justify-start gap-0">
                                <div class="flex flex-row items-center gap-2">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_391_62)">
                                            <path
                                                d="M0.458207 1.03894C0.205118 1.03894 0 0.806395 0 0.519469C0 0.232542 0.205118 0 0.458207 0H2.83912C3.05967 0 3.24384 0.176907 3.2874 0.411949L3.6447 1.92472H17.0843C17.3374 1.92472 17.5425 2.15726 17.5425 2.44419C17.5425 2.4842 17.5387 2.52295 17.531 2.56046L16.9443 6.44179C16.9421 6.46116 16.9393 6.47992 16.9355 6.49867L16.3449 10.4069C16.3069 10.66 16.1133 10.8388 15.8939 10.8382H5.75157L6.13423 12.4566H15.4059C15.659 12.4566 15.8641 12.6892 15.8641 12.9761C15.8641 13.263 15.659 13.4956 15.4059 13.4956H5.783C5.58064 13.4956 5.39592 13.3418 5.34078 13.1099L4.71936 10.4806C4.7144 10.4631 4.70999 10.445 4.70668 10.4263L4.16632 8.14022L3.78861 6.54243C3.78365 6.52493 3.77924 6.50742 3.77593 6.48929L2.85125 2.57734V2.57609L2.48788 1.03769H0.458207V1.03894ZM13.7809 14.9639C13.5929 14.9639 13.4236 15.0502 13.3007 15.1896C13.1777 15.329 13.1016 15.5215 13.1016 15.7341C13.1016 15.9466 13.1777 16.1392 13.3007 16.2786C13.4236 16.418 13.5935 16.5042 13.7809 16.5042C13.9684 16.5042 14.1382 16.418 14.2612 16.2786C14.3842 16.1392 14.4603 15.9466 14.4603 15.7341C14.4603 15.5215 14.3842 15.329 14.2612 15.1896C14.1382 15.0502 13.9684 14.9639 13.7809 14.9639ZM12.6528 14.4545C12.9417 14.1269 13.3404 13.9244 13.7809 13.9244C14.2215 13.9244 14.6202 14.1269 14.9091 14.4545C15.198 14.782 15.3767 15.234 15.3767 15.7335C15.3767 16.2329 15.198 16.6849 14.9091 17.0124C14.6202 17.34 14.2215 17.5425 13.7809 17.5425C13.3404 17.5425 12.9417 17.34 12.6528 17.0124C12.3639 16.6849 12.1852 16.2329 12.1852 15.7335C12.1852 15.234 12.3639 14.782 12.6528 14.4545ZM7.80164 14.9639C7.61417 14.9639 7.44434 15.0502 7.32138 15.1896C7.19897 15.329 7.12233 15.5215 7.12233 15.7341C7.12233 15.9466 7.19842 16.1392 7.32138 16.2786C7.44434 16.418 7.61417 16.5042 7.80164 16.5042C7.98912 16.5042 8.15895 16.418 8.28191 16.2786C8.40487 16.1392 8.48096 15.9466 8.48096 15.7341C8.48096 15.5215 8.40487 15.329 8.28191 15.1896C8.15895 15.0502 7.98912 14.9639 7.80164 14.9639ZM6.6735 14.4545C6.96243 14.1269 7.36108 13.9244 7.80164 13.9244C8.24221 13.9244 8.64086 14.1269 8.92979 14.4545C9.21872 14.782 9.39737 15.234 9.39737 15.7335C9.39737 16.2329 9.21872 16.6849 8.92979 17.0124C8.64086 17.34 8.24221 17.5425 7.80164 17.5425C7.36108 17.5425 6.96243 17.34 6.6735 17.0124C6.38457 16.6849 6.20592 16.2329 6.20592 15.7335C6.20592 15.234 6.38457 14.7814 6.6735 14.4545ZM15.9468 6.90124H13.1369L12.9616 9.79989H15.509L15.9468 6.90124ZM12.2199 6.90124H8.31278L8.58683 9.79989H12.0446L12.2199 6.90124ZM7.39306 6.90124H4.82192L5.5073 9.79989H7.66766L7.39361 6.90124H7.39306ZM4.576 5.86231H7.29436L7.02032 2.96366H3.89062L4.576 5.86231ZM8.21409 5.86231H12.2823L12.4576 2.96366H7.94004L8.21409 5.86231ZM13.1992 5.86231H16.1034L16.5412 2.96366H13.374L13.1987 5.86231H13.1992Z"
                                                fill="#370F1E" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_391_62">
                                                <rect width="17.5425" height="17.5425" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <span
                                        class="font-DMSans text-[18px] md:text-[20px] leading-[1.2] font-bold text-[#370F1E]">
                                        6 Bottles:
                                    </span>
                                </div>
                                <span
                                    class="font-DMSans text-[18px] md:text-[20px] leading-[1.2] font-bold text-[#370F1E] tracking-tight">
                                    The best value, ensuring you
                                    <br>never run out of calm nights.
                                </span>
                            </div>
                        </ShopButton>
                    </div>
                </div>
            </div>
            <!-- desktop -->
            <div class="">
                <Questions :show-cta="false" class="bg-[#6EC8F0] pt-3 pb-[30px]" :items="[
                    { question: 'Q: Will I feel groggy in the morning?', resp: 'No — this is not a sedative. You’ll wake up clear and refreshed.' },
                    { question: 'Q: Does it contain melatonin?', resp: 'Absolutely not. 100% plant-based, melatonin-free, and non-habit forming.' },
                    { question: 'Q: How do I take it?', resp: 'Just 2 capsules with water, 30 minutes before bed.' },
                    { question: 'Q: When will I notice results?', resp: 'Some feel it on the very first night, others after a few days.' },
                    { question: 'Q: Is there a guarantee?', resp: 'Yes - up to 120-day, risk-free, money-back promise.' }
                ]" />
            </div>
            <div class="text-center text-[12px] justify-items-center">
                <div
                    class="font-crossfit w-full leading-[1.2] px-2 text-[#370F1E] items-center text-[32px] lg:text-[50px] gap-3">
                    Bring the California Poppy Into Your Night.
                </div>
                <p class="lg:hidden leading-[1] text-[#370F1E] lg:text-[24px] pb-[15px] pt-[28px]">And to make your
                    choice completely risk-free, every <br>order is protected by our up<span class="font-bold"> to
                        120-day, money-<br>back guarantee.</span>
                    <br><br> Try Super Natural Sleep. If you don’t feel the difference — if<br> your nights aren’t
                    calmer, if your mornings aren’t brighter —<br> just send the unopened bottles back. You’ll receive
                    a<br> refund for them.
                </p>
                <p class="hidden lg:block leading-[1] text-[#370F1E] lg:text-[24px] pb-[15px] pt-[28px]">And to make
                    your choice completely risk-free, every order is protected<br> by our up<span class="font-bold"> to
                        120-day, money-back guarantee.</span>
                    <br><br> Try Super Natural Sleep. If you don’t feel the difference — if your nights<br> aren’t
                    calmer, if your mornings aren’t brighter — just send the unopened<br> bottles back. You’ll receive a
                    refund for them.
                </p>
                <p class="font-gelasio italic pb-[30px] text-[#370F1E] text-[16px] lg:text-[32px]">That’s how confident
                    we are in this formula.</p>
                <ShopButton textColorClass=" text-[#370F1E]" iconColorClass="text-[#370F1E]" :show-icon="true"
                    :anchorId="anchorId"
                    class="flex flex-row w-full lg:w-[631px] items-center bg-[#FFDC03] !h-[40px] lg:!h-[73px] px-[20px] py-[7px] text-[14px] lg:text-[25px] font-bold rounded-full justify-center gap-3">
                    Rest Easy. Your Journey Is Risk-Free
                </ShopButton>
                <div class="flex justify-center md:justify-start lg:justify-center">
                    <div
                        class="w-[270px] md:w-[540px] lg:w-[500px] gap-[11px] lg:mt-8 mt-[12px] flex flex-row justify-betwween md:justify-start justify-between">
                        <div class="flex flex-row items-center gap-4 w-[120px] lg:w-[210px]">
                            <svg class="lg:w-[70px] lg:h-[60px]" xmlns="http://www.w3.org/2000/svg" width="35"
                                height="27" viewBox="0 0 43 28" fill="none">
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
                                <p class="font-DMSans text-[13px] md:text-[23px] text-[#370F1E]">Free U.S. <br>Shipping
                                </p>
                            </div>
                        </div>
                        <div class="w-[1px] h-[42px] md:h-[70px] bg-[#370F1E]"></div>

                        <div class="flex flex-row items-center justify-end gap-4 w-[120px] md:w-[270px] lg:w-[240px]">
                            <svg class="lg:w-[55px] lg:h-[70px] md:w-[50px] md:h-[65px]"
                                xmlns="http://www.w3.org/2000/svg" width="25" height="35" viewBox="0 0 33 48"
                                fill="none">
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
                                <p class="font-DMSans text-[13px] md:text-[23px] text-[#370F1E] ">
                                    Money-Back<br>Guarantee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped></style>