<template>
    <!-- Final CTA Section -->
    <section class="relative rounded-t-3xl bg-[#63CFF2]">
        <div
            class="w-full px-4 pt-11 pb-[66px] md:pb-0 min-h-[600px] rounded-t-3xl bg-[url('../assets/image/sleepElderly/bannerElderly.webp')] md:bg-[url('@/assets/image/sleepElderly/bg_footer_desk.webp')] bg-cotain bg-[70%_20%] md:bg-cover md:bg-top bg-no-repeat">
            <div class="w-full flex items-center justify-center lg:max-w-[90%] lg:mx-auto">
                <!-- Mobile Layout -->
                <div class="block md:hidden w-[314px]">
                    <p class="text-[#FFC35A] text-[32px] leading-[1.1] font-black font-crossfit">
                        SHOP NOW</p>
                    <h2 class="text-white pt-[5px] text-[40px] leading-[1.1] uppercase font-crossfit">
                        You don’t need to push through another tired day.
                    </h2>
                    <img src="@/assets/image/sleepWomam/stripe_logo.svg" class="w-[114px] mt-[6px]" />
                    <div class="flex justify-center h-[300px] items-center">
                        <div class="absolute top-[255px] right-10">
                            <img src="@/assets/image/sleepElderly/price-thin.webp" alt="Pricing"
                                class="w-[123px] z-10 relative" />
                            <div class="flex flex-row items-center justify-end w-full">
                                <img src="@/assets/image/sleepElderly/free.webp" alt="Pricing"
                                    class="w-[90px] -translate-y-4 z-0" />
                            </div>
                        </div>
                    </div>
                    <div class="mt-[84px]">
                        <h1 class="font-crossfit uppercase text-[#370f1e] leading-[1.1] text-[28px]">There’s a
                            gentle way to sleep and rest, naturally.</h1>
                        <Guarantees></Guarantees>
                        <div class="flex mt-3">
                            <ShopButton id="buy-button" productId="prod_SbKYsQrxStW8wB" textColorClass="text-[#083d4f]"
                                iconColorClass="text-[#083d4f]" title="Shop: First Trial Special Offer"
                                class="bg-[#ffc35a] font-bold text-[18px] justify-center w-[316px] gap-2 tracking-tight" />
                        </div>
                    </div>
                </div>

                <!-- Desktop Layout -->
                <div class="hidden md:grid md:grid-cols-2 md:gap-12 md:items-start md:min-h-[600px] pb-[80px]">
                    <!-- Left Side - Product & Pricing -->
                    <div class="relative">
                        <div class="absolute top-12 right-8">
                            <img src="@/assets/image/sleepElderly/price-thin.webp" alt="Pricing"
                                class="w-[133px] z-10 relative" />
                            <div class="flex flex-row items-center justify-end w-full">
                                <img src="@/assets/image/sleepElderly/free.webp" alt="Pricing"
                                    class="w-[90px] -translate-y-4 z-0" />
                            </div>
                        </div>
                    </div>

                    <!-- Right Side - Content -->
                    <div class="text-left xl:max-w-[22rem]">
                        <p class="text-[#FFC35A] text-[40px] font-crossfit">
                            SHOP NOW
                        </p>
                        <h2 class="text-white text-[44px] font-crossfit mb-[6px] uppercase leading-[1.1]">
                            You don’t need to <br>push through <br>another tired day.
                        </h2>
                        <div class="inline-block mb-5">
                            <img src="@/assets/image/sleepWomam/stripe_logo.svg" class="w-[140px]" />
                        </div>

                        <h1 class="font-crossfit uppercase text-[#370f1e] leading-[1.1] text-[28px]">
                            There’s a gentle way to sleep <br>and rest, naturally.</h1>
                        <Guarantees />
                        <ShopButton id="buy-button" productId="prod_SbKYsQrxStW8wB" textColorClass="text-[#083d4f]"
                            iconColorClass="text-[#083d4f]" title="Shop: First Trial Special Offer"
                            class="bg-[#ffc35a] text-[20px] w-[343px] justify-center gap-2 font-semibold" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import ShopButton from '../components/ShopButton.vue'
import Guarantees from '../components/Guarantees.vue'

</script>

<style></style>