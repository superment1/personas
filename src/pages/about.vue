<script setup>
import { useSeo } from '../composables/useSeo.js'
import { ref, onMounted, nextTick } from "vue";
import SuperFooter1 from '../components/SuperFooter1.vue';

const showVideo = ref(false);
const mp4Src = new URL('../assets/videos/logo_superment_animado.mp4', import.meta.url).href;

const showRicardo = ref(false)
const showThomas = ref(false)

function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = '/';
  }
}

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
        <div class="flex flex-col items-center justify-start w-[317px] sm:w-[90%] lg:w-[980px] h-full">
            <div class="flex flex-col items-center w-full bg-[#E1DCCD]">
                <a  @click.prevent="goBack"  href="#"
                    class="absolute bg-[#fff9ed] rounded-2xl left-4 top-[0.9rem] flex items-center text-sm text-[#370f1e] hover:text-gray-700">
                    <svg class="w-8 h-8 mr-[1px]" fill="none" stroke="currentColor" stroke-width="1.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </a>
                <div class="relative w-[250px] h-[60px]">
                    <video class="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"
                        :class="{ 'opacity-0': !showVideo }" autoplay muted loop playsinline preload="auto"
                        @loadeddata="showVideo = true">
                        <source :src="mp4Src" type="video/mp4" />
                    </video>
                </div>
            </div>
            <p
                class="font-crossfit text-[#370F1E] font-bold text-[28px] sm:text-[34px] leading-[0.98] sm:leading-[1.08] text-start w-full mt-5 lg:hidden">
                I Beg Your
                Pardon,
                <br class="block sm:hidden">Status Quo. <br>We're
                Here to
                <br class="block sm:hidden">Challenge You.
            </p>
            <p
                class="font-crossfit text-[#370F1E] font-black text-[59px] leading-[0.9] w-[700px] mt-10 hidden lg:block">
                I Beg Your
                Pardon, Status Quo.</p>
            <p
                class="font-crossfit text-[#370F1E] font-black text-[118px] leading-[0.9] w-[700px] mt-10 hidden lg:block">
                We're
                Here to Challenge You.</p>
            <p class="lg:hidden font-DMSans text-[13px] text-[#370F1E] sm:text-[15px] leading-[1.28] mt-10">We're two
                guys who've
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
            <div class="hidden lg:grid grid-cols-2 w-full gap-[100px]">
                <p
                    class="font-DMSans text-[28px] text-[#370F1E] font-medium leading-[1.28] mt-10 w-[435px] tracking-[-0.01em]">
                    We're two
                    guys
                    who've known each other since college and who've followed different paths but have one
                    thing in common: we both built careers in innovative companies and opportunities. We enjoy this
                    playfulness and ended up incorporating it into our DNA.

                    <br><br>
                    Time passed, and we proved, firsthand, a universal and unquestionable maxim: no matter your age,
                    gender, social class, or ideology: without health, nothing
                </p>
                <p
                    class="font-DMSans text-[28px] text-[#370F1E] font-medium leading-[1.28] mt-10 w-[435px] tracking-[-0.01em]">
                    works. And
                    that's
                    how we started thinking about what we could do differently to help people take care of themselves
                    and have a better quality of life.

                    <br><br>
                    That's why we created Superment, which brings together the best of nature, science, and technology
                    to offer premium supplements that truly work and help you sleep and think better, manage your
                    weight, maintain your energy and balance, and, of course, have fun ;)
                </p>
            </div>
            <img class="py-8 w-full" src="/assets/image-about.webp" alt="">
            <p class="font-DMSans text-[13px] text-[#370F1E] sm:text-[15px] leading-[1.28] mt-2 lg:hidden">It’s with
                technology that we want to fly together with you: we believe that innovations in research and the
                endless opportunities
                opened by artificial intelligence help us overcome the "no's" of the status quo.
                <br><br>And they can take us to a new level of
                prevention and care. Using artificial intelligence with ethics and integrity (which is the only way
                Superment works), it's possible to better understand and communicate with people, shorten paths, reduce
                timeframes, simplify processes, and arrive at smarter, more accessible, and effective supplements and
                solutions.
                <br><br>Come rethink how you care for your
                health <br class="block sm:hidden">with us. And soon you'll no longer be able to say, <span
                    class="font-bold"> "Once
                    upon a time,
                    there was something <br>called the status quo."</span>
            </p>
            <div class="hidden lg:grid grid-cols-2 w-full gap-[100px]">
                <p
                    class="font-DMSans text-[28px] text-[#370F1E] font-medium leading-[1.28] mt-10 w-[435px] tracking-[-0.01em]">
                    And it's with technology that we want to fly higher together with you: we believe that innovations
                    in research and the endless opportunities opened by artificial intelligence help us overcome the
                    "no's" of the status quo.

                    <br><br>
                    And they can take us to a new level of prevention and care. Using artificial intelligence with
                    ethics and integrity (which is the only way Superment works), it's possible to better understand and

                </p>
                <p
                    class="font-DMSans text-[28px] text-[#370F1E] font-medium leading-[1.28] mt-10 w-[435px] tracking-[-0.01em]">
                    communicate with people, shorten paths, reduce timeframes, simplify processes, and arrive at
                    smarter, more accessible, and effective supplements and solutions.

                    <br><br>
                    Come rethink how you care for your health with us. And soon you'll no longer be able to say, <span
                        class="font-bold italic">"Once
                        upon a time, there was something called the status quo."</span>
                </p>
            </div>
            <div class="flex flex-row items-center justify-start w-full pt-[20px] pb-[32px] lg:pt-[40px] lg:pb-[64px]">
                <!-- Ricardo -->
                <div class="pt-[7px] rounded-[10px] cursor-pointer select-none">
                    <p v-if="!showThomas && !showRicardo"
                        class="underline font-gelasio italic text-[13px] sm:text-[18px] text-[#370F1E] font-bold lg:text-[32px]"
                        @click="toggle('ricardo')">
                        Ricardo Pedro
                    </p>
                    <transition name="fade">
                        <div v-if="showRicardo"
                            class="flex flex-col items-start justify-start w-full text-[13px] text-[#370F1E] bg-[#FFFAF0] rounded-[10px] lg:rounded-[30px] leading-[1.28] p-4 lg:p-10">
                            <div class="flex flex-row items-center justify-between w-full">
                                <p @click="toggle('ricardo')"
                                    class="font-gelasio font-bold italic underline sm:text-[18px] lg:text-[36px]">
                                    Ricardo
                                    Pedro</p>
                                <div @click="toggle('ricardo')">
                                    <svg class="lg:hidden" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="9" cy="9" r="8.75" fill="#E1DCCD" stroke="#370F1E"
                                            stroke-width="0.5" />
                                        <path
                                            d="M5 12.5L7.9956 9L5 5.5H6.60352L9 8.35236L11.3965 5.5H13L9.98678 9L13 12.5H11.3965L9 9.62008L6.62115 12.5H5Z"
                                            fill="#370F1E" />
                                    </svg>
                                    <svg class="hidden lg:block" width="51" height="51" viewBox="0 0 51 51" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="25.35" cy="25.35" r="24.6458" fill="#E1DCCD" stroke="#370F1E"
                                            stroke-width="1.40833" />
                                        <path
                                            d="M14.0833 35.2083L22.5208 25.35L14.0833 15.4917H18.5998L25.3499 23.5258L32.1 15.4917H36.6166L28.1294 25.35L36.6166 35.2083H32.1L25.3499 27.0966L18.6495 35.2083H14.0833Z"
                                            fill="#370F1E" />
                                    </svg>
                                </div>
                            </div>
                            <p
                                class="font-DMSans font-medium text-[10px] sm:text-[15px] lg:text-[28px] my-[3px] lg:mt-3 mb-4">
                                Founder
                            </p>
                            <p
                                class="mt-[5px] font-DMSans font-medium text-[10px] sm:text-[15px] lg:text-[28px] leading-[1.29]">
                                Former CMO for over 20 years at one of the most <br class="sm:hidden">innovative
                                companies in the
                                Brazilian
                                healthcare market during the 2000s <br class="hidden lg:block">and 2010s, which was part
                                of the investment portfolio
                                of private equity funds General Atlantic and The Carlyle Group. Passionate about
                                <br class="sm:hidden">human
                                creativity.
                            </p>
                        </div>
                    </transition>
                </div>

                <!-- Thomas -->
                <div class="pt-[7px] rounded-[10px] cursor-pointer select-none">
                    <p v-if="!showThomas && !showRicardo"
                        class="underline font-gelasio italic text-[13px] sm:text-[18px] text-[#370F1E] font-bold ml-[40px] lg:ml-[100px] lg:text-[32px]"
                        @click="toggle('thomas')">
                        Thomas Yong Chi
                    </p>
                    <transition name="fade">
                        <div v-if="showThomas"
                            class="flex flex-col items-start justify-start w-full text-[13px] text-[#370F1E] bg-[#FFFAF0] rounded-[10px] lg:rounded-[30px] leading-[1.28] p-4 lg:p-10">
                            <div class="flex flex-row items-center justify-between w-full">
                                <p @click="toggle('thomas')"
                                    class="font-gelasio font-bold italic underline sm:text-[18px] lg:text-[36px]">Thomas
                                    Yong
                                    Chi</p>
                                <div @click="toggle('thomas')">
                                    <svg class="lg:hidden" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="9" cy="9" r="8.75" fill="#E1DCCD" stroke="#370F1E"
                                            stroke-width="0.5" />
                                        <path
                                            d="M5 12.5L7.9956 9L5 5.5H6.60352L9 8.35236L11.3965 5.5H13L9.98678 9L13 12.5H11.3965L9 9.62008L6.62115 12.5H5Z"
                                            fill="#370F1E" />
                                    </svg>
                                    <svg class="hidden lg:block" width="51" height="51" viewBox="0 0 51 51" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="25.35" cy="25.35" r="24.6458" fill="#E1DCCD" stroke="#370F1E"
                                            stroke-width="1.40833" />
                                        <path
                                            d="M14.0833 35.2083L22.5208 25.35L14.0833 15.4917H18.5998L25.3499 23.5258L32.1 15.4917H36.6166L28.1294 25.35L36.6166 35.2083H32.1L25.3499 27.0966L18.6495 35.2083H14.0833Z"
                                            fill="#370F1E" />
                                    </svg>
                                </div>
                            </div>
                            <p
                                class="font-DMSans font-medium text-[10px] sm:text-[15px] lg:text-[28px] my-[3px] lg:mt-3 mb-4">
                                CCO
                                (Curious Chief Officer)</p>
                            <p
                                class="mt-[5px] font-DMSans font-medium text-[10px] sm:text-[15px] lg:text-[28px] leading-[1.29]">
                                A very curious executive that goes into the rabbit hole easily. Bring <br
                                    class="hidden lg:block">me a challenge, I
                                will at least sleep with the provocation and let me <br class="hidden lg:block">give a
                                shot. 25 years of experience
                                at some of the largest US and <br class="hidden lg:block">Brazilian technology companies
                                - tinkering around.
                            </p>
                        </div>
                    </transition>
                </div>
            </div>
            <p
                class="text-[#370F1E] text-[13px] sm:text-[15px] lg:text-[28px] font-DMSans font-medium w-full leading-[1.28]">
                Superment
            </p>
            <p
                class="text-[#370F1E] text-[13px] sm:text-[15px] lg:text-[28px] font-DMSans font-medium w-full leading-[1.28]">
                <span>New York</span>
                <span class="px-2 lg:px-3">|</span>
                <span>London</span>
                <span class="px-2 lg:px-3">|</span>
                <span>Milan</span>
            </p>
        </div>
    </div>
    <div
        class="flex items-center justify-center w-full h-full bg-[#FFFAF0] pt-[41px] pb-[28px] lg:pt-[80px] lg:pb-[64px]">
        <div class="flex flex-col items-center justify-start w-[317px] lg:w-[980px]">
            <p class="text-[#370F1E] font-crossfit w-full text-[32px] sm:text-[36px] lg:text-[60px] leading-[0.9]">OUR
                VALUES</p>
            <p class="lg:hidden text-[#370F1E] font-crossfit w-full text-[16px] sm:text-[18px] leading-[1.28] mt-[3px]">
                ENERGY
                DOESN'T LIE.</p>
            <p
                class="hidden lg:block text-[#370F1E] font-gelasio font-bold italic text-[28px]  leading-[1.28] mt-[10px] w-full">
                Energy doesn't lie.</p>
            <div
                class="mt-0 lg:mt-[50px] w-full pt-[26px] flex flex-col items-start justify-start gap-[25px] lg:flex-row lg:gap-[40px]">
                <img class="lg:hidden rounded-[15px] h-[160px] w-[317px]" src="/assets/bottle-about-mobile.webp" alt="">
                <img class="hidden lg:block rounded-[15px] h-[360px] w-[360px] object-cover object-[50%_100%]"
                    src="/assets/bottle-about-mobile.webp" alt="">
                <div class="py-4">
                    <p
                        class="text-[#370F1E] font-gelasio italic font-black text-[14px] sm:text-[16px] lg:text-[28px] leading-[1.28]">
                        The energy of
                        loving what we do.
                    </p>
                    <p
                        class="text-[#370F1E] font-gelasio text-[14px] sm:text-[16px] lg:text-[28px] leading-[1.28] mt-[6px] lg:mt-[10px]">
                        At
                        Superment, we value
                        integrity. Our goal is to do good — in the best way, all the time. We love what we do. And we
                        love doing it well. We hold knowledge, simplicity, transparency, straight talk, and respect —
                        for your time and ours — in high regard. With lightness and a good sense of humor. Because humor
                        is good energy. And energy doesn’t lie.</p>
                </div>
            </div>
            <div
                class="w-full pt-[26px] lg:pt-[80px] flex flex-col items-start justify-start gap-[23px] lg:flex-row-reverse lg:gap-[40px]">
                <img class="lg:hidden rounded-[15px] h-[160px] w-[317px] object-cover object-[50%_30%]"
                    src="/assets/woman-about-mobile.webp" alt="">
                <img class="hidden lg:block rounded-[15px] h-[360px] w-[360px] object-cover object-[50%_100%]"
                    src="/assets/woman-about-desk.webp" alt="">
                <div class="py-4">
                    <p
                        class="text-[#370F1E] font-gelasio italic font-black text-[14px] sm:text-[16px] lg:text-[28px] leading-[1.28]">
                        The energy of
                        the mind and body.
                    </p>
                    <p
                        class="text-[#370F1E] font-gelasio text-[14px] sm:text-[16px] lg:text-[28px] leading-[1.28] lg:leading-[1.18] mt-[6px] lg:mt-[10px]">
                        No one
                        escapes this truth: without health, nothing works. And to be healthy, you need to respect
                        yourself as a human being. That means caring for everything that impacts your physical and
                        mental balance. That’s where we come in — understanding you as a whole: sleep, energy, sexual
                        vitality, healthy weight, joint health, and radiant skin. Because when it comes to health,
                        energy really doesn’t lie.</p>
                </div>
            </div>
            <div
                class="w-full pt-[26px] lg:pt-[80px] flex flex-col items-start justify-start gap-[24px] lg:flex-row lg:gap-[40px]">
                <img class="lg:hidden rounded-[15px] h-[160px] w-[317px]" src="/assets/flower-about-mobile.webp" alt="">
                <img class="hidden lg:block rounded-[15px] h-[360px] w-[360px]" src="/assets/flower-about-desk.webp"
                    alt="">
                <div class="py-4">
                    <p
                        class="text-[#370F1E] font-gelasio italic font-black text-[14px] sm:text-[16px] lg:text-[28px] leading-[1.28]">
                        The energy of
                        science and nature.
                    </p>
                    <p
                        class="text-[#370F1E] font-gelasio text-[14px] sm:text-[16px] lg:text-[28px] leading-[1.28] mt-[6px] lg:mt-[10px]">
                        From
                        the day we’re born to the day we’re <br class="hidden lg:block">gone, nature is the answer. To
                        who we are. To how we work.
                        To how we live. By the way, it’s human nature that led us to invent science <br
                            class="hidden lg:block">and technology — and
                        when we bring them together with nature and integrity, the sky’s the limit. That’s real energy.
                        The kind that moves
                        <br class="lg:hidden">us forward.
                    </p>
                </div>
            </div>
            <div
                class="w-full pt-[26px] lg:pt-[80px] flex flex-col items-start justify-start gap-[22px] lg:flex-row-reverse lg:gap-[40px]">
                <img class="lg:hidden rounded-[15px] h-[160px] w-[317px]" src="/assets/peoples-about-mobile1.webp"
                    alt="">
                <img class="hidden lg:block rounded-[15px] h-[360px] w-[360px]" src="/assets/peoples-about-desk1.webp"
                    alt="">
                <div class="py-4">
                    <p
                        class="text-[#370F1E] font-gelasio italic font-black text-[14px] sm:text-[16px] lg:text-[28px] leading-[1.28]">
                        The energy of
                        our relationships.
                    </p>
                    <p
                        class="text-[#370F1E] font-gelasio text-[14px] sm:text-[16px] lg:text-[28px] leading-[1.28] mt-[6px] tracking-[-0.02em]">
                        We love caring for and growing with everyone: clients, teammates, partner labs, commercial
                        brallies, society, lovers — and haters. We believe in win-win relationships, and we work hard to
                        do <br class="block sm:hidden">this in practice. We believe in talent. We <br
                            class="hidden lg:block">favor <br class="block sm:hidden">the nonconformists. We don’t like
                        to
                        say <br class="hidden lg:block">
                        or
                        hear “no” for what matters. And we <br class="hidden lg:block">especially feed <br
                            class="block sm:hidden">the relationships
                        that help us evolve
                        mutually. That’s the energy of “let’s go <br class="hidden lg:block">— together.”
                    </p>
                </div>
            </div>
            <div class="w-full h-[1px] bg-[#370F1E] mt-[19px] mb-[15px]"></div>
            <p
                class="text-[#370F1E] text-[13px] sm:text-[15px] lg:text-[28px] font-DMSans leading-[1.28] font-medium mt-[8px] lg:mt-[20px]">
                It’s
                always good to
                talk about
                energy. But
                we already gave
                you our genuine philosophy. Now it’s your
                time. Send us a message or email. Superment is excited to meet you. And you’ll see for yourself: our
                energy doesn’t lie.</p>
        </div>
    </div>

    <div class="bg-[#350e1d] w-full">
        <div class="max-w-[330px] sm:max-w-[700px] mx-auto">
            <SuperFooter1 />
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
    transition: opacity 0.1s ease, transform 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}
</style>