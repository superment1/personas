<template>
    <!-- Ingredients Section -->
    <section class="py-10 lg:pt-16 bg-[#FFFAF0]">
        <div class="md:max-w-7xl mx-auto px-4">
            <div class="max-w-[21rem] md:justify-items-center md:max-w-full mx-auto">
            <h2 class="font-gelasio md:max-w-[700px] text-[28px] leading-[1.2] lg:text-[40px] text-[#525252] text-start md:text-center mb-2 lg:mb-12 italic">
                An advanced botanical formula designed to support your sleep cycle.
            </h2>

            <div class="grid grid-cols-1 lg:grid-cols-5 lg:gap-8 mb-6 lg:mb-4">
                <div class="flex items-center w-full py-2 border-b last:border-b-0 lg:flex-col lg:border-b-0 "
                    style="border-color: #FFE1AA">
                    <div class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-6 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/passionflower.png" alt="Passionflower"
                            class="max-w-full max-h-full object-contain ml-10" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] text-[20px] leading-[1.1] lg:text-xl ml-5">Passionflower</h3>
                        <p class="text-gray-600 pl-[4px] text-[16px] lg:text-base ml-5">Quiets the mind.</p>
                    </div>
                </div>

                <div class="flex items-center w-full border-b lg:flex-col lg:border-b-0"
                    style="border-color: #FFE1AA">
                    <div class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-6 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/corydalis.png" alt="Corydalis"
                            class="max-w-full max-h-full object-contain ml-10" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] ttext-[20px] leading-[1.1] lg:text-xl ml-5">Corydalis</h3>
                        <p class="text-gray-600 pl-[4px] text-[16px] text-sm lg:text-base ml-5">Eases tension.</p>
                    </div>
                </div>

                <div class="flex items-center w-full border-b lg:flex-col lg:border-b-0"
                    style="border-color: #FFE1AA">
                    <div class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-6 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/marshmallow-root.png" alt="Marshmallow Root"
                            class="max-w-full max-h-full object-contain ml-10" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] text-[20px] leading-[1.1] lg:text-xl ml-5">Marshmallow Root</h3>
                        <p class="text-gray-600 pl-[4px] text-[16px] lg:text-base ml-5">Soothes digestion.</p>
                    </div>
                </div>

                <div class="flex items-center w-full border-b lg:flex-col lg:border-b-0"
                    style="border-color: #FFE1AA">
                    <div class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-6 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/california-poppy.png" alt="California Poppy"
                            class="max-w-full max-h-full object-contain ml-10" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] text-[20px] leading-[1.1] lg:text-xl ml-5">California Poppy</h3>
                        <p class="text-gray-600 pl-[4px] text-[16px] lg:text-base ml-5">Relaxes the body.</p>
                    </div>
                </div>

                <div class="flex items-center w-full border-b pb-2 lg:flex-col lg:border-b-0"
                    style="border-color: #FFE1AA">
                    <div class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-6 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/prickly-pear.png" alt="Prickly Pear"
                            class="max-w-full max-h-full object-contain ml-10" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] text-[20px] leading-[1.1] lg:text-xl ml-5">Prickly Pear</h3>
                        <p class="text-gray-600 pl-[4px] text-[16px]text-sm lg:text-base ml-5">Keeps sleep steady.</p>
                    </div>
                </div>
            </div>

            <div class="text-center md:justify-items-center">
                <p class="text-[#525252] font-gelasio italic mb-4 text-xl lg:text-[28px] text-center leading-[1.1]">
                    So your skin restores overnight, and you rise with a healthy glow.
                </p>

                <ShopButton
                    id="buy-button"
                    anchorId="cta-section"
                    textColorClass="text-[#58663a]"
                    :showIcon=true
                    class="mt-2 w-full md:w-auto text-white md:justify-center justify-start bg-[#d2f58c] rounded-full text-[1rem] font-light hover:bg-[#58663a]/50 transition lg:text-2xl">
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