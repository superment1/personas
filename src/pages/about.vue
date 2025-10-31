<script setup>
import { useSeo } from '../composables/useSeo.js'
import SuperFooter from '../components/SuperFooter.vue'
import { ref, onMounted, nextTick } from "vue";

const showVideo = ref(false);
const mp4Src = new URL('../assets/videos/logo_superment_animado.mp4', import.meta.url).href;
// controles de exibição
const showRicardo = ref(false)
const showThomas = ref(false)

// alterna o estado de cada um
function toggle(name) {
    if (name === 'ricardo') showRicardo.value = !showRicardo.value
    if (name === 'thomas') showThomas.value = !showThomas.value
}

onMounted(async () => {
    await nextTick();
})

defineProps({ showRedirect: Boolean })

useSeo({
    title: 'SUPERMENT - Super Natural Sleep',
    description: 'Natural, deep sleep is essential for healthy, radiant skin.',
    keywords: 'superment, super natural sleep, sleep, natural, radiant skin'
})

</script>

<template>
    <div class="flex items-center justify-center w-full h-full bg-[#E1DCCD] pb-8">
        <div class="flex flex-col items-center justify-start w-[300px] h-full">
            <div class="flex flex-col items-center w-full bg-[#E1DCCD]">
                <div class="relative w-[250px] h-[60px]">
                    <video class="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"
                        :class="{ 'opacity-0': !showVideo }" autoplay muted loop playsinline preload="auto"
                        @loadeddata="showVideo = true">
                        <source :src="mp4Src" type="video/mp4" />
                    </video>
                </div>
            </div>
            <p class="font-crossfit text-[#370F1E] font-bold text-[28px] leading-[0.98] text-start w-[300px] mt-5">
                I Beg Your
                Pardon,
                <br>Status Quo. <br>We're
                Here to
                <br>Challenge You.
            </p>
            <p class="font-DMSans text-[13px] text-[#370F1E] leading-[1.28] mt-10">We're two guys who've
                known each other
                since college and who've followed
                different paths but have one
                thing in common: we both built careers in innovative companies and opportunities. We enjoy this
                playfulness and ended up incorporating it into our DNA.
                <br><br>Time passed, and we
                proved, firsthand,
                a universal and unquestionable maxim: no matter your age, gender, social class, or ideology: without
                health, nothing works. And that's how we started thinking about what we could do differently to help
                people take care of themselves and have a better quality of life.

                <br><br>That's why we created
                Superment, which
                brings together the best of nature, science, and technology to offer premium supplements that truly work
                and help you sleep and think better, manage your weight, maintain your energy and balance, and, of
                course, have fun ;)
            </p>
            <img class="py-8" src="/assets/image-about-mobile.webp" alt="">
            <p class="font-DMSans text-[13px] text-[#370F1E] leading-[1.28] mt-2">And it's with technology that we want
                to fly higher together with you: we believe that innovations in research and the endless opportunities
                opened by artificial intelligence help us overcome the "no's" of the status quo.
                <br><br>And they can take us to a new level of
                prevention and care. Using artificial intelligence with ethics and integrity (which is the only way
                Superment works), it's possible to better understand and communicate with people, shorten paths, reduce
                timeframes, simplify processes, and arrive at smarter, more accessible, and effective supplements and
                solutions.
                <br><br>Come rethink how you care for your
                health <br>with us. And soon you'll no longer be able to say, <span class="font-bold"> "Once
                    upon a time,
                    there was something <br>called the status quo."</span>
            </p>

            <div class="flex flex-row items-center justify-start w-full pt-[20px] pb-[30px] gap-10">
                <!-- Ricardo -->
                <div class="py-[6px] rounded-[10px] cursor-pointer select-none">
                    <p v-if="!showRicardo" class="underline font-gelasio italic text-[13px] text-[#370F1E] font-bold"
                        @click="toggle('ricardo')">
                        Ricardo Pedro
                    </p>
                    <transition name="fade">
                        <div v-if="showRicardo" @click="toggle('ricardo')"
                            class="mt-[6px] p-[10px] w-[143px] text-[13px] text-[#370F1E] bg-[#F4EFE8] rounded-[10px] leading-[1.2]">
                            <p class="font-bold">Founder</p>
                            <p>
                                Former CMO for over 20 years at one of the most innovative companies in the Brazilian
                                healthcare market. Passionate about human creativity.
                            </p>
                            <p class="mt-[4px] text-[12px] text-[#8B6B5A]">LinkedIn: xxxxxxxxx</p>
                        </div>
                    </transition>
                </div>

                <!-- Thomas -->
                <div class="py-[6px] rounded-[10px] cursor-pointer select-none">
                    <p v-if="!showThomas" class="underline font-gelasio italic text-[13px] text-[#370F1E] font-bold"
                        @click="toggle('thomas')">
                        Thomas Yong Chi
                    </p>
                    <transition name="fade">
                        <div v-if="showThomas" @click="toggle('thomas')"
                            class="mt-[6px] p-[10px] w-[143px] text-[13px] text-[#370F1E] bg-[#F4EFE8] rounded-[10px] leading-[1.2]">
                            <p class="font-bold">CCO (Curious Chief Officer)</p>
                            <p>
                                A very curious executive with 25 years in tech and innovation. Always exploring new
                                ideas and challenges.
                            </p>
                            <p class="mt-[4px] text-[12px] text-[#8B6B5A]">LinkedIn: xxxxxxxxx</p>
                        </div>
                    </transition>
                </div>
            </div>
            <p class="text-[#370F1E] text-[13px] font-DMSans font-regular w-full">Superment</p>
            <p class="text-[#370F1E] text-[13px] font-DMSans font-regular w-full">New York | London | Milan</p>
        </div>
    </div>
    <div class="flex items-center justify-center w-full h-full bg-[#FFFAF0] pt-[41px] pb-[28px]">
        <div class="flex flex-col items-center justify-start w-[300px]">
            <p class="text-[#370F1E] font-crossfit w-full text-[32px] leading-[0.9]">OUR VALUES</p>
            <p class="text-[#370F1E] font-crossfit w-full text-[16px] leading-[1.28] mt-[3px]">ENERGY DOESN'T LIE.</p>
            <div class="w-full pt-[26px] flex flex-col items-start justify-start gap-[25px]">
                <img class="rounded-[15px] h-[160px] w-[300px]" src="/assets/bottle-about-mobile.webp" alt="">
                <div>
                    <p class="text-[#370F1E] font-gelasio italic font-black text-[14px] leading-[1.28]">The energy of
                        loving what we do.
                    </p>
                    <p class="text-[#370F1E] font-gelasio text-[14px] leading-[1.28] tracking-[-0.01em] mt-[6px]">At
                        Superment, we value
                        integrity. Our goal is to do good — in the best way, all the time. We love what we do. And we
                        love doing it well. We hold knowledge, simplicity, transparency, straight talk, and respect —
                        for your time and ours — in high regard. With lightness and a good sense of humor. Because humor
                        is good energy. And energy doesn’t lie.</p>
                </div>
            </div>
            <div class="w-full pt-[26px] flex flex-col items-start justify-start gap-[23px]">
                <img class="rounded-[15px] h-[160px] w-[300px] object-cover object-[50%_30%]"
                    src="/assets/woman-about-mobile.webp" alt="">
                <div>
                    <p class="text-[#370F1E] font-gelasio italic font-black text-[14px] leading-[1.28]">The energy of
                        the mind and body.
                    </p>
                    <p class="text-[#370F1E] font-gelasio text-[14px] leading-[1.28] tracking-[-0.01em] mt-[6px]">No one
                        escapes this truth: without health, nothing works. And to be healthy, you need to respect
                        yourself as a human being. That means caring for everything that impacts your physical and
                        mental balance. That’s where we come in — understanding you as a whole: sleep, energy, sexual
                        vitality, healthy weight, joint health, and radiant skin. Because when it comes to health,
                        energy really doesn’t lie.</p>
                </div>
            </div>
            <div class="w-full pt-[26px] flex flex-col items-start justify-start gap-[24px]">
                <img class="rounded-[15px] h-[160px] w-[300px]" src="/assets/flower-about-mobile.webp" alt="">
                <div>
                    <p class="text-[#370F1E] font-gelasio italic font-black text-[14px] leading-[1.28]">The energy of
                        science and nature.
                    </p>
                    <p class="text-[#370F1E] font-gelasio text-[14px] leading-[1.28] tracking-[-0.01em] mt-[6px]">From
                        the day we’re born to the day we’re gone, nature is the answer. To who we are. To how we work.
                        To how we live. By the way, it’s human nature that led us to invent science and technology — and
                        when we bring them together with nature and integrity, the sky’s the limit. That’s real energy.
                        The kind that moves
                        us forward.</p>
                </div>
            </div>
            <div class="w-full pt-[26px] flex flex-col items-start justify-start gap-[22px]">
                <img class="rounded-[15px] h-[160px] w-[300px]" src="/assets/peoples-about-mobile.webp" alt="">
                <div>
                    <p class="text-[#370F1E] font-gelasio italic font-black text-[14px] leading-[1.28]">The energy of
                        our relationships.
                    </p>
                    <p class="text-[#370F1E] font-gelasio text-[14px] leading-[1.28] tracking-[-0.03em] mt-[6px]">From
                        the day we’re born to the day we’re gone, nature is the answer. To who we are. To how we work.
                        To how we live. By the way, it’s human <br>nature that led us to invent science and
                        <br>technology —
                        and
                        when we bring them together with nature and integrity, the sky’s the limit. <br>That’s real
                        energy.
                        The kind that moves
                        <br>us forward.
                    </p>
                </div>
            </div>
            <div class="w-[300px] h-[1px] bg-[#370F1E] mt-[19px] mb-[15px]"></div>
            <p class="text-[#370F1E] text-[13px] font-DMSans leading-[1.28] font-medium mt-[8px]">It’s always good to
                talk about
                energy. But
                we already gave
                you our genuine philosophy. Now it’s your
                time. Send us a message or email. Superment is excited to meet you. And you’ll see for yourself: our
                energy doesn’t lie.</p>
        </div>
    </div>

    <div class="bg-[#370F1E] w-full">
        <div class="max-w-[330px] sm:max-w-[700px] mx-auto">
            <SuperFooter />
        </div>
    </div>
</template>

<style scoped>
@font-face {
    font-family: 'Crossfit';
    src: url('@/assets/fonts/crossfit/Crossfit-Black.otf') format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Crossfit-Black';
    src: url('@/assets/fonts/crossfit/CrossfitDemo-Black.otf') format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Crossfit-Bold';
    src: url('@/assets/fonts/crossfit/CrossfitDemo-Bold.otf') format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

.imported-font-crossfit {
    font-family: 'Crossfit', sans-serif;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}
</style>