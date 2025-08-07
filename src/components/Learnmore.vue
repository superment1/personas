<template>
    <!-- Learn More Section -->
    <section 
        class="relative z-10 py-7 rounded-t-3xl -mt-6" 
        :style="{ backgroundColor }"    
    >
        <div class="max-w-7xl mx-auto px-4 w-[355px]">
            <p class="text-[#370F1E] mb-4 text-xl lg:text-2xl text-center tracking-tight leading-[1.1]">
                {{ text }}
            </p>
            <div class="flex justify-center mb-10">
                <button
                    class="border-[#370F1E] text-[#370F1E] px-6 py-2 rounded-full text-sm hover:bg-[#370F1E]/10 transition-colors duration-300 flex items-center gap-2"
                      style="border: 1px solid #370F1E"
                    >
                    <span class="text-[#370F1E] text-lg">Visit now</span>
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.05375 14.7939L0 13.7402L11.4462 2.29395H4.5V0.793945H14V10.2939H12.5V3.3477L1.05375 14.7939Z"
                            fill="#370F1E" />
                    </svg>
                </button>
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