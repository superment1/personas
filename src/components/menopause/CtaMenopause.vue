<template>
    <!-- Final CTA Section -->
    <section id="cta-section" class="relative rounded-t-3xl bg-[#63CFF2]">
        <div
            class="w-full px-0 pt-[44px] h-[877px] lg:h-[650px] rounded-t-3xl bg-[url('@/assets/image/discomfort/banner-produto-1.webp')] md:bg-[url('@/assets/image/discomfort/banner-produto-1-desk.webp')] bg-cotain bg-[90%_0%] md:bg-cover md:bg-top bg-no-repeat">
            <div class="w-[full] flex items-center justify-center">
                <!-- Mobile Layout -->
                <div class="block md:hidden w-[330px]">
                    <p class="text-[#FFF] font-gelasio text-[32px] leading-[1.1] italic font-bold">
                        SHOP NOW
                    </p>
                    <p class="font-gelasio italic text-[44px] leading-[0.9] mt-[18px] text-[#370F1E]">Your best
                        <br>nights and
                        brighter mornings
                        <span class="text-[#FFF]"><br>start now.</span>
                    </p>
                    <div class="flex flex-col items-center justify-end w-[316px]">
                        <img src="@/assets/image/discomfort/price-thin.png"
                            class="w-[123px] h-[236px] ml-[210px] -mt-4 relative z-10" />
                        <img src="@/assets/image/discomfort/free.png"
                            class="h-[90px] w-[93px] ml-[240px] -mt-7 relative z-1" />
                    </div>
                    <div class="mt-10 flex flex-col items-center w-full gap-6">
                        <p class="text-[#370F1E] font-gelasio italic text-[28px] leading-[1.1] text-center">Try it today
                            with our
                            First Trial Special Offer.</p>
                        <ShopButton id="buy-button" productId="prod_SbKYsQrxStW8wB" textColorClass="text-[#083D4F]"
                            :showIcon=false
                            class="w-[230px] bg-[#E6B4FF] rounded-full font-bold hover:bg-[#E6B4FF]/70 transition font-DMSans text-[18px]">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.5 22C6.95 22 6.47917 21.8042 6.0875 21.4125C5.69583 21.0208 5.5 20.55 5.5 20C5.5 19.45 5.69583 18.9792 6.0875 18.5875C6.47917 18.1958 6.95 18 7.5 18C8.05 18 8.52083 18.1958 8.9125 18.5875C9.30417 18.9792 9.5 19.45 9.5 20C9.5 20.55 9.30417 21.0208 8.9125 21.4125C8.52083 21.8042 8.05 22 7.5 22ZM17.5 22C16.95 22 16.4792 21.8042 16.0875 21.4125C15.6958 21.0208 15.5 20.55 15.5 20C15.5 19.45 15.6958 18.9792 16.0875 18.5875C16.4792 18.1958 16.95 18 17.5 18C18.05 18 18.5208 18.1958 18.9125 18.5875C19.3042 18.9792 19.5 19.45 19.5 20C19.5 20.55 19.3042 21.0208 18.9125 21.4125C18.5208 21.8042 18.05 22 17.5 22ZM6.65 6L9.05 11H16.05L18.8 6H6.65ZM5.7 4H20.45C20.8333 4 21.125 4.17083 21.325 4.5125C21.525 4.85417 21.5333 5.2 21.35 5.55L17.8 11.95C17.6167 12.2833 17.3708 12.5417 17.0625 12.725C16.7542 12.9083 16.4167 13 16.05 13H8.6L7.5 15H19.5V17H7.5C6.75 17 6.18333 16.6708 5.8 16.0125C5.41667 15.3542 5.4 14.7 5.75 14.05L7.1 11.6L3.5 4H1.5V2H4.75L5.7 4Z"
                                    fill="#083D4F" />
                            </svg>
                            Shop: Shop Now
                        </ShopButton>
                        <img src="@/assets/image/sleepWomam/stripe_logo.svg" class="w-26 mt-2" />
                    </div>
                </div>
                <div class="hidden w-full lg:grid grid-cols-2">
                    <div class="col-span-1 flex flex-col items-end justify-start">
                        <div class="flex flex-col items-center justify-end relative">
                            <img src="@/assets/image/discomfort/price-thin.png"
                                class="w-[123px] h-[236px] lg:w-[133px] lg:h-[255px] left-[40px] top-[80px] relative z-10" />
                            <img src="@/assets/image/discomfort/free.png"
                                class="h-[90px] w-[93px] ml-[220px] relative z-1 top-[55px] right-[50px]" />
                        </div>
                    </div>
                    <div class="col-span-1 flex flex-col items-start justify-center pt-[80px]">
                        <p class="font-crossfit text-[#FFC35A] text-[40px] font-black leading-[1.1]">SHOP NOW</p>
                        <p class="font-DMSans text-[28px] leading-[1.1] text-[#370F1E] mt-2">Comfortable, restorative
                            sleep
                            <br>starts here
                        </p>
                        <p class="font-crossfit text-[#FFF] text-[52px] leading-[1.1] uppercase font-black mt-2">No more
                            reflux. No <br>more restlessness. </p>
                        <img src="@/assets/image/sleepWomam/stripe_logo.svg" class="w-[140px] mt-2" />
                        <ShopButton id="buy-button" productId="prod_SbKYsQrxStW8wB" textColorClass="text-[#083D4F]"
                            :showIcon=false
                            class="w-[343px] h-[50px] bg-[#FFC35A] rounded-full font-bold hover:bg-[#FFC63a]/70 transition font-DMSans text-[20px] mt-[24px] ">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.5 22C6.95 22 6.47917 21.8042 6.0875 21.4125C5.69583 21.0208 5.5 20.55 5.5 20C5.5 19.45 5.69583 18.9792 6.0875 18.5875C6.47917 18.1958 6.95 18 7.5 18C8.05 18 8.52083 18.1958 8.9125 18.5875C9.30417 18.9792 9.5 19.45 9.5 20C9.5 20.55 9.30417 21.0208 8.9125 21.4125C8.52083 21.8042 8.05 22 7.5 22ZM17.5 22C16.95 22 16.4792 21.8042 16.0875 21.4125C15.6958 21.0208 15.5 20.55 15.5 20C15.5 19.45 15.6958 18.9792 16.0875 18.5875C16.4792 18.1958 16.95 18 17.5 18C18.05 18 18.5208 18.1958 18.9125 18.5875C19.3042 18.9792 19.5 19.45 19.5 20C19.5 20.55 19.3042 21.0208 18.9125 21.4125C18.5208 21.8042 18.05 22 17.5 22ZM6.65 6L9.05 11H16.05L18.8 6H6.65ZM5.7 4H20.45C20.8333 4 21.125 4.17083 21.325 4.5125C21.525 4.85417 21.5333 5.2 21.35 5.55L17.8 11.95C17.6167 12.2833 17.3708 12.5417 17.0625 12.725C16.7542 12.9083 16.4167 13 16.05 13H8.6L7.5 15H19.5V17H7.5C6.75 17 6.18333 16.6708 5.8 16.0125C5.41667 15.3542 5.4 14.7 5.75 14.05L7.1 11.6L3.5 4H1.5V2H4.75L5.7 4Z"
                                    fill="#083D4F" />
                            </svg>
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

<style></style>