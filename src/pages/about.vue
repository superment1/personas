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
const bgImage = new URL('@/assets/image/about/sleep-about.jpg', import.meta.url).href
const bgImageEnd = new URL('@/assets/image/sleepSuperment/frascos.png', import.meta.url).href
</script>

<template>
    <SuperHeader :show-redirect="true"/>
    <div :style="{ backgroundImage: `url(${bgImage})`,  backgroundSize: '110%', backgroundPosition: 'center 66%' }" 
            class="h-[200px] xl:h-[300px] flex lg:bg-cover lg:bg-[position:-55rem] 2xl:bg-[position:center_66%] bg-no-repeat">
        <div class="title w-[80%]  md:max-w-[700px] content-center mx-auto font-crossfit text-[#370f1e]">
            <h1 class="text-[2.25rem] py-8">
                <!-- background-size: cover;
    background-repeat: no-repeat;
    background-position-y: -55rem; -->
                About Us
            </h1>
        </div>
    </div>
    <div class="main flex flex-col bg-[#fff9ed]">
        <div class="max-w-[80%] md:max-w-[700px] mx-auto">
            <div class="title font-crossfit text-[#370f1e]">
                <h1 class="text-[2.25rem] pt-4">
                    OUR MISSION
                </h1>
                <p class="font-sans leading-[1.2] font-medium">Empowering you to reclaim your days —
    with more focus, balanced energy, and
    deep, restorative sleep. Because a vibrant,
    fulfilling life shouldn’t be out of reach. We
    believe natural, science-backed solutions
    can help you feel your best without harsh
    chemicals or drastic routines</p>
            </div>
            <div class="title font-crossfit text-[#370f1e]">
                <h1 class="text-[2.25rem] pt-4">
                    OUR MISSION
                </h1>
                <p class="font-sans leading-[1.2] font-medium">We watched people we love — friends, family,
    even ourselves — getting trapped in a cycle of
    stress, fatigue, and restless nights. Productivity
    slipped, happiness faded, and the spark for life
    was getting dimmer. We knew there had to be
    a better way. So, we partnered with Eagle Labs,
    one of the most respected supplement
    laboratories in the United States, to create
    premium natural formulas designed to restore
    your energy, protect your focus, and support
    true, sustainable well-being.</p>
            </div>
            <div class="title font-crossfit text-[#370f1e]">
                <h1 class="text-[2.25rem] pt-4">
                    OUR VALUES
                </h1>
            </div>
            <div class="font-sans leading-[1.2] font-medium text-[#370f1e]">
            <div class="py-5 border-b-2 font-medium border-[#370f1e]">
                    <p class="italic font-gelasio pb-3 font-semibold">Quality </p>
                    <p class="pb-3"> We hold ourselves to the highest standards,
    using only rigorously tested ingredients,
    certified and manufactured in FDA-approved
    facilities to deliver supplements you can
    count on.</p>
                </div>
                <div class="py-5 border-b-2 border-[#370f1e]">
                    <p class="italic font-gelasio font-semibold pb-3">Trust</p>
                    <p class="pb-3"> We hold ourselves to the highest standards,
    using only rigorously tested ingredients,
    certified and manufactured in FDA-approved
    facilities to deliver supplements you can
    count on.</p>
                </div>
                <div class="py-5">
                    <p class="italic font-gelasio font-semibold pb-3">Respect</p>
                    <p class="pb-3"> We believe health should be empowering, not
    restrictive. Our products are made to fit your
    real life, supporting your well-being without
    forcing impossible diets or miracle promises.</p>
                </div>
            </div>    
        </div>
    </div>
    <Frascos/>
    <Stopwatch/>
    <SuperFooter/>
</template>