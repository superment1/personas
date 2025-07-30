<template>
    <!-- Ingredients Section -->
    <section class="py-10 lg:pt-16 bg-[#FFFAF0]">
        <div class="max-w-[90%] mx-auto md:w-[full] justify-items-center px-4">
            <h2 class="font-gelasio text-[28px] md:w-[700px] leading-[1.2] lg:text-[40px] text-[#525252] text-start md:text-center mb-6 lg:mb-12 italic mx-8">
                An advanced botanical formula designed to support your sleep cycle.
            </h2>

            <div class="grid grid-cols-1 justify-items-start items-center lg:max-w-5xl lg:grid-cols-5 gap-3 lg:gap-8 mb-6 lg:mb-4 lg:justify-items-center">
                <div class="flex items-center w-full py-2 border-b last:border-b-0 lg:flex-col lg:border-b-0 sm:w-[330px] md:w-[330px] lg:w-[full]"
                    style="border-color: #FFE1AA">
                    <div class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-6 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/passionflower.png" alt="Passionflower"
                            class="max-w-full max-h-full object-contain" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] text-[20px] leading-[1.1] lg:text-xl">Passionflower</h3>
                        <p class="text-gray-600 pl-[4px] text-[16px] lg:text-base">Quiets the mind.</p>
                    </div>
                </div>

                <div class="flex items-center w-full border-b lg:flex-col lg:border-b-0 sm:w-[330px] md:w-[330px] lg:w-[full]"
                    style="border-color: #FFE1AA">
                    <div class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-6 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/corydalis.png" alt="Corydalis"
                            class="max-w-full max-h-full object-contain" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] ttext-[20px] leading-[1.1] lg:text-xl">Corydalis</h3>
                        <p class="text-gray-600 pl-[4px] text-[16px] text-sm lg:text-base">Eases tension.</p>
                    </div>
                </div>

                <div class="flex items-center w-full border-b lg:flex-col lg:border-b-0 sm:w-[330px] md:w-[330px] lg:w-[full]"
                    style="border-color: #FFE1AA">
                    <div class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-6 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/marshmallow-root.png" alt="Marshmallow Root"
                            class="max-w-full max-h-full object-contain" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] text-[20px] leading-[1.1] lg:text-xl">Marshmallow Root</h3>
                        <p class="text-gray-600 pl-[4px] text-[16px] lg:text-base">Soothes digestion.</p>
                    </div>
                </div>

                <div class="flex items-center w-full border-b lg:flex-col lg:border-b-0 sm:w-[330px] md:w-[330px] lg:w-[full]"
                    style="border-color: #FFE1AA">
                    <div class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-6 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/california-poppy.png" alt="California Poppy"
                            class="max-w-full max-h-full object-contain" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] text-[20px] leading-[1.1] lg:text-xl">California Poppy</h3>
                        <p class="text-gray-600 pl-[4px] text-[16px] lg:text-base">Relaxes the body.</p>
                    </div>
                </div>

                <div class="flex items-center w-full border-b pb-2 lg:flex-col lg:border-b-0 sm:w-[330px] md:w-[330px] lg:w-[full]"
                    style="border-color: #FFE1AA">
                    <div class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-6 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/prickly-pear.png" alt="Prickly Pear"
                            class="max-w-full max-h-full object-contain" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] text-[20px] leading-[1.1] lg:text-xl">Prickly Pear</h3>
                        <p class="text-gray-600 pl-[4px] text-[16px]text-sm lg:text-base">Keeps sleep steady.</p>
                    </div>
                </div>
            </div>

            <div class="text-center justify-items-center">
                <p class="text-[#525252] font-gelasio italic mb-4 text-xl lg:text-[20px] leading-[1.1] md:w-full">
                    So your skin restores overnight, and you rise with a healthy glow.
                </p>
                <div>
                    <ShopButton
                        id="buy-button"
                        productId="prod_SbKYsQrxStW8wB"
                        textColorClass="text-[#58663a]"
                        :showIcon=true
                        class="mt-2 text-white md:ml-8 md:w-auto md:justify-center justify-start bg-[#d2f58c] py-3 rounded-full text-[1.1rem] font-light hover:bg-[#58663a]/50 transition lg:text-2xl">
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