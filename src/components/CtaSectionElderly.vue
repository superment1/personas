<template>
    <!-- Final CTA Section -->
    <section class="relative rounded-t-3xl max-h-[725px] md:max-h-[765px] bg-[#63CFF2]">
        <div class="w-full px-4 min-h-[600px] rounded-t-3xl bg-[url('@/assets/image/sleepWomam/bg_footer.png')] md:bg-[url('@/assets/image/sleepWomam/bg_footer_desktop.png')] bg-[position:45%_149%] bg-no-repeat">
            <div class="w-11/12 mx-auto max-h-">
                <!-- Mobile Layout -->
                <div class="block md:hidden pb-12 m-3">
                    <p class="text-[#ffdc6b] text-2xl font-medium pt-8 font-crossfit">SHOP NOW</p>
                    <h2 class="text-white text-4xl uppercase pr-16 font-light  font-crossfit">
                        You don’t need to push through another tired day.
                    </h2>
                    <img src="@/assets/image/sleepWomam/stripe_logo.svg" class="w-26" />
                    <div class="flex justify-center items-center">
                        <div class="relative left-12 -top-4">
                            <img src="@/assets/image/sleepElderly/price1.png"  class="h-40" />
                        </div>
                    </div>
                    <div class="pt-40">
                        <h1 class="font-crossfit uppercase text-[#370f1e] leading-none pr-20 pb-5 text-[1.5rem]">There’s a gentle way to sleep and rest, naturally.</h1>
                        
                        <div class="flex mb-20">
                            <ShopButton id="buy-button" productId="prod_SbKYsQrxStW8wB" textColorClass="text-[#083d4f]" iconColorClass="text-[#083d4f]" title="Shop: First Trial Special Offer" class="bg-[#ffc35a] font-medium px-7 text-lg lg:text-xl" />
                        </div>
                    </div>
                </div>

                <!-- Desktop Layout -->
                <div class="hidden md:grid md:grid-cols-2 md:gap-12 md:items-start md:min-h-[600px] md:py-20">
                    <!-- Left Side - Product & Pricing -->
                    <div class="relative">
                        <div class="relative">
                            <div class="absolute right-8">
                                <img src="@/assets/image/sleepElderly/price1.png" alt="Pricing" class="lg:h-48" />
                            </div>
                        </div>
                    </div>

                    <!-- Right Side - Content -->
                    <div class="text-left">
                        <p class="text-[#ffdc6b] text-[2.5rem] font-medium  font-crossfit mb-4">
                            SHOP NOW
                        </p>
                        <h2 class="text-white text-4xl font-bold  font-crossfit mb-4">
                            You don’t need to push through another tired day.
                        </h2>
                        <div class="inline-block mb-4">
                            <img src="@/assets/image/sleepWomam/stripe_logo.svg" class="w-26" />
                        </div>
                        <h1 class="font-crossfit uppercase text-[#370f1e] leading-none pr-32 pb-5 text-[1.5rem]">There’s a gentle way to sleep and rest, naturally.</h1>
                        <ShopButton id="buy-button" productId="prod_SbKYsQrxStW8wB" textColorClass="text-[#083d4f]" iconColorClass="text-[#083d4f]" title="Shop: First Trial Special Offer" class="bg-[#ffc35a] font-medium px-7 text-lg lg:text-xl" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import ShopButton from '@/components/ShopButton.vue'
</script>

<style>

</style>