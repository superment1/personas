<script setup lang="ts">
import ShopButton from './ShopButton.vue';

const anchorId = 'id-vsl-badges'

</script>

<template>
    <div class="bg-[#036] w-full">
        <div class="px-[24px] pt-[25px]">
            <div class="text-white">
                <h1 class="text-[27px] font-black text-[#FA0000] leading-none">Neuropathy: <br><span class="text-white">The Ultimate Protocol</span></h1>
                <p class="pt-[20px] text-[15px] font-medium leading-[1.2]">How to Calm Nerve Pain and Support <br>Long-Term Nerve Recovery</p>
            </div>
            <div class="flex justify-center">
                <img src="/assets/ebook-relief-selo.webp" alt="">
            </div>
            <div class="pt-[15px] pb-[35px] gap-[24px] flex flex-col">
                <p class="font-semibold text-center py-2 text-white border-y border-[#fff] text-[14px]"> Protocol Value: <span class="line-through decoration-[#FFDC03] decoration-2">U$39.00</span> - <span class="text-[#FFDC03]"> FREE WITH PURCHASE! </span> </p>
                <ShopButton type="button" id="buy-button" :anchorId="anchorId" :showIcon="false" text-color-class="#222"
                class="max-w-[285px] !px-8 rounded-none text-center leading-none font-bold !text-[#222] bg-[#FFDC03] self-center">
                    Choose your bundle<br> and get your guide
                </ShopButton>

            </div>
        </div>
       
    </div>
</template>