<script setup>
import { useSeo } from '@/composables/useSeo';
import Header from '@/components/Header.vue';
import logoHeader from '@/assets/image/discomfort/header.svg';
import Footer from '@/components/Footer.vue';
import Learnmore from '@/components/Learnmore.vue';
import SleepSection from '@/components/discomfort/SleepSection.vue';
import CtaDiscomfort from '@/components/discomfort/CtaDiscomfort.vue';
import ShopButton from '@/components/ShopButton.vue';

useSeo({
    title: 'SUPERMENT - Super Natural Sleep',
    description: 'Natural, deep sleep is essential for healthy, radiant skin.',
    keywords: 'superment, super natural sleep, sleep, natural, radiant skin'
})
</script>

<template>
    <div class="w-full flex flex-col items-center justify-start">
        <div class="w-full">
            <Header color="#370F1E" :imageSrc="logoHeader" />
            <SleepSection />
        </div>
        <div class="w-full h-[60px] bg-[#370F1E] flex items-center justify-center">
            <span
                class="font-crossfit-light text-[#E1DCCD] text-[20px] lg:text-[28px] font-bold leading-[1.1] tracking-[0.4px]">CLEAN
            </span>
            <span
                class="font-gelasio text-[#E1DCCD] text-[20px] lg:text-[28px] font-bold leading-[1.1] tracking-[0.4px]">-</span>
            <span
                class="font-crossfit-light text-[#E1DCCD] text-[20px] lg:text-[28px] font-bold leading-[1.1] tracking-[0.4px]">
                LABEL </span>
            <span
                class="font-gelasio text-[#E1DCCD] text-[20px] lg:text-[28px] font-bold leading-[1.1] tracking-[0.4px]">.
            </span>
            <span
                class="font-crossfit-light text-[#E1DCCD] text-[20px] lg:text-[28px] font-bold leading-[1.1] tracking-[0.4px] ml-1">
                MELATONIN </span>
            <span
                class="font-gelasio text-[#E1DCCD] text-[20px] lg:text-[28px] font-bold leading-[1.1] tracking-[0.4px]">-</span>
            <span
                class="font-crossfit-light text-[#E1DCCD] text-[20px] lg:text-[28px] font-bold leading-[1.1] tracking-[0.4px]">
                FREE.
            </span>
            <span
                class="font-crossfit-light text-[#E1DCCD] text-[20px] lg:text-[28px] font-bold leading-[1.1] tracking-[0.4px] ml-1">
                NON
            </span>
            <span
                class="font-gelasio text-[#E1DCCD] text-[20px] lg:text-[28px] font-bold leading-[1.1] tracking-[0.4px]">
                -
            </span>
            <span
                class="font-crossfit-light text-[#E1DCCD] text-[20px] lg:text-[28px] font-bold leading-[1.1] tracking-[0.4px]">
                SEDATIVE.
            </span>
        </div>
        <div class="w-[316px] py-[48px] flex flex-col items-center justify-start lg:grid grid-cols-2 lg:w-full">
            <picture class="flex flex-row items-start justify-end">
                <source srcset="@/assets/image/discomfort/imagem-1-desk.webp" media="(min-width:1024px)">
                <img src="@/assets/image/discomfort/imagem-1.webp" alt="image-1"
                    class="w-[316px] h-[258px] lg:w-[402px] lg:h-[386px] rounded-[10px]" />
            </picture>
            <div
                class="w-full pt-[8px] grid-colspan-1 lg:flex lg:flex-col lg:items-start lg:justify-start lg:h-[386px] lg:pt-0 lg:px-[32px]">
                <p class="text-[#370F1E] font-crossfit text-[32px] font-bold leading-[1] uppercase lg:text-[40px]">
                    Sometimes
                    you're
                    <br class="hidden lg:block">not wired — you're <br class="hidden lg:block">just uncomfortable.
                </p>
                <p class="font-DMSans text-[20px] leading-[1] text-[#525252] mt-[8px]">
                    Discomfort in your gut, throat, <br class="block lg:hidden">or body <br class="hidden lg:block">may
                    seem minor, but <br class="block lg:hidden">it quietly <br class="hidden lg:block">sabotages your
                    sleep
                    <br class="block lg:hidden">- keeping you <br class="hidden lg:block">restless, night <br
                        class="block lg:hidden">after night.
                </p>
                <ShopButton id="buy-button" productId="prod_SbKYsQrxStW8wB" textColorClass="text-[#083D4F]"
                    :showIcon=false
                    class="w-[316px] bg-[#FFC35A] rounded-full font-bold hover:bg-[#FFC63a]/70 transition font-DMSans text-[18px] mt-[24px] ">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.5 22C6.95 22 6.47917 21.8042 6.0875 21.4125C5.69583 21.0208 5.5 20.55 5.5 20C5.5 19.45 5.69583 18.9792 6.0875 18.5875C6.47917 18.1958 6.95 18 7.5 18C8.05 18 8.52083 18.1958 8.9125 18.5875C9.30417 18.9792 9.5 19.45 9.5 20C9.5 20.55 9.30417 21.0208 8.9125 21.4125C8.52083 21.8042 8.05 22 7.5 22ZM17.5 22C16.95 22 16.4792 21.8042 16.0875 21.4125C15.6958 21.0208 15.5 20.55 15.5 20C15.5 19.45 15.6958 18.9792 16.0875 18.5875C16.4792 18.1958 16.95 18 17.5 18C18.05 18 18.5208 18.1958 18.9125 18.5875C19.3042 18.9792 19.5 19.45 19.5 20C19.5 20.55 19.3042 21.0208 18.9125 21.4125C18.5208 21.8042 18.05 22 17.5 22ZM6.65 6L9.05 11H16.05L18.8 6H6.65ZM5.7 4H20.45C20.8333 4 21.125 4.17083 21.325 4.5125C21.525 4.85417 21.5333 5.2 21.35 5.55L17.8 11.95C17.6167 12.2833 17.3708 12.5417 17.0625 12.725C16.7542 12.9083 16.4167 13 16.05 13H8.6L7.5 15H19.5V17H7.5C6.75 17 6.18333 16.6708 5.8 16.0125C5.41667 15.3542 5.4 14.7 5.75 14.05L7.1 11.6L3.5 4H1.5V2H4.75L5.7 4Z"
                            fill="#083D4F" />
                    </svg>
                    Shop: First Trial Special Offer
                </ShopButton>
            </div>
        </div>
        <div class="relative flex flex-col items-center justify-start w-full h-[755px] lg:h-[250px]">
            <div class="absolute z-20 w-[316px] lg:w-[804px] grid lg:grid-cols-2">
                <div class="hidden lg:flex flex-col items-end justify-start col-span-2 lg:col-span-1">
                    <p
                        class="text-[#370F1E] text-[40px] font-crossfit font-bold leading-[1] uppercase  text-start w-[402px]">
                        Finally, a sleep
                        formula that
                        feels good
                        to take:</p>
                </div>
                <div
                    class="h-[260px] lg:w-[402px] lg:h-[100px] relative -top-[110px] right-[15px] lg:-top-[180px] lg:left-[80px] col-span-2 lg:col-span-1">
                    <picture class="flex flex-row items-start justify-end">
                        <!-- Imagem para telas grandes -->
                        <source srcset="@/assets/image/discomfort/embalagem-1-desk.webp" media="(min-width:1024px)">

                        <!-- Imagem padrão (mobile) -->
                        <img src="@/assets/image/discomfort/embalagem-1.png" alt="frasco"
                            class="w-[298px] h-[410px] rotate-[5deg]">
                    </picture>
                </div>
                <p
                    class="text-[#370F1E] text-[32px] font-crossfit font-bold leading-[1] uppercase block lg:hidden col-span-2">
                    Finally, a sleep
                    formula that
                    feels good
                    to take:</p>
                <div class="col-span-2 grid grid-cols-1 mt-[16px] gap-[25px] lg:w-[804px] lg:grid-cols-6">
                    <div
                        class="p-[20px] bg-white rounded-lg shadow-[0px_0px_18px_0px_rgba(0,0,0,0.16)] inline-flex flex-col justify-start items-start gap-1 lg:col-span-2">
                        <div class="flex flex-row items-start justify-center gap-3 lg:flex-col lg:flex-col">
                            <img src="@/assets/image/discomfort/digestion.png" alt="">
                            <p class="font-DMSans text-[20px] leading-[1.04] text-[#370F1E] font-bold">Soothes
                                digestion
                                <br>and
                                relieves reflux
                            </p>
                        </div>
                        <p class="font-DMSans text-[16px] leading-[1.12] text-[#525252] tracking-tight"><span
                                class="italic">Marshmallow Root</span> calms
                            the digestive
                            tract and throat,
                            easing bloating, discomfort, and nighttime irritation.</p>
                    </div>
                    <div
                        class="p-[20px] bg-white rounded-lg shadow-[0px_0px_18px_0px_rgba(0,0,0,0.16)] inline-flex flex-col justify-start items-start gap-1 lg:col-span-2">
                        <div class="flex flex-row items-start justify-center gap-3 lg:flex-col">
                            <img src="@/assets/image/discomfort/face.png" alt="">
                            <p class="font-DMSans text-[20px] leading-[1.04] text-[#370F1E] font-bold">Reduces
                                coughing
                                and throat dryness
                            </p>
                        </div>
                        <p class="font-DMSans text-[16px] leading-[1.12] text-[#525252] tracking-tight"><span
                                class="italic">Marshmallow Root</span> also supports the respiratory system for
                            smoother,
                            uninterrupted breathing while you sleep.</p>
                    </div>
                    <div
                        class="p-[20px] bg-white rounded-lg shadow-[0px_0px_18px_0px_rgba(0,0,0,0.16)] inline-flex flex-col justify-start items-start gap-1 lg:col-span-2">
                        <div class="flex flex-row items-start justify-center gap-3 lg:flex-col">
                            <img src="@/assets/image/discomfort/psyc.png" alt="">
                            <p class="font-DMSans text-[20px] leading-[1.04] text-[#370F1E] font-bold">Calms the
                                mind
                                and eases anxiety
                            </p>
                        </div>
                        <p class="font-DMSans text-[16px] leading-[1.12] text-[#525252] tracking-tight"><span
                                class="italic">Passionflower and California Poppy</span> gently relax the nervous
                            system
                            so you can unwind and fall asleep faster.</p>
                    </div>
                    <div
                        class="p-[20px] bg-white rounded-lg shadow-[0px_0px_18px_0px_rgba(0,0,0,0.16)] inline-flex flex-col justify-start items-start gap-1 lg:col-span-3">
                        <div class="flex flex-row items-start justify-center gap-3 lg:flex-col">
                            <img src="@/assets/image/discomfort/restle.png" alt="">
                            <p class="font-DMSans text-[20px] leading-[1.04] text-[#370F1E] font-bold">Relieves
                                tension
                                and physical restlessness
                            </p>
                        </div>
                        <p class="font-DMSans text-[16px] leading-[1.12] text-[#525252] tracking-tight"><span
                                class="italic">Corydalis</span> helps reduce minor aches and body agitation that
                            make it
                            hard <br>to stay asleep.</p>
                    </div>
                    <div
                        class="p-[20px] bg-white rounded-lg shadow-[0px_0px_18px_0px_rgba(0,0,0,0.16)] inline-flex flex-col justify-start items-start gap-1 lg:col-span-3">
                        <div class="flex flex-row items-start justify-center gap-3 lg:flex-col">
                            <img src="@/assets/image/discomfort/cloud.png" alt="">
                            <p class="font-DMSans text-[20px] leading-[1.04] text-[#370F1E] font-bold">Supports
                                deep,
                                uninterrupted sleep
                            </p>
                        </div>
                        <p class="font-DMSans text-[16px] leading-[1.12] text-[#525252] tracking-tight"><span
                                class="italic">Prickly Pear</span> promotes digestion, reduces inflammation, and
                            supports your
                            body’s natural sleep rhythm.</p>
                    </div>
                </div>
                <div class="col-span-2 w-full justify-items-center">
                    <ShopButton id="buy-button" productId="prod_SbKYsQrxStW8wB" textColorClass="text-[#083D4F]"
                        :showIcon=false
                        class="w-[316px] bg-[#FFC35A] rounded-full font-bold hover:bg-[#FFC63a]/70 transition font-DMSans text-[18px] mt-[24px]">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.5 22C6.95 22 6.47917 21.8042 6.0875 21.4125C5.69583 21.0208 5.5 20.55 5.5 20C5.5 19.45 5.69583 18.9792 6.0875 18.5875C6.47917 18.1958 6.95 18 7.5 18C8.05 18 8.52083 18.1958 8.9125 18.5875C9.30417 18.9792 9.5 19.45 9.5 20C9.5 20.55 9.30417 21.0208 8.9125 21.4125C8.52083 21.8042 8.05 22 7.5 22ZM17.5 22C16.95 22 16.4792 21.8042 16.0875 21.4125C15.6958 21.0208 15.5 20.55 15.5 20C15.5 19.45 15.6958 18.9792 16.0875 18.5875C16.4792 18.1958 16.95 18 17.5 18C18.05 18 18.5208 18.1958 18.9125 18.5875C19.3042 18.9792 19.5 19.45 19.5 20C19.5 20.55 19.3042 21.0208 18.9125 21.4125C18.5208 21.8042 18.05 22 17.5 22ZM6.65 6L9.05 11H16.05L18.8 6H6.65ZM5.7 4H20.45C20.8333 4 21.125 4.17083 21.325 4.5125C21.525 4.85417 21.5333 5.2 21.35 5.55L17.8 11.95C17.6167 12.2833 17.3708 12.5417 17.0625 12.725C16.7542 12.9083 16.4167 13 16.05 13H8.6L7.5 15H19.5V17H7.5C6.75 17 6.18333 16.6708 5.8 16.0125C5.41667 15.3542 5.4 14.7 5.75 14.05L7.1 11.6L3.5 4H1.5V2H4.75L5.7 4Z"
                                fill="#083D4F" />
                        </svg> Shop: First Trial Special Offer
                    </ShopButton>
                </div>
            </div>
        </div>
        <div
            class="w-full h-full flex flex-col items-center justify-end pt-[555px] lg:pt-[455px] pb-[100px] bg-[#370F1E] rounded-3xl lg:grid lg:grid-cols-2">
            <div class="w-[316px] flex flex-col items-center justify-end lg:w-full lg:items-end ">
                <p
                    class="text-[#FFC35A] font-crossfit-light font-black text-[30px] leading-[1.1] uppercase block lg:hidden">
                    Fewer
                    nighttime
                    bathroom
                    trips
                    <span class="font-gelasio">-</span>
                    finally.
                </p>
                <div
                    class="relative h-[295px] w-[316px] flex items-start justify-start overflow-hidden lg:right-[80px]">
                    <img src="@/assets/image/discomfort/embalagem-1.png" alt=""
                        class="w-[268px] absolute z-10 -top-[42px] right-[100px]" />
                    <img src="@/assets/image/discomfort/embalagem-1.png" alt=""
                        class="w-[268px] absolute left-[80px] rotate-[30deg]" />
                </div>
            </div>
            <div class="w-[316px] flex flex-col items-center justify-start lg:w-[420px]">
                <p class="text-[#FFC35A] font-crossfit font-black uppercase text-[40px] leading-[1.1] ">Fewer
                    nighttime
                    bathroom trips —
                    finally.</p>
                <p class="text-[#FFF] font-DMSanss text-[20px] leading-[1] lg:text-[24px] lg:mt-3 text-start lg:w-full">
                    By calming the nervous <br class="hidden lg:block">system and deepening sleep
                </p>
                <p class="text-[#FFF] font-DMSanss text-[16px] lg:text-[20px] leading-[1] mt-2 lg:w-full lg:mt-3">Super
                    Natural
                    Sleep
                    <span class="font-extralight">
                        helps reduce <br class="hidden lg:block">those
                        unnecessary wake-ups to <br class="hidden lg:block">pee — so you <br class="block lg:hidden">can
                        stay asleep and <br class="hidden lg:block">wake
                        up truly <br class="block lg:hidden">refreshed.
                    </span>
                </p>
                <p
                    class="text-[#6EC8F0] font-DMSanss text-[20px] lg:text-[24px] leading-[1] mt-2 font-semibold lg:mt-3">
                    Premium, clean, gentle, and free of harsh side effects.</p>
            </div>
        </div>
        <div
            class="pt-[36px] pb-[84px] md:pt-16 bg-[#FFFAF0] flex flex-col items-center justify-center -mt-10 relative z-20 rounded-3xl w-full lg:pt-[40px] lg:pb-[40px]">
            <div class="w-full flex flex-col items-center justify-center md:w-[952px]">
                <p
                    class="font-crossfit text-[30px] leading-[1.11] md:text-[40px] text-[#370F1E] text-center mb-2 md:mb-12 lg:mb-6 mx-8 w-[356px] md:w-[700px]">
                    EACH INGREDIENT WAS <br class="block lg:hidden">CAREFULLY SELECTED TO HELP <br
                        class="block lg:hidden">YOU SLEEP DEEPLY, NATURALLY:
                </p>

                <div
                    class="w-[316px] mt-[14px] md:w-[1000px] flex flex-col items-center justify-center md:flex-row md:h-[287px] md:mt-0 md:gap-6 lg:h-[260px]">
                    <div class="flex items-center w-[316px] md:w-[168px] md:h-[287px] md:flex-col md:items-center  pt-2  pb-2 border-b-2 md:flex-col md:border-b-0"
                        style="border-color: #FFE1AA">
                        <div
                            class="w-16 h-16 md:w-32 md:h-32 flex items-center justify-center mr-4 flex-shrink-0 md:mb-3 md:mr-0">
                            <img src="@/assets/image/sleepWomam/marshmallow-root.png" alt="Marshmallow Root"
                                class="max-w-full max-h-full object-contain" />
                        </div>
                        <div class="flex flex-col items-start md:items-center justify-start md:w-[200px]">
                            <h3 class="text-[#525252] font-crossfit text-[20px] md:text-[24px] md:h-[32px]">Marshmallow
                                Root
                            </h3>
                            <p class="text-[#525252] md:text-center text-[16px] leading-[1.08em] md:text-[18px]">
                                digestion & throat relief
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center w-[316px] md:w-[168px] md:h-[287px] md:flex-col md:items-center py-2 h-[96px] md:flex-col md:border-b-0
                    border-b-2 " style="border-color: #FFE1AA">
                        <div
                            class="w-16 h-16 md:w-[128px] md:h-[128px] flex items-center justify-center mr-4 flex-shrink-0 md:mb-3 md:mr-0">
                            <img src="@/assets/image/sleepWomam/passionflower.png" alt="Passionflower"
                                class="max-w-full max-h-full object-contain" />
                        </div>
                        <div class="flex flex-col items-start md:items-center justify-start">
                            <h3 class="text-[#525252] font-crossfit text-[20px] md:text-[24px] text-start md:h-[32px]">
                                Passionflower
                            </h3>
                            <p
                                class="text-[#525252] md:text-center font-DMsans text-[16px] leading-[1.08em] md:text-[18px] ">
                                calms the mind
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center w-[316px] md:w-[168px] md:h-[287px] md:flex-col md:items-center  pt-3  pb-2 border-b-2 md:flex-col md:border-b-0"
                        style="border-color: #FFE1AA">
                        <div
                            class="w-16 h-16 md:w-[124px] md:h-[124px] flex items-center justify-center mr-4 flex-shrink-0 md:mb-3 md:mr-0">
                            <img src="@/assets/image/sleepWomam/california-poppy.png" alt="California Poppy"
                                class="max-w-full max-h-full object-contain" />
                        </div>
                        <div class="flex flex-col items-start md:items-center justify-start">
                            <h3 class="text-[#525252] font-crossfit text-[20px] md:text-[24px] md:h-[32px]">California
                                Poppy
                            </h3>
                            <p class="text-[#525252] md:text-center text-[16px] leading-[1.08em] md:text-[18px]">
                                relaxes body & brain
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center w-[316px] md:w-[168px] md:h-[287px] md:flex-col md:items-center  pt-2  pb-2 border-b-2 md:flex-col md:border-b-0"
                        style="border-color: #FFE1AA">
                        <div
                            class="w-16 h-16 md:w-32 md:h-32 flex items-center justify-center mr-4 flex-shrink-0 md:mb-3 md:mr-0">
                            <img src="@/assets/image/sleepWomam/corydalis.png" alt="Corydalis"
                                class="max-w-full max-h-full object-contain" />
                        </div>
                        <div class="flex flex-col items-start md:items-center justify-start">
                            <h3 class="text-[#525252] font-crossfit text-[20px] md:text-[24px] md:h-[32px]">Corydalis
                            </h3>
                            <p class="text-[#525252] md:text-center text-[16px] leading-[1.08em] md:text-[18px]">
                                relieves tension
                            </p>
                        </div>
                    </div>
                    <div class="flex items-center w-[316px] md:w-[168px] md:h-[287px] md:flex-col md:items-center  pt-2 pb-2 border-b-2 md:flex-col md:border-b-0"
                        style="border-color: #FFE1AA">
                        <div
                            class="w-14 h-14 md:w-32 md:h-32 flex items-center justify-center mr-6 flex-shrink-0 md:mb-3 md:mr-0">
                            <img src="@/assets/image/sleepWomam/prickly-pear.png" alt="Prickly Pear"
                                class="max-w-full max-h-full object-contain" />
                        </div>
                        <div class="flex flex-col items-start md:items-center justify-start">
                            <h3 class="text-[#525252] font-crossfit text-[20px] md:text-[24px] md:h-[32px]">Prickly Pear
                            </h3>
                            <p class="text-[#525252] md:text-center text-[16px] leading-[1.08em] md:text-[18px]">
                                supports inflammation <br>balance & sleep rhythm
                            </p>
                        </div>
                    </div>
                </div>

                <div class="text-center pt-1">
                    <div class="flex justify-center">
                        <ShopButton id="buy-button" productId="prod_SbKYsQrxStW8wB" textColorClass="text-[#083D4F]"
                            :showIcon=false
                            class="w-[316px] bg-[#FFC35A] rounded-full font-bold hover:bg-[#FFC63a]/70 transition font-DMSans text-[18px] mt-[24px] lg:mt-0">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.5 22C6.95 22 6.47917 21.8042 6.0875 21.4125C5.69583 21.0208 5.5 20.55 5.5 20C5.5 19.45 5.69583 18.9792 6.0875 18.5875C6.47917 18.1958 6.95 18 7.5 18C8.05 18 8.52083 18.1958 8.9125 18.5875C9.30417 18.9792 9.5 19.45 9.5 20C9.5 20.55 9.30417 21.0208 8.9125 21.4125C8.52083 21.8042 8.05 22 7.5 22ZM17.5 22C16.95 22 16.4792 21.8042 16.0875 21.4125C15.6958 21.0208 15.5 20.55 15.5 20C15.5 19.45 15.6958 18.9792 16.0875 18.5875C16.4792 18.1958 16.95 18 17.5 18C18.05 18 18.5208 18.1958 18.9125 18.5875C19.3042 18.9792 19.5 19.45 19.5 20C19.5 20.55 19.3042 21.0208 18.9125 21.4125C18.5208 21.8042 18.05 22 17.5 22ZM6.65 6L9.05 11H16.05L18.8 6H6.65ZM5.7 4H20.45C20.8333 4 21.125 4.17083 21.325 4.5125C21.525 4.85417 21.5333 5.2 21.35 5.55L17.8 11.95C17.6167 12.2833 17.3708 12.5417 17.0625 12.725C16.7542 12.9083 16.4167 13 16.05 13H8.6L7.5 15H19.5V17H7.5C6.75 17 6.18333 16.6708 5.8 16.0125C5.41667 15.3542 5.4 14.7 5.75 14.05L7.1 11.6L3.5 4H1.5V2H4.75L5.7 4Z"
                                    fill="#083D4F" />
                            </svg> Shop: First Trial Special Offer
                        </ShopButton>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="w-full flex flex-row items-center justify-center gap-3 bg-[#FFF] pt-[40px] pb-[80px] lg:pt-[62px] lg:pb-[106px]">
            <svg width="82" height="81" viewBox="0 0 82 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_2972)">
                    <path
                        d="M40.8375 73.272C59.0107 73.272 73.743 58.5397 73.743 40.3665C73.743 22.1932 59.0107 7.46094 40.8375 7.46094C22.6643 7.46094 7.93197 22.1932 7.93197 40.3665C7.93197 58.5397 22.6643 73.272 40.8375 73.272Z"
                        fill="#370F1E" />
                    <path
                        d="M40.8379 75.9402C21.2384 75.9402 5.26516 59.9969 5.26516 40.3674C5.26516 20.738 21.2384 4.79468 40.8379 4.79468C60.4374 4.79468 76.4106 20.738 76.4106 40.3674C76.4106 59.9969 60.4673 75.9402 40.8379 75.9402ZM40.8379 6.02339C21.8977 6.02339 6.49388 21.4273 6.49388 40.3674C6.49388 59.3076 21.8977 74.7114 40.8379 74.7114C59.7781 74.7114 75.1819 59.3076 75.1819 40.3674C75.1819 21.4273 59.7781 6.02339 40.8379 6.02339Z"
                        fill="#370F1E" />
                    <path
                        d="M40.8376 80.7045C18.6009 80.7045 0.499847 62.6035 0.499847 40.3668C0.499847 18.1301 18.6009 0.0290527 40.8376 0.0290527C63.0743 0.0290527 81.1753 18.1301 81.1753 40.3668C81.1753 62.6035 63.0743 80.7045 40.8376 80.7045ZM40.8376 2.48648C19.9495 2.48648 2.95727 19.4787 2.95727 40.3668C2.95727 61.2549 19.9495 78.2471 40.8376 78.2471C61.7257 78.2471 78.7179 61.2549 78.7179 40.3668C78.7179 19.4787 61.7257 2.48648 40.8376 2.48648Z"
                        fill="#370F1E" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M21.5734 39.2734H28.1617V36.7827H19.0827V45.6206H21.4931V39.3002H21.5734V39.2734Z"
                        fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M19.0827 28.1056H37.1067H37.1335C41.0168 28.1323 44.1771 31.2926 44.1771 35.1759C44.1771 39.0592 41.0168 42.2195 37.1335 42.2462H37.0799H32.661V33.3012H35.1517V39.8091H35.3659H37.0799H37.1871C39.7045 39.7556 41.7399 37.7202 41.7399 35.1759C41.7399 32.6317 39.7045 30.5695 37.1603 30.5427H21.5198V33.3012H28.1617V35.7919H19.1363H19.1095V28.1323L19.0827 28.1056ZM55.1843 24.865L66.0844 43.2104L67.6377 40.6393L57.9964 24.865H55.2111H55.1843ZM44.0164 45.6207L55.1843 27.0343L64.3972 42.273H51.7027V39.8895H59.9514L55.1843 31.9621L47.3909 45.6475H44.0164V45.6207Z"
                        fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M66.0579 43.2105H51.6762V45.6208H64.6385V45.5673L66.0311 43.2373L66.0579 43.2105ZM29.1261 43.1301V33.3013H31.6168V43.1301H37.0534H37.107C41.5259 43.1034 45.0879 39.5414 45.0879 35.1225C45.0879 30.7035 41.5259 27.1683 37.1338 27.1148H37.0534H18.1724V45.5673H15.7621V24.7312H37.0534H37.1605C42.2223 24.7848 46.427 28.2932 47.3375 33.0871L52.3993 24.8383H55.1846L46.5341 39.3539L45.7039 40.7734C43.8292 43.5051 40.7493 45.5405 37.1873 45.5673H37.0802H29.1529V43.1034L29.1261 43.1301Z"
                        fill="white" />
                    <path
                        d="M20.4071 52.5437H19.2683V54.6415H18.1894V49.3071H20.8266C21.1863 49.3071 21.4859 49.3671 21.6957 49.457C21.9055 49.5469 22.0553 49.6668 22.2052 49.8166C22.3251 49.9664 22.415 50.1163 22.4749 50.2661C22.5348 50.416 22.5648 50.6257 22.5648 50.8355C22.5648 51.0753 22.5049 51.345 22.385 51.5847C22.2651 51.8245 22.0553 52.0043 21.7557 52.0942C21.9954 52.1841 22.1752 52.334 22.2951 52.5138C22.385 52.6936 22.4449 52.9633 22.4449 53.3529V53.7125C22.4449 53.9523 22.4449 54.1321 22.4449 54.222C22.4449 54.3718 22.5348 54.4617 22.6547 54.5217V54.6415H21.426C21.426 54.6415 21.3661 54.4318 21.3661 54.3419C21.3661 54.192 21.3361 54.0422 21.3061 53.8923V53.3829C21.3061 53.0532 21.2462 52.8135 21.1263 52.6936C21.0064 52.5737 20.7967 52.5138 20.467 52.5138L20.4071 52.5437ZM21.0664 51.5548C21.2762 51.4649 21.396 51.2551 21.396 50.9554C21.396 50.6257 21.2762 50.416 21.0664 50.2961C20.9465 50.2362 20.7667 50.2062 20.5269 50.2062H19.2383V51.6447H20.497C20.7367 51.6447 20.9465 51.6447 21.0664 51.5548Z"
                        fill="white" />
                    <path
                        d="M27.21 52.304H24.6027V53.6825H27.5696V54.6415H23.5238V49.3071H27.4497V50.2661H24.6327V51.4049H27.2399V52.334L27.21 52.304Z"
                        fill="white" />
                    <path
                        d="M31.7355 54.4916C31.4358 54.6714 31.0762 54.7613 30.6566 54.7613C29.9374 54.7613 29.368 54.5215 28.9184 54.0121C28.4389 53.5326 28.1992 52.8433 28.1992 51.9742C28.1992 51.1051 28.4389 50.4158 28.9184 49.9064C29.3979 49.3969 30.0273 49.1272 30.8065 49.1272C31.4957 49.1272 32.0352 49.307 32.4547 49.6367C32.8743 49.9663 33.114 50.4158 33.174 50.9253H32.0651C31.9752 50.5657 31.7655 50.296 31.4358 50.1461C31.256 50.0562 31.0462 50.0263 30.8364 50.0263C30.4169 50.0263 30.0572 50.1761 29.7875 50.5058C29.5178 50.8354 29.368 51.3149 29.368 51.9742C29.368 52.6335 29.5178 53.083 29.8175 53.3827C30.1172 53.6525 30.4468 53.8023 30.8364 53.8023C31.226 53.8023 31.5257 53.6824 31.7655 53.4726C32.0052 53.2629 32.155 52.9632 32.215 52.6335H30.9863V51.7345H33.2039V54.6115H32.4547L32.3349 53.9521C32.1251 54.1919 31.9153 54.3717 31.7655 54.4916H31.7355Z"
                        fill="white" />
                    <path d="M34.1329 49.2769H35.2418V54.6113H34.1329V49.2769Z" fill="white" />
                    <path
                        d="M38.2388 53.8619C38.5085 53.8619 38.7183 53.8619 38.8682 53.772C39.1678 53.6521 39.3476 53.4424 39.3476 53.1427C39.3476 52.9629 39.2577 52.843 39.1079 52.7231C38.9581 52.6332 38.7183 52.5433 38.3887 52.4834L37.8192 52.3635C37.2498 52.2436 36.8902 52.0938 36.6804 51.9439C36.3208 51.7042 36.141 51.3146 36.141 50.7752C36.141 50.2957 36.3208 49.9061 36.6505 49.5764C37.0101 49.2468 37.5196 49.0969 38.1789 49.0969C38.7483 49.0969 39.2278 49.2468 39.6174 49.5465C40.007 49.8461 40.2167 50.2657 40.2467 50.8351H39.1678C39.1678 50.5054 39.018 50.2957 38.7483 50.1458C38.5685 50.0559 38.3587 50.0259 38.089 50.0259C37.7893 50.0259 37.5795 50.0859 37.3997 50.2058C37.2199 50.3256 37.13 50.4755 37.13 50.6853C37.13 50.8651 37.2199 51.0149 37.3697 51.1048C37.4896 51.1648 37.6994 51.2547 38.059 51.3146L38.988 51.5244C39.3776 51.6143 39.7073 51.7641 39.9171 51.914C40.2467 52.1537 40.3966 52.5433 40.3966 52.9928C40.3966 53.4424 40.2167 53.8919 39.8271 54.2216C39.4675 54.5512 38.9281 54.701 38.2388 54.701C37.5495 54.701 36.9801 54.5512 36.5905 54.2216C36.2009 53.8919 35.9912 53.4723 35.9912 52.9029H37.07C37.1 53.1427 37.1599 53.3225 37.2798 53.4424C37.4596 53.6521 37.7593 53.772 38.2088 53.772L38.2388 53.8619Z"
                        fill="white" />
                    <path d="M45.1313 49.2769V50.2359H43.5429V54.6412H42.4041V50.2359H40.7858V49.2769H45.1013H45.1313Z"
                        fill="white" />
                    <path
                        d="M49.5069 52.304H46.8996V53.6825H49.8665V54.6415H45.8208V49.3071H49.7466V50.2661H46.9296V51.4049H49.5369V52.334L49.5069 52.304Z"
                        fill="white" />
                    <path
                        d="M53.0133 52.5437H51.8745V54.6415H50.7956V49.3071H53.4329C53.7925 49.3071 54.0922 49.3671 54.302 49.457C54.5117 49.5469 54.6616 49.6668 54.8114 49.8166C54.9313 49.9664 55.0212 50.1163 55.0811 50.2661C55.1411 50.416 55.171 50.6257 55.171 50.8355C55.171 51.0753 55.1111 51.345 54.9912 51.5847C54.8714 51.8245 54.6616 52.0043 54.3619 52.0942C54.6016 52.1841 54.7815 52.334 54.9013 52.5138C54.9912 52.6936 55.0512 52.9633 55.0512 53.3529V53.7125C55.0512 53.9523 55.0512 54.1321 55.0512 54.222C55.0512 54.3718 55.1411 54.4617 55.2609 54.5217V54.6415H54.0322C54.0322 54.6415 53.9723 54.4318 53.9723 54.3419C53.9723 54.192 53.9423 54.0422 53.9124 53.8923V53.3829C53.9124 53.0532 53.8524 52.8135 53.7325 52.6936C53.6127 52.5737 53.4029 52.5138 53.0732 52.5138L53.0133 52.5437ZM53.6726 51.5548C53.8824 51.4649 54.0023 51.2551 54.0023 50.9554C54.0023 50.6257 53.8824 50.416 53.6726 50.2961C53.5527 50.2362 53.3729 50.2062 53.1332 50.2062H51.8445V51.6447H53.1032C53.343 51.6447 53.5527 51.6447 53.6726 51.5548Z"
                        fill="white" />
                    <path
                        d="M59.8159 52.304H57.2087V53.6825H60.1756V54.6415H56.1298V49.3071H60.0557V50.2661H57.2386V51.4049H59.8459V52.334L59.8159 52.304Z"
                        fill="white" />
                    <path
                        d="M63.3524 54.6415H61.0449V49.3071H63.3524C63.6821 49.3071 63.9518 49.3371 64.1916 49.427C64.5812 49.5469 64.8808 49.7866 65.0906 50.1163C65.2704 50.386 65.3903 50.6557 65.4802 50.9854C65.5402 51.2851 65.5701 51.5847 65.5701 51.8844C65.5701 52.6037 65.4203 53.203 65.1506 53.6825C64.761 54.3419 64.1616 54.6715 63.3524 54.6715V54.6415ZM64.1916 50.6557C64.0118 50.356 63.6821 50.2062 63.1726 50.2062H62.1537V53.6825H63.1726C63.7121 53.6825 64.0717 53.4128 64.2815 52.9034C64.4013 52.6037 64.4613 52.274 64.4613 51.8844C64.4613 51.345 64.3714 50.9254 64.2215 50.6257L64.1916 50.6557Z"
                        fill="white" />
                    <path
                        d="M29.5778 57.3079H26.9106V58.5366H29.2481V59.4657H26.9106V61.7133H25.8017V56.3789H29.5778V57.3079Z"
                        fill="white" />
                    <path
                        d="M33.0541 60.6045H31.0762L30.7166 61.7133H29.5478L31.4658 56.3789H32.7245L34.6125 61.7133H33.4138L33.0841 60.6045H33.0541ZM32.7545 59.6755L32.0951 57.5777L31.4059 59.6755H32.7545Z"
                        fill="white" />
                    <path
                        d="M39.0776 61.2937C38.688 61.6533 38.1786 61.8331 37.5492 61.8331C36.77 61.8331 36.1707 61.5934 35.7511 61.0839C35.3016 60.5745 35.0918 59.9151 35.0918 59.0461C35.0918 58.117 35.3316 57.3978 35.841 56.8883C36.2905 56.4388 36.83 56.229 37.4893 56.229C38.3884 56.229 39.0477 56.5287 39.4672 57.1281C39.707 57.4577 39.8268 57.7874 39.8268 58.117H38.718C38.6581 57.8473 38.5382 57.6675 38.4483 57.5476C38.2385 57.3079 37.9388 57.188 37.5492 57.188C37.1596 57.188 36.83 57.3378 36.5902 57.6675C36.3505 57.9972 36.2306 58.4467 36.2306 59.0461C36.2306 59.6454 36.3505 60.095 36.5902 60.3946C36.83 60.6943 37.1596 60.8442 37.5492 60.8442C37.9388 60.8442 38.2385 60.7243 38.4483 60.4546C38.5682 60.3047 38.6581 60.1249 38.718 59.8252H39.8268C39.7369 60.3946 39.4972 60.8741 39.0776 61.2338V61.2937Z"
                        fill="white" />
                    <path d="M40.5763 56.3494H41.6851V61.6838H40.5763V56.3494Z" fill="white" />
                    <path d="M42.7338 56.3494H43.8427V60.7248H46.4799V61.6838H42.7039V56.3494H42.7338Z" fill="white" />
                    <path d="M47.1694 56.3494H48.2782V61.6838H47.1694V56.3494Z" fill="white" />
                    <path d="M53.223 56.3494V57.3084H51.6347V61.7137H50.4959V57.3084H48.8776V56.3494H53.1931H53.223Z"
                        fill="white" />
                    <path
                        d="M58.1677 56.3494L56.3695 59.6759V61.6838H55.2607V59.6759L53.4026 56.3494H54.7213L55.8301 58.6869L56.879 56.3494H58.1377H58.1677Z"
                        fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_1_2972">
                        <rect width="80.6755" height="80.6755" fill="white" transform="translate(0.499924 0.0290527)" />
                    </clipPath>
                </defs>
            </svg>
            <svg width="82" height="81" viewBox="0 0 82 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_2998)">
                    <path
                        d="M40.982 0.0290527C18.704 0.0290527 0.644302 18.0888 0.644302 40.3668C0.644302 62.6448 18.704 80.7045 40.982 80.7045C63.26 80.7045 81.3198 62.6448 81.3198 40.3668C81.3198 18.0888 63.26 0.0290527 40.982 0.0290527ZM40.982 79.0402C19.6236 79.0402 2.30862 61.7258 2.30862 40.3668C2.30862 19.0078 19.6236 1.69337 40.982 1.69337C62.3405 1.69337 79.6555 19.0078 79.6555 40.3668C79.6555 61.7258 62.341 79.0402 40.982 79.0402Z"
                        fill="#370F1E" />
                    <path
                        d="M36.1642 52.7534H35.623V54.6576H36.1642C36.3064 54.6576 36.4276 54.6072 36.5274 54.5059C36.6271 54.4046 36.677 54.2828 36.677 54.1401V53.2709C36.677 52.9261 36.5059 52.7534 36.1642 52.7534Z"
                        fill="#370F1E" />
                    <path
                        d="M57.2597 33.1533H56.7359V39.6316H57.2597C57.9866 39.6316 58.3535 39.1577 58.3609 38.2098V34.5536C58.3609 33.6199 57.9935 33.1533 57.2597 33.1533Z"
                        fill="#370F1E" />
                    <path
                        d="M40.9819 14.1226C26.4875 14.1226 14.7375 25.8725 14.7375 40.3669C14.7375 54.8613 26.4875 66.6112 40.9819 66.6112C55.4763 66.6112 67.2262 54.8613 67.2262 40.3669C67.2262 25.8725 55.4763 14.1226 40.9819 14.1226ZM40.055 21.1142L40.9819 18.2621L41.9088 21.1142H44.9078L42.4814 22.8771L43.4083 25.7292L40.9819 23.9662L38.5555 25.7292L39.4824 22.8771L37.056 21.1142H40.055ZM31.7103 22.8966L32.3506 20.9257L32.991 22.8966H35.0631L33.3867 24.1148L34.027 26.0856L32.3506 24.8674L30.6743 26.0856L31.3146 24.1148L29.6382 22.8966H31.7103ZM30.8175 53.874H29.887V53.176C29.887 53.0337 29.8361 52.9115 29.7353 52.8102C29.634 52.7089 29.5122 52.6585 29.3695 52.6585C29.2267 52.6585 29.106 52.7094 29.0063 52.8102C28.9065 52.9115 28.8567 53.0332 28.8567 53.176V56.4332C28.8567 56.5755 28.9065 56.6967 29.0063 56.7964C29.106 56.8962 29.2272 56.946 29.3695 56.946C29.5117 56.946 29.634 56.8962 29.7353 56.7964C29.8366 56.6967 29.887 56.5755 29.887 56.4332V55.6118H30.8175V56.4427C30.8175 56.8384 30.6785 57.1738 30.3998 57.4494C30.1211 57.7249 29.7872 57.8624 29.3978 57.8624C29.0084 57.8624 28.6656 57.7239 28.3885 57.4467C28.1114 57.1696 27.9728 56.8353 27.9728 56.4427V53.1949C27.9728 52.7991 28.1119 52.4627 28.3906 52.1856C28.6693 51.9085 29.0047 51.7699 29.3973 51.7699C29.7899 51.7699 30.1284 51.909 30.404 52.1877C30.6795 52.4664 30.817 52.8018 30.817 53.1944V53.8735L30.8175 53.874ZM30.8228 37.0551H25.5097V33.7731C25.5097 33.0887 25.2315 32.7434 24.6757 32.736C24.4264 32.736 24.2285 32.8289 24.0826 33.0142C23.9367 33.1995 23.8632 33.4525 23.8632 33.7731V44.5594C23.8632 45.2439 24.1556 45.5892 24.7397 45.5966C25.0032 45.5966 25.2152 45.4968 25.3758 45.2974C25.5364 45.0979 25.6162 44.8376 25.6162 44.5169V41.5022H24.8253V38.1882H30.8228V49.4453H26.6003L26.1836 47.1685H25.9164C25.6383 48.1022 25.252 48.7598 24.7565 49.1409C24.261 49.5219 23.5467 49.713 22.613 49.713C21.3728 49.6988 20.3876 49.239 19.657 48.3342C18.9264 47.4293 18.5611 46.0784 18.5611 44.2823V35.1955C18.5611 32.9008 19.0833 31.2134 20.1273 30.1338C21.1712 29.0542 22.7589 28.5141 24.8898 28.5141C26.8139 28.5141 28.2841 28.9597 29.2997 29.8504C30.3152 30.7416 30.8228 32.0422 30.8228 33.7521V37.0556V37.0551ZM34.1079 52.7346H32.4504V54.3585H33.6612V55.2607H32.4504V56.8846H34.1079V57.7868H31.5534V51.8324H34.1079V52.7346ZM36.7652 57.7868L36.2209 55.5457H35.6226V57.7868H34.7251V51.8371H36.1401C36.6403 51.8371 37.0072 51.9746 37.2418 52.2501C37.4475 52.4905 37.5504 52.8264 37.5504 53.2568V54.1212C37.5504 54.5422 37.3903 54.8986 37.0707 55.1899L37.7357 57.7874H36.7652V57.7868ZM41.0123 52.7393H40.0629V57.7868H39.1654V52.7393H38.2112V51.8371H41.0128V52.7393H41.0123ZM42.6315 57.7868H41.734V51.8371H42.6315V57.7868ZM38.7229 49.4453L37.3441 36.2856H37.0554L37.3441 43.3197V49.4453H32.2877V28.7592H39.8351L40.7116 38.5409L40.9362 41.7588H41.2144L41.4175 38.5409L42.294 28.7592H49.8199V49.4453H44.7635L44.785 43.3412L45.0521 36.3287H44.7635L43.3201 49.4458H38.7234L38.7229 49.4453ZM45.9885 52.7346H44.331V54.3585H45.5418V55.2607H44.331V57.7868H43.4335V51.8324H45.988V52.7346H45.9885ZM47.5032 57.7868H46.6057V51.8371H47.5032V57.7868ZM50.8602 52.7346H49.2027V54.3585H50.4135V55.2607H49.2027V56.8846H50.8602V57.7868H48.3057V51.8324H50.8602V52.7346ZM49.6131 24.8679L47.9367 26.0861L48.5771 24.1153L46.9007 22.8971H48.9728L49.6131 20.9263L50.2535 22.8971H52.3256L50.6492 24.1153L51.2895 26.0861L49.6131 24.8679ZM54.298 56.3624C54.298 56.755 54.1605 57.0904 53.8849 57.3691C53.6094 57.6478 53.2771 57.7868 52.8877 57.7868H51.4774V51.8324H52.8877C53.2803 51.8324 53.6136 51.972 53.887 52.2501C54.161 52.5288 54.298 52.8626 54.298 53.2521V56.3624ZM62.3697 30.2776C63.3176 31.2895 63.7916 32.6867 63.7916 34.468V38.0171C63.7916 39.799 63.3013 41.2508 62.3214 42.3734C61.3415 43.4961 60.0283 44.0571 58.3819 44.0571H56.7354V49.4453H51.4648V28.7592H58.3814C60.0919 28.7592 61.4208 29.2652 62.3687 30.2771L62.3697 30.2776Z"
                        fill="#370F1E" />
                    <path
                        d="M52.9166 52.7486H52.3754V56.8986H52.9166C53.0588 56.8986 53.179 56.8472 53.2777 56.7443C53.3758 56.6414 53.4246 56.5202 53.4246 56.3811V53.2661C53.4246 53.1238 53.3748 53.0016 53.275 52.9003C53.1753 52.799 53.0556 52.748 52.9166 52.748V52.7486Z"
                        fill="#370F1E" />
                    <path
                        d="M10.8122 42.6799C11.0746 42.1865 11.1974 41.6129 11.1806 40.9584C11.1675 40.4435 11.0573 39.9375 10.85 39.4405C10.6426 38.9435 10.4075 38.5656 10.1446 38.3079L7.65255 38.3708L7.7213 41.0933L8.77521 41.0665L8.73847 39.62L9.53206 39.6001C9.68479 39.7869 9.81653 40.0121 9.92675 40.2755C10.0375 40.539 10.0958 40.803 10.1026 41.0676C10.1162 41.6024 9.94144 42.0396 9.57877 42.3786C9.21609 42.7182 8.66342 42.8972 7.92075 42.9161C7.23214 42.9334 6.70886 42.7838 6.35091 42.4668C5.99296 42.1498 5.80663 41.7157 5.79299 41.1636C5.78406 40.7993 5.86489 40.4934 6.03652 40.2456C6.20815 39.9979 6.44643 39.8263 6.75137 39.7302L6.48475 38.4816C5.91318 38.6212 5.4702 38.9135 5.15581 39.3586C4.8409 39.8037 4.69342 40.4141 4.71336 41.1909C4.72858 41.7882 4.8451 42.2847 5.06291 42.6804C5.34634 43.2 5.7447 43.5895 6.25801 43.8498C6.77132 44.1101 7.35338 44.2319 8.00525 44.2156C8.60569 44.2004 9.15783 44.0645 9.66222 43.8068C10.1666 43.5491 10.5497 43.1738 10.8122 42.6804V42.6799Z"
                        fill="#370F1E" />
                    <path
                        d="M5.73698 35.7192C5.93538 36.0116 6.17629 36.2593 6.45918 36.4635C6.84443 36.7374 7.34881 36.939 7.97339 37.0681C8.94857 37.2691 9.76997 37.1584 10.4371 36.7353C11.1041 36.3123 11.5314 35.6452 11.7198 34.7335C11.9056 33.8334 11.7744 33.0566 11.3267 32.4037C10.879 31.7508 10.1605 31.322 9.17111 31.1178C8.17336 30.9121 7.33884 31.0223 6.6665 31.4485C5.99469 31.8752 5.56535 32.5396 5.37903 33.4424C5.27616 33.9415 5.26619 34.3982 5.34911 34.8133C5.40947 35.1251 5.53911 35.4274 5.73751 35.7192H5.73698ZM6.43924 33.6481C6.54473 33.138 6.80191 32.7648 7.21077 32.5281C7.61964 32.2914 8.17546 32.2457 8.87771 32.3906C9.58837 32.5375 10.0886 32.8052 10.3788 33.1952C10.669 33.5846 10.763 34.026 10.6612 34.5194C10.5594 35.0128 10.2964 35.3828 9.87232 35.6289C9.44823 35.8756 8.88926 35.9271 8.19488 35.7838C7.49 35.6384 6.99453 35.3733 6.70954 34.9891C6.42402 34.605 6.33427 34.1578 6.43924 33.6476V33.6481Z"
                        fill="#370F1E" />
                    <path
                        d="M8.11559 29.194C8.43785 29.5399 8.89185 29.8385 9.47706 30.0905C10.3924 30.4836 11.2191 30.5397 11.957 30.2595C12.6955 29.9792 13.2481 29.4113 13.6155 28.5563C13.9782 27.7118 14.006 26.9245 13.6985 26.195C13.3909 25.4654 12.7732 24.9007 11.8452 24.5023C10.9094 24.1003 10.0691 24.0405 9.32538 24.3234C8.58166 24.6063 8.02742 25.171 7.66369 26.0181C7.46267 26.4863 7.36085 26.9319 7.35875 27.3549C7.3556 27.6725 7.42173 27.9942 7.55715 28.3207C7.69256 28.6466 7.87888 28.9379 8.11559 29.1945V29.194ZM8.66092 26.4322C8.86666 25.9536 9.19364 25.6397 9.64187 25.4901C10.0901 25.3405 10.6438 25.4072 11.3025 25.6901C11.9691 25.9767 12.4052 26.3399 12.6115 26.7797C12.8172 27.2195 12.8209 27.6709 12.622 28.1338C12.4231 28.5967 12.0914 28.9064 11.6263 29.0623C11.1613 29.2187 10.6034 29.1568 9.95206 28.877C9.29074 28.5931 8.85879 28.2341 8.65619 27.8C8.45412 27.3665 8.4557 26.9098 8.66092 26.4317V26.4322Z"
                        fill="#370F1E" />
                    <path
                        d="M16.4693 23.2227C16.7391 22.8416 16.9181 22.512 17.0073 22.2333C17.1249 21.8601 17.16 21.5221 17.1128 21.2203C17.0503 20.8209 16.8787 20.4257 16.5974 20.0347C16.367 19.7151 16.0416 19.4059 15.6212 19.1083C15.1425 18.7698 14.7011 18.5404 14.2959 18.4213C13.8907 18.3016 13.4997 18.2691 13.1234 18.3231C12.7471 18.3772 12.4085 18.5231 12.1083 18.7604C11.8852 18.9372 11.6239 19.238 11.3226 19.6631L9.98842 21.5479L15.0958 25.1631L16.4693 23.2227ZM11.5824 21.1285L11.9104 20.6651C12.208 20.2446 12.4237 19.9738 12.5586 19.8531C12.7371 19.6899 12.9297 19.5875 13.137 19.5461C13.3443 19.5046 13.5784 19.5235 13.8388 19.6038C14.0996 19.6836 14.4271 19.8636 14.8218 20.1428C15.2165 20.4226 15.5036 20.6776 15.6831 20.9096C15.8626 21.1411 15.9634 21.3474 15.9849 21.5284C16.0069 21.7095 15.9791 21.8985 15.9025 22.0953C15.8448 22.2459 15.7135 22.4653 15.5099 22.7534L14.9651 23.5234L11.5824 21.129V21.1285Z"
                        fill="#370F1E" />
                    <path
                        d="M21.1457 17.9099L18.1205 14.0229L22.1225 17.1494L23.0824 16.4026L21.0376 11.7523L24.0629 15.6399L24.9892 14.9188L21.1457 9.98096L19.6504 11.1446L21.3861 15.2027L17.8685 12.5312L16.3764 13.6927L20.2194 18.6306L21.1457 17.9099Z"
                        fill="#370F1E" />
                    <path
                        d="M26.46 14.1611L26.3126 12.6558L28.5689 11.5767L29.6748 12.6233L30.9145 12.0302L25.9546 7.46606L24.7495 8.04236L25.2508 14.739L26.46 14.1606V14.1611ZM27.7486 10.801L26.2081 11.5374L25.9688 9.07789L27.7486 10.8005V10.801Z"
                        fill="#370F1E" />
                    <path
                        d="M32.4506 11.6678L31.4608 7.70877L34.8975 11.0558L36.1278 10.7482L34.6099 4.67773L33.471 4.96273L34.4844 9.01619L30.9868 5.58363L29.7943 5.88175L31.3117 11.9522L32.4506 11.6678Z"
                        fill="#370F1E" />
                    <path
                        d="M37.2208 9.25605C37.288 9.49538 37.416 9.72107 37.6044 9.93416C37.7929 10.1467 38.0443 10.3157 38.3587 10.4401C38.673 10.565 39.1286 10.6144 39.7259 10.5892C40.2203 10.5682 40.6187 10.4879 40.9205 10.3483C41.2223 10.2087 41.46 10.0286 41.6343 9.80714C41.8085 9.58618 41.923 9.31903 41.9781 9.00621C42.0332 8.6934 42.0447 8.16172 42.0127 7.41118L41.8726 4.12769L40.6103 4.18175L40.7578 7.64002C40.7788 8.13443 40.7756 8.48923 40.7478 8.70442C40.72 8.91909 40.6182 9.10384 40.4423 9.25762C40.2665 9.41193 39.9999 9.49643 39.6414 9.51165C39.2887 9.52635 39.0074 9.46126 38.798 9.31483C38.588 9.16839 38.4505 8.96842 38.386 8.71492C38.3476 8.55694 38.3172 8.20948 38.2946 7.67203L38.1503 4.28619L36.888 4.34025L37.0303 7.67518C37.0602 8.37429 37.1237 8.90177 37.2218 9.25605H37.2208Z"
                        fill="#370F1E" />
                    <path
                        d="M44.836 8.02266L47.4215 8.39426L47.5721 7.34665L44.9867 6.97505L45.1971 5.50913L48.1925 5.93951L48.3431 4.8919L44.097 4.28149L43.2074 10.4753L44.4581 10.6548L44.836 8.02266Z"
                        fill="#370F1E" />
                    <path
                        d="M48.4373 11.3493L49.3637 10.1542L51.745 10.9194L51.8305 12.4399L53.139 12.8603L52.6676 6.1364L51.3959 5.72754L47.1614 10.9394L48.4373 11.3493ZM51.5712 7.31733L51.682 9.79149L50.0565 9.26926L51.5712 7.31733Z"
                        fill="#370F1E" />
                    <path
                        d="M55.7073 14.4523C56.2925 14.7819 56.8567 14.9094 57.3999 14.8349C57.9431 14.7604 58.4643 14.4717 58.9629 13.9689L58.0864 13.0294C57.7699 13.3769 57.454 13.5842 57.1385 13.6514C56.8231 13.7185 56.5192 13.6697 56.2263 13.5049C55.8295 13.2813 55.5897 12.9538 55.5068 12.5214C55.4233 12.0894 55.576 11.5283 55.9644 10.8392C56.3303 10.1899 56.7207 9.79053 57.1359 9.64252C57.5511 9.49399 57.9605 9.53388 58.3646 9.76114C58.6569 9.92594 58.8595 10.148 58.9719 10.4267C59.0842 10.7054 59.0931 11.0045 58.9986 11.3231L60.2347 11.6763C60.3564 11.1704 60.359 10.7305 60.2425 10.3579C60.0483 9.72912 59.6174 9.22684 58.9503 8.85156C58.1867 8.42118 57.4293 8.32566 56.6777 8.56342C55.9261 8.8017 55.2952 9.37432 54.784 10.2818C54.3006 11.1399 54.1532 11.9472 54.3405 12.7045C54.5279 13.4614 54.984 14.044 55.7078 14.4518L55.7073 14.4523Z"
                        fill="#370F1E" />
                    <path
                        d="M59.7384 17.06L60.7052 17.8735L64.0517 13.8951L65.4693 15.0876L66.1506 14.2778L62.3459 11.0767L61.6641 11.8865L63.0849 13.0816L59.7384 17.06Z"
                        fill="#370F1E" />
                    <path
                        d="M63.6125 18.7003C63.4614 18.8977 63.3574 19.1354 63.3002 19.4141C63.243 19.6928 63.2593 19.9946 63.348 20.3211C63.4372 20.6475 63.6708 21.0417 64.0492 21.5041C64.3631 21.8872 64.6664 22.157 64.9588 22.315C65.2516 22.4724 65.5387 22.5543 65.8201 22.5611C66.1014 22.568 66.3837 22.4992 66.6672 22.3554C66.9506 22.2116 67.3825 21.9019 67.9636 21.4259L70.506 19.3433L69.7056 18.366L67.0277 20.5593C66.6446 20.8732 66.3591 21.0832 66.1707 21.1897C65.9822 21.2962 65.7733 21.3256 65.5445 21.2773C65.3157 21.2296 65.0879 21.0669 64.8606 20.7892C64.637 20.5163 64.5205 20.2518 64.5116 19.9962C64.5027 19.7406 64.5798 19.5107 64.7441 19.3065C64.8475 19.1816 65.1073 18.9486 65.5235 18.6074L68.1452 16.4597L67.3448 15.4824L64.763 17.5976C64.2213 18.0411 63.8382 18.4085 63.613 18.6993L63.6125 18.7003Z"
                        fill="#370F1E" />
                    <path
                        d="M66.8436 25.298L69.153 24.0767L69.2727 24.3029C69.4086 24.5595 69.4868 24.7579 69.5078 24.8981C69.5288 25.0382 69.5115 25.1909 69.4553 25.3557C69.3992 25.5206 69.2317 25.8601 68.9536 26.3745L68.1768 27.8184L68.8832 29.1541L69.6054 27.9081C69.8946 27.4142 70.082 27.0437 70.1675 26.7975C70.2526 26.5514 70.3019 26.27 70.3155 25.9541C70.6425 26.4023 71.0057 26.6768 71.4051 26.7781C71.8046 26.8789 72.2119 26.8201 72.627 26.6002C72.954 26.4275 73.2023 26.1929 73.3713 25.8979C73.5403 25.6024 73.6032 25.2949 73.5613 24.9742C73.5193 24.654 73.3413 24.1979 73.0291 23.6069L71.7862 21.2561L66.2547 24.1811L66.8452 25.298H66.8436ZM71.4393 22.8679L71.9001 23.7397C72.1394 24.1927 72.2769 24.4677 72.3121 24.5648C72.3777 24.7621 72.3793 24.9406 72.3173 25.1001C72.2554 25.2602 72.1316 25.3893 71.9452 25.4875C71.7794 25.5751 71.6209 25.6108 71.4702 25.5935C71.3196 25.5767 71.1863 25.5132 71.0708 25.404C70.9548 25.2943 70.7554 24.9721 70.472 24.4362L70.0348 23.6101L71.4387 22.8679H71.4393Z"
                        fill="#370F1E" />
                    <path d="M74.7865 27.5017L68.9032 29.6326L69.3334 30.8204L75.2167 28.6895L74.7865 27.5017Z"
                        fill="#370F1E" />
                    <path
                        d="M69.9786 32.9003L73.9712 32.0579L70.4993 35.3687L70.7612 36.6089L76.8836 35.3173L76.6412 34.1683L72.5525 35.0312L76.1126 31.6627L75.8586 30.4597L69.7362 31.7519L69.9786 32.9003Z"
                        fill="#370F1E" />
                    <path
                        d="M76.9487 39.043C76.6795 38.5161 76.2921 38.1151 75.7862 37.8411C75.2802 37.5666 74.7013 37.4291 74.0499 37.4275C73.4495 37.4259 72.8937 37.5472 72.3825 37.7907C71.8713 38.0342 71.4776 38.399 71.2021 38.885C70.9265 39.371 70.788 39.941 70.7864 40.5955C70.7853 41.1104 70.8814 41.6195 71.0756 42.1218C71.2693 42.6246 71.4939 43.0083 71.7495 43.2739L74.242 43.2796L74.2478 40.5567L73.1939 40.5546L73.1907 42.0016L72.3966 42C72.2492 41.809 72.1237 41.5807 72.0203 41.3141C71.9169 41.048 71.8655 40.7824 71.866 40.5179C71.8671 39.983 72.0539 39.5511 72.426 39.2215C72.7982 38.8924 73.3556 38.7286 74.0982 38.7302C74.7868 38.7318 75.3059 38.8955 75.6549 39.2225C76.004 39.5495 76.1782 39.9883 76.1772 40.5404C76.1761 40.9047 76.0869 41.208 75.9084 41.451C75.73 41.6941 75.487 41.8589 75.1794 41.9465L75.4114 43.202C75.9867 43.0781 76.4375 42.7978 76.764 42.3622C77.0904 41.926 77.2552 41.3198 77.2568 40.543C77.2584 39.9452 77.1555 39.4461 76.9487 39.0441V39.043Z"
                        fill="#370F1E" />
                    <path
                        d="M25.0484 67.2263C25.3365 66.82 25.473 66.419 25.4573 66.0222C25.442 65.626 25.315 65.2859 25.0773 65.0014C24.9229 64.8156 24.533 64.5002 23.9063 64.0556L22.2525 62.8826L18.632 67.9863L19.6623 68.7174L21.028 66.7922L21.6998 67.2688C22.1664 67.5994 22.5396 67.8278 22.8204 67.9537C23.0293 68.0429 23.2649 68.0886 23.5263 68.0907C23.7882 68.0933 24.0512 68.0282 24.3167 67.8949C24.5818 67.7621 24.8258 67.5391 25.0479 67.2257L25.0484 67.2263ZM23.9772 66.4873C23.8701 66.6379 23.7373 66.7429 23.5788 66.8011C23.4203 66.8599 23.2539 66.8673 23.0791 66.8232C22.9044 66.7796 22.6136 66.6132 22.2079 66.3256L21.6437 65.9257L22.6708 64.4776L23.1684 64.8308C23.5394 65.0943 23.7788 65.2812 23.8853 65.3919C24.0312 65.5404 24.1157 65.7142 24.1388 65.912C24.1624 66.1099 24.1084 66.302 23.9766 66.4878L23.9772 66.4873Z"
                        fill="#370F1E" />
                    <path
                        d="M29.7572 70.5473C30.1346 70.3825 30.4201 70.086 30.6138 69.6582C30.766 69.3213 30.8185 68.9843 30.7713 68.6474C30.7235 68.3104 30.5849 68.0285 30.3551 67.8013C30.1252 67.574 29.7058 67.3226 29.0965 67.0471L26.6737 65.9512L24.0951 71.6527L25.2461 72.1733L26.3226 69.7931L26.5562 69.8986C26.8207 70.0183 27.0039 70.1269 27.1067 70.2251C27.2091 70.3232 27.2889 70.4544 27.3455 70.6187C27.4022 70.7835 27.4783 71.1541 27.5733 71.7314L27.8447 73.3485L29.2214 73.971L29.0282 72.5439C28.9537 71.976 28.875 71.5687 28.7915 71.322C28.7081 71.0748 28.5747 70.8229 28.3916 70.5652C28.9248 70.719 29.3799 70.7132 29.7578 70.5484L29.7572 70.5473ZM28.6519 69.6656C28.4934 69.6504 28.1381 69.5176 27.5859 69.2677L26.7341 68.8825L27.3886 67.436L28.2871 67.8422C28.7537 68.0532 29.0308 68.1865 29.1185 68.2416C29.2912 68.3571 29.4019 68.4972 29.4513 68.6615C29.5001 68.8258 29.4817 69.0037 29.3946 69.1958C29.3174 69.3669 29.214 69.4918 29.0844 69.5706C28.9553 69.6498 28.8109 69.6813 28.6524 69.6656H28.6519Z"
                        fill="#370F1E" />
                    <path
                        d="M33.7762 68.6797L30.0129 74.2411L31.3198 74.5381L32.1386 73.2669L34.5776 73.8212L34.7954 75.328L36.1354 75.6324L35.0794 68.9757L33.7767 68.6797H33.7762ZM32.7506 72.3248L34.0895 70.248L34.4154 72.7032L32.7506 72.3248Z"
                        fill="#370F1E" />
                    <path
                        d="M39.2104 71.004C39.5075 70.678 39.8875 70.5211 40.3515 70.5321C40.6869 70.5405 40.9703 70.6413 41.2002 70.8344C41.4301 71.0281 41.5781 71.2879 41.6442 71.6138L42.9018 71.3456C42.7716 70.8418 42.5679 70.4523 42.2898 70.1778C41.8227 69.7139 41.207 69.4724 40.4418 69.4541C39.5658 69.4325 38.8514 69.7034 38.2998 70.2665C37.7482 70.8292 37.4595 71.6317 37.4343 72.6725C37.4102 73.6566 37.659 74.4391 38.1796 75.0196C38.7008 75.6001 39.3763 75.9003 40.2071 75.9208C40.8784 75.9371 41.4364 75.7849 41.8814 75.4642C42.326 75.1435 42.6509 74.6438 42.855 73.9657L41.64 73.5474C41.5235 74.003 41.3419 74.3342 41.0947 74.5415C40.8475 74.7488 40.5562 74.8485 40.2208 74.8401C39.7657 74.8291 39.3999 74.6522 39.1238 74.3095C38.8478 73.9668 38.7192 73.4005 38.7386 72.6095C38.757 71.8642 38.9144 71.3289 39.211 71.0029L39.2104 71.004Z"
                        fill="#370F1E" />
                    <path
                        d="M48.0551 68.8142L43.1435 69.592L43.3093 70.6376L45.1432 70.3473L45.9567 75.482L47.2043 75.2841L46.3908 70.1494L48.2204 69.8597L48.0551 68.8142Z"
                        fill="#370F1E" />
                    <path d="M49.714 68.2456L48.5002 68.5957L50.2344 74.6079L51.4482 74.2578L49.714 68.2456Z"
                        fill="#370F1E" />
                    <path
                        d="M55.8447 70.05C55.9355 70.5114 55.914 70.8887 55.7802 71.1821C55.6464 71.4755 55.4264 71.6907 55.1194 71.8277C54.7037 72.0135 54.2975 72.0109 53.9007 71.8203C53.5039 71.6298 53.1444 71.1737 52.8216 70.451C52.5177 69.7703 52.4295 69.2192 52.5571 68.7972C52.6851 68.3752 52.9607 68.0697 53.3842 67.8808C53.6907 67.7438 53.9894 67.7134 54.2807 67.7889C54.5715 67.8645 54.8171 68.0356 55.0171 68.3017L56.0368 67.5186C55.7025 67.1192 55.3509 66.8557 54.9824 66.7277C54.3615 66.5093 53.7012 66.5566 53.0027 66.8689C52.2023 67.2263 51.6743 67.7779 51.4181 68.5232C51.162 69.2685 51.2465 70.1167 51.6711 71.0677C52.0726 71.9668 52.6332 72.5662 53.3533 72.8664C54.0734 73.1666 54.8124 73.1472 55.5713 72.8081C56.1843 72.5342 56.6226 72.1568 56.8866 71.676C57.1501 71.1952 57.2283 70.6048 57.1212 69.9046L55.8442 70.0495L55.8447 70.05Z"
                        fill="#370F1E" />
                    <path
                        d="M59.902 69.1204L58.9231 67.7269L61.4939 65.9209L60.8877 65.058L58.3169 66.8641L57.5197 65.7288L60.2825 63.7884L59.6737 62.9219L55.8774 65.5892L59.4742 70.7092L63.3687 67.9736L62.7625 67.1107L59.902 69.1204Z"
                        fill="#370F1E" />
                    <path
                        d="M11.9501 53.6571L10.5524 51.6963L10.5304 54.1043L8.23413 54.8276L10.5173 55.5923L10.4952 57.9998L11.9281 56.0647L14.2112 56.8299L12.8135 54.869L14.2463 52.9339L11.9501 53.6571Z"
                        fill="#370F1E" />
                    <path
                        d="M71.4337 54.1043L71.4117 51.6963L70.0145 53.6571L67.7177 52.9339L69.1506 54.869L67.7529 56.8299L70.036 56.0647L71.4689 57.9998L71.4474 55.5923L73.7305 54.8276L71.4337 54.1043Z"
                        fill="#370F1E" />
                </g>
                <defs>
                    <clipPath id="clip0_1_2998">
                        <rect width="80.6755" height="80.6755" fill="white" transform="translate(0.644287 0.0290527)" />
                    </clipPath>
                </defs>
            </svg>
            <svg width="82" height="85" viewBox="0 0 82 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_3031)">
                    <path
                        d="M18.2824 48.9468C17.4353 48.9468 17.3143 49.7968 17.3143 50.5254V52.6706L19.2101 52.3468V50.5254C19.2101 49.7968 19.1294 48.9468 18.2824 48.9468Z"
                        fill="#370F1E" />
                    <path
                        d="M25.7042 49.2302V51.1731L27.5597 50.8493V50.6469C27.5597 49.2302 26.995 49.2302 25.7042 49.2302Z"
                        fill="#370F1E" />
                    <path
                        d="M14.6521 50.3637C14.6521 48.097 15.9832 46.8422 18.2823 46.8422C20.5814 46.8422 21.8318 48.097 21.8318 50.3637V51.8613L23.1226 51.6184V47.1255H26.9948C29.1729 47.1255 30.262 48.016 30.262 50.3637L31.3107 50.1613C31.4317 47.8541 32.5611 46.7613 34.8603 46.7613C37.1594 46.7613 37.9661 47.4089 38.3292 48.947L41.5157 48.3803L41.798 47.0851H44.9845L45.1056 47.7327L48.2517 47.166V47.0446H48.9375L75.9624 42.3088H6.30258C6.30258 46.4779 6.98829 50.4446 8.19836 54.1685L14.6521 53.0351V50.2827V50.3637Z"
                        fill="#370F1E" />
                    <path
                        d="M34.941 48.9062C34.2553 48.9062 34.0132 49.2301 33.9729 49.7563L35.7073 49.4729C35.5863 49.1491 35.3847 48.9467 34.9813 48.9467L34.941 48.9062Z"
                        fill="#370F1E" />
                    <path d="M50.5105 52.3066V52.509L50.6315 52.4685L50.5912 52.3066H50.5105Z" fill="#370F1E" />
                    <path d="M75.9221 42.4305L76.0036 42.3896L75.9221 42.4305Z" fill="#370F1E" />
                    <path
                        d="M38.4502 49.9993V51.0922H35.788V50.5255L33.9326 50.8898V55.9493C33.9326 56.597 34.2149 57.0017 34.9006 57.0017C35.5864 57.0017 35.8284 56.2327 35.8284 55.5041V54.5731H34.8603V52.4684H38.4502V57.3255L39.7813 56.7994L41.314 49.4326L38.4502 49.9993Z"
                        fill="#370F1E" />
                    <path d="M45.3072 48.6233L46.4366 54.1281L48.2517 53.44V48.0161L45.3072 48.6233Z" fill="#370F1E" />
                    <path d="M42.6047 54.5327H44.0972L43.3711 49.2708L42.6047 54.5327Z" fill="#370F1E" />
                    <path
                        d="M52.4467 51.7802L53.0114 51.5373L52.85 47.1254H55.3508V50.6063L56.6819 50.0801V47.1254H59.3441V49.0278L61.1592 48.2992C61.6836 47.2468 62.6919 46.7611 64.265 46.7611C65.8381 46.7611 64.7491 46.7611 64.9508 46.7611L75.2364 42.6729L76.0027 42.3491L51.0753 47.4087L52.4063 51.7397L52.4467 51.7802Z"
                        fill="#370F1E" />
                    <path
                        d="M31.3108 55.4232V51.416L30.1007 51.6589C29.899 52.266 29.536 52.7517 28.8503 53.116C29.5763 53.3184 30.1007 53.8446 30.141 54.6541C30.2217 55.5851 30.2217 57.6089 30.3831 58.378C30.4234 58.5399 30.5041 58.6613 30.6251 58.7827V58.9446H27.7209C27.6402 58.7018 27.5596 58.4994 27.5596 58.2565C27.4789 57.2042 27.5596 56.2327 27.4789 55.5041C27.4789 54.7756 27.1965 54.2899 26.5915 54.2494H25.7041H25.7848V58.9446H23.1226V53.0756L21.8319 53.3184V55.0994C21.8319 57.7708 20.9848 59.147 18.2823 59.147C15.5798 59.147 14.6521 57.7708 14.6521 55.0994V54.7756L8.84378 55.9494C10.3765 59.8756 12.5143 63.4376 15.1362 66.5138L33.8116 59.1066C31.9158 58.9042 31.3108 57.3661 31.3108 55.3827V55.4232Z"
                        fill="#370F1E" />
                    <path
                        d="M17.3143 55.3826C17.3143 56.0707 17.395 57.0827 18.2824 57.0827C19.1698 57.0827 19.2101 56.0707 19.2101 55.3826V53.885L17.3143 54.2493V55.3826Z"
                        fill="#370F1E" />
                    <path
                        d="M36.4334 58.0944L36.5948 58.0134V57.811C36.5141 57.892 36.4738 57.9729 36.4334 58.0539V58.0944Z"
                        fill="#370F1E" />
                    <path
                        d="M60.9173 48.866L59.3442 49.5541V53.8851L60.7156 52.9541V50.566C60.7156 49.9184 60.7963 49.3517 60.9173 48.9064V48.866Z"
                        fill="#370F1E" />
                    <path
                        d="M50.8735 53.1564L50.5508 53.2779L50.7525 58.8636H48.2516V54.2493L46.6382 54.9374L47.4449 58.8636H44.7828L44.4198 56.5565H42.887L42.3223 56.7993L42.0399 58.8636H39.3778L39.5795 58.0136L38.4904 58.4589V58.8232H37.6434L16.4268 67.9304C19.5729 71.2495 23.3242 73.9209 27.4787 75.7828L52.5676 58.4993L50.8735 53.116V53.1564Z"
                        fill="#370F1E" />
                    <path d="M53.0519 53.7232H53.0922L53.0519 52.2256L52.6485 52.3875L53.0519 53.7232Z"
                        fill="#370F1E" />
                    <path
                        d="M64.3861 48.9062C63.5391 48.9062 63.3777 49.3515 63.3777 50.1205V51.092L65.1929 49.8372C65.0718 49.2301 64.7895 48.9062 64.3861 48.9062Z"
                        fill="#370F1E" />
                    <path d="M55.351 51.2539V56.5968L56.6821 55.7063V50.6873L55.351 51.2539Z" fill="#370F1E" />
                    <path
                        d="M67.4919 48.2589L75.9221 42.4707L75.2364 42.754L65.5155 46.9231C66.4432 47.1255 67.0886 47.5707 67.4919 48.2993V48.2589Z"
                        fill="#370F1E" />
                    <path d="M75.9222 42.4301L76.0028 42.3896L75.2365 42.7135L75.9222 42.4301Z" fill="#370F1E" />
                    <path
                        d="M75.9222 42.4301L67.613 48.542C67.7744 48.9873 67.855 49.5135 67.855 50.1611V51.1325H65.1929V51.2135V50.323L63.3374 51.6992V55.9492C63.3374 56.3945 63.4584 56.7588 63.7811 56.8802L65.2332 55.1397V54.2087H65.9996L75.4785 42.9563L75.9222 42.3491V42.4301Z"
                        fill="#370F1E" />
                    <path
                        d="M60.7154 55.3828V53.6423L59.344 54.6542V58.9043H56.6819V56.6376L55.3508 57.609V58.9043H53.576L29.4956 76.633C33.1258 77.9687 37.0787 78.7378 41.1526 78.7378C45.2265 78.7378 44.1778 78.6164 45.6702 78.4545L62.2079 58.8233C61.0381 58.2971 60.7154 57.1233 60.7154 55.4233V55.3828Z"
                        fill="#370F1E" />
                    <path d="M75.9629 42.4305L76.0036 42.3896L75.9221 42.4305H75.9629Z" fill="#370F1E" />
                    <path
                        d="M75.559 42.9966L66.8465 54.2491H67.9759V55.7062C67.9759 57.7301 66.8465 59.1467 64.144 59.1467C61.4415 59.1467 63.4179 59.1467 63.1356 59.0658L48.5341 77.9279C63.4583 74.6088 74.8329 61.292 75.9623 45.0204L76.043 42.4299L75.5993 42.9561L75.559 42.9966Z"
                        fill="#370F1E" />
                    <path d="M76.0027 42.4301V42.3896L75.559 42.9968L76.0027 42.4301Z" fill="#370F1E" />
                    <path
                        d="M73.3405 17.0512C69.2262 11.344 63.7003 6.77019 57.4886 3.89636C52.4062 1.54872 46.7592 0.293945 41.1929 0.293945H41.0719C38.7324 0.293945 36.3526 0.496328 34.0535 0.94157C26.43 2.35825 19.2503 6.12257 13.6033 11.6274C8.80332 16.3227 5.13277 22.1918 2.99498 28.668C0.252145 36.9657 0.0504667 46.1134 2.47061 54.492C4.44706 61.4135 8.19828 67.7684 13.1596 72.747C17.7579 77.3208 23.4049 80.8018 29.4956 82.7042C38.3694 85.4971 48.0903 84.9709 56.6012 81.2875C65.717 77.3208 73.2598 69.8327 77.4951 60.604C80.6413 53.7635 81.9723 46.0325 81.2866 38.4633C80.6009 30.6918 77.8178 23.2442 73.3405 17.0917V17.0512ZM76.648 53.3587C74.8329 59.7135 71.4044 65.5826 66.8061 70.1969C62.6112 74.447 57.4079 77.6446 51.8012 79.3851C43.6534 81.9756 34.6989 81.4899 26.8737 78.0899C18.4839 74.447 11.5462 67.566 7.63358 59.0659C4.72941 52.7516 3.51934 45.6277 4.16471 38.6252C4.81008 31.5014 7.39157 24.6204 11.5462 18.9536C15.3377 13.7726 20.3797 9.60355 26.067 6.97258C30.746 4.78684 35.9089 3.6535 41.0719 3.6535H41.0316H41.919C48.8164 3.81541 55.5928 6.00114 61.3204 9.88689C68.0565 14.4607 73.3405 21.4227 76.043 29.3561C78.6648 37.0467 78.8665 45.5872 76.648 53.3992V53.3587Z"
                        fill="#370F1E" />
                    <path
                        d="M20.3797 33.6468C20.3797 36.8445 21.4687 38.3421 25.0989 38.3421C28.7292 38.3421 29.8586 36.3183 29.8586 33.6468V22.2729H26.309V34.0111C26.309 34.6587 26.1073 35.5087 25.0989 35.5087C24.0905 35.5087 23.8889 34.8611 23.8889 34.092V22.2324H20.3393H20.3797V33.6468Z"
                        fill="#370F1E" />
                    <path
                        d="M35.5461 38.3015C38.4906 38.3015 40.1041 36.642 40.1041 33.6063C40.1041 30.5705 39.62 30.6515 38.8133 29.8419C37.9663 29.0324 36.8369 28.5062 35.5058 27.6157C34.8201 27.0895 34.3764 26.6038 34.4571 25.6729C34.5377 24.9848 34.9411 24.5395 35.6671 24.6205C36.8369 24.7014 36.8369 25.9562 36.8369 26.8872H40.1041C40.2654 23.9324 38.3696 21.7871 35.6268 21.7871C32.884 21.7871 31.1899 23.2847 31.1899 26.2395C31.1899 29.1943 31.5529 28.5872 32.1983 29.3967C32.8436 30.2062 33.7714 30.8134 34.8604 31.461C35.7881 32.0682 36.8369 32.5539 36.8369 33.8896C36.8369 35.2253 36.7965 35.4682 35.6671 35.4682C34.5377 35.4682 34.2554 34.6587 34.2554 33.7682V32.6753H30.9882V34.3348C30.9882 36.3991 32.642 38.3015 35.5865 38.3015H35.5461Z"
                        fill="#370F1E" />
                    <path
                        d="M49.5426 37.2087C50.551 36.5206 51.035 35.3873 51.035 33.8087V26.8467C51.035 25.3491 50.8333 23.811 49.4619 22.961C48.3325 22.2729 46.7594 22.2324 45.4687 22.2324H41.6368V37.9373H46.3964C47.4855 37.9373 48.6149 37.8159 49.5426 37.2087ZM45.1863 35.104V25.0658C46.9208 25.0658 47.4855 25.2277 47.5258 27.0491V32.1897C47.5258 34.2944 47.5258 35.3063 45.1863 35.104Z"
                        fill="#370F1E" />
                    <path
                        d="M55.6331 37.9373L56.0364 34.8611H58.8196L59.3036 37.9373H62.8935L59.6263 22.2324H55.3507L52.0432 37.9373H55.6331ZM57.4078 25.0658L58.3759 32.1087H58.4566H56.3994L57.4078 25.0658Z"
                        fill="#370F1E" />
                </g>
                <defs>
                    <clipPath id="clip0_1_3031">
                        <rect width="80.7113" height="84.1458" fill="white" transform="translate(0.788666 0.293945)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
        <div class="w-full -mt-10 relative z-30">
            <CtaDiscomfort />
        </div>
        <div class="w-full pt-10 -mt-10 relative z-30">
            <Learnmore backgroundColor="#FFFAF0" text="Learn more about us and how important is the right sleep" />
        </div>
        <div class="w-full -mt-10 relative z-30">
            <Footer color="#370F1E" title="SUPERMENT"
                subtitle="© Super Natural Sleep Research 2025.<br> All Rights Reserved" />
        </div>
    </div>
</template>

<style scoped>
@font-face {
    font-family: "Crossfit-LIGHT";
    src: url("@/assets/fonts/crossfit/CrossfitDemo-Bold.otf") format("truetype");
    font-weight: normal;
    font-style: normal;
}

.font-crossfit-light {
    font-family: 'Crossfit-LIGHT';
}
</style>