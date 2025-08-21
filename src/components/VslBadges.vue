<script setup>
import Stopwatch from '../components/Stopwatch.vue';
import ShopButton from './ShopButton.vue';

</script>


<template>
    <Stopwatch bg="#FFD700" text-color="#370F1E" />
    <div class="w-full h-[700px] bg-[#6EC8F0] flex flex-col items-center justify-start">
        <img src="@/assets/image/vsl-badge.webp" alt="bagde VSL" class="w-[550px] h-[475px] -mt-[60px] md:w-[400px]">
        <div class="w-full h-full flex flex-col items-center justify-start -mt-[81px]">
            <ShopButton textColorClass="text-[#370F1E]" iconColorClass="text-[#370F1E]"
                class="h-[38px] w-[335px] bg-[#FFDC03] font-gelasio italic font-normal text-[19px] justify-around">
                FIRST TRIAL SPECIAL OFFER
            </ShopButton>
            <div class="w-[300px] h-[120px] pt-4">
                <div class="w-full h-[20px] flex flex-row items-center justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                        <circle cx="2.40428" cy="2.53581" r="2.15898" fill="#370F1E" />
                    </svg>
                    <span class="font-DMSans text-[13px] text-[#350E1D] font-medium ml-2">30-Day Satisfaction
                        Guarantee</span>
                </div>
                <div class="w-full h-[20px] flex flex-row items-center justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                        <circle cx="2.40428" cy="2.53581" r="2.15898" fill="#370F1E" />
                    </svg>
                    <span class="font-DMSans text-[13px] text-[#350E1D] font-medium ml-2">Clean-label, clinically guided
                        formulation</span>
                </div>
                <div class="w-full h-[32px] flex flex-row items-center justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 5 5" fill="none">
                        <circle cx="2.40428" cy="2.53581" r="2.15898" fill="#370F1E" />
                    </svg>
                    <span class="font-DMSans text-[13px] text-[#350E1D] font-medium ml-2 leading-[1.2]">Trusted U.S.
                        manufacturing
                        under FDA & GMP certification</span>
                </div>
                <div class="w-full h-[20px] flex flex-row items-center justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                        <circle cx="2.40428" cy="2.53581" r="2.15898" fill="#370F1E" />
                    </svg>
                    <span class="font-DMSans text-[13px] text-[#350E1D] font-medium ml-2">Free U.S. shipping</span>
                </div>
            </div>
            <span class="text-[#370F1E] font-gelasio italic text-[19px] font-medium -mt-1">Limited-time
                bundle
                pricing</span>
            <div class="w-[400px] h-[150px] flex flex-rol items-center justify-center gap-7">
                <div class="w-[150px] h-[150px] flex flex-col items-center justify-start">
                    <img src="@/assets/image/3-badge.webp" alt="bagde VSL" class="w-[150px] h-[150px] -mt-[9px] ">
                    <ShopButton textColorClass="text-[#370F1E]" iconColorClass="text-[#370F1E]"
                        class="h-[31px] w-[165px] bg-[#FFDC03] font-gelasio italic font-medium text-[15px] justify-between -mt-[27px]">
                        Buy 3 | $32 each
                    </ShopButton>
                </div>
                <div class="w-[150px] h-[150px] flex flex-col items-center justify-start">
                    <img src="@/assets/image/6-badge.webp" alt="bagde VSL" class="w-[140px] h-[140px] -mt-[6px]">
                    <ShopButton textColorClass="text-[#370F1E]" iconColorClass="text-[#370F1E]"
                        class="h-[31px] w-[165px] bg-[#FFDC03] font-gelasio italic font-medium text-[15px] justify-between -mt-[20px]">
                        Buy 6 | $26 each
                    </ShopButton>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- <ShopButton id="buy-button" anchorId="cta-section" textColorClass="text-[#58663a]" :showIcon=true
                        class="mt-[24px] w-[316px] h-[50px] text-white justify-center justify-between bg-[#d2f58c] rounded-full text-[1rem] font-light hover:bg-[#58663a]/50 transition  lg:text-[20px] lg:px-5 lg:w-[392px]">
                        Shop: check our opening discount
                    </ShopButton> -->
<!-- class="mt-[20px] border border-[#5EC7EB] text-white bg-[#CDEBFF]/30 w-[286px] lg:w-[316px] lg:w-[412px] rounded-full 
                 font-DMSans text-[18px] h-[50px] font-light hover:bg-[#CDEBFF]/50 transition"> -->
