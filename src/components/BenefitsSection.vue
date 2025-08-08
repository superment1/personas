<template>
    <!-- What Happens When You Sleep -->
    <section class="pb-14">
        <div class="max-w-7xl lg:max-w-5xl justify-items-center mx-auto lg:w-full px-4">
            <div class="max-w-[21rem] md:justify-items-center md:max-w-full mx-auto">
            <h2 class="font-gelasio text-[28px] leading-none text-[#525252] text-left lg:text-center lg:text-[40px] mb-6 lg:mb-12 italic">
                What happens when you sleep naturally:
            </h2>
            <div class="max-w-[21rem] md:max-w-full mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-6">
                <!-- Benefits Grid -->
                <div class="flex flex-col items-start gap-4 lg:items-start">
                    <img src="@/assets/image/sleepWomam/collagen.jpg" alt="Collagen"
                        class="w-[150px] h-[150px] lg:w-[290px] lg:h-[160px] rounded-xl object-cover flex-shrink-0" />
                    <div class="text-left">
                        <h3 class="font-normal text-[24px] font-DMSans leading-[1.1] text-[#525252] mb-1">Collagen</h3>
                        <p class="text-[#525252] leading-[1.1] textfont-DMSans text-[18px] lg:text-lg font-light lg:leading-[1.15] lg:w-[300px]">
                            Natural sleep boosts collagen, helping firm <br class="block md:hidden">the skin and reduce wrinkles.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col items-start gap-4 lg:items-start">
                    <img src="@/assets/image/sleepWomam/hydration.png" alt="Hydration"
                        class="w-[150px] h-[150px] lg:w-[290px] lg:h-[160px] rounded-xl object-cover flex-shrink-0" />
                    <div class="text-left">
                        <h3 class="font-normal text-[24px] font-DMSans leading-[1.1] text-[#525252] mb-1">Hydration</h3>
                        <p class="text-[#525252] text-[18px] font-DMSans leading-[1.1] lg:text-lg font-light lg:leading-[1.15]">
                            At night, your skin retains more moisture <br class="block md:hidden">— leaving it fresher and more supple by
                            <br class="block md:hidden">morning.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col items-start gap-4 lg:items-start">
                    <img src="@/assets/image/sleepWomam/cell-regeneration.png" alt="Cell Regeneration"
                        class="w-[150px] h-[150px] lg:w-[290px] lg:h-[160px] rounded-xl object-cover flex-shrink-0" />
                    <div class="text-left">
                        <h3 class="font-normal text-[24px] font-DMSans leading-[1.1] text-[#525252] mb-1">Cell Regeneration</h3>
                        <p class="text-[#525252] text-[18px] font-DMSans leading-[1.1] lg:text-lg font-light lg:leading-[1.15] lg:w-[280px]">
                            During sleep, your skin renews itself <br class="block md:hidden">— repairing damage and revealing a healthier glow.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col items-start gap-4 lg:items-start">
                    <img src="@/assets/image/sleepWomam/even-skin-tone.png" alt="Even Skin Tone"
                        class="w-[150px] h-[150px] lg:w-[290px] lg:h-[160px] rounded-xl object-cover flex-shrink-0" />
                    <div class="text-left">
                        <h3 class="font-normal text-[24px] font-DMSans leading-[1.1] text-[#525252] mb-1">Even Skin Tone</h3>
                        <p class="text-[#525252] text-[18px] font-DMSans leading-[1.1] lg:text-lg font-light lg:leading-[1.15]">
                            Restorative sleep supports tone correction and <br class="block md:hidden">reduces spots and <br class="block md:hidden">dark circles.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col items-start gap-4 lg:items-start">
                    <img src="@/assets/image/sleepWomam/stress-reduction.png" alt="Stress Reduction"
                        class="w-[150px] h-[150px] lg:w-[290px] lg:h-[160px] rounded-xl object-cover flex-shrink-0" />
                    <div class="text-left">
                        <h3 class="font-normal text-[24px] font-DMSans leading-[1.1] text-[#525252] mb-1">Stress Reduction</h3>
                        <p class="text-[#525252] text-[18px] font-DMSans leading-[1.1] lg:text-lg font-light lg:leading-[1.15]">
                            Good sleep lowers cortisol levels — <br class="block md:hidden">calming inflammation and <br class="lg:block">preventing flare-<br class="block md:hidden">ups like
                            acne or dermatitis.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col items-start gap-4 lg:items-start">
                    <img src="@/assets/image/sleepWomam/glymphatic-detox.png" alt="Glymphatic Detox"
                        class="w-[150px] h-[150px] lg:w-[290px] lg:h-[160px] rounded-xl object-cover flex-shrink-0" />
                    <div class="text-left">
                        <h3 class="font-normal text-[24px] font-DMSans leading-[1.1] text-[#525252] mb-1">Glymphatic Detox</h3>
                        <p class="text-[#525252] text-[18px] font-DMSans leading-[1.1] lg:text-lg font-light lg:leading-[1.15]">
                            Deep sleep activates <br class="block md:hidden">the brain's glymphatic system, flushing toxins and reducing
                            puffiness and under-eye <br class="block md:hidden">shadows.
                        </p>
                    </div>
                </div>
            </div>
            <ShopButton
                id="buy-button"
                anchorId="cta-section"
                textColorClass="text-[#58663a]"
                :showIcon=true
                class="mt-2 w-[330px] text-white justify-center justify-between bg-[#d2f58c] rounded-full text-[1rem] font-light hover:bg-[#58663a]/50 transition">                  
                Shop: check our opening discount
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