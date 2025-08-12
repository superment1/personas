<script lang="ts" setup>
import ShopButton from '../components/ShopButton.vue'
</script>

<template>
    <section class="py-6 pb-12 bg-white">
        <div class="max-w-7xl lg:max-w-[80rem] justify-items-center mx-auto px-4">
            <div class="flex-col flex md:flex-row mx-8">
                <div class="flex flex-col md:gap-6 md:flex-row">
                    <img class="rounded-[10px] md:w-[478px] max-h-max" width="315px" height="auto" src="../assets/image/sleepElderly/Before-After-mobile.png"></img>
                    <div class="flex-col  leading-none md:max-w-[462px] ">
                        <h2 class="uppercase text-[#370F1E] pt-4 font-crossfit text-[30px] md:text-[40px]">You’re not just aging — <br>your sleep is changing.</h2>
                        <p class="pt-4 text-[#525252] text-[16px] sm:text-[20px] tracking-wide font-light leading-[1.05em]">As you age, your body makes less of the natural messengers that regulate sleep — like melatonin and serotonin. Discomforts like reflux, tension, and light sleep become more common.</p>
                        <p class="pt-[0.9rem] pb-6 text-[#525252] leading-[1.05em] text-[16px] sm:text-[20px]"><strong>Super Natural Sleep</strong> helps calm your body and support deep, natural rest — without drugs or next-day grogginess.</p>
                    <ShopButton 
                        id="buy-button" 
                        textColorClass="text-[#083d4f]" 
                        iconColorClass="text-[#083d4f]" 
                        title="Shop: First Trial Special Offer" 
                        class="bg-[#ffc35a] py-2  font-medium text-[1.1rem] lg:text-2xl w-[330px] justify-between" />
                    </div>
                    
                </div>
                
            </div>
        </div>
    </section>
</template>