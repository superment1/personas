<template>
    <!-- Product Highlight -->
    <section id="Highlight" class="bg-white w-full flex flex-col items-center justify-center">
        <div class="flex flex-col items-center justify-center w-[316px]">
            <div class="-mt-4 -ml-12 lg:-mt-18 lg:-ml-2">
                <img src="@/assets/image/sleepWomam/product.png" alt="Super Natural Sleep"
                    class="w-[268px] h-[294px] lg:w-full lg:h-full object-cover">
            </div>
        </div>
        <div class="w-[316px] h-[266px] lg:col-span-3 -mt-[9px]">
            <h2 class="font-gelasio text-[28px] md:text-[40px] text-[#525252] leading-[1.13] tracking-tight">
                <em class="italic">Natural, deep sleep is essential for healthy, radiant skin.</em>
            </h2>
            <p
                class="text-[#525252] lg:mb-8 text-[16px] font-light lg:text-[18px] md:mt-3 lg:text-lg leading-5 -tracking-[0.01em] lg:leading-6">
                Support your skin's regeneration cycle with Super Natural Sleep: a plant-based, non-sedative
                formula designed for real <br class="block md:hidden">recovery. No melatonin, no harsh <br
                    class="block md:hidden">chemicals. Just real, restorative rest.
            </p>
            <ShopButton id="buy-button" anchorId="cta-section" textColorClass="text-[#58663a]" :showIcon=true
                class="mt-5 w-[316px] h-[50px] text-white justify-center justify-between bg-[#d2f58c] rounded-full text-[1rem] font-light hover:bg-[#58663a]/50 transition lg:text-[16px] lg:w-[330px]">
                Shop: check our opening discount
            </ShopButton>
        </div>
    </section>
</template>

<script lang="ts" setup>
import ShopButton from '../components/ShopButton.vue'
</script>

<style></style>