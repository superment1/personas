<template>
    <!-- Product Highlight -->
    <section class="pb-8 pt-12 bg-white">
        <div class="max-w-7xl lg:max-w-3xl">
            <div class="grid lg:grid-cols-5 flex flex-col items-center justify-center lg:items-start">
                <div class="flex justify-center lg:col-span-2">
                    <div class="-mt-16 -ml-12 lg:-mt-18 lg:-ml-2">
                        <img src="@/assets/image/sleepWomam/product.png" alt="Super Natural Sleep"
                            class="w-[260px] h-[294px] lg:w-full lg:h-full object-cover">
                    </div>
                </div>
                <div class="flex flex-col items-center justify-start lg:col-span-3 w-[316px] -mt-2">
                    <h2 class="font-crossfit text-[32px] uppercase text-[#370f1e] leading-[1]">
                        <span class="">Super Natural Sleep restores the:</br></span>
                    </h2>
                    <p class="text-[20px] font-normal py-2 text-[#5a5656] lg:text-[1.5rem] leading-[1.02em] border-b-2 h-[60px] w-[316px]"
                        style="border-color: #ffc35a;">Real rest, mental clarity, and the energy to do what you love
                        again.</p>
                    <p
                        class="text-[#726f6f] text-[1rem] lg:text-[1.1rem] font-light leading-[1.2rem] mx-0 mt-[13px] w-[316px]">
                        Clean, non-sedative formula. No melatonin. Made in FDA & GMP-certified U.S. labs.
                    </p>
                    <ShopButton id="buy-button" productId="prod_SbKYsQrxStW8wB" textColorClass="text-[#083d4f]"
                        iconColorClass="text-[#083d4f]" title="Shop: First Trial Special Offer"
                        class="bg-[#ffc35a] font-semibold text-[18px] lg:text-xl w-[322px] justify-between mt-[20px]" />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import ShopButton from '../components/ShopButton.vue'
</script>

<style></style>