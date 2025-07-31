<template>
    <!-- Final CTA Section -->
    <section class="relative rounded-t-3xl bg-[#63CFF2]">
        <div class="w-full px-4 pt-10 pb-14 md:pb-0 min-h-[600px] rounded-t-3xl bg-[url('../assets/image/sleepElderly/bannerElderly.png')] md:bg-[url('@/assets/image/sleepWomam/bg_footer_desktop.png')] bg-cotain bg-[70%_1%] md:bg-cover md:bg-top bg-no-repeat">
            <div class="w-full flex items-center justify-center lg:max-w-[90%] lg:mx-auto">
                <!-- Mobile Layout -->
                <div class="block md:hidden w-[330px]">
                    <p class="text-[#ffdc6b] text-[32px] leading-[0.9] font-medium font-crossfit">
                        SHOP NOW</p>
                    <h2 class="text-white pt-[5px] text-[36px] leading-[1.1] uppercase font-crossfit">
                        You don’t need to push through another tired day.
                    </h2>
                    <img src="@/assets/image/sleepWomam/stripe_logo.svg" class="w-26" />
                    <div class="flex justify-center h-[300px] items-center">
                        <div class="relative left-20 -top-12">
                            <img src="../assets/image/sleepElderly/price-ederly.png"  class="h-56" />
                        </div>
                    </div>
                    <div class="pt-8">
                        <h1 class="font-crossfit uppercase text-[#370f1e] leading-none pb-5 text-[28px]">There’s a gentle way to sleep and rest, naturally.</h1>
                        
                        <div class="flex">
                            <ShopButton id="buy-button" productId="prod_SbKYsQrxStW8wB" textColorClass="text-[#083d4f]" iconColorClass="text-[#083d4f]" title="Shop: First Trial Special Offer" class="bg-[#ffc35a] font-medium px-7 text-lg lg:text-xl" />
                        </div>
                    </div>
                </div>

                <!-- Desktop Layout -->
                <div class="hidden md:grid md:grid-cols-2 md:gap-12 md:items-start md:min-h-[600px] md:py-16">
                    <!-- Left Side - Product & Pricing -->
                    <div class="relative">
                        <div class="relative">
                            <div class="absolute right-8">
                                <img src="@/assets/image/sleepElderly/price1.png" alt="Pricing" class="lg:h-56" />
                            </div>
                        </div>
                    </div>

                    <!-- Right Side - Content -->
                    <div class="text-left xl:max-w-[22rem]">
                        <p class="text-[#ffdc6b] text-[2.5rem] font-medium  font-crossfit mb-4">
                            SHOP NOW
                        </p>
                        <h2 class="text-white text-5xl font-bold  font-crossfit mb-4">
                            You don’t need to push through another tired day.
                        </h2>
                        <div class="inline-block mb-4">
                            <img src="@/assets/image/sleepWomam/stripe_logo.svg" class="w-26" />
                        </div>
                        <h1 class="font-crossfit uppercase text-[#370f1e] leading-none pr-12 pb-5 text-[1.75rem]">There’s a gentle way to sleep and rest, naturally.</h1>
                        <ShopButton id="buy-button" 
                        productId="prod_SbKYsQrxStW8wB" 
                        textColorClass="text-[#083d4f]" 
                        iconColorClass="text-[#083d4f]" 
                        title="Shop: First Trial Special Offer" 
                        class="bg-[#ffc35a] font-medium px-7 text-lg lg:text-xl" />
                    </div>
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