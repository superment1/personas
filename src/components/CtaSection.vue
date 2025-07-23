<template>
    <!-- Final CTA Section -->
    <section class="relative rounded-t-3xl bg-[#63CFF2]">
        <div class="w-full px-4 min-h-[600px] rounded-t-3xl bg-[url('@/assets/image/sleepWomam/bg_footer.png')] md:bg-[url('@/assets/image/sleepWomam/bg_footer_desktop.png')] bg-cover bg-top bg-no-repeat">
            <div class="w-11/12 mx-auto">
                <!-- Mobile Layout -->
                <div class="block md:hidden pb-12">
                    <p class="text-[#A0D7FF] text-2xl font-medium italic pt-8 font-gelasio">Sleep naturally.
                        Wake up<br>beautiful. Every day.</p>
                    <h2 class="text-white text-4xl font-light italic font-gelasio">
                        SHOP NOW
                    </h2>
                    <img src="@/assets/image/sleepWomam/stripe_logo.svg" class="w-26" />
                    <div class="flex justify-center items-center">
                        <div class="relative left-12 top-8">
                            <img src="@/assets/image/sleepWomam/price.png" class="h-40" />
                        </div>
                    </div>
                    <div class="space-y-3 mb-8 text-white text-md mt-48">
                        <div class="flex items-center justify-start py-2">
                            <svg width="22" height="21" viewBox="0 0 22 21" class="w-6 h-6" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.81147 20.1592L6.02697 17.1517L2.63847 16.4092L2.96922 12.921L0.673218 10.294L2.96922 7.66696L2.63847 4.17871L6.02697 3.43621L7.81147 0.428711L11 1.78246L14.1885 0.428711L15.973 3.43621L19.3615 4.17871L19.0307 7.66696L21.3267 10.294L19.0307 12.921L19.3615 16.4092L15.973 17.1517L14.1885 20.1592L11 18.8055L7.81147 20.1592ZM9.94997 13.4977L15.2537 8.19396L14.2 7.10946L9.94997 11.3595L7.79997 9.24021L6.74622 10.294L9.94997 13.4977Z"
                                    fill="#D2F58C" />
                            </svg>
                            <span class="ml-2">30-day satisfaction guarantee</span>
                        </div>
                        <div class="flex items-center justify-start py-2">
                            <svg width="22" height="21" viewBox="0 0 22 21" class="w-6 h-6" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.81147 20.1592L6.02697 17.1517L2.63847 16.4092L2.96922 12.921L0.673218 10.294L2.96922 7.66696L2.63847 4.17871L6.02697 3.43621L7.81147 0.428711L11 1.78246L14.1885 0.428711L15.973 3.43621L19.3615 4.17871L19.0307 7.66696L21.3267 10.294L19.0307 12.921L19.3615 16.4092L15.973 17.1517L14.1885 20.1592L11 18.8055L7.81147 20.1592ZM9.94997 13.4977L15.2537 8.19396L14.2 7.10946L9.94997 11.3595L7.79997 9.24021L6.74622 10.294L9.94997 13.4977Z"
                                    fill="#D2F58C" />
                            </svg>
                            <span class="ml-2">Clean-label, clinically guided formulation</span>
                        </div>
                        <div class="flex items-center justify-start py-2">
                            <svg width="22" height="21" viewBox="0 0 22 21" class="w-8 h-8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.81147 20.1592L6.02697 17.1517L2.63847 16.4092L2.96922 12.921L0.673218 10.294L2.96922 7.66696L2.63847 4.17871L6.02697 3.43621L7.81147 0.428711L11 1.78246L14.1885 0.428711L15.973 3.43621L19.3615 4.17871L19.0307 7.66696L21.3267 10.294L19.0307 12.921L19.3615 16.4092L15.973 17.1517L14.1885 20.1592L11 18.8055L7.81147 20.1592ZM9.94997 13.4977L15.2537 8.19396L14.2 7.10946L9.94997 11.3595L7.79997 9.24021L6.74622 10.294L9.94997 13.4977Z"
                                    fill="#D2F58C" />
                            </svg>
                            <span class="ml-2">Trusted U.S. manufacturing, under FDA and GMP
                                certification</span>
                        </div>
                    </div>
                    <div class="flex justify-center mb-20">
                        <ShopButton anchor-id="#" title="Shop: First Trial Special Offer" class="text-lg" />
                    </div>
                </div>

                <!-- Desktop Layout -->
                <div class="hidden md:grid md:grid-cols-2 md:gap-12 md:items-center md:min-h-[600px] md:py-20">
                    <!-- Left Side - Product & Pricing -->
                    <div class="relative">
                        <div class="relative">
                            <div class="absolute right-8 -top-52">
                                <img src="@/assets/image/sleepWomam/price.png" alt="Pricing" class="lg:h-48" />
                            </div>
                        </div>
                    </div>

                    <!-- Right Side - Content -->
                    <div class="text-left">
                        <p class="text-[#A0D7FF] text-2xl font-medium italic font-gelasio mb-4">
                            Sleep naturally. Wake up beautiful.<br>Every day.
                        </p>
                        <h2 class="text-white text-4xl font-bold italic font-gelasio mb-4">
                            SHOP NOW
                        </h2>
                        <div class="inline-block mb-4">
                            <img src="@/assets/image/sleepWomam/stripe_logo.svg" class="w-26" />
                        </div>
                        <div class="space-y-4 mb-8 text-white text-lg">
                            <div class="flex items-center">
                                <svg width="22" height="21" viewBox="0 0 22 21" class="w-6 h-6 mr-3" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.81147 20.1592L6.02697 17.1517L2.63847 16.4092L2.96922 12.921L0.673218 10.294L2.96922 7.66696L2.63847 4.17871L6.02697 3.43621L7.81147 0.428711L11 1.78246L14.1885 0.428711L15.973 3.43621L19.3615 4.17871L19.0307 7.66696L21.3267 10.294L19.0307 12.921L19.3615 16.4092L15.973 17.1517L14.1885 20.1592L11 18.8055L7.81147 20.1592ZM9.94997 13.4977L15.2537 8.19396L14.2 7.10946L9.94997 11.3595L7.79997 9.24021L6.74622 10.294L9.94997 13.4977Z"
                                        fill="#D2F58C" />
                                </svg>
                                <span>30-day satisfaction guarantee</span>
                            </div>
                            <div class="flex items-center">
                                <svg width="22" height="21" viewBox="0 0 22 21" class="w-6 h-6 mr-3" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.81147 20.1592L6.02697 17.1517L2.63847 16.4092L2.96922 12.921L0.673218 10.294L2.96922 7.66696L2.63847 4.17871L6.02697 3.43621L7.81147 0.428711L11 1.78246L14.1885 0.428711L15.973 3.43621L19.3615 4.17871L19.0307 7.66696L21.3267 10.294L19.0307 12.921L19.3615 16.4092L15.973 17.1517L14.1885 20.1592L11 18.8055L7.81147 20.1592ZM9.94997 13.4977L15.2537 8.19396L14.2 7.10946L9.94997 11.3595L7.79997 9.24021L6.74622 10.294L9.94997 13.4977Z"
                                        fill="#D2F58C" />
                                </svg>
                                <span>Clean-label, clinically guided formulation</span>
                            </div>
                            <div class="flex items-center">
                                <svg width="22" height="21" viewBox="0 0 22 21" class="w-6 h-6 mr-3" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.81147 20.1592L6.02697 17.1517L2.63847 16.4092L2.96922 12.921L0.673218 10.294L2.96922 7.66696L2.63847 4.17871L6.02697 3.43621L7.81147 0.428711L11 1.78246L14.1885 0.428711L15.973 3.43621L19.3615 4.17871L19.0307 7.66696L21.3267 10.294L19.0307 12.921L19.3615 16.4092L15.973 17.1517L14.1885 20.1592L11 18.8055L7.81147 20.1592ZM9.94997 13.4977L15.2537 8.19396L14.2 7.10946L9.94997 11.3595L7.79997 9.24021L6.74622 10.294L9.94997 13.4977Z"
                                        fill="#D2F58C" />
                                </svg>
                                <span>Trusted U.S. manufacturing, under FDA and GMP certification</span>
                            </div>
                            <div class="flex items-center">
                                <svg width="22" height="21" viewBox="0 0 22 21" class="w-6 h-6 mr-3" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.81147 20.1592L6.02697 17.1517L2.63847 16.4092L2.96922 12.921L0.673218 10.294L2.96922 7.66696L2.63847 4.17871L6.02697 3.43621L7.81147 0.428711L11 1.78246L14.1885 0.428711L15.973 3.43621L19.3615 4.17871L19.0307 7.66696L21.3267 10.294L19.0307 12.921L19.3615 16.4092L15.973 17.1517L14.1885 20.1592L11 18.8055L7.81147 20.1592ZM9.94997 13.4977L15.2537 8.19396L14.2 7.10946L9.94997 11.3595L7.79997 9.24021L6.74622 10.294L9.94997 13.4977Z"
                                        fill="#D2F58C" />
                                </svg>
                                <span>Limited-time bundle pricing available</span>
                            </div>
                        </div>
                        <ShopButton anchor-id="#" title="Shop: First Trial Special Offer" class="text-xl mb-32" />
                    </div>
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