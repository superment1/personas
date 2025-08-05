<script setup>
import { useSeo } from '../composables/useSeo'
import SuperFooter from '../components/SuperFooter.vue'
import SuperHeader from '../components/SuperHeader.vue'
import ShopNow from '../components/sleepSupermentComponents/ShopNow.vue'
import Stopwatch from '../components/Stopwatch.vue'
import Frascos from '../components/sleepSupermentComponents/Frascos.vue'
    useSeo({
        title: 'SUPERMENT - Super Natural Sleep',
        description: 'Natural, deep sleep is essential for healthy, radiant skin.',
        keywords: 'superment, super natural sleep, sleep, natural, radiant skin'
    })
const bgImage = new URL('@/assets/image/about/bg-about.jpg', import.meta.url).href
const bgImageEnd = new URL('@/assets/image/sleepSuperment/frascos.png', import.meta.url).href
</script>

<template>
    <SuperHeader :show-redirect="true"/>
    <div :style="{ 
        backgroundImage: `url(${bgImage})`
        }"
        class="h-[200px] xl:h-[300px] flex bg-cover bg-[position:center_16%] lg:bg-[position:center_22%] 2xl:!bg-[position:center_3%] bg-no-repeat"
        >            
        <div class="title w-[80%]  md:max-w-[700px] content-center mx-auto font-crossfit text-[#fff]">
            <h1 class="text-[2.25rem] py-8">
                Energy doesn’t lie.
            </h1>
        </div>
    </div>
    <div class="main flex flex-col bg-[#fff9ed]">
        <div class="max-w-[80%] md:max-w-[700px] pt-8 pb-10 mx-auto">
            <div class="title font-crossfit text-[#370f1e]">
                <h1 class="text-[2.25rem] leading-[1] pb-4">
                    The energy of loving what we do.
                </h1>
                <p class="font-sans leading-[1.2] font-medium">At Superment, we value integrity. Our goal is to do good — in the best way, all the time.
                    We love what we do. And we love doing it well. We hold knowledge, simplicity, transparency, straight talk, and respect — for your time and ours — in high regard. With lightness and a good sense of humor. Because humor is good energy. And energy doesn’t lie.
                </p>
            </div>
            <div class="title font-crossfit text-[#370f1e]">
                <h1 class="text-[2.25rem] leading-[1] pt-8 pb-4">
                    The energy of the mind and body.
                </h1>
                <p class="font-sans leading-[1.2] font-medium">No one escapes this truth: without health, nothing works. And to be healthy, you need to respect yourself as a human being. That means caring for everything that impacts your physical and mental balance. That’s where we come in — understanding you as a whole: sleep, energy, sexual vitality, healthy weight, joint health, and radiant skin. Because when it comes to health, energy really doesn’t lie.
                </p>
            </div>
            <div class="title font-crossfit text-[#370f1e]">
                <h1 class="text-[2.25rem] leading-[1] pt-8 pb-4">
                    The energy of science and nature.
                </h1>
                <p class="font-sans leading-[1.2] font-medium">From the day we’re born to the day we’re gone, nature is the answer. To who we are. To how we work. To how we live. By the way, it’s human nature that led us to invent science and technology — and when we bring them together with nature and integrity, the sky’s the limit. That’s real energy. The kind that moves us forward.                </p>
            </div>
            <div class="title font-crossfit text-[#370f1e]">
                <h1 class="text-[2.25rem] leading-[1] pt-8 pb-4">
                    The energy of our relationships.
                </h1>
                <p class="font-sans leading-[1.2] font-medium pb-8">We love caring for and growing with everyone: clients, teammates, partner labs, commercial allies, society, 
                    lovers — and haters. We believe in win-win relationships, and we work hard to do this in practice. We believe in talent. We favor the nonconformists. 
                    We don’t like to say or hear “no” for what matters. And we especially feed the relationships that help us evolve mutually. That’s the energy of “let’s go — together.”
                </p>
                <p class="font-sans leading-[1.2] border-[#370f1e] border-t font-medium  pt-4">
                    It’s always good to talk about energy. But we already gave you our genuine philosophy. Now maybe it’s your time. Send us a message or email — we’d love to hear from you. Superment is excited to meet you. And you’ll see for yourself: our energy doesn’t lie.
                </p>
            </div>
  
        </div>
    </div>
    <Frascos description="<span class='text-[#6EC8f0]'>Super Natural Sleep.</span> <span><br>Our latest way to help you sleep naturally.</span>" />
    <Stopwatch/>
    <SuperFooter/>
</template>