<template>
    <!-- Ingredients Section -->
    <section class="py-8 lg:pt-16 bg-[#FFFAF0]">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="font-gelasio text-3xl lg:text-4xl text-[#525252] text-center mb-8 lg:mb-12 italic mx-8">
                An advanced botanical formula<br>designed to support your sleep cycle.
            </h2>

            <div class="grid grid-cols-1 max-w-[260px] mx-auto lg:max-w-5xl lg:grid-cols-5 gap-3 lg:gap-8 mb-12 lg:mb-4">
                <div class="flex items-center py-4 border-b last:border-b-0 lg:flex-col lg:border-b-0"
                    style="border-color: #FFE1AA">
                    <div class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-4 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/passionflower.png" alt="Passionflower"
                            class="max-w-full max-h-full object-contain" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] text-lg lg:text-xl mb-1">Passionflower</h3>
                        <p class="text-gray-600 text-sm lg:text-base">Quiets the mind.</p>
                    </div>
                </div>

                <div class="flex items-center pt-2 border-b lg:flex-col lg:border-b-0"
                    style="border-color: #FFE1AA">
                    <div class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-4 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/corydalis.png" alt="Corydalis"
                            class="max-w-full max-h-full object-contain" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] text-lg lg:text-xl mb-1">Corydalis</h3>
                        <p class="text-gray-600 text-sm lg:text-base">Eases tension.</p>
                    </div>
                </div>

                <div class="flex items-center pt-2 border-b lg:flex-col lg:border-b-0"
                    style="border-color: #FFE1AA">
                    <div class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-4 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/marshmallow-root.png" alt="Marshmallow Root"
                            class="max-w-full max-h-full object-contain" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] text-lg lg:text-xl mb-1">Marshmallow Root</h3>
                        <p class="text-gray-600 text-sm lg:text-base">Soothes digestion.</p>
                    </div>
                </div>

                <div class="flex items-center pt-2 border-b lg:flex-col lg:border-b-0"
                    style="border-color: #FFE1AA">
                    <div class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-4 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/california-poppy.png" alt="California Poppy"
                            class="max-w-full max-h-full object-contain" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] text-lg lg:text-xl mb-1">California Poppy</h3>
                        <p class="text-gray-600 text-sm lg:text-base">Relaxes the body.</p>
                    </div>
                </div>

                <div class="flex items-center pt-2 border-b lg:flex-col lg:border-b-0"
                    style="border-color: #FFE1AA">
                    <div class="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center mr-4 flex-shrink-0 lg:mb-3 lg:mr-0">
                        <img src="@/assets/image/sleepWomam/prickly-pear.png" alt="Prickly Pear"
                            class="max-w-full max-h-full object-contain" />
                    </div>
                    <div class="text-left lg:text-center">
                        <h3 class="text-[#525252] text-lg lg:text-xl mb-1">Prickly Pear</h3>
                        <p class="text-gray-600 text-sm lg:text-base">Keeps sleep steady.</p>
                    </div>
                </div>
            </div>

            <div class="text-center">
                <p class="text-[#525252] font-gelasio italic mb-6 text-xl lg:text-3xl mx-8">
                    So your skin restores overnight, and you rise with a healthy glow.
                </p>
                <div class="flex justify-center">
                    <ShopButton anchor-id="#" title="Shop: First Trial Special Offer" class="text-lg lg:text-xl" />
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