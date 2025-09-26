<script setup>
import { useSeo } from '@/composables/useSeo';
import Header from '@/components/Header.vue';
import logoHeader from '@/assets/image/menopause/logo-header.svg';
import Footer from '@/components/Footer.vue';
import Learnmore from '@/components/Learnmore.vue';
import HeroSection from '@/components/menopause/HeroSectionMenopause.vue';
import CtaMenopause from '@/components/menopause/CtaMenopause.vue';
import ShopButton from '@/components/ShopButton.vue';

useSeo({
    title: 'SUPERMENT - Super Natural Sleep',
    description: 'Natural, deep sleep is essential for healthy, radiant skin.',
    keywords: 'superment, super natural sleep, sleep, natural, radiant skin'
});
</script>

<template>
    <div class="w-full flex flex-col items-center justify-start">
        <div class="w-full">
            <Header color="#E6B4FF" :imageSrc="logoHeader" />
            <HeroSection />
        </div>
        <div class="w-full h-[60px] bg-[#F5D7FF] flex items-center justify-center">
            <span
                class="font-gelasio text-[#370F1E] text-[24px] lg:text-[28px] italic font-semibold leading-[1.1] tracking-[0.4px]">
                Get a good night's sleep.
            </span>
        </div>
        <div class="pb-8 pt-12 bg-white">
            <div class="w-full flex flex-col items-center justify-start">
                <div class="grid lg:grid-cols-2 flex flex-col items-center justify-center lg:items-start lg:mr-[50px]">
                    <div class="flex justify-center lg:col-span-1">
                        <div class="-mt-16 -ml-12 lg:-mt-18 lg:-ml-2">
                            <img src="@/assets/image/sleepWomam/product.png" alt="Super Natural Sleep"
                                class="w-[260px] h-[294px] lg:w-full lg:h-full object-cover">
                        </div>
                    </div>
                    <div
                        class="flex flex-col items-start justify-start lg:col-span-1 w-[316px] -mt-2 lg:w-[398px] lg:items-start">
                        <p
                            class="font-gelasio italic font-normal text-[32px] text-[#370f1e] leading-[1] text-start lg:text-[40px]">
                            Super Natural <br>Sleep helps you:
                        </p>
                        <p
                            class="text-[20px] font-normal text-[#525252] lg:text-[1.5rem] leading-[1] h-[60px] mt-2 lg:h-[65px] w-[316px] lg:w-[370px] lg:text-[24px]">
                            fall asleep, stay asleep, and wake up truly rested — without
                            melatonin, meds, or next-day fog.</p>
                        <div class="w-[316px] h-[1px] bg-[#D78CFF] mt-3 lg:w-[370px] lg:mt-4 lg:bg-[#FFA50A]"></div>
                        <p
                            class="text-[#726f6f] text-[16px] lg:text-[20px] font-light leading-[1.2rem] mx-0 mt-[13px] w-[316px] lg:w-[390px] lg:leading-[1.2em]">
                            Clean, non-sedative formula. No melatonin. Made in FDA & GMP-certified U.S. labs.
                        </p>
                        <ShopButton id="buy-button" productId="prod_SbKYsQrxStW8wB" textColorClass="text-[#083D4F]"
                            :showIcon=false
                            class="w-[316px] text-[18px] lg:w-[347px] lg:text-[20px] bg-[#6EC8F0] rounded-full font-bold hover:bg-[#6EC8F0]/70 transition font-DMSans mt-[24px] ">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.5 22C6.95 22 6.47917 21.8042 6.0875 21.4125C5.69583 21.0208 5.5 20.55 5.5 20C5.5 19.45 5.69583 18.9792 6.0875 18.5875C6.47917 18.1958 6.95 18 7.5 18C8.05 18 8.52083 18.1958 8.9125 18.5875C9.30417 18.9792 9.5 19.45 9.5 20C9.5 20.55 9.30417 21.0208 8.9125 21.4125C8.52083 21.8042 8.05 22 7.5 22ZM17.5 22C16.95 22 16.4792 21.8042 16.0875 21.4125C15.6958 21.0208 15.5 20.55 15.5 20C15.5 19.45 15.6958 18.9792 16.0875 18.5875C16.4792 18.1958 16.95 18 17.5 18C18.05 18 18.5208 18.1958 18.9125 18.5875C19.3042 18.9792 19.5 19.45 19.5 20C19.5 20.55 19.3042 21.0208 18.9125 21.4125C18.5208 21.8042 18.05 22 17.5 22ZM6.65 6L9.05 11H16.05L18.8 6H6.65ZM5.7 4H20.45C20.8333 4 21.125 4.17083 21.325 4.5125C21.525 4.85417 21.5333 5.2 21.35 5.55L17.8 11.95C17.6167 12.2833 17.3708 12.5417 17.0625 12.725C16.7542 12.9083 16.4167 13 16.05 13H8.6L7.5 15H19.5V17H7.5C6.75 17 6.18333 16.6708 5.8 16.0125C5.41667 15.3542 5.4 14.7 5.75 14.05L7.1 11.6L3.5 4H1.5V2H4.75L5.7 4Z"
                                    fill="#083D4F" />
                            </svg>
                            Shop: First Trial Special Offer
                        </ShopButton>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-[316px] lg:w-full grid grid-cols-1 pt-[30px] pb-[60px] lg:grid-cols-2 lg:pt-[20px]">
            <p class="block lg:hidden font-gelasio italic text-[28px] leading-[1.1] text-[#370F1E]">You’re not just
                aging. </p>
            <p class="block lg:hidden font-gelasio italic text-[28px] leading-[1.1] text-[#6EC8F0]">Your sleep is
                changing. </p>
            <p class="block lg:hidden font-DMSans text-[16px] leading-[1.2] font-light text-[#525252] mt-3">You go to
                bed tired, but
                wake up
                hot, restless, or wide awake at 3AM. Your hormones are shifting, and
                it’s disrupting your sleep.</p>
            <div class="col-span-1 flex flex-col items-end justify-start">
                <img src="@/assets/image/menopause/menopause.webp" alt="menopause"
                    class="w-full h-[252px] lg:w-[477px] lg:h-[383px] rounded mt-5"></img>
            </div>
            <div class="mt-3 col-span-1 flex flex-col items-start justify-start lg:pt-[43px] lg:pl-[40px]">
                <p class="hidden lg:block font-gelasio italic text-[40px] leading-[1.08] text-[#370F1E]">You’re not just
                    aging </p>
                <p class="hidden lg:block font-gelasio italic text-[32px] leading-[1.10] text-[#6EC8F0]">— your sleep is
                    changing. </p>
                <p
                    class="hidden lg:block font-DMSans text-[20px] text-extralight leading-[1.2] text-[#525252] tracking lg:w-[444px] mt-[12px]">
                    You go to bed tired, but wake up hot, restless, or wide awake at 3AM. Your hormones are shifting,
                    and it’s disrupting your sleep.</p>
                <span
                    class="font-DMSans text-[16px] leading-[1.2] font-light text-[#525252] font-semibold lg:text-[20px] lg:w-[444px] mt-[12px]">Super
                    Natural Sleep
                    <span class="font-light">
                        was
                        made for you. It calms your mind, eases tension, and helps you sleep deeply — all
                        night, naturally.
                    </span>
                </span>
                <ShopButton id="buy-button" productId="prod_SbKYsQrxStW8wB" textColorClass="text-[#083D4F]"
                    :showIcon=false
                    class="w-[316px] bg-[#6EC8F0] rounded-full font-bold hover:bg-[#6EC8F0]/70 transition font-DMSans text-[18px] mt-[36px] lg:mt-[26px]">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.5 22C6.95 22 6.47917 21.8042 6.0875 21.4125C5.69583 21.0208 5.5 20.55 5.5 20C5.5 19.45 5.69583 18.9792 6.0875 18.5875C6.47917 18.1958 6.95 18 7.5 18C8.05 18 8.52083 18.1958 8.9125 18.5875C9.30417 18.9792 9.5 19.45 9.5 20C9.5 20.55 9.30417 21.0208 8.9125 21.4125C8.52083 21.8042 8.05 22 7.5 22ZM17.5 22C16.95 22 16.4792 21.8042 16.0875 21.4125C15.6958 21.0208 15.5 20.55 15.5 20C15.5 19.45 15.6958 18.9792 16.0875 18.5875C16.4792 18.1958 16.95 18 17.5 18C18.05 18 18.5208 18.1958 18.9125 18.5875C19.3042 18.9792 19.5 19.45 19.5 20C19.5 20.55 19.3042 21.0208 18.9125 21.4125C18.5208 21.8042 18.05 22 17.5 22ZM6.65 6L9.05 11H16.05L18.8 6H6.65ZM5.7 4H20.45C20.8333 4 21.125 4.17083 21.325 4.5125C21.525 4.85417 21.5333 5.2 21.35 5.55L17.8 11.95C17.6167 12.2833 17.3708 12.5417 17.0625 12.725C16.7542 12.9083 16.4167 13 16.05 13H8.6L7.5 15H19.5V17H7.5C6.75 17 6.18333 16.6708 5.8 16.0125C5.41667 15.3542 5.4 14.7 5.75 14.05L7.1 11.6L3.5 4H1.5V2H4.75L5.7 4Z"
                            fill="#083D4F" />
                    </svg>
                    Shop: First Trial Special Offer
                </ShopButton>
            </div>
        </div>
        <div
            class="pt-[36px] pb-[44px] md:pt-16 bg-[#FBEFFF] flex flex-col items-center justify-center  relative z-20 rounded-3xl w-full lg:pt-[40px] lg:pb-[40px]">
            <div class="w-full flex flex-col items-center justify-center md:w-full">
                <p
                    class="font-gelasio italic text-[30px] leading-[1.11] text-[#370F1E] text-center mb-2 md:mb-12 lg:mb-6 mx-8 w-[356px] md:w-full">
                    Carefully chosen ingredients for deep, restful sleep:
                </p>

                <div
                    class=" flex flex-col justify-start items-center gap-1 w-full lg:flex-row lg:justify-center lg:gap-6">
                    <div
                        class="px-3.5 py-2 border-b-2 border-blue-100 w-[316px] lg:h-[270px] lg:w-[168px] inline-flex justify-center items-center lg:justify-start gap-4 lg:gap-0 lg:flex-col lg:border-0">
                        <div class="w-14 h-14 lg:w-32 lg:h-32 relative">
                            <img class="w-14 h-14 lg:w-28 lg:h-28 left-[3px] top-[1.71px] absolute"
                                src="@/assets/image/sleepWomam/passionflower.png" alt="Passionflower" />
                        </div>
                        <div
                            class="w-56 inline-flex flex-col justify-start items-start lg:justify-start lg:items-center gap-1 lg:gap-0">
                            <div class="justify-center font-gelasio italic text-[20px] leading-[1.1] text-[#525252]">
                                Passionflower</div>
                            <div
                                class="justify-center font-DMSans text-[16px] leading-[1.15] text-[#525252] lg:text-center">
                                Calms a racing mind <br class="hidden lg:block">and supports <br
                                    class="hidden lg:block">emotional balance, <br class="hidden lg:block">so you can
                                fall asleep peacefully.
                            </div>
                        </div>
                    </div>
                    <div
                        class="px-3.5 py-2 border-b-2 border-blue-100 w-[316px] lg:h-[270px] lg:w-[168px] inline-flex justify-center items-center lg:justify-start gap-4 lg:flex-col lg:border-0">
                        <img class="w-14 h-14 lg:w-28 lg:h-28" src="@/assets/image/sleepWomam/california-poppy.png"
                            alt="California Poppy" />
                        <div
                            class="w-56 inline-flex flex-col justify-start items-start lg:justify-start lg:items-center gap-1 lg:gap-0">
                            <div class="justify-center font-gelasio italic text-[20px] leading-[1.1] text-[#525252]">
                                California Poppy</div>
                            <div
                                class="justify-center font-DMSans lg:text-center text-[16px] leading-[1.15] text-[#525252]">
                                Relaxes your body and <br class="hidden lg:block">eases restlessness, <br
                                    class="hidden lg:block">helping you stay <br class="hidden lg:block">asleep longer.
                            </div>
                        </div>
                    </div>
                    <div
                        class="px-3.5 py-2 border-b-2 border-blue-100 w-[316px] lg:h-[270px] lg:w-[185px] inline-flex justify-center items-center lg:justify-start gap-4 lg:flex-col lg:border-0">
                        <div class="w-14 h-14 lg:w-32 lg:h-28 relative overflow-hidden">
                            <div class="w-14 h-18 lg:w-32 lg:h-28 absolute overflow-hidden">
                                <img class="w-20 h-18 lg:w-28 lg:h-28 origin-top-left"
                                    src="@/assets/image/sleepWomam/marshmallow-root.png" alt="Marshmallow Root" />
                            </div>
                        </div>
                        <div
                            class="w-56 inline-flex flex-col justify-start items-start lg:justify-center lg:items-center gap-1 lg:gap-0">
                            <div class="justify-center font-gelasio italic text-[20px] leading-[1.1] text-[#525252]">
                                Marshmallow Root</div>
                            <div
                                class="justify-center font-DMSans lg:text-center text-[16px] leading-[1.15] text-[#525252]">
                                Soothes the throat <br class="hidden lg:block">and digestion, <br
                                    class="hidden lg:block">easing discomfort <br class="hidden lg:block">that can wake
                                you in <br class="hidden lg:block">the night.
                            </div>
                        </div>
                    </div>
                    <div
                        class="px-3.5 py-2 border-b-2 border-blue-100 w-[316px] lg:h-[270px] lg:w-[168px] inline-flex justify-center items-center lg:justify-center gap-4 lg:flex-col lg:border-0">
                        <div class="w-16 h-16 lg:w-24 lg:h-24 relative overflow-hidden">
                            <img class="w-16 h-16 lg:w-24 lg:h-24 left-[-8px]  absolute"
                                src="@/assets/image/sleepWomam/corydalis.png" alt="Corydalis" />
                        </div>
                        <div
                            class="w-56 inline-flex flex-col justify-start items-start lg:justify-center lg:items-center gap-1 lg:gap-0 lg:mt-1">
                            <div class="justify-center font-gelasio italic text-[20px] leading-[1.1] text-[#525252]">
                                Corydalis</div>
                            <div
                                class="justify-center font-DMSans lg:text-center text-[16px] leading-[1.15] text-[#525252]">
                                Eases minor <br class="hidden lg:block">aches and <br class="hidden lg:block">tension,
                                so your <br class="hidden lg:block">body can fully <br class="hidden lg:block">let go
                                and rest.</div>
                        </div>
                    </div>
                    <div
                        class="px-3.5 py-2 inline-flex justify-center items-center lg:justify-start lg:w-[168px] lg:h-[270px] gap-4 lg:gap-4 lg:flex-col lg:border-0">
                        <div class="w-14 h-14 lg:w-28 lg:h-28 relative">
                            <img class="w-12 h-12 lg:w-24 lg:h-24 left-[3px]  absolute"
                                src="@/assets/image/sleepWomam/prickly-pear.png" alt="Prickly Pear" />
                        </div>
                        <div
                            class="w-56 inline-flex flex-col justify-start items-start lg:justify-center lg:items-center gap-1 lg:gap-0">
                            <div class="justify-center font-gelasio italic text-[20px] leading-[1.1] text-[#525252]">
                                Prickly Pear</div>
                            <div
                                class="justify-center font-DMSans lg:text-center text-[16px] leading-[1.15] text-[#525252]">
                                Supports digestion <br class="hidden lg:block">and inflammation <br
                                    class="hidden lg:block">balance to keep your <br class="hidden lg:block">sleep
                                steady through
                                <br>the
                                night.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center">
                    <div class="flex justify-center">
                        <ShopButton id="buy-button" productId="prod_SbKYsQrxStW8wB" textColorClass="text-[#083D4F]"
                            :showIcon=false
                            class="w-[316px] lg:w-[347px] bg-[#6EC8F0] rounded-full font-bold hover:bg-[#6EC8F0]/70 transition font-DMSans text-[18px] lg:text-[20px] mt-[24px] ">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.5 22C6.95 22 6.47917 21.8042 6.0875 21.4125C5.69583 21.0208 5.5 20.55 5.5 20C5.5 19.45 5.69583 18.9792 6.0875 18.5875C6.47917 18.1958 6.95 18 7.5 18C8.05 18 8.52083 18.1958 8.9125 18.5875C9.30417 18.9792 9.5 19.45 9.5 20C9.5 20.55 9.30417 21.0208 8.9125 21.4125C8.52083 21.8042 8.05 22 7.5 22ZM17.5 22C16.95 22 16.4792 21.8042 16.0875 21.4125C15.6958 21.0208 15.5 20.55 15.5 20C15.5 19.45 15.6958 18.9792 16.0875 18.5875C16.4792 18.1958 16.95 18 17.5 18C18.05 18 18.5208 18.1958 18.9125 18.5875C19.3042 18.9792 19.5 19.45 19.5 20C19.5 20.55 19.3042 21.0208 18.9125 21.4125C18.5208 21.8042 18.05 22 17.5 22ZM6.65 6L9.05 11H16.05L18.8 6H6.65ZM5.7 4H20.45C20.8333 4 21.125 4.17083 21.325 4.5125C21.525 4.85417 21.5333 5.2 21.35 5.55L17.8 11.95C17.6167 12.2833 17.3708 12.5417 17.0625 12.725C16.7542 12.9083 16.4167 13 16.05 13H8.6L7.5 15H19.5V17H7.5C6.75 17 6.18333 16.6708 5.8 16.0125C5.41667 15.3542 5.4 14.7 5.75 14.05L7.1 11.6L3.5 4H1.5V2H4.75L5.7 4Z"
                                    fill="#083D4F" />
                            </svg>
                            Shop: First Trial Special Offer
                        </ShopButton>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-[316px] grid grid-cols-1 pt-[59px] pb-[60px] lg:grid-cols-2 lg:pt-[40px] lg:w-full">
            <p class="block lg:hidden font-gelasio italic text-[32px] leading-[1] text-[#370F1E]">Sleep support that
                respects
                <span class="text-[#6EC8F0]">your
                    body.</span>
            </p>
            <p class="block lg:hidden font-DMSans text-[16px] leading-[1.2] font-light text-[#525252] mt-[12px]">Super
                Natural Sleep is
                melatonin-free — because melatonin can disrupt your rhythm, cause grogginess, and lose effectiveness
                over time.</p>
            <div class="block lg:hidden col-span-1">
                <img src="@/assets/image/menopause/menopause-sleeping.webp" alt="menopause"
                    class="w-full h-[200px] rounded mt-[17px]">
            </div>
            <div class="hidden lg:flex col-span-1 flex-col items-end justify-end">
                <img src="@/assets/image/menopause/menopause-sleeping-desk.webp" alt="menopause"
                    class="rounded-[10px] mt-[20px] h-[462px] w-[465px]">
            </div>
            <div class="col-span-1 lg:pt-[93px] lg:pl-[40px]">
                <p class="hidden lg:block font-gelasio italic text-[40px] leading-[1] text-[#370F1E]">Sleep support
                    that <br>respects <span class="text-[#6EC8F0]">your body</span></p>
                <span
                    class="hidden lg:block font-DMSans text-[20px] font-light leading-[1.2] text-[#525252] mt-[9px]">Super
                    Natural
                    Sleep is melatonin-free — because <br>melatonin can disrupt bryour rhythm, cause <br> grogginess,
                    and
                    lose
                    effectiveness over time.</span>
                <p
                    class="font-DMSans text-[16px] leading-[1.2] font-light text-[#525252] mt-[18px] lg:text-[20px] lg:mt-[12px] tracking-tight lg:tracking-none">
                    Instead,
                    we use
                    gentle,
                    plant-based bringredients <br class="hidden lg:block">chosen to calm your body and mind — without
                    <br class="hidden lg:block">sedation, side effects,
                    or
                    morning
                    fog.
                </p>
                <ShopButton id="buy-button" productId="prod_SbKYsQrxStW8wB" textColorClass="text-[#083D4F]"
                    :showIcon=false
                    class="w-[316px] lg:w-[343px] bg-[#6EC8F0] rounded-full font-bold hover:bg-[#6EC8F0]/70 transition font-DMSans text-[18px] lg:text-[20px] mt-[23px] lg:mt-[24px] ">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.5 22C6.95 22 6.47917 21.8042 6.0875 21.4125C5.69583 21.0208 5.5 20.55 5.5 20C5.5 19.45 5.69583 18.9792 6.0875 18.5875C6.47917 18.1958 6.95 18 7.5 18C8.05 18 8.52083 18.1958 8.9125 18.5875C9.30417 18.9792 9.5 19.45 9.5 20C9.5 20.55 9.30417 21.0208 8.9125 21.4125C8.52083 21.8042 8.05 22 7.5 22ZM17.5 22C16.95 22 16.4792 21.8042 16.0875 21.4125C15.6958 21.0208 15.5 20.55 15.5 20C15.5 19.45 15.6958 18.9792 16.0875 18.5875C16.4792 18.1958 16.95 18 17.5 18C18.05 18 18.5208 18.1958 18.9125 18.5875C19.3042 18.9792 19.5 19.45 19.5 20C19.5 20.55 19.3042 21.0208 18.9125 21.4125C18.5208 21.8042 18.05 22 17.5 22ZM6.65 6L9.05 11H16.05L18.8 6H6.65ZM5.7 4H20.45C20.8333 4 21.125 4.17083 21.325 4.5125C21.525 4.85417 21.5333 5.2 21.35 5.55L17.8 11.95C17.6167 12.2833 17.3708 12.5417 17.0625 12.725C16.7542 12.9083 16.4167 13 16.05 13H8.6L7.5 15H19.5V17H7.5C6.75 17 6.18333 16.6708 5.8 16.0125C5.41667 15.3542 5.4 14.7 5.75 14.05L7.1 11.6L3.5 4H1.5V2H4.75L5.7 4Z"
                            fill="#083D4F" />
                    </svg>
                    Shop: First Trial Special Offer
                </ShopButton>
            </div>
        </div>
        <div class="flex flex-col items-center justify-start gap-6 pb-[20px] lg:grid grid-cols-3">
            <div
                class="w-[316px] lg:w-[302px] lg:h-[198px] pb-[20px] bg-blue-100/20 rounded-lg outline outline-1 outline-offset-[-1px] outline-purple-400 lg:outline-blue-400 flex flex-col justify-center items-center">
                <svg class="block lg:hidden" width="98" height="85" viewBox="0 0 98 85" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1_2323)">
                        <path
                            d="M35.25 60.7939C31.7692 60.7939 28.8156 59.5808 26.3894 57.1546C23.9631 54.7283 22.75 51.7748 22.75 48.2939C22.75 45.3164 23.8285 42.7452 25.9856 40.5802C28.1427 38.4152 30.7181 37.3327 33.7119 37.3327C36.6894 37.3327 39.2606 38.4152 41.4256 40.5802C43.5906 42.7452 44.6731 45.3164 44.6731 48.2939H48.4231C48.4231 44.3227 47.1658 41.0014 44.6513 38.3302C42.1371 35.6585 38.8752 34.076 34.8656 33.5827C35.5994 30.451 37.2812 27.9533 39.9112 26.0896C42.5408 24.2258 45.5704 23.2939 49 23.2939C53.5479 23.2939 57.3933 24.8652 60.5363 28.0077C63.6787 31.1506 65.25 34.996 65.25 39.5439V40.7939H66.0194C68.5002 40.7939 70.6587 41.8083 72.495 43.8371C74.3317 45.8662 75.25 48.1852 75.25 50.7939C75.25 53.5664 74.2765 55.9262 72.3294 57.8733C70.3823 59.8204 68.0225 60.7939 65.25 60.7939H35.25Z"
                            fill="#D78CFF" />
                    </g>
                    <defs>
                        <filter id="filter0_d_1_2323" x="0.65" y="1.19394" width="96.7" height="81.7"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="11.05" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix"
                                values="0 0 0 0 0.627451 0 0 0 0 0.843137 0 0 0 0 1 0 0 0 0.6 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2323" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2323" result="shape" />
                        </filter>
                    </defs>
                </svg>
                <svg class="hidden lg:block" width="98" height="85" viewBox="0 0 98 85" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1_2605)">
                        <path
                            d="M35.25 60.8604C31.7692 60.8604 28.8156 59.6472 26.3894 57.221C23.9631 54.7947 22.75 51.8412 22.75 48.3604C22.75 45.3829 23.8285 42.8116 25.9856 40.6466C28.1427 38.4816 30.7181 37.3991 33.7119 37.3991C36.6894 37.3991 39.2606 38.4816 41.4256 40.6466C43.5906 42.8116 44.6731 45.3829 44.6731 48.3604H48.4231C48.4231 44.3891 47.1658 41.0679 44.6513 38.3966C42.1371 35.7249 38.8752 34.1424 34.8656 33.6491C35.5994 30.5174 37.2812 28.0197 39.9112 26.156C42.5408 24.2922 45.5704 23.3604 49 23.3604C53.5479 23.3604 57.3933 24.9316 60.5363 28.0741C63.6787 31.217 65.25 35.0624 65.25 39.6104V40.8604H66.0194C68.5002 40.8604 70.6587 41.8747 72.495 43.9035C74.3317 45.9326 75.25 48.2516 75.25 50.8604C75.25 53.6329 74.2765 55.9926 72.3294 57.9397C70.3823 59.8868 68.0225 60.8604 65.25 60.8604H35.25Z"
                            fill="#6EC8F0" />
                    </g>
                    <defs>
                        <filter id="filter0_d_1_2605" x="0.65" y="1.26035" width="96.7" height="81.7"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="11.05" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix"
                                values="0 0 0 0 0.627451 0 0 0 0 0.843137 0 0 0 0 1 0 0 0 0.6 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2605" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2605" result="shape" />
                        </filter>
                    </defs>
                </svg>
                <p class="font-DMSans text-[20px] lg:text-[24px] leading-[1.08] text-[#525252] text-center">You deserve
                    sleep that
                    <br class="hidden lg:block">works <br class="block lg:hidden">with you — not <br
                        class="hidden lg:block">against
                    you
                </p>
            </div>
            <div
                class="w-[316px] lg:w-[302px] lg:h-[198px] pb-[20px] bg-blue-100/20 rounded-lg outline outline-1 outline-offset-[-1px] outline-purple-400 lg:outline-blue-400 flex flex-col justify-center items-center">
                <svg class="block lg:hidden" width="92" height="92" viewBox="0 0 92 92" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1_2328)">
                        <path
                            d="M59.4854 49.6546L41.3892 31.5584L46.3654 26.5584C47.5862 25.3534 48.9748 24.4248 50.531 23.7727C52.0873 23.1202 53.7227 22.794 55.4373 22.794C59.0014 22.794 62.0279 24.0384 64.5167 26.5271C67.0054 29.0159 68.2498 32.0423 68.2498 35.6065C68.2498 37.3211 67.9235 38.9565 67.271 40.5127C66.6189 42.069 65.6904 43.4575 64.4854 44.6784L59.4854 49.6546ZM66.4035 68.9671L53.2885 55.8515L47.6342 61.5296C46.4292 62.7346 45.0446 63.6631 43.4804 64.3152C41.9162 64.9677 40.2769 65.294 38.5623 65.294C34.9981 65.294 31.9717 64.0496 29.4829 61.5609C26.9942 59.0721 25.7498 56.0457 25.7498 52.4815C25.7498 50.7669 26.076 49.1275 26.7285 47.5634C27.3806 45.9992 28.3092 44.6146 29.5142 43.4096L35.1923 37.7552L22.3267 24.8902L24.9617 22.2559L69.0379 66.3321L66.4035 68.9671Z"
                            fill="#D78CFF" />
                    </g>
                    <defs>
                        <filter id="filter0_d_1_2328" x="0.22666" y="0.155859" width="90.9114" height="90.9114"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="11.05" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix"
                                values="0 0 0 0 0.627451 0 0 0 0 0.843137 0 0 0 0 1 0 0 0 0.6 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2328" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2328" result="shape" />
                        </filter>
                    </defs>
                </svg>
                <svg class="hidden lg:block" width="92" height="92" viewBox="0 0 92 92" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1_2610)">
                        <path
                            d="M59.4854 49.721L41.3892 31.6248L46.3654 26.6248C47.5862 25.4198 48.9748 24.4912 50.531 23.8391C52.0873 23.1866 53.7227 22.8604 55.4373 22.8604C59.0014 22.8604 62.0279 24.1048 64.5167 26.5935C67.0054 29.0823 68.2498 32.1087 68.2498 35.6729C68.2498 37.3875 67.9235 39.0229 67.271 40.5791C66.6189 42.1354 65.6904 43.5239 64.4854 44.7448L59.4854 49.721ZM66.4035 69.0335L53.2885 55.9179L47.6342 61.596C46.4292 62.801 45.0446 63.7296 43.4804 64.3816C41.9162 65.0341 40.2769 65.3604 38.5623 65.3604C34.9981 65.3604 31.9717 64.116 29.4829 61.6273C26.9942 59.1385 25.7498 56.1121 25.7498 52.5479C25.7498 50.8333 26.076 49.1939 26.7285 47.6298C27.3806 46.0656 28.3092 44.681 29.5142 43.476L35.1923 37.8216L22.3267 24.9566L24.9617 22.3223L69.0379 66.3985L66.4035 69.0335Z"
                            fill="#6EC8F0" />
                    </g>
                    <defs>
                        <filter id="filter0_d_1_2610" x="0.22666" y="0.222265" width="90.9114" height="90.9114"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="11.05" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix"
                                values="0 0 0 0 0.627451 0 0 0 0 0.843137 0 0 0 0 1 0 0 0 0.6 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2610" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2610" result="shape" />
                        </filter>
                    </defs>
                </svg>
                <p class="font-DMSans text-[20px] lg:text-[24px] leading-[1.08] text-[#525252] text-center">No
                    melatonin. No <br class="hidden lg:block">sedatives.
                    <br>No side effects.
                </p>
            </div>
            <div
                class="w-[316px] lg:w-[302px] lg:h-[198px] pb-[20px] bg-blue-100/20 rounded-lg outline outline-1 outline-offset-[-1px] outline-purple-400 lg:outline-blue-400 flex flex-col justify-center items-center">
                <svg class="block lg:hidden" width="88" height="92" viewBox="0 0 88 92" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1_2333)">
                        <path
                            d="M32.3412 69.8175L42.3894 51.6688L22.75 49.2888L51.8125 22.27H55.7069L45.5381 40.4431L65.25 42.7988L36.1875 69.8175H32.3412Z"
                            fill="#D78CFF" />
                    </g>
                    <defs>
                        <filter id="filter0_d_1_2333" x="0.65" y="0.170019" width="86.7" height="91.7474"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="11.05" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix"
                                values="0 0 0 0 0.627451 0 0 0 0 0.843137 0 0 0 0 1 0 0 0 0.6 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2333" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2333" result="shape" />
                        </filter>
                    </defs>
                </svg>
                <svg class="hidden lg:block" width="88" height="92" viewBox="0 0 88 92" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1_2615)">
                        <path
                            d="M32.3412 69.8839L42.3894 51.7352L22.75 49.3552L51.8125 22.3364H55.7069L45.5381 40.5096L65.25 42.8652L36.1875 69.8839H32.3412Z"
                            fill="#6EC8F0" />
                    </g>
                    <defs>
                        <filter id="filter0_d_1_2615" x="0.65" y="0.236425" width="86.7" height="91.7474"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="11.05" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix"
                                values="0 0 0 0 0.627451 0 0 0 0 0.843137 0 0 0 0 1 0 0 0 0.6 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2615" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2615" result="shape" />
                        </filter>
                    </defs>
                </svg>
                <p class="font-DMSans text-[20px] lg:text-[24px] leading-[1.08] text-[#525252] text-center">Just real
                    sleep, and the
                    energy <br class="block lg:hidden">to feel like <br class="hidden lg:block">yourself again.</p>
            </div>
            <div class="col-span-3 flex flex-col items-center">
                <ShopButton id="buy-button" productId="prod_SbKYsQrxStW8wB" textColorClass="text-[#083D4F]"
                    :showIcon=false
                    class="w-[316px] lg:w-[343px] bg-[#6EC8F0] rounded-full font-bold hover:bg-[#6EC8F0]/70 transition font-DMSans text-[18px] lg:text-[20px]">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.5 22C6.95 22 6.47917 21.8042 6.0875 21.4125C5.69583 21.0208 5.5 20.55 5.5 20C5.5 19.45 5.69583 18.9792 6.0875 18.5875C6.47917 18.1958 6.95 18 7.5 18C8.05 18 8.52083 18.1958 8.9125 18.5875C9.30417 18.9792 9.5 19.45 9.5 20C9.5 20.55 9.30417 21.0208 8.9125 21.4125C8.52083 21.8042 8.05 22 7.5 22ZM17.5 22C16.95 22 16.4792 21.8042 16.0875 21.4125C15.6958 21.0208 15.5 20.55 15.5 20C15.5 19.45 15.6958 18.9792 16.0875 18.5875C16.4792 18.1958 16.95 18 17.5 18C18.05 18 18.5208 18.1958 18.9125 18.5875C19.3042 18.9792 19.5 19.45 19.5 20C19.5 20.55 19.3042 21.0208 18.9125 21.4125C18.5208 21.8042 18.05 22 17.5 22ZM6.65 6L9.05 11H16.05L18.8 6H6.65ZM5.7 4H20.45C20.8333 4 21.125 4.17083 21.325 4.5125C21.525 4.85417 21.5333 5.2 21.35 5.55L17.8 11.95C17.6167 12.2833 17.3708 12.5417 17.0625 12.725C16.7542 12.9083 16.4167 13 16.05 13H8.6L7.5 15H19.5V17H7.5C6.75 17 6.18333 16.6708 5.8 16.0125C5.41667 15.3542 5.4 14.7 5.75 14.05L7.1 11.6L3.5 4H1.5V2H4.75L5.7 4Z"
                            fill="#083D4F" />
                    </svg>
                    Shop: First Trial Special Offer
                </ShopButton>
            </div>
        </div>
        <div
            class="w-full flex flex-col items-center justify-start bg-[#FFF] pt-[40px] pb-[90px] lg:pt-[40px] lg:pb-[103px]">
            <span
                class="font-gelasio italic text-[32px] lg:text-[40px] leading-[1.1] lg:leadgin-[1] text-center text-[#370F1E]">
                Don’t wait for better <br class="block lg:hidden">sleep — <span class="text-[#6EC8F0]">claim it.</span>
            </span>
            <div class="block lg:hidden w-full flex flex-row items-center justify-center gap-3 mt-[20px]">
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
                        <path
                            d="M45.1313 49.2769V50.2359H43.5429V54.6412H42.4041V50.2359H40.7858V49.2769H45.1013H45.1313Z"
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
                        <path d="M42.7338 56.3494H43.8427V60.7248H46.4799V61.6838H42.7039V56.3494H42.7338Z"
                            fill="white" />
                        <path d="M47.1694 56.3494H48.2782V61.6838H47.1694V56.3494Z" fill="white" />
                        <path
                            d="M53.223 56.3494V57.3084H51.6347V61.7137H50.4959V57.3084H48.8776V56.3494H53.1931H53.223Z"
                            fill="white" />
                        <path
                            d="M58.1677 56.3494L56.3695 59.6759V61.6838H55.2607V59.6759L53.4026 56.3494H54.7213L55.8301 58.6869L56.879 56.3494H58.1377H58.1677Z"
                            fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_2972">
                            <rect width="80.6755" height="80.6755" fill="white"
                                transform="translate(0.499924 0.0290527)" />
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
                            <rect width="80.6755" height="80.6755" fill="white"
                                transform="translate(0.644287 0.0290527)" />
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
                        <path d="M45.3072 48.6233L46.4366 54.1281L48.2517 53.44V48.0161L45.3072 48.6233Z"
                            fill="#370F1E" />
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
                            <rect width="80.7113" height="84.1458" fill="white"
                                transform="translate(0.788666 0.293945)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="hidden lg:flex w-full flex-row items-center justify-center gap-3 mt-[20px]">
                <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_2626)">
                        <path
                            d="M45.5713 81.8877C65.8772 81.8877 82.3383 65.4265 82.3383 45.1206C82.3383 24.8147 65.8772 8.35352 45.5713 8.35352C25.2654 8.35352 8.8042 24.8147 8.8042 45.1206C8.8042 65.4265 25.2654 81.8877 45.5713 81.8877Z"
                            fill="#370F1E" />
                        <path
                            d="M45.5715 84.8686C23.672 84.8686 5.82422 67.0543 5.82422 45.1213C5.82422 23.1883 23.672 5.37402 45.5715 5.37402C67.471 5.37402 85.3188 23.1883 85.3188 45.1213C85.3188 67.0543 67.5045 84.8686 45.5715 84.8686ZM45.5715 6.74693C24.4087 6.74693 7.19712 23.9585 7.19712 45.1213C7.19712 66.2841 24.4087 83.4957 45.5715 83.4957C66.7343 83.4957 83.9459 66.2841 83.9459 45.1213C83.9459 23.9585 66.7343 6.74693 45.5715 6.74693Z"
                            fill="#370F1E" />
                        <path
                            d="M45.5715 90.1923C20.7252 90.1923 0.5 69.967 0.5 45.1208C0.5 20.2746 20.7252 0.0493164 45.5715 0.0493164C70.4177 0.0493164 90.643 20.2746 90.643 45.1208C90.643 69.967 70.4177 90.1923 45.5715 90.1923ZM45.5715 2.79513C22.2321 2.79513 3.24581 21.7814 3.24581 45.1208C3.24581 68.4602 22.2321 87.4465 45.5715 87.4465C68.9109 87.4465 87.8971 68.4602 87.8971 45.1208C87.8971 21.7814 68.9109 2.79513 45.5715 2.79513Z"
                            fill="#370F1E" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M24.0466 43.8992H31.4081V41.1162H21.2637V50.9913H23.9569V43.9291H24.0466V43.8992Z"
                            fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M21.2637 31.4207H41.4028H41.4328C45.7718 31.4506 49.3029 34.9817 49.3029 39.3207C49.3029 43.6598 45.7718 47.1909 41.4328 47.2208H41.3729H36.4354V37.226H39.2183V44.4977H39.4577H41.3729H41.4926C44.3055 44.4378 46.5798 42.1636 46.5798 39.3207C46.5798 36.4779 44.3055 34.1737 41.4627 34.1438H23.9868V37.226H31.4081V40.009H21.3235H21.2936V31.4506L21.2637 31.4207ZM61.6018 27.7998L73.7811 48.2981L75.5167 45.4253L64.7439 27.7998H61.6318H61.6018ZM49.1233 50.9913L61.6018 30.2237L71.8959 47.2507H57.7117V44.5874H66.9284L61.6018 35.7298L52.8938 51.0212H49.1233V50.9913Z"
                            fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M73.7514 48.2983H57.6819V50.9915H72.1654V50.9316L73.7214 48.3282L73.7514 48.2983ZM32.4855 48.2085V37.2262H35.2685V48.2085H41.3432H41.403C46.3406 48.1786 50.3205 44.1986 50.3205 39.2611C50.3205 34.3235 46.3406 30.3735 41.4329 30.3137H41.3432H20.2464V50.9316H17.5532V27.6504H41.3432H41.4629C47.1186 27.7102 51.8167 31.6303 52.8342 36.9868L58.4899 27.7701H61.602L51.9364 43.9891L51.0088 45.5751C48.9141 48.6274 45.4727 50.9017 41.4928 50.9316H41.3731H32.5155V48.1786L32.4855 48.2085Z"
                            fill="white" />
                        <path
                            d="M22.7431 58.7268H21.4706V61.0708H20.2651V55.1104H23.2119C23.6137 55.1104 23.9485 55.1773 24.1829 55.2778C24.4173 55.3782 24.5848 55.5122 24.7522 55.6796C24.8861 55.847 24.9866 56.0145 25.0536 56.1819C25.1205 56.3493 25.154 56.5837 25.154 56.8181C25.154 57.086 25.087 57.3874 24.9531 57.6552C24.8192 57.9231 24.5848 58.124 24.2499 58.2245C24.5178 58.325 24.7187 58.4924 24.8526 58.6933C24.9531 58.8942 25.0201 59.1956 25.0201 59.6309V60.0327C25.0201 60.3006 25.0201 60.5015 25.0201 60.602C25.0201 60.7694 25.1205 60.8699 25.2545 60.9368V61.0708H23.8816C23.8816 61.0708 23.8146 60.8364 23.8146 60.7359C23.8146 60.5685 23.7811 60.4011 23.7476 60.2336V59.6644C23.7476 59.296 23.6807 59.0282 23.5467 58.8942C23.4128 58.7603 23.1784 58.6933 22.81 58.6933L22.7431 58.7268ZM23.4797 57.6218C23.7141 57.5213 23.8481 57.2869 23.8481 56.9521C23.8481 56.5837 23.7141 56.3493 23.4797 56.2154C23.3458 56.1484 23.1449 56.1149 22.877 56.1149H21.4371V57.7222H22.8435C23.1114 57.7222 23.3458 57.7222 23.4797 57.6218Z"
                            fill="white" />
                        <path
                            d="M30.3448 58.4589H27.4316V59.9992H30.7466V61.0708H26.2261V55.1104H30.6127V56.1819H27.465V57.4543H30.3783V58.4924L30.3448 58.4589Z"
                            fill="white" />
                        <path
                            d="M35.401 60.9031C35.0661 61.104 34.6643 61.2045 34.1955 61.2045C33.3919 61.2045 32.7556 60.9366 32.2534 60.3673C31.7176 59.8315 31.4497 59.0614 31.4497 58.0903C31.4497 57.1192 31.7176 56.3491 32.2534 55.7798C32.7891 55.2105 33.4923 54.9092 34.3629 54.9092C35.1331 54.9092 35.7358 55.1101 36.2046 55.4784C36.6734 55.8468 36.9413 56.3491 37.0083 56.9183H35.7693C35.6689 56.5165 35.4345 56.2151 35.0661 56.0477C34.8652 55.9472 34.6308 55.9137 34.3964 55.9137C33.9276 55.9137 33.5258 56.0812 33.2244 56.4495C32.9231 56.8178 32.7556 57.3536 32.7556 58.0903C32.7556 58.827 32.9231 59.3293 33.2579 59.6641C33.5928 59.9655 33.9611 60.1329 34.3964 60.1329C34.8317 60.1329 35.1666 59.999 35.4345 59.7646C35.7024 59.5302 35.8698 59.1953 35.9368 58.827H34.5639V57.8224H37.0418V61.037H36.2046L36.0707 60.3003C35.8363 60.5682 35.6019 60.7691 35.4345 60.9031H35.401Z"
                            fill="white" />
                        <path d="M38.0801 55.0767H39.319V61.0371H38.0801V55.0767Z" fill="white" />
                        <path
                            d="M42.6677 60.1997C42.969 60.1997 43.2034 60.1997 43.3709 60.0992C43.7057 59.9653 43.9066 59.7309 43.9066 59.396C43.9066 59.1951 43.8062 59.0612 43.6387 58.9272C43.4713 58.8268 43.2034 58.7263 42.8351 58.6593L42.1989 58.5254C41.5626 58.3915 41.1608 58.224 40.9264 58.0566C40.5246 57.7887 40.3237 57.3534 40.3237 56.7507C40.3237 56.2149 40.5246 55.7796 40.8929 55.4113C41.2948 55.0429 41.864 54.8755 42.6007 54.8755C43.2369 54.8755 43.7727 55.0429 44.208 55.3778C44.6433 55.7126 44.8777 56.1814 44.9112 56.8176H43.7057C43.7057 56.4493 43.5383 56.2149 43.2369 56.0475C43.036 55.947 42.8016 55.9135 42.5002 55.9135C42.1654 55.9135 41.931 55.9805 41.7301 56.1144C41.5292 56.2484 41.4287 56.4158 41.4287 56.6502C41.4287 56.8511 41.5292 57.0186 41.6966 57.119C41.8305 57.186 42.0649 57.2864 42.4667 57.3534L43.5048 57.5878C43.9401 57.6883 44.3084 57.8557 44.5428 58.0231C44.9112 58.291 45.0786 58.7263 45.0786 59.2286C45.0786 59.7309 44.8777 60.2332 44.4424 60.6015C44.0406 60.9698 43.4378 61.1373 42.6677 61.1373C41.8975 61.1373 41.2613 60.9698 40.826 60.6015C40.3906 60.2332 40.1562 59.7644 40.1562 59.1281H41.3617C41.3952 59.396 41.4622 59.5969 41.5961 59.7309C41.797 59.9653 42.1319 60.0992 42.6342 60.0992L42.6677 60.1997Z"
                            fill="white" />
                        <path
                            d="M50.3691 55.0767V56.1482H48.5943V61.0706H47.3219V56.1482H45.5137V55.0767H50.3356H50.3691Z"
                            fill="white" />
                        <path
                            d="M55.2579 58.4589H52.3446V59.9992H55.6597V61.0708H51.1392V55.1104H55.5258V56.1819H52.3781V57.4543H55.2914V58.4924L55.2579 58.4589Z"
                            fill="white" />
                        <path
                            d="M59.1757 58.7268H57.9032V61.0708H56.6978V55.1104H59.6445C60.0463 55.1104 60.3812 55.1773 60.6156 55.2778C60.85 55.3782 61.0174 55.5122 61.1848 55.6796C61.3188 55.847 61.4192 56.0145 61.4862 56.1819C61.5532 56.3493 61.5866 56.5837 61.5866 56.8181C61.5866 57.086 61.5197 57.3874 61.3857 57.6552C61.2518 57.9231 61.0174 58.124 60.6825 58.2245C60.9504 58.325 61.1513 58.4924 61.2853 58.6933C61.3857 58.8942 61.4527 59.1956 61.4527 59.6309V60.0327C61.4527 60.3006 61.4527 60.5015 61.4527 60.602C61.4527 60.7694 61.5531 60.8699 61.6871 60.9368V61.0708H60.3142C60.3142 61.0708 60.2472 60.8364 60.2472 60.7359C60.2472 60.5685 60.2137 60.4011 60.1802 60.2336V59.6644C60.1802 59.296 60.1133 59.0282 59.9793 58.8942C59.8454 58.7603 59.611 58.6933 59.2427 58.6933L59.1757 58.7268ZM59.9124 57.6218C60.1468 57.5213 60.2807 57.2869 60.2807 56.9521C60.2807 56.5837 60.1468 56.3493 59.9124 56.2154C59.7784 56.1484 59.5775 56.1149 59.3096 56.1149H57.8697V57.7222H59.2761C59.544 57.7222 59.7784 57.7222 59.9124 57.6218Z"
                            fill="white" />
                        <path
                            d="M66.7769 58.4589H63.8637V59.9992H67.1787V61.0708H62.6582V55.1104H67.0448V56.1819H63.8972V57.4543H66.8104V58.4924L66.7769 58.4589Z"
                            fill="white" />
                        <path
                            d="M70.7283 61.0708H68.1499V55.1104H70.7283C71.0966 55.1104 71.398 55.1438 71.6659 55.2443C72.1012 55.3782 72.436 55.6461 72.6704 56.0145C72.8714 56.3158 73.0053 56.6172 73.1058 56.9855C73.1727 57.3204 73.2062 57.6552 73.2062 57.9901C73.2062 58.7938 73.0388 59.4635 72.7374 59.9992C72.3021 60.7359 71.6324 61.1043 70.7283 61.1043V61.0708ZM71.6659 56.6172C71.465 56.2823 71.0966 56.1149 70.5274 56.1149H69.3889V59.9992H70.5274C71.1301 59.9992 71.5319 59.6979 71.7663 59.1286C71.9003 58.7938 71.9672 58.4254 71.9672 57.9901C71.9672 57.3874 71.8668 56.9186 71.6994 56.5837L71.6659 56.6172Z"
                            fill="white" />
                        <path
                            d="M32.9902 64.0498H30.01V65.4227H32.6218V66.4607H30.01V68.9721H28.771V63.0117H32.9902V64.0498Z"
                            fill="white" />
                        <path
                            d="M36.8743 67.7332H34.6643L34.2625 68.9721H32.9565L35.0996 63.0117H36.506L38.6156 68.9721H37.2762L36.9078 67.7332H36.8743ZM36.5395 66.6951L35.8028 64.3511L35.0326 66.6951H36.5395Z"
                            fill="white" />
                        <path
                            d="M43.6049 68.5038C43.1696 68.9056 42.6004 69.1065 41.8972 69.1065C41.0266 69.1065 40.3568 68.8386 39.888 68.2694C39.3858 67.7001 39.1514 66.9634 39.1514 65.9924C39.1514 64.9543 39.4193 64.1507 39.9885 63.5814C40.4908 63.0791 41.0935 62.8447 41.8302 62.8447C42.8348 62.8447 43.5715 63.1796 44.0402 63.8493C44.3081 64.2176 44.4421 64.586 44.4421 64.9543H43.2031C43.1361 64.6529 43.0022 64.452 42.9017 64.3181C42.6673 64.0502 42.3325 63.9163 41.8972 63.9163C41.4619 63.9163 41.0935 64.0837 40.8256 64.452C40.5578 64.8204 40.4238 65.3227 40.4238 65.9924C40.4238 66.6621 40.5578 67.1644 40.8256 67.4992C41.0935 67.8341 41.4619 68.0015 41.8972 68.0015C42.3325 68.0015 42.6673 67.8675 42.9017 67.5662C43.0357 67.3988 43.1361 67.1978 43.2031 66.863H44.4421C44.3416 67.4992 44.0737 68.035 43.6049 68.4368V68.5038Z"
                            fill="white" />
                        <path d="M45.2793 62.979H46.5183V68.9394H45.2793V62.979Z" fill="white" />
                        <path d="M47.6902 62.979H48.9292V67.8679H51.8759V68.9394H47.6567V62.979H47.6902Z"
                            fill="white" />
                        <path d="M52.646 62.979H53.885V68.9394H52.646V62.979Z" fill="white" />
                        <path
                            d="M59.4101 62.979V64.0505H57.6354V68.9729H56.3629V64.0505H54.5547V62.979H59.3766H59.4101Z"
                            fill="white" />
                        <path
                            d="M64.9355 62.979L62.9264 66.6959V68.9394H61.6874V66.6959L59.6113 62.979H61.0847L62.3237 65.5909L63.4956 62.979H64.902H64.9355Z"
                            fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_2626">
                            <rect width="90.143" height="90.143" fill="white" transform="translate(0.5 0.0493164)" />
                        </clipPath>
                    </defs>
                </svg>
                <svg width="92" height="91" viewBox="0 0 92 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_2652)">
                        <path
                            d="M45.9802 0.0493164C21.0878 0.0493164 0.908691 20.2284 0.908691 45.1208C0.908691 70.0132 21.0878 90.1923 45.9802 90.1923C70.8725 90.1923 91.0516 70.0132 91.0516 45.1208C91.0516 20.2284 70.8725 0.0493164 45.9802 0.0493164ZM45.9802 88.3326C22.1152 88.3326 2.76832 68.9863 2.76832 45.1208C2.76832 21.2553 22.1152 1.90894 45.9802 1.90894C69.8451 1.90894 89.192 21.2553 89.192 45.1208C89.192 68.9863 69.8457 88.3326 45.9802 88.3326Z"
                            fill="#370F1E" />
                        <path
                            d="M40.5968 58.9609H39.9922V61.0886H40.5968C40.7557 61.0886 40.8912 61.0323 41.0026 60.9191C41.1141 60.8059 41.1698 60.6698 41.1698 60.5103V59.5392C41.1698 59.1539 40.9786 58.9609 40.5968 58.9609Z"
                            fill="#370F1E" />
                        <path
                            d="M64.1678 37.061H63.5825V44.2996H64.1678C64.98 44.2996 65.39 43.77 65.3982 42.7109V38.6257C65.3982 37.5824 64.9876 37.061 64.1678 37.061Z"
                            fill="#370F1E" />
                        <path
                            d="M45.9799 15.7969C29.7846 15.7969 16.6558 28.9257 16.6558 45.121C16.6558 61.3164 29.7846 74.4452 45.9799 74.4452C62.1753 74.4452 75.3041 61.3164 75.3041 45.121C75.3041 28.9257 62.1753 15.7969 45.9799 15.7969ZM44.9443 23.609L45.9799 20.4222L47.0156 23.609H50.3666L47.6554 25.5788L48.6911 28.7656L45.9799 26.7957L43.2688 28.7656L44.3044 25.5788L41.5933 23.609H44.9443ZM35.6203 25.6005L36.3358 23.3984L37.0513 25.6005H39.3666L37.4934 26.9617L38.2089 29.1638L36.3358 27.8026L34.4627 29.1638L35.1781 26.9617L33.305 25.6005H35.6203ZM34.6228 60.2133H33.583V59.4333C33.583 59.2744 33.5261 59.1377 33.4135 59.0246C33.3003 58.9114 33.1643 58.8551 33.0048 58.8551C32.8452 58.8551 32.7104 58.912 32.5989 59.0246C32.4875 59.1377 32.4318 59.2738 32.4318 59.4333V63.0728C32.4318 63.2317 32.4875 63.3672 32.5989 63.4786C32.7104 63.59 32.8458 63.6458 33.0048 63.6458C33.1637 63.6458 33.3003 63.59 33.4135 63.4786C33.5267 63.3672 33.583 63.2317 33.583 63.0728V62.155H34.6228V63.0834C34.6228 63.5255 34.4674 63.9003 34.156 64.2082C33.8446 64.5161 33.4716 64.6697 33.0364 64.6697C32.6013 64.6697 32.2183 64.5149 31.9087 64.2052C31.599 63.8956 31.4442 63.522 31.4442 63.0834V59.4544C31.4442 59.0122 31.5996 58.6363 31.911 58.3267C32.2224 58.017 32.5972 57.8622 33.0358 57.8622C33.4745 57.8622 33.8528 58.0176 34.1607 58.329C34.4685 58.6404 34.6222 59.0152 34.6222 59.4538V60.2127L34.6228 60.2133ZM34.6286 41.4206H28.692V37.7535C28.692 36.9888 28.3812 36.6029 27.7602 36.5947C27.4816 36.5947 27.2605 36.6985 27.0975 36.9055C26.9344 37.1125 26.8523 37.3952 26.8523 37.7535V49.8056C26.8523 50.5703 27.179 50.9562 27.8317 50.9644C28.1261 50.9644 28.363 50.853 28.5425 50.6301C28.7219 50.4073 28.8111 50.1164 28.8111 49.7581V46.3895H27.9273V42.6867H34.6286V55.2648H29.9107L29.445 52.7208H29.1465C28.8357 53.7641 28.4041 54.4989 27.8505 54.9247C27.2969 55.3505 26.4987 55.5639 25.4554 55.5639C24.0696 55.5481 22.9689 55.0344 22.1525 54.0233C21.3362 53.0123 20.928 51.5028 20.928 49.4959V39.3428C20.928 36.7788 21.5116 34.8934 22.678 33.6871C23.8444 32.4807 25.6185 31.8773 27.9994 31.8773C30.1493 31.8773 31.792 32.3752 32.9268 33.3704C34.0615 34.3662 34.6286 35.8194 34.6286 37.73V41.4211V41.4206ZM38.2992 58.9401H36.4472V60.7546H37.8002V61.7627H36.4472V63.5772H38.2992V64.5853H35.445V57.932H38.2992V58.9401ZM41.2684 64.5853L40.6603 62.0811H39.9917V64.5853H38.9889V57.9373H40.5699C41.1288 57.9373 41.5388 58.0909 41.8009 58.3988C42.0308 58.6674 42.1457 59.0427 42.1457 59.5236V60.4895C42.1457 60.9598 41.9669 61.358 41.6097 61.6835L42.3527 64.5858H41.2684V64.5853ZM46.0139 58.9454H44.9531V64.5853H43.9502V58.9454H42.8841V57.9373H46.0145V58.9454H46.0139ZM47.8231 64.5853H46.8203V57.9373H47.8231V64.5853ZM43.4559 55.2648L41.9153 40.5608H41.5927L41.9153 48.4204V55.2648H36.2654V32.1512H44.6985L45.6779 43.0808L45.9289 46.6763H46.2397L46.4667 43.0808L47.4461 32.1512H55.8551V55.2648H50.2053L50.2293 48.4444L50.5278 40.6089H50.2053L48.5926 55.2654H43.4564L43.4559 55.2648ZM51.5741 58.9401H49.7221V60.7546H51.075V61.7627H49.7221V64.5853H48.7192V57.932H51.5735V58.9401H51.5741ZM53.2665 64.5853H52.2637V57.9373H53.2665V64.5853ZM57.0175 58.9401H55.1655V60.7546H56.5184V61.7627H55.1655V63.5772H57.0175V64.5853H54.1632V57.932H57.0175V58.9401ZM55.6241 27.8032L53.751 29.1644L54.4664 26.9623L52.5933 25.6011H54.9086L55.6241 23.399L56.3395 25.6011H58.6548L56.7817 26.9623L57.4972 29.1644L55.6241 27.8032ZM60.8587 62.9936C60.8587 63.4323 60.7051 63.807 60.3972 64.1184C60.0893 64.4298 59.7181 64.5853 59.2829 64.5853H57.7071V57.932H59.2829C59.7216 57.932 60.094 58.088 60.3995 58.3988C60.7056 58.7102 60.8587 59.0832 60.8587 59.5183V62.9936ZM69.8777 33.8477C70.9368 34.9784 71.4664 36.5395 71.4664 38.53V42.4955C71.4664 44.4865 70.9186 46.1086 69.8237 47.363C68.7288 48.6174 67.2615 49.2444 65.4219 49.2444H63.5822V55.2648H57.6931V32.1512H65.4213C67.3325 32.1512 68.8174 32.7165 69.8765 33.8472L69.8777 33.8477Z"
                            fill="#370F1E" />
                        <path
                            d="M59.3151 58.9557H58.7104V63.5927H59.3151C59.474 63.5927 59.6083 63.5352 59.7186 63.4203C59.8282 63.3053 59.8828 63.1699 59.8828 63.0145V59.5339C59.8828 59.375 59.827 59.2383 59.7156 59.1251C59.6042 59.012 59.4705 58.9551 59.3151 58.9551V58.9557Z"
                            fill="#370F1E" />
                        <path
                            d="M12.2701 47.7054C12.5634 47.1542 12.7006 46.5132 12.6818 45.7819C12.6672 45.2066 12.544 44.6412 12.3124 44.0859C12.0807 43.5305 11.818 43.1083 11.5242 42.8203L8.73971 42.8907L8.81654 45.9326L9.99413 45.9027L9.95307 44.2864L10.8398 44.2641C11.0104 44.4729 11.1576 44.7245 11.2808 45.0189C11.4045 45.3133 11.4696 45.6083 11.4773 45.9039C11.4925 46.5014 11.2972 46.99 10.892 47.3688C10.4867 47.7482 9.86921 47.9482 9.03939 47.9693C8.26997 47.9887 7.68528 47.8215 7.28532 47.4673C6.88536 47.1131 6.67718 46.6281 6.66193 46.0112C6.65196 45.6042 6.74227 45.2623 6.93404 44.9855C7.12581 44.7087 7.39206 44.5169 7.73278 44.4096L7.43487 43.0144C6.79622 43.1704 6.30126 43.4971 5.94998 43.9944C5.59811 44.4917 5.43332 45.1737 5.4556 46.0417C5.47261 46.7091 5.6028 47.2638 5.84618 47.706C6.16286 48.2866 6.60797 48.7217 7.18152 49.0126C7.75507 49.3035 8.40544 49.4396 9.13381 49.4214C9.8047 49.4044 10.4216 49.2525 10.9852 48.9645C11.5488 48.6766 11.9769 48.2573 12.2701 47.706V47.7054Z"
                            fill="#370F1E" />
                        <path
                            d="M6.59894 39.928C6.82061 40.2546 7.08979 40.5314 7.40589 40.7596C7.83634 41.0657 8.39992 41.2909 9.09779 41.4351C10.1874 41.6598 11.1052 41.536 11.8506 41.0633C12.596 40.5907 13.0733 39.8453 13.2839 38.8266C13.4915 37.8209 13.3448 36.9529 12.8446 36.2234C12.3444 35.4938 11.5415 35.0147 10.4361 34.7866C9.32123 34.5567 8.38877 34.6799 7.63753 35.156C6.88688 35.6328 6.40717 36.3753 6.19898 37.384C6.08403 37.9417 6.07289 38.4519 6.16555 38.9158C6.23299 39.2641 6.37784 39.6019 6.59952 39.928H6.59894ZM7.3836 37.6139C7.50148 37.0438 7.78884 36.6269 8.24568 36.3624C8.70252 36.0979 9.32357 36.0469 10.1082 36.2087C10.9023 36.3729 11.4612 36.672 11.7855 37.1077C12.1098 37.5429 12.2148 38.0361 12.101 38.5874C11.9872 39.1386 11.6934 39.5521 11.2196 39.8271C10.7457 40.1027 10.1211 40.1602 9.34527 40.0001C8.55767 39.8377 8.00406 39.5415 7.68562 39.1122C7.3666 38.6829 7.26631 38.1833 7.3836 37.6133V37.6139Z"
                            fill="#370F1E" />
                        <path
                            d="M9.25691 32.637C9.61699 33.0235 10.1243 33.3571 10.7782 33.6386C11.8009 34.0779 12.7246 34.1406 13.5491 33.8275C14.3743 33.5143 14.9918 32.8798 15.4023 31.9245C15.8075 30.9809 15.8386 30.1012 15.495 29.286C15.1513 28.4709 14.4611 27.8398 13.4242 27.3947C12.3786 26.9455 11.4397 26.8787 10.6087 27.1947C9.77768 27.5108 9.15839 28.1419 8.75198 29.0884C8.52737 29.6115 8.4136 30.1094 8.41125 30.5821C8.40773 30.9369 8.48163 31.2964 8.63293 31.6611C8.78423 32.0253 8.99242 32.3508 9.25691 32.6376V32.637ZM9.86623 29.5511C10.0961 29.0163 10.4615 28.6656 10.9623 28.4984C11.4631 28.3313 12.0818 28.4058 12.8178 28.7219C13.5626 29.0421 14.05 29.4479 14.2804 29.9393C14.5103 30.4308 14.5144 30.9351 14.2922 31.4524C14.0699 31.9696 13.6993 32.3156 13.1797 32.4898C12.6601 32.6645 12.0367 32.5954 11.3089 32.2828C10.57 31.9655 10.0873 31.5644 9.86095 31.0794C9.63517 30.595 9.63693 30.0848 9.86623 29.5505V29.5511Z"
                            fill="#370F1E" />
                        <path
                            d="M18.5911 25.9652C18.8925 25.5394 19.0925 25.1711 19.1922 24.8597C19.3235 24.4427 19.3628 24.0651 19.3101 23.7279C19.2403 23.2816 19.0485 22.84 18.7342 22.4031C18.4767 22.0459 18.1131 21.7005 17.6434 21.368C17.1085 20.9897 16.6153 20.7335 16.1626 20.6003C15.7099 20.4666 15.2729 20.4303 14.8525 20.4907C14.432 20.5511 14.0537 20.7141 13.7183 20.9792C13.469 21.1768 13.177 21.5128 12.8404 21.9879L11.3496 24.0938L17.0563 28.1333L18.5911 25.9652ZM13.1307 23.6252L13.4972 23.1074C13.8297 22.6377 14.0707 22.335 14.2214 22.2002C14.4208 22.0178 14.6361 21.9034 14.8677 21.8571C15.0994 21.8108 15.3609 21.8319 15.6518 21.9216C15.9433 22.0107 16.3092 22.2119 16.7502 22.5239C17.1912 22.8365 17.512 23.1215 17.7126 23.3807C17.9131 23.6393 18.0257 23.8698 18.0498 24.0721C18.0744 24.2744 18.0433 24.4855 17.9577 24.7055C17.8932 24.8738 17.7466 25.1189 17.519 25.4409L16.9103 26.3012L13.1307 23.6258V23.6252Z"
                            fill="#370F1E" />
                        <path
                            d="M23.8159 20.0289L20.4356 15.6857L24.9073 19.1791L25.9799 18.3446L23.6951 13.1487L27.0754 17.4925L28.1104 16.6867L23.8159 11.1694L22.1451 12.4696L24.0845 17.004L20.1541 14.019L18.4868 15.3168L22.7808 20.8341L23.8159 20.0289Z"
                            fill="#370F1E" />
                        <path
                            d="M29.754 15.8401L29.5892 14.1582L32.1104 12.9524L33.346 14.1218L34.7312 13.4591L29.1893 8.35938L27.8428 9.00329L28.4028 16.4858L29.754 15.8395V15.8401ZM31.1937 12.0857L29.4725 12.9085L29.2051 10.1604L31.1937 12.0851V12.0857Z"
                            fill="#370F1E" />
                        <path
                            d="M36.448 13.054L35.342 8.63039L39.182 12.3702L40.5566 12.0265L38.8606 5.24365L37.588 5.56209L38.7205 10.0912L34.8124 6.25586L33.48 6.58896L35.1754 13.3718L36.448 13.054Z"
                            fill="#370F1E" />
                        <path
                            d="M41.7776 10.3591C41.8526 10.6265 41.9957 10.8787 42.2063 11.1168C42.4168 11.3543 42.6977 11.5431 43.049 11.6821C43.4003 11.8217 43.9093 11.8768 44.5767 11.8487C45.1291 11.8252 45.5742 11.7355 45.9114 11.5795C46.2487 11.4235 46.5143 11.2223 46.709 10.9749C46.9037 10.728 47.0316 10.4295 47.0931 10.0799C47.1547 9.73042 47.1676 9.13635 47.1318 8.29773L46.9753 4.62891L45.5649 4.68931L45.7296 8.55342C45.7531 9.10585 45.7496 9.50229 45.7185 9.74273C45.6874 9.98259 45.5737 10.189 45.3772 10.3609C45.1807 10.5333 44.8828 10.6277 44.4823 10.6447C44.0882 10.6611 43.7738 10.5884 43.5398 10.4248C43.3053 10.2612 43.1516 10.0377 43.0795 9.75446C43.0367 9.57794 43.0027 9.18971 42.9774 8.58919L42.8162 4.80601L41.4058 4.86642L41.5647 8.59271C41.5981 9.37386 41.6691 9.96324 41.7787 10.3591H41.7776Z"
                            fill="#370F1E" />
                        <path
                            d="M50.2865 8.98098L53.1754 9.39619L53.3437 8.22564L50.4549 7.81043L50.69 6.17248L54.0369 6.65337L54.2052 5.48282L49.4608 4.80078L48.4668 11.7215L49.8643 11.922L50.2865 8.98098Z"
                            fill="#370F1E" />
                        <path
                            d="M54.3104 12.698L55.3455 11.3626L58.0062 12.2177L58.1018 13.9166L59.5638 14.3863L59.0372 6.87335L57.6162 6.4165L52.8848 12.2399L54.3104 12.698ZM57.8121 8.19286L57.9358 10.9574L56.1196 10.3739L57.8121 8.19286Z"
                            fill="#370F1E" />
                        <path
                            d="M62.4333 16.1654C63.0872 16.5337 63.7176 16.6762 64.3246 16.5929C64.9316 16.5096 65.5139 16.1871 66.071 15.6252L65.0917 14.5755C64.738 14.9637 64.385 15.1954 64.0326 15.2704C63.6801 15.3455 63.3405 15.291 63.0133 15.1068C62.5699 14.857 62.3019 14.4911 62.2093 14.0078C62.116 13.5252 62.2867 12.8983 62.7207 12.1283C63.1294 11.4028 63.5657 10.9565 64.0296 10.7912C64.4935 10.6252 64.9509 10.6698 65.4025 10.9237C65.7291 11.1078 65.9555 11.3559 66.081 11.6673C66.2065 11.9787 66.2165 12.313 66.1109 12.669L67.492 13.0636C67.6281 12.4983 67.631 12.0069 67.5008 11.5905C67.2838 10.8879 66.8023 10.3267 66.057 9.90738C65.2037 9.42649 64.3574 9.31976 63.5176 9.58542C62.6779 9.85167 61.9729 10.4915 61.4017 11.5054C60.8616 12.4643 60.6968 13.3663 60.9062 14.2125C61.1156 15.0582 61.6252 15.7091 62.4339 16.1648L62.4333 16.1654Z"
                            fill="#370F1E" />
                        <path
                            d="M66.938 19.0791L68.0182 19.9881L71.7574 15.5428L73.3414 16.8752L74.1026 15.9703L69.8515 12.3936L69.0897 13.2984L70.6772 14.6338L66.938 19.0791Z"
                            fill="#370F1E" />
                        <path
                            d="M71.2662 20.9119C71.0973 21.1324 70.9812 21.3981 70.9173 21.7095C70.8534 22.0209 70.8715 22.3581 70.9706 22.7229C71.0703 23.0876 71.3313 23.5281 71.7541 24.0447C72.1048 24.4728 72.4438 24.7743 72.7705 24.9508C73.0977 25.1267 73.4185 25.2182 73.7328 25.2258C74.0472 25.2335 74.3627 25.1566 74.6793 24.9959C74.996 24.8353 75.4787 24.4893 76.1279 23.9573L78.9686 21.6303L78.0743 20.5384L75.0822 22.9891C74.6541 23.3398 74.3351 23.5744 74.1246 23.6934C73.914 23.8125 73.6806 23.8453 73.4249 23.7914C73.1692 23.738 72.9147 23.5562 72.6608 23.246C72.411 22.941 72.2808 22.6455 72.2708 22.3599C72.2608 22.0743 72.347 21.8174 72.5306 21.5893C72.6461 21.4497 72.9364 21.1893 73.4015 20.8081L76.3308 18.4084L75.4364 17.3164L72.5517 19.6798C71.9465 20.1753 71.5184 20.5859 71.2668 20.9107L71.2662 20.9119Z"
                            fill="#370F1E" />
                        <path
                            d="M74.8763 28.2838L77.4566 26.9191L77.5903 27.1719C77.7422 27.4587 77.8296 27.6804 77.8531 27.8369C77.8765 27.9935 77.8572 28.1642 77.7944 28.3483C77.7317 28.5325 77.5446 28.9119 77.2338 29.4866L76.3658 31.0999L77.1552 32.5924L77.9622 31.2002C78.2853 30.6484 78.4946 30.2343 78.5902 29.9593C78.6852 29.6843 78.7404 29.3699 78.7556 29.0169C79.121 29.5177 79.5268 29.8244 79.9731 29.9376C80.4194 30.0502 80.8744 29.9845 81.3383 29.7388C81.7037 29.5459 81.9811 29.2837 82.1699 28.9541C82.3588 28.624 82.4291 28.2803 82.3822 27.922C82.3353 27.5642 82.1365 27.0546 81.7876 26.3943L80.3988 23.7676L74.2183 27.0359L74.878 28.2838H74.8763ZM80.0112 25.5686L80.5261 26.5427C80.7935 27.0488 80.9472 27.3561 80.9865 27.4645C81.0598 27.6851 81.0615 27.8844 80.9923 28.0627C80.9231 28.2416 80.7847 28.3859 80.5765 28.4955C80.3912 28.5935 80.2141 28.6333 80.0458 28.614C79.8775 28.5952 79.7285 28.5243 79.5995 28.4023C79.4699 28.2797 79.2471 27.9196 78.9304 27.3209L78.4419 26.3978L80.0106 25.5686H80.0112Z"
                            fill="#370F1E" />
                        <path d="M83.752 30.746L77.1782 33.127L77.6589 34.4542L84.2327 32.0732L83.752 30.746Z"
                            fill="#370F1E" />
                        <path
                            d="M78.3798 36.7783L82.8409 35.837L78.9616 39.5363L79.2542 40.9221L86.0951 39.4788L85.8242 38.1951L81.2558 39.1592L85.2336 35.3954L84.9498 34.0513L78.1089 35.4951L78.3798 36.7783Z"
                            fill="#370F1E" />
                        <path
                            d="M86.1677 43.6415C85.8669 43.0527 85.4341 42.6047 84.8687 42.2986C84.3034 41.9919 83.6565 41.8382 82.9288 41.8364C82.2579 41.8347 81.6368 41.9702 81.0656 42.2423C80.4944 42.5144 80.0546 42.922 79.7467 43.465C79.4388 44.0081 79.284 44.6449 79.2822 45.3762C79.2811 45.9515 79.3884 46.5204 79.6054 47.0816C79.8218 47.6435 80.0728 48.0721 80.3584 48.3689L83.1434 48.3753L83.1499 45.3328L81.9723 45.3305L81.9688 46.9473L81.0815 46.9456C80.9167 46.7321 80.7765 46.477 80.661 46.1791C80.5454 45.8818 80.488 45.585 80.4886 45.2894C80.4897 44.6919 80.6985 44.2092 81.1143 43.8409C81.5301 43.4732 82.1529 43.2902 82.9827 43.292C83.7521 43.2938 84.3321 43.4767 84.7221 43.8421C85.1121 44.2075 85.3068 44.6977 85.3056 45.3147C85.3045 45.7217 85.2048 46.0606 85.0054 46.3322C84.806 46.6037 84.5345 46.7878 84.1908 46.8858L84.45 48.2885C85.0928 48.1501 85.5965 47.837 85.9613 47.3502C86.3261 46.8629 86.5102 46.1855 86.512 45.3176C86.5137 44.6496 86.3988 44.0919 86.1677 43.6427V43.6415Z"
                            fill="#370F1E" />
                        <path
                            d="M28.1767 75.1323C28.4986 74.6783 28.6511 74.2303 28.6335 73.7869C28.6165 73.3442 28.4746 72.9642 28.2089 72.6463C28.0365 72.4387 27.6008 72.0862 26.9005 71.5895L25.0526 70.2788L21.0073 75.9814L22.1585 76.7983L23.6845 74.6473L24.4351 75.1798C24.9565 75.5492 25.3734 75.8043 25.6872 75.9451C25.9206 76.0448 26.1839 76.0958 26.476 76.0981C26.7686 76.1011 27.0624 76.0283 27.3591 75.8794C27.6553 75.731 27.928 75.4818 28.1761 75.1317L28.1767 75.1323ZM26.9797 74.3065C26.8601 74.4748 26.7117 74.5921 26.5346 74.6572C26.3575 74.7229 26.1716 74.7311 25.9763 74.6819C25.781 74.6332 25.4561 74.4473 25.0028 74.1259L24.3724 73.679L25.52 72.061L26.076 72.4557C26.4906 72.7501 26.758 72.9589 26.8771 73.0826C27.0401 73.2486 27.1345 73.4427 27.1603 73.6638C27.1867 73.8849 27.1263 74.0995 26.9791 74.3071L26.9797 74.3065Z"
                            fill="#370F1E" />
                        <path
                            d="M33.4379 78.843C33.8596 78.6589 34.1786 78.3276 34.395 77.8496C34.5651 77.4731 34.6237 77.0966 34.5709 76.7201C34.5176 76.3436 34.3628 76.0287 34.1059 75.7747C33.849 75.5208 33.3805 75.2399 32.6996 74.932L29.9925 73.7075L27.1113 80.0781L28.3974 80.6599L29.6002 78.0003L29.8612 78.1182C30.1568 78.2519 30.3614 78.3733 30.4764 78.483C30.5907 78.5926 30.6799 78.7392 30.7432 78.9228C30.8065 79.107 30.8916 79.521 30.9977 80.1661L31.3009 81.9729L32.8392 82.6685L32.6234 81.0739C32.5401 80.4394 32.4521 79.9843 32.3589 79.7086C32.2656 79.4324 32.1167 79.1509 31.912 78.863C32.5078 79.0348 33.0163 79.0284 33.4385 78.8442L33.4379 78.843ZM32.2029 77.8578C32.0258 77.8408 31.6287 77.6924 31.0118 77.4133L30.06 76.9828L30.7913 75.3666L31.7953 75.8205C32.3166 76.0562 32.6263 76.2052 32.7242 76.2668C32.9172 76.3958 33.0409 76.5524 33.096 76.7359C33.1506 76.9195 33.13 77.1183 33.0327 77.3329C32.9465 77.5241 32.831 77.6637 32.6861 77.7517C32.5418 77.8402 32.3806 77.8754 32.2035 77.8578H32.2029Z"
                            fill="#370F1E" />
                        <path
                            d="M37.929 76.7563L33.7241 82.9704L35.1844 83.3023L36.0992 81.8819L38.8245 82.5012L39.0678 84.1849L40.565 84.525L39.3851 77.0871L37.9295 76.7563H37.929ZM36.783 80.8292L38.2791 78.5087L38.6432 81.2521L36.783 80.8292Z"
                            fill="#370F1E" />
                        <path
                            d="M44.0005 79.3532C44.3324 78.989 44.757 78.8137 45.2754 78.826C45.6502 78.8354 45.9669 78.948 46.2237 79.1638C46.4806 79.3802 46.646 79.6705 46.7198 80.0347L48.125 79.735C47.9795 79.172 47.752 78.7369 47.4412 78.4302C46.9192 77.9117 46.2313 77.642 45.3763 77.6214C44.3975 77.5974 43.5994 77.9 42.983 78.5293C42.3666 79.1579 42.0441 80.0546 42.016 81.2175C41.989 82.3171 42.2669 83.1915 42.8487 83.8401C43.431 84.4888 44.1858 84.8242 45.1142 84.8471C45.8642 84.8653 46.4876 84.6952 46.9849 84.3369C47.4816 83.9785 47.8447 83.4202 48.0728 82.6626L46.7152 82.1952C46.585 82.7042 46.3821 83.0742 46.1058 83.3059C45.8296 83.5375 45.5041 83.649 45.1294 83.6396C44.621 83.6273 44.2122 83.4296 43.9037 83.0467C43.5953 82.6637 43.4516 82.0309 43.4733 81.1472C43.4938 80.3144 43.6697 79.7162 44.0011 79.3521L44.0005 79.3532Z"
                            fill="#370F1E" />
                        <path
                            d="M53.8835 76.9067L48.3955 77.7759L48.5808 78.9441L50.6299 78.6198L51.5389 84.357L52.9329 84.1359L52.0239 78.3987L54.0682 78.0749L53.8835 76.9067Z"
                            fill="#370F1E" />
                        <path d="M55.7371 76.2714L54.3809 76.6626L56.3186 83.3804L57.6749 82.9891L55.7371 76.2714Z"
                            fill="#370F1E" />
                        <path
                            d="M62.587 78.2875C62.6885 78.803 62.6644 79.2246 62.5149 79.5525C62.3653 79.8803 62.1196 80.1207 61.7766 80.2738C61.3121 80.4814 60.8582 80.4785 60.4148 80.2656C59.9715 80.0527 59.5697 79.5431 59.2091 78.7355C58.8695 77.9749 58.771 77.3591 58.9135 76.8876C59.0566 76.4161 59.3645 76.0748 59.8377 75.8637C60.1802 75.7106 60.5139 75.6766 60.8394 75.7611C61.1643 75.8455 61.4388 76.0367 61.6622 76.334L62.8017 75.459C62.4281 75.0128 62.0352 74.7184 61.6235 74.5753C60.9297 74.3313 60.192 74.3841 59.4114 74.733C58.5171 75.1324 57.9271 75.7488 57.6409 76.5815C57.3547 77.4143 57.4491 78.362 57.9236 79.4246C58.3722 80.4292 58.9985 81.0989 59.8032 81.4344C60.6078 81.7698 61.4335 81.7481 62.2815 81.3693C62.9665 81.0631 63.4561 80.6415 63.7511 80.1043C64.0455 79.5671 64.1329 78.9074 64.0133 78.125L62.5864 78.2869L62.587 78.2875Z"
                            fill="#370F1E" />
                        <path
                            d="M67.1204 77.2487L66.0267 75.6917L68.8991 73.6737L68.2218 72.7096L65.3493 74.7276L64.4585 73.4591L67.5456 71.291L66.8653 70.3228L62.6235 73.3031L66.6425 79.0239L70.9939 75.9673L70.3166 75.0032L67.1204 77.2487Z"
                            fill="#370F1E" />
                        <path
                            d="M13.5412 59.9708L11.9795 57.7798L11.9549 60.4704L9.38916 61.2785L11.9402 62.133L11.9156 64.823L13.5166 62.6608L16.0676 63.5158L14.5059 61.3249L16.1069 59.1626L13.5412 59.9708Z"
                            fill="#370F1E" />
                        <path
                            d="M80.0056 60.4704L79.9809 57.7798L78.4198 59.9708L75.8535 59.1626L77.4545 61.3249L75.8928 63.5158L78.4439 62.6608L80.0449 64.823L80.0208 62.133L82.5719 61.2785L80.0056 60.4704Z"
                            fill="#370F1E" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_2652">
                            <rect width="90.143" height="90.143" fill="white"
                                transform="translate(0.908691 0.0493164)" />
                        </clipPath>
                    </defs>
                </svg>

                <svg width="91" height="95" viewBox="0 0 91 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_2685)">
                        <path
                            d="M19.8639 54.4727C18.9174 54.4727 18.7822 55.4224 18.7822 56.2365V58.6335L20.9005 58.2717V56.2365C20.9005 55.4224 20.8103 54.4727 19.8639 54.4727Z"
                            fill="#370F1E" />
                        <path
                            d="M28.1562 54.7896V56.9604L30.2294 56.5986V56.3725C30.2294 54.7896 29.5985 54.7896 28.1562 54.7896Z"
                            fill="#370F1E" />
                        <path
                            d="M15.8074 56.0557C15.8074 53.5231 17.2946 52.121 19.8636 52.121C22.4325 52.121 23.8297 53.5231 23.8297 56.0557V57.7291L25.2719 57.4578V52.4376H29.5985C32.0323 52.4376 33.2491 53.4326 33.2491 56.0557L34.4209 55.8296C34.5562 53.2517 35.8181 52.0306 38.387 52.0306C40.956 52.0306 41.8574 52.7542 42.263 54.4728L45.8235 53.8396L46.1389 52.3924H49.6994L49.8346 53.116L53.35 52.4829V52.3472H54.1162L84.3126 47.0557H6.47803C6.47803 51.714 7.2442 56.1462 8.59628 60.307L15.8074 59.0407V55.9653V56.0557Z"
                            fill="#370F1E" />
                        <path
                            d="M38.4772 54.4277C37.711 54.4277 37.4406 54.7895 37.3955 55.3775L39.3335 55.0609C39.1983 54.6991 38.9729 54.473 38.5222 54.473L38.4772 54.4277Z"
                            fill="#370F1E" />
                        <path d="M55.874 58.2266V58.4528L56.0093 58.4076L55.9642 58.2266H55.874Z" fill="#370F1E" />
                        <path d="M84.2676 47.1917L84.3587 47.146L84.2676 47.1917Z" fill="#370F1E" />
                        <path
                            d="M42.3983 55.6488V56.8699H39.4238V56.2367L37.3506 56.6438V62.2971C37.3506 63.0207 37.6661 63.473 38.4322 63.473C39.1984 63.473 39.4688 62.6137 39.4688 61.7996V60.7594H38.3872V58.4076H42.3983V63.8348L43.8856 63.2469L45.5983 55.0156L42.3983 55.6488Z"
                            fill="#370F1E" />
                        <path d="M50.0601 54.111L51.322 60.2618L53.3501 59.493V53.4326L50.0601 54.111Z"
                            fill="#370F1E" />
                        <path d="M47.0405 60.7144H48.7081L47.8968 54.835L47.0405 60.7144Z" fill="#370F1E" />
                        <path
                            d="M58.0372 57.6384L58.6682 57.367L58.4879 52.4373H61.2822V56.3268L62.7695 55.7389V52.4373H65.7441V54.563L67.7722 53.7489C68.3581 52.573 69.4848 52.0303 71.2425 52.0303C73.0002 52.0303 71.7834 52.0303 72.0087 52.0303L83.5013 47.4624L84.3577 47.1006L56.5049 52.7539L57.9922 57.5931L58.0372 57.6384Z"
                            fill="#370F1E" />
                        <path
                            d="M34.4209 61.7089V57.2314L33.0689 57.5028C32.8435 58.1812 32.4379 58.7239 31.6717 59.131C32.483 59.3571 33.0689 59.945 33.1139 60.8496C33.2041 61.8898 33.2041 64.1511 33.3843 65.0104C33.4294 65.1913 33.5196 65.327 33.6548 65.4627V65.6436H30.4098C30.3196 65.3722 30.2295 65.1461 30.2295 64.8747C30.1394 63.6988 30.2295 62.6134 30.1394 61.7993C30.1394 60.9852 29.8239 60.4425 29.1478 60.3973H28.1563H28.2465V65.6436H25.2719V59.0857L23.8297 59.3571V61.3471C23.8297 64.332 22.8832 65.8697 19.8636 65.8697C16.8439 65.8697 15.8074 64.332 15.8074 61.3471V60.9853L9.31738 62.2968C11.03 66.6838 13.4187 70.6637 16.3482 74.101L37.2152 65.8245C35.097 65.5984 34.4209 63.8798 34.4209 61.6636V61.7089Z"
                            fill="#370F1E" />
                        <path
                            d="M18.7822 61.6636C18.7822 62.4325 18.8724 63.5631 19.8639 63.5631C20.8554 63.5631 20.9005 62.4325 20.9005 61.6636V59.9902L18.7822 60.3973V61.6636Z"
                            fill="#370F1E" />
                        <path
                            d="M40.1445 64.6932L40.3243 64.603V64.3774C40.2344 64.4677 40.1895 64.5579 40.1445 64.6481V64.6932Z"
                            fill="#370F1E" />
                        <path
                            d="M67.5023 54.3823L65.7446 55.1512V59.9904L67.277 58.9502V56.2818C67.277 55.5582 67.3671 54.925 67.5023 54.4276V54.3823Z"
                            fill="#370F1E" />
                        <path
                            d="M56.2792 59.1766L55.9186 59.3123L56.144 65.5535H53.3497V60.3977L51.5469 61.1665L52.4483 65.5535H49.4737L49.0681 62.9756H47.3555L46.7245 63.247L46.409 65.5535H43.4344L43.6598 64.6038L42.4429 65.1013V65.5083H41.4965L17.79 75.6843C21.3054 79.3929 25.4969 82.3778 30.139 84.4582L58.1721 65.1465L56.2792 59.1313V59.1766Z"
                            fill="#370F1E" />
                        <path d="M58.7134 59.8096H58.7585L58.7134 58.1362L58.2627 58.3171L58.7134 59.8096Z"
                            fill="#370F1E" />
                        <path
                            d="M71.3777 54.4277C70.4313 54.4277 70.251 54.9252 70.251 55.7845V56.87L72.2791 55.4679C72.1439 54.7895 71.8284 54.4277 71.3777 54.4277Z"
                            fill="#370F1E" />
                        <path d="M61.2822 57.0507V63.0206L62.7695 62.0256V56.4175L61.2822 57.0507Z" fill="#370F1E" />
                        <path
                            d="M74.848 53.7042L84.2675 47.2368L83.5013 47.5534L72.6396 52.2117C73.6762 52.4379 74.3973 52.9354 74.848 53.7494V53.7042Z"
                            fill="#370F1E" />
                        <path d="M84.2676 47.1912L84.3578 47.146L83.5015 47.5078L84.2676 47.1912Z" fill="#370F1E" />
                        <path
                            d="M84.2677 47.191L74.9834 54.0202C75.1637 54.5177 75.2538 55.1057 75.2538 55.8293V56.9147H72.2792V57.0052V56.0102L70.2061 57.5479V62.2967C70.2061 62.7942 70.3413 63.2012 70.7018 63.3369L72.3243 61.3922V60.352H73.1806L83.7719 47.779L84.2677 47.1006V47.191Z"
                            fill="#370F1E" />
                        <path
                            d="M67.2766 61.664V59.7192L65.7443 60.8499V65.5987H62.7697V63.066L61.2824 64.1514V65.5987H59.2994L32.3931 85.4079C36.4493 86.9004 40.8661 87.7597 45.4181 87.7597C49.9701 87.7597 48.7983 87.624 50.4658 87.4431L68.9442 65.5082C67.6372 64.9203 67.2766 63.6087 67.2766 61.7092V61.664Z"
                            fill="#370F1E" />
                        <path d="M84.3131 47.1917L84.3587 47.146L84.2676 47.1917H84.3131Z" fill="#370F1E" />
                        <path
                            d="M83.8619 47.8246L74.127 60.3976H75.3889V62.0257C75.3889 64.287 74.127 65.87 71.1073 65.87C68.0877 65.87 70.2961 65.87 69.9806 65.7795L53.6655 86.8551C70.3411 83.1465 83.0507 68.267 84.3126 50.0859L84.4027 47.1914L83.907 47.7794L83.8619 47.8246Z"
                            fill="#370F1E" />
                        <path d="M84.3571 47.1912V47.146L83.8613 47.8244L84.3571 47.1912Z" fill="#370F1E" />
                        <path
                            d="M81.3831 18.8342C76.7861 12.4572 70.6116 7.3466 63.6709 4.13552C57.9922 1.51237 51.6825 0.110352 45.4629 0.110352H45.3277C42.7137 0.110352 40.0546 0.336484 37.4857 0.833977C28.9676 2.41691 20.9453 6.62298 14.6356 12.7738C9.27236 18.0201 5.17106 24.5779 2.78239 31.8142C-0.282314 41.0856 -0.50766 51.3068 2.19649 60.6687C4.40489 68.4025 8.59632 75.503 14.1398 81.0659C19.2777 86.1765 25.5874 90.066 32.3929 92.1917C42.3081 95.3123 53.1698 94.7243 62.6794 90.6087C72.865 86.1765 81.293 77.8096 86.0252 67.4979C89.5406 59.8547 91.0279 51.2164 90.2618 42.759C89.4956 34.0755 86.3858 25.7538 81.3831 18.8794V18.8342ZM85.0788 59.4024C83.0507 66.503 79.2198 73.0608 74.0819 78.2166C69.3947 82.9654 63.5808 86.5383 57.3162 88.4831C48.2122 91.3776 38.2068 90.8349 29.4634 87.0358C20.089 82.9654 12.3371 75.2769 7.96535 65.7793C4.72037 58.724 3.36829 50.7641 4.0894 42.9399C4.81051 34.98 7.69494 27.2915 12.3371 20.9598C16.5736 15.1708 22.2072 10.5125 28.562 7.57274C33.79 5.1305 39.5589 3.86416 45.3277 3.86416H45.2827H46.2742C53.981 4.04506 61.5527 6.4873 67.9525 10.829C75.4791 15.9397 81.3831 23.7186 84.4028 32.583C87.3323 41.1761 87.5576 50.7189 85.0788 59.4476V59.4024Z"
                            fill="#370F1E" />
                        <path
                            d="M22.2072 37.3774C22.2072 40.9503 23.424 42.6237 27.4803 42.6237C31.5365 42.6237 32.7984 40.3624 32.7984 37.3774V24.6688H28.8324V37.7845C28.8324 38.5081 28.607 39.4578 27.4803 39.4578C26.3535 39.4578 26.1282 38.7342 26.1282 37.8749V24.6235H22.1621H22.2072V37.3774Z"
                            fill="#370F1E" />
                        <path
                            d="M39.1534 42.5779C42.4434 42.5779 44.2462 40.7236 44.2462 37.3316C44.2462 33.9397 43.7054 34.0301 42.804 33.1256C41.8575 32.221 40.5956 31.6331 39.1083 30.6381C38.3421 30.0502 37.8464 29.5075 37.9365 28.4672C38.0266 27.6984 38.4773 27.2009 39.2886 27.2913C40.5956 27.3818 40.5956 28.7838 40.5956 29.824H44.2462C44.4265 26.5225 42.3082 24.1255 39.2435 24.1255C36.1788 24.1255 34.2859 25.7989 34.2859 29.1004C34.2859 32.402 34.6915 31.7236 35.4126 32.6281C36.1337 33.5326 37.1703 34.211 38.3872 34.9346C39.4238 35.613 40.5956 36.1558 40.5956 37.6482C40.5956 39.1407 40.5505 39.4121 39.2886 39.4121C38.0266 39.4121 37.7112 38.5075 37.7112 37.5126V36.2914H34.0605V38.1457C34.0605 40.4523 35.9084 42.5779 39.1984 42.5779H39.1534Z"
                            fill="#370F1E" />
                        <path
                            d="M54.7921 41.3574C55.9188 40.5885 56.4596 39.3222 56.4596 37.5583V29.7794C56.4596 28.106 56.2343 26.3874 54.7019 25.4376C53.44 24.6688 51.6823 24.6235 50.2401 24.6235H45.9585V42.1714H51.2767C52.4935 42.1714 53.7555 42.0358 54.7921 41.3574ZM49.9246 39.0056V27.7894C51.8626 27.7894 52.4935 27.9703 52.5386 30.0055V35.7493C52.5386 38.1011 52.5386 39.2317 49.9246 39.0056Z"
                            fill="#370F1E" />
                        <path
                            d="M61.5976 42.1714L62.0483 38.7342H65.1581L65.6989 42.1714H69.71L66.0594 24.6235H61.2821L57.5864 42.1714H61.5976ZM63.5806 27.7894L64.6623 35.6588H64.7524H62.4539L63.5806 27.7894Z"
                            fill="#370F1E" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_2685">
                            <rect width="90.1829" height="94.0205" fill="white"
                                transform="translate(0.316895 0.110352)" />
                        </clipPath>
                    </defs>
                </svg>

            </div>
        </div>
        <div class="w-full -mt-10 relative z-30">
            <CtaMenopause />
        </div>
        <div class="w-full pt-10 -mt-10 relative z-30">
            <Learnmore backgroundColor="#FFFAF0" text="Learn more about us and how important is the right sleep" />
        </div>
        <div class="w-full -mt-10 relative z-30">
            <Footer color="#CDEBFF" colortext="#370F1E" title="SUPERMENT"
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