<template>
    <!-- Ingredients Section -->
    <section class="pt-10 lg:pt-16 bg-[#FFFAF0]">
        <div class="w-full">
            <div class="max-w-[21rem] w-[316px] md:justify-items-center md:max-w-full mx-auto">
                <h2
                    class="font-gelasio w-[316px] md:max-w-[700px] text-[28px] leading-[1.12] lg:text-[40px] text-[#525252] text-start md:text-center mb-2 lg:mb-12 italic">
                    An advanced botanical formula designed to support your sleep cycle.
                </h2>

                <div class="grid grid-cols-1 lg:grid-cols-5 lg:gap-0 lg:mb-4">
                    <div class="flex items-center w-[316px] py-2 border-b last:border-b-0 lg:flex-col lg:border-b-0 "
                        style="border-color: #FFE1AA">
                        <div
                            class="w-[full] h-[full] lg:w-24 lg:h-24 flex items-center justify-center mr-6 flex-shrink-0 lg:mb-3 lg:mr-0">
                            <img src="@/assets/image/sleepWomam/passionflower.png" alt="Passionflower"
                                class="w-[80px] h-[80px] object-contain ml-5" />
                        </div>
                        <div class="text-left lg:text-center flex justify-center items-center">
                            <div class="mt-2">
                                <h3 class="text-[#525252] text-[20px] leading-[1.1] lg:text-xl font-light">Passionflower
                                </h3>
                                <p class="text-gray-600 text-[16px] lg:text-base font-light">Quiets the mind.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center w-[316px] border-b lg:flex-col lg:border-b-0"
                        style="border-color: #FFE1AA">
                        <div
                            class="w-[full] h-[full] lg:w-24 lg:h-24 flex items-center justify-center mr-6 flex-shrink-0 lg:mb-3 lg:mr-0">
                            <img src="@/assets/image/sleepWomam/corydalis.png" alt="Corydalis"
                                class="w-[80px] h-[80px] object-contain ml-5" />
                        </div>
                        <div class="text-left lg:text-center flex justify-center items-center">
                            <div class="mt-2">
                                <h3 class="text-[#525252] text-[20px] leading-[1.1] lg:text-xl font-light">Corydalis
                                </h3>
                                <p class="text-gray-600 text-[16px] lg:text-base font-light">Eases tension.</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center w-[316px] border-b lg:flex-col lg:border-b-0"
                        style="border-color: #FFE1AA">
                        <div
                            class="w-[full] h-[full] lg:w-24 lg:h-24 flex items-center justify-center mr-6 flex-shrink-0 lg:mb-3 lg:mr-0">
                            <img src="@/assets/image/sleepWomam/marshmallow-root.png" alt="Marshmallow Root"
                                class="w-[80px] h-[80px] object-contain ml-5" />
                        </div>
                        <div class="text-left lg:text-center flex justify-center items-center">
                            <div class="mt-2">
                                <h3 class="text-[#525252] text-[20px] leading-[1.1] lg:text-xl font-light">Marshmallow
                                    Root</h3>
                                <p class="text-gray-600 text-[16px] lg:text-base font-light">Soothes digestion.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center w-[316px] border-b lg:flex-col lg:border-b-0"
                        style="border-color: #FFE1AA">
                        <div
                            class="w-[full] h-[full] lg:w-24 lg:h-24 flex items-center justify-center mr-6 flex-shrink-0 lg:mb-3 lg:mr-0">
                            <img src="@/assets/image/sleepWomam/california-poppy.png" alt="California Poppy"
                                class="w-[80px] h-[80px] object-contain ml-5" />
                        </div>
                        <div class="text-left lg:text-center flex justify-center items-center">
                            <div class="mt-2">
                                <h3 class="text-[#525252] text-[20px] leading-[1.1] lg:text-xl font-light">California
                                    Poppy</h3>
                                <p class="text-gray-600 text-[16px] lg:text-base font-light">Relaxes the body.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center w-[316px] border-b pb-2 lg:flex-col lg:border-b-0"
                        style="border-color: #FFE1AA">
                        <div
                            class="w-[full] h-[full] lg:w-24 lg:h-24 flex items-center justify-center mr-6 flex-shrink-0 lg:mb-3 lg:mr-0">
                            <img src="@/assets/image/sleepWomam/prickly-pear.png" alt="Prickly Pear"
                                class="w-[80px] h-[80px] object-contain ml-5" />
                        </div>
                        <div class="text-left lg:text-center flex justify-center items-center">
                            <div class="mt-2">
                                <h3 class="text-[#525252] text-[20px] leading-[1.1] lg:text-xl font-light">Prickly Pear
                                </h3>
                                <p class="text-gray-600 text-[16px]text-sm lg:text-base font-light">Keeps sleep
                                    steady.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center md:justify-items-center mt-[25px]">
                    <p class="text-[#525252] font-gelasio italic text-xl lg:text-[28px] text-center leading-[1.1]">
                        So your skin restores overnight, <br class="block md:hidden">and you rise with a healthy glow.
                    </p>

                    <ShopButton id="buy-button" anchorId="cta-section" textColorClass="text-[#58663a]" :showIcon=true
                        class="mt-[24px] w-[316px] h-[50px] text-white justify-center justify-between bg-[#d2f58c] rounded-full text-[1rem] font-light hover:bg-[#58663a]/50 transition  lg:text-[20px] lg:px-5 lg:w-[392px]">
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

<style></style>