
<script setup>
import { useSeo } from '@/composables/useSeo'
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
        <div class="relative min-h-[530px] lg:min-h-[650px] bg-[url('@/assets/image/sleepWomam/bg.jpg')] md:bg-[url('@/assets/image/sleepWomam/header_bg_desktop.jpg')] lg:bg-[center_130px] bg-cover bg-top bg-no-repeat">
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
