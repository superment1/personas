<template>
    <div class="bg-[url('@/assets/image/sleepElderly/elderyHappy.webp')]
            md:bg-[url('@/assets/image/sleepWomam/beautysleep-bg.jpg')]
            w-full h-[464px] lg:h-[500px] bg-no-repeat
            [background-size:100%_100%] bg-[58%_top] -mt-3
            lg:bg-[55%_top] flex flex-col items-center justify-center text-center relative">
        <div class="w-[316px] h-[356px] lg:w-[756px]  flex flex-col items-center justify-between">
            <span class="crossfit text-[36px] font-bold uppercase text-[white] leading-none text-start">
                Finally sleep through the <br> night <span class="text-[#6EC8F0]">- <br>without <br> medication.</span>
            </span>

            <span class="text-[24px] text-[white] text-start leading-none tracking-wide font-extralight mt-1 w-[316px]">
                Wake up clear, energized, <br>and steady on your feet <br>— without grogginess.
            </span>
            <ShopButton id="buy-button" anchorId="Highlight" textColorClass="text-white" :showIcon=false
                class="mt-[20px] border border-[#5EC7EB] text-white bg-[#CDEBFF]/30 w-[286px] w-[316px] lg:w-[412px] rounded-full font-DMSans text-[20px] h-[50px] font-light hover:bg-[#CDEBFF]/50 transition">
                Shop: First Trial Special Offer
            </ShopButton>
        </div>
    </div>
</template>

<script setup>
import ShopButton from './ShopButton.vue';
</script>

<style scoped>
@font-face {
    font-family: "Crossfit";
    src: url("@/assets/fonts/crossfit/Crossfit-Black.otf") format("truetype");
    font-weight: normal;
    font-style: normal;
}

.crossfit {
    font-family: 'Crossfit';
}
</style>
