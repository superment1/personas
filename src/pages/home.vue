<script setup lang="ts">
import '../styles/superSleep.scss';
import Box from '../components/Box.vue';
import Selos from '../components/Selos.vue';
import SuperFooter3 from '../components/SuperFooter3.vue';
import SuperHeader2 from '../components/SuperHeader2.vue';

const items=[
    {
      image: '/assets/sleep-home.webp',
      title: 'Restful Sleep',
      subtitle: 'Melatonin-free, plant-based support for deep, restorative rest.',
      info: 'Super Natural Sleep helps your system unwind naturally — without sedation or hormonal interference.'
    },
    {
      image: '/assets/nerve-home.webp',
      title: 'Nerve Pain Relief',
      subtitle: 'Gentle, continuous relief for everyday nerve discomfort.',
      info: 'Super Relax supports smoother nerve signaling and more comfortable days, helping reduce tension without sedation.'
     
    },
    {
      image: '/assets/relax-home.webp',
      title: 'Stress Control',
      subtitle: 'Natural support for a calmer, more regulated day.',
      info: 'Super Relax helps steady your stress response and promote mental clarity, so you can stay grounded even when life speeds up.'
    }
]
</script>


<template>
    <SuperHeader2 :show-redirect="false" />
    <div class="relative w-full sm:h-[810px] overflow-hidden">
        <img src="/assets/home-hero.webp" class="sm:hidden" alt="">
        <img src="/assets/home-hero-desk.webp" class="hidden sm:block" alt="">
        <h1 class="absolute inset-0 content-end text-center text-white font-gelasio text-[28px] lg:text-[62px] italic pb-[52px] lg:pb-[130px]">
            Superment.
            <br>The Clever Health Plan.
        </h1>
    </div>
    <div class="w-full px-[38px] py-[28px] lg:py-[80px] bg-[#FFFAF0] font-sans text-center justify-center items-center flex flex-col text-[#370F1E]">
        <p class="text-[16px] lg:text-[40px] pb-[10px] font-black ">Plant-based science. Everyday clarity.</p>
        <p class="text-[12px] lg:text-[30px] font-medium pb-[10px]">Life brings pressure. Your body deserves steadiness. Night & day.</p>
        <p> </p>
        <p class="text-[12px] lg:text-[30px] font-medium leading-[1] max-w-[980px]">Superment’s US-made, melatonin-free formulas support a regulated nervous system, helping you move with more balance, focus and real restoration.</p>
    </div>
    <div class="bg-[#370F1E] py-[20px] flex flex-col items-center">
        <h1 class="text-[#fff] text-[28px] lg:text-[62px] font-gelasio italic">Certified by:</h1>
        <Selos/>
    </div>
    <div class="w-full py-[28px]  lg:py-[70px] bg-[#FFFAF0]">
        <Box :items=items />
    </div>
    <div class="bg-[#E1DCCD] py-[28px]  sm:py-[70px] px-[38px]">
        <h1 class="px-[20px] pb-[20px] sm:pb-[70px] text-[32px] lg:text-[62px] leading-[1] font-gelasio italic text-center text-[#370F1E] ">
            Real People. Natural Routines.</h1>
        <div class="flex flex-col sm:flex-row justify-center">
            <img src="/assets/woman_capsula.webp" class="sm:hidden" alt="">
            <img src="/assets/woman_capsula_desk.webp" class="hidden sm:flex sm:max-w-[490px]" alt="">
                <div class="bg-[#FFFAF0] sm:gap-[35px] rounded-b-[10px] sm:rounded-bl-none sm:rounded-r-[10px] py-[15px] sm:px-[35px] items-center justify-evenly flex sm:flex-row">
                    <img src="/assets/c_psula_california.webp" class="w-[63px] h-auto sm:w-[133px]" alt="">
                    <p class="text-[12px] lg:text-[24px] text-[#370F1E] leading-[1] max-w-[112px] sm:max-w-[220px]">
                        Creators and professionals who rely on plant-based science to support their sleep, stress, and nerve health.</p>
                </div>
        </div>
    </div>
    <div class="bg-[#370F1E] flex flex-col justify-center items-center mx-auto">
        <SuperFooter3 class="max-w-[349px] sm:max-w-[950px]"/>
    </div>
</template>
