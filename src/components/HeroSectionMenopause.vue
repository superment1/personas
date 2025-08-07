<template>
<!-- Hero Section -->
<section class="section-wrapper">
    <div class="flex flex-col justify-start pt-14 px-8">
        <h1 class="text-white italic font-gelasio">
            <span class="block pb-3 leading-none border-b border-b-[#6EC8F0] text-2xl w-fit">
                Sleep through <br>the night.
            </span>
            <span class="block font-medium leading-[0.9] pt-3 text-5xl">
                Wake <br>up like yourself 
            </span>
            <span class="text-5xl leading-none text-[#6EC8F0]">
                again.</span>
        </h1>
        <ShopButton
            id="buy-button"
            anchorId="Highlight"
            textColorClass="text-[#6EC8F0]"
            :showIcon=false
            class="mt-[1.6rem] border border-[#fff] bg-[#5EC7EB]/10 !px-4 py-3 rounded-full text-xl font-light hover:bg-[#CDEBFF]/50 transition lg:text-2xl">
            Shop: First Trial Special Offer
        </ShopButton>
    </div>
    
    
</section>
</template>

<script setup>
import ShopButton from './ShopButton.vue';
</script>
