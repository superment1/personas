<script setup lang="ts">
import ShopButton from './ShopButton.vue';

const anchorId = 'id-vsl-badges'

</script>

<template>
    <div class="bg-[#036] w-full">
        <div class="px-[24px] sm:px-0 pt-[25px] sm:gap-[90px] sm:pt-[70px] sm:pb-[60px] max-w-[1260px] justify-self-center flex flex-col sm:flex-row">
            <div class="flex-col">
                <div class="text-white">
                    <h1 class="text-[27px] sm:text-[60px] font-black text-[#FA0000] leading-none">Neuropathy: <br><span class="text-white">The Ultimate Protocol</span></h1>
                    <p class="pt-[20px] text-[15px] sm:text-[32px] font-normal leading-[1.2]">How to Calm Nerve Pain and Support Long-<br>Term Nerve Recovery</p>
                </div>
                <div class="hidden sm:flex pt-[115px] pb-[35px] gap-[24px] flex-col">
                    <p class="font-semibold text-center py-2 text-white border-y border-[#fff] text-[25px]"> Protocol Value: <span class="line-through decoration-[#FFDC03] decoration-2">U$39.00</span> - <span class="text-[#FFDC03]"> FREE WITH PURCHASE! </span> </p>
                    <ShopButton type="button" id="buy-button" :anchorId="anchorId" :showIcon="false" text-color-class="#222"
                    class="max-w-[620px] text-[32px] !px-8 py-[25px] h-[84px] rounded-none text-center leading-none font-bold !text-[#222] bg-[#FFDC03] self-center">
                        Choose your bundle and get your guide
                    </ShopButton>
                </div>
            </div>            
            <div class="flex justify-center max-w-[550px]">
                <img src="/assets/ebook-relief-selo.webp" alt="">
            </div>
            <div class="sm:hidden pt-[15px] pb-[35px] gap-[24px] flex flex-col">
                <p class="font-semibold text-center py-2 text-white border-y border-[#fff] text-[14px]"> Protocol Value: <span class="line-through decoration-[#FFDC03] decoration-2">U$39.00</span> - <span class="text-[#FFDC03]"> FREE WITH PURCHASE! </span> </p>
                <ShopButton type="button" id="buy-button" :anchorId="anchorId" :showIcon="false" text-color-class="#222"
                class="max-w-[285px] !px-8 rounded-none text-center leading-none font-bold !text-[#222] bg-[#FFDC03] self-center">
                    Choose your bundle<br> and get your guide
                </ShopButton>

            </div>
        </div>
       
    </div>
</template>