<template>
    <!-- Product Highlight -->
    <section id="Highlight" class="pt-12 pb-16 bg-white">
        <div class="max-w-7xl lg:max-w-[58rem] mx-auto px-4">
            <div class="max-w-[21rem] md:max-w-full mx-auto grid lg:grid-cols-5 items-center lg:items-start">
                <div class="flex justify-center lg:col-span-2">
                    <div class="-mt-16 -ml-12 lg:-mt-18 lg:-ml-2">
                        <img src="@/assets/image/sleepWomam/product.png" alt="Super Natural Sleep"
                            class="h-72 lg:w-full lg:h-full object-cover">
                    </div>
                </div>
                <div class="text-left lg:col-span-3">
                    <h2 class="font-gelasio text-3xl lg:text-4xl text-[#525252] leading-8 -mt-2">
                        <em class="italic">Natural, deep sleep is essential for healthy, radiant skin.</em>
                    </h2>
                    <p class="text-[#525252] mb-6 lg:mb-8 text-[17px] lg:text-lg leading-5 -tracking-[0.01em]">
                       Support your skin's regeneration cycle with Super Natural Sleep: a plant-based, non-sedative formula designed for real <br class="block md:hidden">recovery. No melatonin, no harsh <br class="block md:hidden">chemicals. Just real, restorative rest.
                    </p>            
                    <ShopButton
                        id="buy-button"
                        anchorId="cta-section"
                        textColorClass="text-[#58663a]"
                        :showIcon=true
                        class="mt-0 w-[330px] text-white md:justify-center justify-between bg-[#d2f58c] rounded-full text-[1rem] font-light hover:bg-[#58663a]/50 transition lg:text-2xl">
                        Shop: check our opening discount 
                    </ShopButton>                                    
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import ShopButton from '../components/ShopButton.vue'
</script>

<style>

</style>