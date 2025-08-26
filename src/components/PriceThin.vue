<!-- PriceBadge.vue -->
<script setup>
const props = defineProps({
    valorAtual: { type: [Number, String], required: true },
    valorAntigo: { type: [Number, String], required: true },
    corValorAntigo: { type: String, default: '#6EC8F0' },
    corFundoValorAtual: { type: String, default: '#370F1E' },
    corLetraValorAtual: { type: String, default: '#6EC8F0' },
    corValorAtual: { type: String, default: '#D2F58C' },
    corFundoFree: { type: String, default: '#D2F58C' },
    corLetraFree: { type: String, default: '#58663A' }
});
</script>

<template>
    <div class="w-[118px] select-none">
        <div
            class="w-full bg-white rounded-[7px] shadow-md px-1 pt-4 pb-1 flex flex-col items-center justify-start relative z-10">
            <div class="">
                <p class="w-[80px] text-start text-[17px] italic text-[#525252] font-gelasio leading-none mb-0">from</p>
                <div class="relative inline-block">
                    <span class="text-[44px] font-bold font-gelasio leading-[1.08]"
                        :style="{ color: corValorAntigo }">${{
                            valorAntigo }}</span>
                    <!-- risco -->
                    <span class="absolute left-0 right-0 top-1/2 border-t border-[#370F1E]"
                        style="transform: translateY(-50%) rotate(25deg);">
                    </span>
                </div>

                <p class="text-[14px] text-[#525252] leading-none font-gelasio">one bottle</p>
            </div>
            <div class="w-full rounded-[7px] mt-2 px-3 pt-2 pb-1" :style="{ background: corFundoValorAtual }">
                <span class="text-white text-[17px] font-gelasio italic leading-none mb-1">now</span>
                <p class="text-[44px] font-bold font-gelasio leading-[0.9]" :style="{ color: corValorAtual }">${{
                    valorAtual }}</p>
                <span class="text-white text-[14px] leading-none">one bottle</span>
            </div>
        </div>


        <!-- BLOCK FREE -->
        <div class="w-full flex flex-row justify-end -mt-4 relative z-0">
            <div class="w-[88px] px-2 pt-6 pb-3 rounded-[12px]" :style="{ background: corFundoFree }">
                <p class="text-[17px] font-black font-crossfit leading-[0.9] tracking-tighter"
                    :style="{ color: corLetraFree }">FREE
                    U.S.</p>
                <p class="text-[14px] font-gelasio font-semibold italic" :style="{ color: corLetraFree }"> shipping</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Ajuste fino para a sombra semelhante ao exemplo */
.shadow-md {
    box-shadow: 0 8px 18px rgba(0, 0, 0, .12);
}
</style>
