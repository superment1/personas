
<script setup>
import { useSeo } from '../composables/useSeo'
import Header from '@/components/Header.vue'
import HeroSection from '@/components/HeroSection.vue'
import TaglineStrip from '@/components/TaglineStrip.vue'
import ProductHighlight from '@/components/ProductHighlight.vue'
import BenefitsSection from '@/components/BenefitsSection.vue'
import IngredientsSection from '@/components/IngredientsSection.vue'
import Badges from '@/components/Badges.vue'
import CtaSection from '@/components/CtaSection.vue'
import Learnmore from '@/components/Learnmore.vue'
import Footer from '@/components/Footer.vue'

useSeo({
    title: 'SUPERMENT - Super Natural Sleep',
    description: 'Natural, deep sleep is essential for healthy, radiant skin.',
    keywords: 'superment, super natural sleep, sleep, natural, radiant skin'
})
</script>

<template>
    <div>
        <!-- Blue Rounded Header -->
        <div class="relative 
            min-h-[480px] sm:min-h-[493px] md:min-h-[521px] xl:min-h-[558px] lg:min-h-[480px] 2xl:min-h-[645px]
            bg-[url('@/assets/image/sleepWomam/beauty-mobile-bg.jpg')]
            md:bg-[url('@/assets/image/sleepWomam/beautysleep-bg.jpg')]
            bg-no-repeat
            bg-[left_88px]
            lg:bg-[left_100px]
            bg-contain
            md:bg-contain
            2xl:bg-[center_100px]">
            <Header />
            <HeroSection />
        </div>

        <TaglineStrip />

        <ProductHighlight />

        <BenefitsSection />

        <IngredientsSection />

        <Badges />

        <CtaSection />

        <Learnmore />

        <Footer />
    </div>
</template>
