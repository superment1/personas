<template>
    <div class="bg-[url('@/assets/image/sleepWomam/beauty-mobile-bg.jpg')]
            md:bg-[url('@/assets/image/sleepWomam/beautysleep-bg.jpg')]
            w-full h-[439px] lg:h-[500px] bg-no-repeat
            [background-size:100%_100%] bg-[58%_top] -mt-3
            lg:bg-[55%_top] flex flex-col items-center justify-center text-center relative">
        <div class="w-[318px] h-[175px] lg:w-[756px]  flex flex-col items-center justify-center">
            <span
                class="block lg:hidden text-white text-center font-light text-[32px] leading-[1.06] tracking-wider">Renew
                your
                skin,<br>brighten
                your<br> <span class="tracking-normal">beauty —
                    <em class="font-gelasio font-semibold italic text-[#A0D7FF]">sleeping.</em></span></span>
            <span
                class="hidden text-white lg:block tracking-normal lg:text-[36px] lg:text-[48px] font-light leading-[1.0]">Renew
                your skin, brighten your<br>beauty —
                <em class="font-gelasio font-semibold italic text-[#A0D7FF]">sleeping.</em></span>
            <ShopButton id="buy-button" anchorId="Highlight" textColorClass="text-white" :showIcon=false
                class="mt-[20px] border border-[#5EC7EB] text-white bg-[#CDEBFF]/30 w-[286px] lg:w-[316px] lg:w-[412px] rounded-full font-DMSans text-[18px] h-[50px] font-light hover:bg-[#CDEBFF]/50 transition">
                Before you buy, know it better
            </ShopButton>
        </div>
    </div>
</template>

<script setup>
import ShopButton from './ShopButton.vue';
</script>
