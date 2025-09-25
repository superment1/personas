<template>
    <div class="bg-[url('@/assets/image/menopause/banner-hero.webp')]
            md:bg-[url('@/assets/image/discomfort/sleep-desk.webp')]
            w-full h-[460px] lg:h-[468px] bg-no-repeat2
            [background-size:100%_100%] bg-[58%_top] -mt-3
            lg:bg-[100%_top] flex flex-col items-center justify-center text-center relative pt-[36px] lg:pt-[8px]">
        <div class="w-[316px] h-[356px] flex flex-col items-start justify-start gap-1">
            <p class="font-gelasio font-normal text-[#FFF] text-[24px] italic leading-[1] text-start">Sleep through
                <br>the night.
            </p>
            <div class="w-[160px] h-[1px] bg-[#6EC8F0] mt-1"></div>
            <p class="font-gelasio font-normal text-[#FFF] text-[48px] italic leading-[0.9] text-start mt-3">
                Wake
                <br>up like yourself again.
            </p>
            <ShopButton id="buy-button" textColorClass="text-[#6EC8F0]" :showIcon=false productId="prod_SbKYsQrxStW8wB"
                class="mt-[20px] border border-[#FFF] bg-sky-300/10 text-white w-[286px] w-[316px] rounded-full font-DMSans text-[20px] h-[50px] font-light hover:bg-[#CDEBFF]/50 transition ">
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
