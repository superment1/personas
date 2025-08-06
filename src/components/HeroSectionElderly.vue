<template>
<!-- Hero Section -->
<section class="flex flex-col mx-10 text-start md:max-w-[60%] pt-10 md:mx-auto md:pb-12 md:pt-20 relative z-10">
    <h1 class="text-white leading-none font-crossfit  mb-4">
        <span class="block md:pr-40 max-w-72 md:text-[3.5rem] text-[2.5rem]">FINALLY SLEEP THROUGH THE NIGHT<span style="color: #6ec8f0;">-</span><span style="color: #6ec8f0;"> <br> WITHOUT MEDICATION. </span></span>
    </h1>
    <span class=" font-sans text-[1.5rem] max-w-[286px] md:max-w-[65%] mb-3 leading-none font-normal text-white">Wake up clear, energized, and steady on your feet — without grogginess.</span>
    <ShopButton
        id="buy-button"
        productId="prod_SbKYsQrxStW8wB"
        textColorClass="text-white"
        :showIcon=false
        class="mt-2 border md:max-w-[50%] border-[#5EC7EB] text-white !px-0 md:px-6 !py-2 rounded-full text-[1.3rem] font-light bg-transparent hover:bg-[#CDEBFF]/50 transition lg:text-2xl">
        Shop: First Trial Special Offer
    </ShopButton>
</section>
</template>

<script setup>
import ShopButton from '@/components/ShopButton.vue' 
</script>

<style>

</style>