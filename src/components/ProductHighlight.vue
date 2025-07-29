<template>
    <!-- Product Highlight -->
    <section class="pt-12 pb-14 bg-white">
        <div class="max-w-7xl lg:max-w-5xl justify-items-center mx-auto px-4">
            <div class="grid lg:grid-cols-5 items-center lg:items-start">
                <div class="flex justify-center lg:col-span-2">
                    <div class="-mt-16 -ml-12 lg:-mt-18 lg:-ml-2">
                        <img src="@/assets/image/sleepWomam/product.png" alt="Super Natural Sleep"
                            class="h-72 lg:w-full lg:h-full object-cover">
                    </div>
                </div>
                <div class="text-left inline-flex flex-col lg:col-span-3 max-w-[330px] items-start md:justify-items-start">
                    <h2 class="font-gelasio text-3xl lg:text-4xl text-[#525252] leading-8 mb-2">
                        <em class="italic">Natural, deep sleep is essential for healthy, radiant skin.</em>
                    </h2>
                    <p class="text-[#525252] mb-6 lg:mb-8 text-md lg:text-lg leading-5">
                        Support your skin's regeneration cycle with Super Natural Sleep,
                        a plant-based, non-sedative formula designed for rest without
                        the melatonin or harsh chemicals. Just real, restorative rest.
                    </p>            
                    <ShopButton
                        id="buy-button"
                        productId="prod_SbKYsQrxStW8wB"
                        textColorClass="text-[#58663a]"
                        :showIcon=true
                        class="text-white !px-4 md:ml-8 md:w-auto md:justify-center bg-[#d2f58c] py-3 rounded-full text-[18px] font-light hover:bg-[#58663a]/50 transition lg:text-2xl">
                        Shop: First Trial Special Offer
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