<template>
    <!-- Final CTA Section -->
    <section id="cta-section" class="relative rounded-t-3xl bg-[#63CFF2]">
        <div class="w-full px-0 py-9 min-h-[750px] rounded-t-3xl bg-[url('@/assets/image/discomfort/banner-produto-1.webp')] md:bg-[url('@/assets/image/sleepWomam/bg_footer_desktop.png')] bg-cotain bg-[90%_0%] md:bg-cover md:bg-top bg-no-repeat">
            <div class="w-[full] flex items-center justify-center">
                <!-- Mobile Layout -->
                <div class="block md:hidden w-[330px]">
                    <h2 class="text-[#FFC35A] font-crossfit text-[40px]">
                        SHOP NOW
                    </h2>
                    <p class="font-DMSans text-[24px] text-[#370F1E] leading-[1.1em] font-medium" >Comfortable, restorative <br>sleep starts here</br></p>
                    <p class="font-crossfit text-[#FFF] text-[40px] leading-[1.1em] mt-1" >NO MORE REFLUX. NO MORE RESTLESSNESS.</p>
                    <img src="@/assets/image/sleepWomam/stripe_logo.svg" class="w-26 mt-2" />
                        <div class="flex flex-row justify-end">
                            <img src="@/assets/image/discomfort/price-thin.png" class="h-45 mr-2" />
                    </div>
                    <div class="mt-32">
                        <ShopButton
                            id="buy-button"
                            productId="prod_SbKYsQrxStW8wB"
                            textColorClass="text-[#083D4F]"
                            :showIcon=true
                            class="md:ml-8 w-[330px] md:w-auto md:justify-center justify-start bg-[#FFC35A] py-3 rounded-full text-[1.1rem] font-light hover:bg-[#58663a]/50 transition lg:text-2xl">
                            Shop: First Trial Special Offer
                        </ShopButton>    
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import ShopButton from '@/components/ShopButton.vue';
</script>

<style>

</style>