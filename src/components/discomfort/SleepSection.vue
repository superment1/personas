<template>
    <div class="bg-[url('@/assets/image/discomfort/sleep-mobile.webp')]
            md:bg-[url('@/assets/image/discomfort/sleep-desk.webp')]
            w-full h-[464px] lg:h-[468px] bg-no-repeat
            [background-size:100%_100%] bg-[58%_top] -mt-3
            lg:bg-[100%_top] flex flex-col items-center justify-center text-center relative pt-[30px] lg:pt-[8px]">
        <div class="w-[316px] h-[356px] flex flex-col items-start justify-start gap-1 block lg:hidden">
            <span class="crossfit text-[36px] font-bold uppercase text-[white] leading-[1] text-start">
                NO MORE NIGHT <br> TIME <br>DISCOMFORT.<span class="text-[#6EC8F0]"> <br>JUST
                    DEEP, <br>RESTFUL SLEEP.</span>
            </span>

            <span class="text-[20px] text-[white] text-start leading-none font-extralight w-[316px] tracking-wide">
                Super Natural Sleep relieves reflux, bloating, and tension - so you can sleep through the night,
                naturally.
            </span>
            <ShopButton id="buy-button" textColorClass="text-white" :showIcon=false productId="prod_SbKYsQrxStW8wB"
                class="mt-[38px] border border-[#5EC7EB] text-white w-[286px] w-[316px] rounded-full font-DMSans text-[20px] h-[50px] font-light hover:bg-[#CDEBFF]/50 transition ">
                Shop: First Trial Special Offer
            </ShopButton>
        </div>

        <div class="hidden lg:grid grid-cols-2">
            <div class="grid-colspan-1 flex flex-col items-end justify-start pr-[20px]">
                <span class="crossfit  font-bold text-[white] leading-[1] text-start text-[44px] w-[426px]">
                    NO MORE NIGHT TIME <br>DISCOMFORT.<span class="text-[#6EC8F0]"> <br class="block lg:hidden"> JUST
                        DEEP, <br>RESTFUL SLEEP.</span>
                </span>

                <span class="font-DMSans text-[26px] leading-[1] font-light text-white w-[426px] text-start mt-1">
                    Super Natural Sleep relieves reflux, <br>bloating, and tension - so you can <br>sleep through the
                    night, naturally.
                </span>
                <ShopButton id="buy-button" textColorClass="text-white" :showIcon=false productId="prod_SbKYsQrxStW8wB"
                    class="mt-[28px] border border-[#5EC7EB] text-white text-[24px] w-[286px] w-[426px] rounded-full font-DMSans font-light hover:bg-[#CDEBFF]/50 transition">
                    Shop: First Trial Special Offer
                </ShopButton>
            </div>
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
