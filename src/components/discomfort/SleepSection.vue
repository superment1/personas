<template>
    <div class="bg-[url('@/assets/image/discomfort/sleep-mobile.webp')]
            md:bg-[url('@/assets/image/sleepElderly/elderlyHappyDesk.webp')]
            w-full h-[464px] lg:h-[521px] bg-no-repeat
            [background-size:100%_100%] bg-[58%_top] -mt-3
            lg:bg-[100%_top] flex flex-col items-center justify-center text-center relative pt-[30px]">
        <div
            class="w-[316px] h-[356px] flex flex-col items-start justify-start lg:h-[300px] lg:w-[820px] gap-1 lg:gap-3 lg:pt-8">
            <span class="crossfit text-[36px] font-bold uppercase text-[white] leading-[1] text-start lg:text-[52px]">
                NO MORE NIGHT <br> TIME <br>DISCOMFORT.<span class="text-[#6EC8F0]"> <br class="block lg:hidden">JUST
                    DEEP, <br>RESTFUL SLEEP.</span>
            </span>

            <span
                class="text-[20px] text-[white] text-start leading-none font-extralight w-[316px] lg:w-[600px] lg:mt-3 lg:text-[28px] tracking-wide">
                Super Natural Sleep relieves reflux, bloating, and tension - so you can sleep through the night,
                naturally.
            </span>
            <ShopButton id="buy-button" textColorClass="text-white" :showIcon=false productId="prod_SbKYsQrxStW8wB"
                class="mt-[38px] border border-[#5EC7EB] text-white w-[286px] w-[316px] lg:w-[365px] rounded-full font-DMSans text-[20px] h-[50px] font-light hover:bg-[#CDEBFF]/50 transition lg:text-[24px] lg:mt-2">
                Shop: First Trial Special Offer
            </ShopButton>
        </div>
    </div>
</template>

<script setup>
import ShopButton from '@/components/ShopButton.vue';
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
