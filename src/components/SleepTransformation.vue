<script lang="ts" setup>
import ShopButton from '../components/ShopButton.vue'
</script>

<template>
    <section class="py-[30px] pb-12 bg-white">
        <div class="max-w-7xl lg:max-w-[80rem] flex-col justify-items-center">
            <div class="flex-col flex md:flex-row justify-center items-center">
                <div class="flex flex-col md:gap-6 md:flex-row w-full w-[316px]">
                    <img class="rounded-[10px] w-[316px] h-[251px] md:w-[478px] max-h-max"
                        src="../assets/image/sleepElderly/Before-After-mobile.webp"></img>
                    <div class="flex-col  leading-none md:max-w-[462px] ">
                        <h2 class="uppercase text-[#370F1E] pt-4 font-crossfit text-[32px] md:text-[40px]">You’re not
                            just aging — <br>your sleep is changing.</h2>
                        <p
                            class="pt-[18px] text-[#525252] text-[16px] sm:text-[20px] tracking-wide font-light leading-[1.18em]">
                            As you age, your body makes less of the natural messengers that regulate sleep — like
                            melatonin and serotonin. Discomforts like reflux, tension, and light sleep become more
                            common.</p>
                        <p
                            class="pt-[13px] pb-6 text-[#525252] leading-[1.16em] text-[16px] sm:text-[20px] font-semibold">
                            Super Natural Sleep <span class="font-light">helps calm your body and support deep, natural
                                rest —
                                without drugs or next-day grogginess.</span>
                        </p>
                        <ShopButton id="buy-button" textColorClass="text-[#083d4f]" iconColorClass="text-[#083d4f]"
                            title="Shop: First Trial Special Offer"
                            class="bg-[#ffc35a] font-medium text-[18px] lg:text-2xl w-[322px] justify-between" />
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>