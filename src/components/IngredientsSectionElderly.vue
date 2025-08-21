<template>
    <!-- Ingredients Section -->
    <section class="py-[36px] lg:pt-16 bg-[#FFFAF0] flex-col items-center justify-center">
        <div class="w-full flex flex-col items-center justify-center">
            <h2
                class="font-crossfit text-[30px] leading-[1.14] md:px-64 lg:text-4xl text-[#370F1E] text-center mb-2 lg:mb-12 mx-8">
                EACH INGREDIENT WAS CAREFULLY SELECTED HELP YOU SLEEP DEEPLY, NATURALLY:
            </h2>

            <div class="w-[316px] mt-[14px] lg:max-w-5xl lg:grid-cols-5 lg:gap-8 lg:mb-4">
                <div class="flex items-center py-2 h-[96px] relative last:after:hidden lg:flex-col lg:border-b-0
                    after:content-[''] after:absolute after:left-0 after:right-0 after:h-[2px] after:bg-[var(--borda-cor)]
                    after:bottom-[-4px]" style="--borda-cor: #FFE1AA">
                    <div
                        class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-4 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/passionflower.png" alt="Passionflower"
                            class="max-w-full max-h-full object-contain" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] font-crossfit text-[20px] lg:text-xl mb-1">Passionflower</h3>
                        <p class="text-gray-600 text-[16px] leading-[1.04em] lg:text-base">
                            Calms the mind and eases anxious thoughts so you can fall asleep naturally.
                        </p>
                    </div>
                </div>
                <div class="flex items-center pt-2  pb-2 border-b-2 lg:flex-col lg:border-b-0"
                    style="border-color: #FFE1AA">
                    <div
                        class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-4 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/california-poppy.png" alt="California Poppy"
                            class="max-w-full max-h-full object-contain" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] font-crossfit text-[20px] lg:text-xl mb-1">California Poppy</h3>
                        <p class="text-gray-600 text-[16px] leading-[1.04em] lg:text-base">Relaxes the body and helps
                            you stay asleep without feeling sedated.</p>
                    </div>
                </div>
                <div class="flex items-center pt-2  pb-2 border-b-2 lg:flex-col lg:border-b-0"
                    style="border-color: #FFE1AA">
                    <div
                        class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-4 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/marshmallow-root.png" alt="Marshmallow Root"
                            class="max-w-full max-h-full object-contain" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] font-crossfit text-[20px] lg:text-xl mb-1">Marshmallow Root</h3>
                        <p class="text-gray-600 text-[16px] leading-[1.04em] lg:text-base">Helps soothe reflux and
                            throat irritation that can disturb your sleep.</p>
                    </div>
                </div>
                <div class="flex items-center pt-2  pb-2 border-b-2 lg:flex-col lg:border-b-0"
                    style="border-color: #FFE1AA">
                    <div
                        class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-4 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/corydalis.png" alt="Corydalis"
                            class="max-w-full max-h-full object-contain" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] font-crossfit text-[20px] lg:text-xl mb-1">Corydalis</h3>
                        <p class="text-gray-600 text-[16px] leading-[1.04em] lg:text-base">Eases minor aches and
                            tension, so your body can fully rest.</p>
                    </div>
                </div>
                <div class="flex items-center pt-2 pb-2 border-b-2 lg:flex-col lg:border-b-0"
                    style="border-color: #FFE1AA">
                    <div
                        class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-4 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/prickly-pear.png" alt="Prickly Pear"
                            class="max-w-full max-h-full object-contain" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] font-crossfit text-[20px] lg:text-xl mb-1">Prickly Pear</h3>
                        <p class="text-gray-600 text-[16px] leading-[1.04em] lg:text-base">Supports digestion and
                            reduces inflammation to keep your sleep steady.</p>
                    </div>
                </div>
            </div>

            <div class="text-center">
                <p class="text-[#525252] leading-[1] px-8 md:px-0 font-crossfit mb-6 text-xl lg:text-3xl mx-8">
                    Gentle Ingredients. <br> Powerful Sleep Support.
                </p>
                <div class="flex justify-center">
                    <ShopButton id="buy-button" productId="prod_SbKYsQrxStW8wB" textColorClass="text-[#083d4f]"
                        iconColorClass="text-[#083d4f]" title="Shop: First Trial Special Offer"
                        class=" bg-[#ffc35a] font-medium text-lg lg:text-xl justify-between w-[316px]" />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import ShopButton from '../components/ShopButton.vue'
</script>

<style></style>