<template>
    <!-- Ingredients Section -->
    <section class="py-10 lg:pt-16 bg-[#FFFAF0]">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="font-crossfit text-[1.8rem] leading-[1.1] md:px-64 lg:text-4xl text-[#370F1E] text-center mb-2 lg:mb-12 mx-8">
                EACH INGREDIENT WAS CAREFULLY SELECTED HELP YOU SLEEP DEEPLY, NATURALLY:
            </h2>

            <div class="grid grid-cols-1 max-w-[300px] mx-auto lg:max-w-5xl lg:grid-cols-5 lg:gap-8 mb-6 lg:mb-4">
                <div class="flex items-center py-2 border-b-2 last:border-b-0 lg:flex-col lg:border-b-0"
                    style="border-color: #FFE1AA">
                    <div class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-4 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/passionflower.png" alt="Passionflower"
                            class="max-w-full max-h-full object-contain" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] font-crossfit text-lg lg:text-xl mb-1">Passionflower</h3>
                        <p class="text-gray-600 text-sm leading-none lg:text-base">Calms the mind and eases anxious thoughts so you can fall asleep naturally.</p>
                    </div>
                </div>
                <div class="flex items-center pt-2  pb-2 border-b-2 lg:flex-col lg:border-b-0"
                    style="border-color: #FFE1AA">
                    <div class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-4 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/california-poppy.png" alt="California Poppy"
                            class="max-w-full max-h-full object-contain" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] font-crossfit text-lg lg:text-xl mb-1">California Poppy</h3>
                        <p class="text-gray-600 text-sm leading-none lg:text-base">Relaxes the body and helps you stay asleep without feeling sedated.</p>
                    </div>
                </div>
                <div class="flex items-center pt-2  pb-2 border-b-2 lg:flex-col lg:border-b-0"
                    style="border-color: #FFE1AA">
                    <div class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-4 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/marshmallow-root.png" alt="Marshmallow Root"
                            class="max-w-full max-h-full object-contain" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] font-crossfit text-lg lg:text-xl mb-1">Marshmallow Root</h3>
                        <p class="text-gray-600 text-sm leading-none lg:text-base">Helps soothe reflux and throat irritation that can disturb your sleep.</p>
                    </div>
                </div>
                <div class="flex items-center pt-2  pb-2 border-b-2 lg:flex-col lg:border-b-0"
                    style="border-color: #FFE1AA">
                    <div class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-4 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/corydalis.png" alt="Corydalis"
                            class="max-w-full max-h-full object-contain" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] font-crossfit text-lg lg:text-xl mb-1">Corydalis</h3>
                        <p class="text-gray-600 text-sm leading-none lg:text-base">Eases minor aches and tension, so your body can fully rest.</p>
                    </div>
                </div>
                <div class="flex items-center pt-2 pb-2 border-b-2 lg:flex-col lg:border-b-0"
                    style="border-color: #FFE1AA">
                    <div class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-4 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/prickly-pear.png" alt="Prickly Pear"
                            class="max-w-full max-h-full object-contain" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] font-crossfit text-lg lg:text-xl mb-1">Prickly Pear</h3>
                        <p class="text-gray-600 text-sm leading-none lg:text-base">Supports digestion and reduces inflammation to keep your sleep steady.</p>
                    </div>
                </div>
            </div>

            <div class="text-center">
                <p class="text-[#525252] leading-[1] px-16 md:px-0 font-crossfit mb-6 text-xl lg:text-3xl mx-8">
                    Gentle Ingredients. Powerful Sleep Support.
                </p>
                <div class="flex justify-center">
                     <ShopButton  
                     id="buy-button" 
                     productId="prod_SbKYsQrxStW8wB" 
                     textColorClass="text-[#083d4f]" 
                     iconColorClass="text-[#083d4f]" 
                     title="Shop: check our opening discount" 
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