<template>
    <!-- Final CTA Section -->
    <section id="cta-section" class="relative rounded-t-3xl bg-[#63CFF2]">
        <div
            class="w-full px-0 p-[42px] h-[822px] rounded-t-3xl bg-[url('@/assets/image/sleepWomam/bg_footer.webp')] md:bg-[url('@/assets/image/sleepWomam/bg_footer_desktop.png')] bg-cotain bg-[70%_0%] md:bg-top bg-no-repeat md:h-[650px] h-full">
            <div class="w-full flex items-center justify-center lg:max-w-[90%] lg:mx-auto">
                <!-- Mobile Layout -->
                <div class="block md:hidden w-[316px]">
                    <p class="text-[#c3e6ff] text-[24px] leading-[1.1] font-medium italic font-gelasio">Sleep naturally.
                        Wake up<br>beautiful. Every day.</p>
                    <h2 class="text-white text-4xl pt-1 font-light italic font-gelasio">
                        SHOP NOW
                    </h2>
                    <img src="@/assets/image/sleepWomam/stripe_logo.svg" class="w-26 mt-[12px]" />
                    <div class="flex justify-center items-center">
                        <div class="relative left-[65px] top-2">
                            <PriceThin corValorAntigo="#6EC8F0" :valorAtual="42" :valorAntigo="60"
                                corFundoValorAtual="#3B0F1E" corValorAtual="#D2F58C" corFundoFree="#D2F58C"
                                corLetraFree="#58663A" />
                        </div>
                    </div>
                    <div class="text-white text-md mt-[138px]">
                        <div class="flex items-center justify-start  py-2">
                            <svg width="22" height="21" viewBox="0 0 22 21" class="w-6 h-6 flex-shrink-0" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.81147 20.1592L6.02697 17.1517L2.63847 16.4092L2.96922 12.921L0.673218 10.294L2.96922 7.66696L2.63847 4.17871L6.02697 3.43621L7.81147 0.428711L11 1.78246L14.1885 0.428711L15.973 3.43621L19.3615 4.17871L19.0307 7.66696L21.3267 10.294L19.0307 12.921L19.3615 16.4092L15.973 17.1517L14.1885 20.1592L11 18.8055L7.81147 20.1592ZM9.94997 13.4977L15.2537 8.19396L14.2 7.10946L9.94997 11.3595L7.79997 9.24021L6.74622 10.294L9.94997 13.4977Z"
                                    fill="#D2F58C" />
                            </svg>
                            <span class="ml-2 font-DMSans text-[16px] font-light">30-day satisfaction guarantee</span>
                        </div>
                        <div class="flex items-center justify-start py-3">
                            <svg width="22" height="21" viewBox="0 0 22 21" class="w-6 h-6 flex-shrink-0" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.81147 20.1592L6.02697 17.1517L2.63847 16.4092L2.96922 12.921L0.673218 10.294L2.96922 7.66696L2.63847 4.17871L6.02697 3.43621L7.81147 0.428711L11 1.78246L14.1885 0.428711L15.973 3.43621L19.3615 4.17871L19.0307 7.66696L21.3267 10.294L19.0307 12.921L19.3615 16.4092L15.973 17.1517L14.1885 20.1592L11 18.8055L7.81147 20.1592ZM9.94997 13.4977L15.2537 8.19396L14.2 7.10946L9.94997 11.3595L7.79997 9.24021L6.74622 10.294L9.94997 13.4977Z"
                                    fill="#D2F58C" />
                            </svg>
                            <span class="ml-2 leading-[1.2] font-DMSans text-[16px] font-light">Clean-label, clinically
                                guided formulation</span>
                        </div>
                        <div class="flex items-center justify-start py-3">
                            <svg width="22" height="21" viewBox="0 0 22 21" class="w-6 h-6 flex-shrink-0" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.81147 20.1592L6.02697 17.1517L2.63847 16.4092L2.96922 12.921L0.673218 10.294L2.96922 7.66696L2.63847 4.17871L6.02697 3.43621L7.81147 0.428711L11 1.78246L14.1885 0.428711L15.973 3.43621L19.3615 4.17871L19.0307 7.66696L21.3267 10.294L19.0307 12.921L19.3615 16.4092L15.973 17.1517L14.1885 20.1592L11 18.8055L7.81147 20.1592ZM9.94997 13.4977L15.2537 8.19396L14.2 7.10946L9.94997 11.3595L7.79997 9.24021L6.74622 10.294L9.94997 13.4977Z"
                                    fill="#D2F58C" />
                            </svg>
                            <span class="ml-2 leading-[1.2] font-DMSans text-[16px] font-light">Trusted U.S.
                                manufacturing, under FDA and GMP certification</span>
                        </div>
                    </div>
                    <div class="mb-16">
                        <ShopButton id="buy-button" productId="prod_SbKYsQrxStW8wB" textColorClass="text-[#58663a]"
                            :showIcon=true
                            class="mt-[12px] w-[311px] h-[50px] !pr-[1.5rem] text-white md:ml-8 md:w-auto md:justify-center justify-between bg-[#d2f58c] rounded-full text-[1.1rem] font-light hover:bg-[#58663a]/50 transition ">
                            Shop: First Trial Special Offer
                        </ShopButton>
                    </div>
                </div>

                <!-- Desktop Layout -->
                <div class="hidden md:grid md:grid-cols-2 md:gap-12 md:items-center md:min-h-[660px] md:pt-4 md:py-20">
                    <!-- Left Side - Product & Pricing -->
                    <div class="relative">
                        <div class="absolute right-12 -top-52 lg:right-4 lg:-top-56">
                            <PriceThin corValorAntigo="#6EC8F0" :valorAtual="42" :valorAntigo="60"
                                corFundoValorAtual="#3B0F1E" corValorAtual="#D2F58C" corFundoFree="#D2F58C"
                                corLetraFree="#58663A" />
                        </div>
                    </div>

                    <!-- Right Side - Content -->
                    <div class="text-left w-[380px] h-[510px]">
                        <p class="text-[#A0D7FF] text-[24px] font-medium italic font-gelasio mb-0 leading-[1.12]">
                            Sleep naturally. Wake up <br>beautiful. Every day.
                        </p>
                        <h2 class="text-white text-[40px] font-bold italic font-gelasio mb-[10px]">
                            SHOP NOW
                        </h2>
                        <div class="inline-block mb-[8px]">
                            <img src="@/assets/image/sleepWomam/stripe_logo.svg" class="w-[150px]" />
                        </div>
                        <div class="space-y-[10px] mb-[16px] text-white text-lg">
                            <div class="flex items-center">
                                <svg width="22" height="21" viewBox="0 0 22 21" class="w-6 h-6 mr-3" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.81147 20.1592L6.02697 17.1517L2.63847 16.4092L2.96922 12.921L0.673218 10.294L2.96922 7.66696L2.63847 4.17871L6.02697 3.43621L7.81147 0.428711L11 1.78246L14.1885 0.428711L15.973 3.43621L19.3615 4.17871L19.0307 7.66696L21.3267 10.294L19.0307 12.921L19.3615 16.4092L15.973 17.1517L14.1885 20.1592L11 18.8055L7.81147 20.1592ZM9.94997 13.4977L15.2537 8.19396L14.2 7.10946L9.94997 11.3595L7.79997 9.24021L6.74622 10.294L9.94997 13.4977Z"
                                        fill="#D2F58C" />
                                </svg>
                                <span class="font-DMSans text-[16px] font-regular">30-day satisfaction guarantee</span>
                            </div>
                            <div class="flex items-center">
                                <svg width="22" height="21" viewBox="0 0 22 21" class="w-6 h-6 mr-3" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.81147 20.1592L6.02697 17.1517L2.63847 16.4092L2.96922 12.921L0.673218 10.294L2.96922 7.66696L2.63847 4.17871L6.02697 3.43621L7.81147 0.428711L11 1.78246L14.1885 0.428711L15.973 3.43621L19.3615 4.17871L19.0307 7.66696L21.3267 10.294L19.0307 12.921L19.3615 16.4092L15.973 17.1517L14.1885 20.1592L11 18.8055L7.81147 20.1592ZM9.94997 13.4977L15.2537 8.19396L14.2 7.10946L9.94997 11.3595L7.79997 9.24021L6.74622 10.294L9.94997 13.4977Z"
                                        fill="#D2F58C" />
                                </svg>
                                <span class="font-DMSans text-[16px] font-regular">Clean-label, clinically guided
                                    formulation</span>
                            </div>
                            <div class="flex items-center">
                                <svg width="22" height="28" viewBox="0 0 22 21" class="w-8 h-8 mr-3" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.81147 20.1592L6.02697 17.1517L2.63847 16.4092L2.96922 12.921L0.673218 10.294L2.96922 7.66696L2.63847 4.17871L6.02697 3.43621L7.81147 0.428711L11 1.78246L14.1885 0.428711L15.973 3.43621L19.3615 4.17871L19.0307 7.66696L21.3267 10.294L19.0307 12.921L19.3615 16.4092L15.973 17.1517L14.1885 20.1592L11 18.8055L7.81147 20.1592ZM9.94997 13.4977L15.2537 8.19396L14.2 7.10946L9.94997 11.3595L7.79997 9.24021L6.74622 10.294L9.94997 13.4977Z"
                                        fill="#D2F58C" />
                                </svg>
                                <span class="font-DMSans text-[16px] font-regular leading-[1.2]">Trusted U.S.
                                    manufacturing, under FDA and GMP certification</span>
                            </div>
                            <div class="flex items-center">
                                <svg width="22" height="21" viewBox="0 0 22 21" class="w-6 h-6 mr-3" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.81147 20.1592L6.02697 17.1517L2.63847 16.4092L2.96922 12.921L0.673218 10.294L2.96922 7.66696L2.63847 4.17871L6.02697 3.43621L7.81147 0.428711L11 1.78246L14.1885 0.428711L15.973 3.43621L19.3615 4.17871L19.0307 7.66696L21.3267 10.294L19.0307 12.921L19.3615 16.4092L15.973 17.1517L14.1885 20.1592L11 18.8055L7.81147 20.1592ZM9.94997 13.4977L15.2537 8.19396L14.2 7.10946L9.94997 11.3595L7.79997 9.24021L6.74622 10.294L9.94997 13.4977Z"
                                        fill="#D2F58C" />
                                </svg>
                                <span class="font-DMSans text-[16px] font-regular">Limited-time bundle pricing
                                    available</span>
                            </div>
                        </div>
                        <ShopButton id="buy-button" productId="prod_SbKYsQrxStW8wB" textColorClass="text-[#58663a]"
                            :showIcon=true
                            class="mt-0 w-[311px] lg:w-[342px] text-white justify-center justify-between bg-[#d2f58c] py-3 rounded-full text-[18px] font-light hover:bg-[#58663a]/50 transition lg:text-[20px] lg:justify-center gap-3">
                            Shop: First Trial Special Offer
                        </ShopButton>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import ShopButton from '../components/ShopButton.vue'
import PriceThin from '../components/PriceThin.vue';
</script>

<style></style>