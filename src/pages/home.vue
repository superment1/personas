<script setup lang="ts">
import Selos from '../components/Selos.vue';
import SuperFooter3 from '../components/SuperFooter3.vue';
import SuperHeader2 from '../components/SuperHeader2.vue';

</script>


<template>
    <SuperHeader2 :show-redirect="false" />
    <div class="relative">
        <img src="/assets/home-hero.webp" alt="">
        <h1 class="absolute inset-0 content-end text-center text-white font-gelasio text-[28px] italic  pb-[52px]">
            Superment.
            <br>The Clever Health Plan.
        </h1>
    </div>
    <div class="w-full px-[38px] py-[28px] bg-[#FFFAF0] font-sans text-center text-[#370F1E]">
        <p class="text-[16px] pb-[10px] font-black ">Plant-based science. Everyday clarity.</p>
        <p class="text-[12px] font-medium pb-[10px]">Life brings pressure. Your body deserves steadiness. Night & day.</p>
        <p> </p>
        <p class="text-[12px] font-medium leading-[1]">Superment’s US-made, melatonin-free formulas support a regulated nervous system, helping you move with more balance, focus and real restoration.</p>
    </div>
    <div class="bg-[#370F1E] pt-[20px] justify-items-center">
        <h1 class="text-[#fff] text-[28px] font-gelasio italic">Certified by:</h1>
        <Selos/>
    </div>
    <div class="bg-[#370F1E]  flex flex-col justify-center items-center mx-auto">
        <SuperFooter3 class="max-w-[349px] sm:max-w-[760px]"/>
    </div>

</template>
