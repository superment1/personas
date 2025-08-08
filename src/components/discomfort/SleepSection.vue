<template>
<!-- Hero Section -->
<section class="flex flex-col items-center justify-center w-[full] h-[full] p-12">
    <div class="flex flex-col items-center justify-between w-[full] h-[320px]" >
        <div class="text w-[320px]" >
            <p class="text-[36px] font-crossfit text-[#FFFFFF] leading-[1.0]">NO MORE NIGHT<br>TIME</br> <br>DISCOMFORT.</br> </p>
            <p class="text-[36px] font-crossfit text-[#6EC8F0] leading-[1.0]">JUST DEEP, <br>RESTFUL SLEEP.</br></p>
            <p class="text-[20px] font-DMSans font-extralight text-[#FFF] leading-[1.0] tracking-wide">Super Natural Sleep relieves reflux, bloating, and tension - so you can sleep through the night, naturally.</p>
        </div>
        <ShopButton
            id="buy-button"
            anchorId="Highlight"
            textColorClass="text-white"
            :showIcon=false
            class="w-full mt-11 border border-[#5EC7EB] text-white px-0 py-3 rounded-full text-base font-light hover:bg-[#CDEBFF]/50 transition lg:text-2xl">
            Shop: First Trial Special Offer
        </ShopButton>
    </div>
</section>
</template>

<script setup>
    import ShopButton from '@/components/ShopButton.vue';
</script>
