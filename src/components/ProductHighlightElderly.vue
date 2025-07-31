<template>
    <!-- Product Highlight -->
    <section class="pb-8 pt-12 bg-white">
        <div class="max-w-7xl lg:max-w-3xl mx-auto px-4">
            <div class="grid lg:grid-cols-5 items-center lg:items-start">
                <div class="flex justify-center lg:col-span-2">
                    <div class="-mt-16 -ml-12 lg:-mt-18 lg:-ml-2">
                        <img src="@/assets/image/sleepWomam/product.png" alt="Super Natural Sleep"
                            class="h-72 lg:w-full lg:h-full object-cover">
                    </div>
                </div>
                <div class="text-left lg:col-span-3">
                    <h2 class="font-crossfit text-3xl lg:text-4xl uppercase text-[#370f1e] leading-8 mx-8">
                        <span class="">Super Natural <br>Sleep restores the:</br></span>
                    </h2>
                        <p class="text-[1.3rem] py-2 text-[#5a5656] lg:text-[1.5rem] leading-5 mx-8">Real rest, mental clarity, and the energy to do what you love again.</p>
                        <p class="text-[#726f6f] text-[1rem] lg:text-[1.1rem] mb-6 leading-none mx-8">
                        Clean, non-sedative formula. No melatonin. Made in FDA & GMP-certified U.S. labs.
                        </p>                  
                    <ShopButton 
                    id="buy-button" 
                    productId="prod_SbKYsQrxStW8wB" 
                    textColorClass="text-[#083d4f]" 
                    iconColorClass="text-[#083d4f]" 
                    title="Shop: First Trial Special Offer" 
                    class="ml-8 bg-[#ffc35a] font-medium text-lg lg:text-xl" />
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