<template>
    <!-- Learn More Section -->
    <section class="relative z-10 rounded-t-3xl h-[203px] -mt-[24px] pt-6 lg:h-[200px]" :style="{ backgroundColor }">
        <div class="max-w-7xl mx-auto px-4 w-[355px]">
            <p
                class="text-[#370F1E] mb-[14px] font-DMSans font-light text-[20px] text-center tracking-tight leading-[1.1]">
                {{ text }}
            </p>
            <div class="flex justify-center mb-10">
                <a href="https://superment.co/sleepbetter/" target="_blank" rel="noopener noreferrer">
                    <button
                        class="border-[#370F1E] text-[#370F1E] w-[157px] h-[48px] rounded-full hover:bg-[#370F1E]/10 transition-colors duration-300 flex items-center gap-2 justify-center -mt-[1px]"
                        style="border: 1px solid #370F1E">
                        <span class="text-[#370F1E] text-[20px] font-DMSans font-normal">Visit now</span>
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.05375 14.7939L0 13.7402L11.4462 2.29395H4.5V0.793945H14V10.2939H12.5V3.3477L1.05375 14.7939Z"
                                fill="#370F1E" />
                        </svg>
                    </button>
                </a>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
defineProps<{
    backgroundColor: string
    text: string
}>()
</script>