<template>
    <!-- What Happens When You Sleep -->
    <section class="pb-4 lg:py-12">
        <div class="max-w-7xl lg:max-w-5xl justify-items-center mx-auto mb-8 px-4">
            <h2 class="font-gelasio text-[28px] lg:text-4xl leading-none text-[#525252] text-left lg:text-center mb-6 lg:mb-12 italic mx-8">
                What happens when you sleep naturally:
            </h2>
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 mx-8">
                <!-- Benefits Grid -->
                <div class="flex flex-col items-center gap-4 lg:items-start">
                    <img src="@/assets/image/sleepWomam/collagen.jpg" alt="Collagen"
                        class="w-[150px] h-[150px] lg:w-[290px] lg:h-[160px] rounded-xl object-cover flex-shrink-0" />
                    <div class="text-left">
                        <h3 class="font-light text-[20px] leading-[1.1] text-[#525252] mb-1">Collagen</h3>
                        <p class="text-[#525252] leading-[1.1] text-[16px] lg:text-lg font-light">
                            Natural sleep boosts collagen, helping firm the skin and reduce wrinkles.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col items-center gap-4 lg:items-start">
                    <img src="@/assets/image/sleepWomam/hydration.png" alt="Hydration"
                        class="w-[150px] h-[150px] lg:w-[290px] lg:h-[160px] rounded-xl object-cover flex-shrink-0" />
                    <div class="text-left">
                        <h3 class="font-light text-[20px] leading-[1.1] text-[#525252] mb-1">Hydration</h3>
                        <p class="text-[#525252] text-[16px] leading-[1.1] lg:text-lg font-light">
                            At night, your skin retains more moisture — leaving it fresher and more supple by
                            morning.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col items-center gap-4 lg:items-start">
                    <img src="@/assets/image/sleepWomam/cell-regeneration.png" alt="Cell Regeneration"
                        class="w-[150px] h-[150px] lg:w-[290px] lg:h-[160px] rounded-xl object-cover flex-shrink-0" />
                    <div class="text-left">
                        <h3 class="font-light text-[20px] leading-[1.1] text-[#525252] mb-1">Cell Regeneration</h3>
                        <p class="text-[#525252] text-[16px] leading-[1.1] lg:text-lg font-light">
                            During sleep, your skin renews itself — repairing damage and revealing a healthier glow.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col items-center gap-4 lg:items-start">
                    <img src="@/assets/image/sleepWomam/even-skin-tone.png" alt="Even Skin Tone"
                        class="w-[150px] h-[150px] lg:w-[290px] lg:h-[160px] rounded-xl object-cover flex-shrink-0" />
                    <div class="text-left">
                        <h3 class="font-light text-[20px] leading-[1.1] text-[#525252] mb-1">Even Skin Tone</h3>
                        <p class="text-[#525252] text-[16px] leading-[1.1] lg:text-lg font-light">
                            Restorative sleep supports tone correction and reduces spots and dark circles.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col items-center gap-4 lg:items-start">
                    <img src="@/assets/image/sleepWomam/stress-reduction.png" alt="Stress Reduction"
                        class="w-[150px] h-[150px] lg:w-[290px] lg:h-[160px] rounded-xl object-cover flex-shrink-0" />
                    <div class="text-left">
                        <h3 class="font-light text-[20px] leading-[1.1] text-[#525252] mb-1">Stress Reduction</h3>
                        <p class="text-[#525252] text-[16px] leading-[1.1] lg:text-lg font-light">
                            Good sleep lowers cortisol levels — calming inflammation and preventing flare-ups like
                            acne or dermatitis.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col items-center gap-4 lg:items-start">
                    <img src="@/assets/image/sleepWomam/glymphatic-detox.png" alt="Glymphatic Detox"
                        class="w-[150px] h-[150px] lg:w-[290px] lg:h-[160px] rounded-xl object-cover flex-shrink-0" />
                    <div class="text-left">
                        <h3 class="font-light text-[20px] leading-[1.1] text-[#525252] mb-1">Glymphatic Detox</h3>
                        <p class="text-[#525252] text-[16px] leading-[1.1] lg:text-lg font-light">
                            Deep sleep activates the brain's glymphatic system, flushing toxins and reducing
                            puffiness and under-eye shadows.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <ShopButton
                    id="buy-button"
                    productId="prod_SbKYsQrxStW8wB"
                    textColorClass="text-[#58663a]"
                    :showIcon=true
                    class="mt-2 text-white md:ml-8 w-[330px] md:w-auto md:justify-center justify-start bg-[#d2f58c] py-3 rounded-full text-[1.1rem] font-light hover:bg-[#58663a]/50 transition lg:text-2xl">
                    Shop: First Trial Special Offer
                </ShopButton>    
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import ShopButton from './ShopButton.vue';


</script>

<style>

</style>