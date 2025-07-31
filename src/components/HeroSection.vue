<template>
<!-- Hero Section -->
<section class="flex flex-col items-center justify-center text-center pt-8 md:pt-0 pb-12 relative z-10">
    <h1 class="text-white font-sans mx-4 mt-20 mb-4">
        <span class="block md:hidden font-thin text-3xl">Renew your skin,<br>brighten your<br>beauty — <em
                class="font-gelasio font-semibold italic text-[#A0D7FF]">sleeping.</em></span>
        <span class="hidden md:block sm:text-3xl sm:font-thin xl:font-normal xl:text-5xl mt-10">Renew your skin, brighten your<br>beauty —
            <em class="font-gelasio font-semibold italic text-[#A0D7FF]">sleeping.</em></span>
    </h1>
    <div>
    </div>
    
    <ShopButton
        id="buy-button"
        anchorId="Highlight"
        textColorClass="text-white"
        :showIcon=false
        class="mt-2 border border-[#5EC7EB] text-white bg-[#CDEBFF]/30 px-6 py-3 rounded-full text-base font-light hover:bg-[#CDEBFF]/50 transition lg:text-2xl">
        Before you buy, know it better
    </ShopButton>
</section>
</template>

<script setup>
import ShopButton from './ShopButton.vue';


</script>

<style>

</style>