
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
        <div class="relative min-h-[493px] lg:min-h-[465px] 2xl:min-h-[623px] xl:min-h-[590px] md:min-h-[440px] bg-[url('@/assets/image/sleepWomam/bg.jpg')] md:bg-[url('@/assets/image/sleepWomam/header_bg_desktop.jpg')] 2xl:bg-[center_130px] md:bg-contain bg-cover bg-bottom bg-no-repeat">
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
