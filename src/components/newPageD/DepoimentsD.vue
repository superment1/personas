<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'

const testimonials = ref([
    { avatar: new URL('@/assets/image/newPageD/ligiane.png', import.meta.url).href },
    { avatar: new URL('@/assets/image/newPageD/danielle.png', import.meta.url).href },
    { avatar: new URL('@/assets/image/newPageD/eliseu.png', import.meta.url).href },
    { avatar: new URL('@/assets/image/newPageD/bruna.png', import.meta.url).href },
    { avatar: new URL('@/assets/image/newPageD/nuala.png', import.meta.url).href },
])

const track = ref(null)
const itemEls = ref([])
const current = ref(0)
const spacer = ref(0) // espaço nas extremidades

// centraliza no índice i
function centerToIndex(i, behavior = 'smooth') {
    const el = track.value, item = itemEls.value[i]
    if (!el || !item) return
    const offset = item.offsetLeft - (el.clientWidth - item.offsetWidth) / 2
    el.scrollTo({ left: offset, behavior })
}

// acha o card mais próximo do centro do viewport
function nearestIndex() {
    const el = track.value
    if (!el) return 0
    const mid = el.scrollLeft + el.clientWidth / 2
    let best = 0, dist = Infinity
    itemEls.value.forEach((it, i) => {
        const c = it.offsetLeft + it.offsetWidth / 2
        const d = Math.abs(c - mid)
        if (d < dist) { dist = d; best = i }
    })
    return best
}

function updateCurrent() { current.value = nearestIndex() }

// drag por Pointer Events
let dragging = false, startX = 0, startLeft = 0
function onPointerDown(e) {
    dragging = true
    startX = e.clientX
    startLeft = track.value?.scrollLeft ?? 0
    track.value?.setPointerCapture?.(e.pointerId)
}
function onPointerMove(e) {
    if (!dragging || !track.value) return
    const dx = e.clientX - startX
    track.value.scrollLeft = startLeft - dx
}
function onPointerUp(e) {
    dragging = false
    track.value?.releasePointerCapture?.(e.pointerId)
    centerToIndex(nearestIndex())
}
function onPointerCancel(e) {
    dragging = false
    track.value?.releasePointerCapture?.(e.pointerId)
    centerToIndex(nearestIndex())
}

// recalcula o spacer para centralizar 1º e último
function recomputeSpacer() {
    const el = track.value
    const first = itemEls.value?.[0]
    if (!el || !first) return
    const w = first.offsetWidth
    // metade do espaço livre do viewport
    spacer.value = Math.max(0, (el.clientWidth - w) / 2)
    // recenter no atual sem animação
    centerToIndex(current.value, 'auto')
}

let ro, ticking = false
function onScroll() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => { updateCurrent(); ticking = false })
}

onMounted(async () => {
    await nextTick()
    recomputeSpacer()
    ro = new ResizeObserver(recomputeSpacer)
    ro.observe(track.value)
})
onBeforeUnmount(() => ro?.disconnect?.())
</script>

<template>
    <div class="bg-[#E1DCCD] w-full flex flex-col items-center py-7 gap-y-2">
        <p class="text-center text-[#370F1E] font-crossfit font-bold leading-[1.08] text-[32px]">
            Why People Love<br />Super Relax.
        </p>
        <p class="text-center text-[#370F1E] font-gelasio font-semibold leading-[1.06] text-[15px] mt-2">
            4.8/5 (160+ Reviews) | 98% Recommend
        </p>

        <!-- trilho -->
        <div ref="track" class="w-full max-w-[1150px] mt-4 px-4 flex gap-2 overflow-x-auto scroll-smooth
             snap-x snap-mandatory select-none cursor-grab active:cursor-grabbing
             scrollbar-hide" @pointerdown="onPointerDown" @pointermove="onPointerMove" @pointerup="onPointerUp"
            @pointercancel="onPointerCancel" @scroll.passive="onScroll">
            <!-- spacers nas pontas (não têm snap) -->
            <div class="shrink-0" :style="{ width: spacer + 'px' }" />
            <div v-for="(t, i) in testimonials" :key="i" :ref="el => (itemEls[i] = el)"
                class="shrink-0 w-[319px] md:w-[360px] snap-center ">
                <img :src="t.avatar" :alt="`testimonial-${i + 1}`" loading="lazy" decoding="async"
                    class="w-[319px] h-[219px] rounded-xl pointer-events-none " />
            </div>
            <div class="shrink-0" :style="{ width: spacer + 'px' }" />
        </div>

        <!-- indicadores dinâmicos -->
        <svg :width="6 + (testimonials.length - 1) * 12" height="6"
            :viewBox="`0 0 ${6 + (testimonials.length - 1) * 12} 6`" fill="none" class="mt-3">
            <g v-for="(_, i) in testimonials" :key="`dot-${i}`" @click="centerToIndex(i)" class="cursor-pointer">
                <circle :cx="3 + i * 12" cy="3" r="3" :fill="i === current ? '#370F1E' : '#FFFAF0'" />
            </g>
        </svg>
    </div>
</template>

<style scoped>
/* esconde a barra horizontal */
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>
