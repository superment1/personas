<script setup lang="ts">
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'


const props = defineProps({
    primary: {
        type: String,
        default: "Why People Love Super Relax."
    },
    subtitle: {
        type: String,
        default: '4.9/5 (160+ Reviews) | 98% Recommend'
    },
    extraText:{
        type: String,
    },
    testimonials: {
        type: Array,
        default: () => [
            {
                avatarDesk: new URL('@/assets/image/newPageD/ligiani-desk.png', import.meta.url).href,
                avatarMobile: new URL('@/assets/image/newPageD/ligiani.png', import.meta.url).href,
                title: 'From stressed to relaxed.',
                testimonial: 'I used to arrive very stressed from work and still I couldn\'t rest… Now I\'m finally able to relax and sleep again.',
                name: 'Ligiani G., 44',
                city: 'Boston, MA'
            },
            {
                avatarDesk: '',
                avatarMobile: '',
                title: 'I am enjoying it!!',
                testimonial: 'I feel less worried now and not snapping so much at my relatives. Honestly more calm overall.',
                name: 'Danielle A., 37',
                city: 'Los Angeles, CA'
            },
            {
                avatarDesk: new URL('@/assets/image/newPageD/eliseu-desk.png', import.meta.url).href,
                avatarMobile: new URL('@/assets/image/newPageD/eliseu.png', import.meta.url).href,
                title: 'Good both day & night.',
                testimonial: 'I used to wake up at night to pee and then couldn’t fall back asleep. Now I sleep through and have way more energy in the day.',
                name: 'Eliseu C., 40',
                city: 'Fort Lauderdale, FL'
            },
            {
                avatarDesk: new URL('@/assets/image/newPageD/bruna-desk.png', import.meta.url).href,
                avatarMobile: new URL('@/assets/image/newPageD/bruna.png', import.meta.url).href,
                title: 'Eased the pain in my legs.',
                testimonial: 'I just started but already feel less pain in my legs, which also helped me to rest at night.',
                name: 'Bruna R., 38',
                city: 'New York, NY'
            },
            {
                avatarDesk: new URL('@/assets/image/newPageD/nuala-desk.png', import.meta.url).href,
                avatarMobile: new URL('@/assets/image/newPageD/nuala.png', import.meta.url).href,
                title: 'Didn’t expect it to work this well.',
                testimonial: 'I wasn’t expecting much, but I’m sleeping better and waking up with more energy.',
                name: 'Nuala O., 35',
                city: 'Miami, FL'
            },
        ]
    }
})

const track = ref(null)
const itemEls = ref([])
const current = ref(0)
const spacer = ref(0)

function centerToIndex(i, behavior = 'smooth') {
    const el = track.value, item = itemEls.value[i]
    if (!el || !item) return
    const offset = item.offsetLeft - (el.clientWidth - item.offsetWidth) / 2
    el.scrollTo({ left: offset, behavior })
}

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
    <div class="bg-[#E1DCCD] w-full flex flex-col items-center py-7 gap-y-2 lg:py-[84px]">
        <p
            class="text-center text-[#370F1E] w-[246px] md:w-full font-crossfit font-bold leading-[1.08] text-[32px] md:text-[46px] lg:text-[60px]">
            {{ props.primary }}
        </p>
        <p
            class="text-center text-[#370F1E] font-gelasio font-semibold leading-[1.06] text-[15px] md:text-[22px] lg:text-[32px] mt-2 lg:mt-[34px]">
            {{ props.subtitle }}
        </p>
        <div v-if="extraText" class="text-center px-[35px] lg:px-0 text-[12px] lg:text-[24px] leading-[14px] lg:leading-[23px] max-w-[700px]">
            <p>
                {{ props.extraText }}
            </p>
        </div>

        <!-- trilho -->
        <div ref="track" class="w-full max-w-[1150px] mt-4 md:mt-[25px] px-4 flex gap-2 md:gap-10 lg:gap-20 overflow-x-auto scroll-smooth
             snap-x snap-mandatory select-none cursor-grab active:cursor-grabbing
             scrollbar-hide" @pointerdown="onPointerDown" @pointermove="onPointerMove" @pointerup="onPointerUp"
            @pointercancel="onPointerCancel" @scroll.passive="onScroll">
            <!-- spacers nas pontas (não têm snap) -->
            <div class="shrink-0" :style="{ width: spacer + 'px' }" />
            <div v-for="(t, i) in testimonials" :key="i" :ref="el => (itemEls[i] = el)"
                class="shrink-0 w-[319px] md:w-[640px] lg:w-[920px] snap-center">
                <div class="shrink-0 w-[301px] md:w-[640px] h-[219px] md:h-[280px] lg:w-[920px] lg:h-[480px] justify-between snap-center bg-[#FFFAF0] rounded-xl 
                    flex flex-col items-start pt-[31px] pb-[20px] px-6 gap-y-[14px] lg:py-[60px] lg:px-[70px]">

                    <p class="text-[#370F1E] font-crossfit font-bold text-[20px] lg:text-[52px] leading-[1.2]">{{ t.title }}
                    </p>
                    <p
                        class="text-[#370F1E] font-DMSans font-regular text-[12px] lg:text-[26px] leading-[1.15] lg:mt-[14px]">
                        {{ t.testimonial }}</p>
                    <div class="flex flex-row items-start justify-start mt-2 lg:mt-[16px]">
                        <template v-if="t.avatarMobile">
                            <img 
                            :src="t.avatarMobile" 
                            :srcset="`${t.avatarMobile} 600w, ${t.avatarDesk} 1024w`"
                            alt="avatar"
                            class="w-[48px] h-[48px] md:w-[86px] md:h-[86px] lg:w-[116px] lg:h-[118px] rounded-full object-cover" />
                        </template>                        
                        <template v-else>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" class="w-[48px] h-[48px]">
                                <circle cx="24" cy="24" r="24" fill="#E1DCCD"/>
                                <circle cx="24" cy="16" r="8" fill="#C1BAA5"/>
                                <ellipse cx="24" cy="36" rx="15" ry="9" fill="#C1BAA5"/>
                            </svg>
                        </template>
                        <div class="flex flex-col items-start justify-center ml-3 pt-1">
                            <p
                                class="text-[#370F1E] font-gelasio font-bold italic text-[14px] md:text-[24px] lg:text-[34px] leading-[0.96]">
                                {{ t.name }}</p>
                            <p
                                class="text-[#370F1E] font-gelasio font-regular italic text-[13px] md:text-[22px] lg:text-[32px] leading-[1.15] mt-[2px]">
                                {{ t.city }}</p>
                            <svg class="block md:hidden" xmlns="http://www.w3.org/2000/svg" width="54" height="8"
                                viewBox="0 0 54 8" fill="none">
                                <path
                                    d="M4.5824 0.379751L5.33963 2.71317H7.79239C8.18541 2.71317 8.35003 3.2173 8.03108 3.44776L6.04748 4.8902L6.8047 7.22361C6.92611 7.59811 6.49811 7.90882 6.17917 7.67836L4.19556 6.23592L2.21195 7.67836C1.89301 7.90882 1.46501 7.59811 1.58641 7.22361L2.34364 4.8902L0.360033 3.44776C0.0410919 3.2173 0.205707 2.71317 0.598725 2.71317H3.05149L3.80871 0.379751C3.93012 0.00525226 4.45894 0.00525226 4.58035 0.379751H4.5824Z"
                                    fill="#370F1E" />
                                <path
                                    d="M15.8993 0.379629L16.6565 2.71304H19.1093C19.5023 2.71304 19.6669 3.21718 19.348 3.44764L17.3644 4.89008L18.1216 7.22349C18.243 7.59799 17.815 7.9087 17.4961 7.67824L15.5125 6.2358L13.5288 7.67824C13.2099 7.9087 12.7819 7.59799 12.9033 7.22349L13.6605 4.89008L11.6769 3.44764C11.358 3.21718 11.5226 2.71304 11.9156 2.71304H14.3684L15.1256 0.379629C15.247 0.00513019 15.7758 0.00513019 15.8972 0.379629H15.8993Z"
                                    fill="#370F1E" />
                                <path
                                    d="M27.2168 0.379629L27.974 2.71304H30.4268C30.8198 2.71304 30.9844 3.21718 30.6655 3.44764L28.6819 4.89008L29.4391 7.22349C29.5605 7.59799 29.1325 7.9087 28.8136 7.67824L26.83 6.2358L24.8463 7.67824C24.5274 7.9087 24.0994 7.59799 24.2208 7.22349L24.978 4.89008L22.9944 3.44764C22.6755 3.21718 22.8401 2.71304 23.2331 2.71304H25.6859L26.4431 0.379629C26.5645 0.00513019 27.0933 0.00513019 27.2147 0.379629H27.2168Z"
                                    fill="#370F1E" />
                                <path
                                    d="M38.5349 0.379629L39.2921 2.71304H41.7449C42.1379 2.71304 42.3025 3.21718 41.9836 3.44764L40 4.89008L40.7572 7.22349C40.8786 7.59799 40.4506 7.9087 40.1317 7.67824L38.1481 6.2358L36.1645 7.67824C35.8455 7.9087 35.4175 7.59799 35.5389 7.22349L36.2962 4.89008L34.3125 3.44764C33.9936 3.21718 34.1582 2.71304 34.5512 2.71304H37.004L37.7612 0.379629C37.8826 0.00513019 38.4115 0.00513019 38.5329 0.379629H38.5349Z"
                                    fill="#370F1E" />
                                <path
                                    d="M49.8514 0.379629L50.6087 2.71304H53.0614C53.4545 2.71304 53.6191 3.21718 53.3001 3.44764L51.3165 4.89008L52.0737 7.22349C52.1951 7.59799 51.7672 7.9087 51.4482 7.67824L49.4646 6.2358L47.481 7.67824C47.1621 7.9087 46.7341 7.59799 46.8555 7.22349L47.6127 4.89008L45.6291 3.44764C45.3101 3.21718 45.4747 2.71304 45.8678 2.71304H48.3205L49.0778 0.379629C49.1992 0.00513019 49.728 0.00513019 49.8494 0.379629H49.8514Z"
                                    fill="#370F1E" />
                            </svg>
                            <svg class="hidden md:block" xmlns="http://www.w3.org/2000/svg" width="133" height="20"
                                viewBox="0 0 133 20" fill="none">
                                <path
                                    d="M11.1261 1.01248L13.0053 6.80334H19.0923C20.0677 6.80334 20.4762 8.05446 19.6847 8.62639L14.762 12.2061L16.6412 17.997C16.9425 18.9264 15.8803 19.6975 15.0888 19.1255L10.166 15.5458L5.24329 19.1255C4.45177 19.6975 3.3896 18.9264 3.69089 17.997L5.57011 12.2061L0.64737 8.62639C-0.144151 8.05446 0.264376 6.80334 1.23973 6.80334H7.32678L9.206 1.01248C9.50729 0.0830802 10.8197 0.0830802 11.121 1.01248H11.1261Z"
                                    fill="#370F1E" />
                                <path
                                    d="M39.212 1.01248L41.0912 6.80334H47.1783C48.1536 6.80334 48.5622 8.05446 47.7706 8.62639L42.8479 12.2061L44.7271 17.997C45.0284 18.9264 43.9662 19.6975 43.1747 19.1255L38.252 15.5458L33.3292 19.1255C32.5377 19.6975 31.4755 18.9264 31.7768 17.997L33.6561 12.2061L28.7333 8.62639C27.9418 8.05446 28.3503 6.80334 29.3257 6.80334H35.4127L37.2919 1.01248C37.5932 0.0830802 38.9056 0.0830802 39.2069 1.01248H39.212Z"
                                    fill="#370F1E" />
                                <path
                                    d="M67.298 1.01248L69.1772 6.80334H75.2642C76.2396 6.80334 76.6481 8.05446 75.8566 8.62639L70.9338 12.2061L72.8131 17.997C73.1143 18.9264 72.0522 19.6975 71.2607 19.1255L66.3379 15.5458L61.4152 19.1255C60.6236 19.6975 59.5615 18.9264 59.8628 17.997L61.742 12.2061L56.8192 8.62639C56.0277 8.05446 56.4363 6.80334 57.4116 6.80334H63.4987L65.3779 1.01248C65.6792 0.0830802 66.9916 0.0830802 67.2928 1.01248H67.298Z"
                                    fill="#370F1E" />
                                <path
                                    d="M95.3858 1.01248L97.2651 6.80334H103.352C104.327 6.80334 104.736 8.05446 103.944 8.62639L99.0217 12.2061L100.901 17.997C101.202 18.9264 100.14 19.6975 99.3485 19.1255L94.4258 15.5458L89.5031 19.1255C88.7115 19.6975 87.6494 18.9264 87.9507 17.997L89.8299 12.2061L84.9071 8.62639C84.1156 8.05446 84.5241 6.80334 85.4995 6.80334H91.5865L93.4658 1.01248C93.7671 0.0830802 95.0794 0.0830802 95.3807 1.01248H95.3858Z"
                                    fill="#370F1E" />
                                <path
                                    d="M123.472 1.01248L125.351 6.80334H131.438C132.413 6.80334 132.822 8.05446 132.03 8.62639L127.108 12.2061L128.987 17.997C129.288 18.9264 128.226 19.6975 127.434 19.1255L122.512 15.5458L117.589 19.1255C116.797 19.6975 115.735 18.9264 116.037 17.997L117.916 12.2061L112.993 8.62639C112.202 8.05446 112.61 6.80334 113.585 6.80334H119.672L121.552 1.01248C121.853 0.0830802 123.165 0.0830802 123.467 1.01248H123.472Z"
                                    fill="#370F1E" />
                            </svg>
                        </div>
                    </div>
                </div>
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
