<template>
    <div class="bg-[url('@/assets/image/sleepWomam/beauty-mobile-bg.jpg')]
            h-[439px] bg-no-repeat
            w-full
            [background-size:100%_100%]
            bg-[58%_top]                 
            -mt-3
            md:bg-[55%_top] w-full flex flex-col items-center justify-center text-center relative">
        <div class="w-[318px] h-[175px]  flex flex-col items-center justify-start">
            <span
                class="block md:hidden text-white text-center font-light text-[32px] leading-[1.06] tracking-wider">Renew
                your
                skin,<br>brighten
                your<br> <span class="tracking-normal">beauty —
                    <em class="font-gelasio font-semibold italic text-[#A0D7FF]">sleeping.</em></span></span>
            <span
                class="hidden text-white  md:block sm:text-[40px] text-center sm:font-light xl:font-normal xl:text-5xl mt-16 ml-24 tracking-wider">Renew
                your skin, brighten your<br>beauty —
                <em class="font-gelasio font-semibold italic text-[#A0D7FF]">sleeping.</em></span>
            <ShopButton id="buy-button" anchorId="Highlight" textColorClass="text-white" :showIcon=false
                class="mt-[20px] border border-[#5EC7EB] text-white bg-[#CDEBFF]/30 w-[286px] rounded-full font-DMSans text-[18px] h-[50px] font-light hover:bg-[#CDEBFF]/50 transition lg:text-2xl">
                Before you buy, know it better
            </ShopButton>
        </div>
    </div>
</template>

<script setup>
import ShopButton from './ShopButton.vue';
</script>
