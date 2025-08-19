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
import logoHeader from '@/assets/image/sleepWomam/logo.svg'
import footerLogo from '@/assets/image/sleepWomam/footer_logo.svg'

useSeo({
    title: 'SUPERMENT - Super Natural Sleep',
    description: 'Natural, deep sleep is essential for healthy, radiant skin.',
    keywords: 'superment, super natural sleep, sleep, natural, radiant skin'
})
</script>

<template>
    <div>
        <Header color="#6EC8F0" :imageSrc="logoHeader" />
        <HeroSection />

        <TaglineStrip />

        <ProductHighlight />

        <BenefitsSection />

        <IngredientsSection />

        <Badges />

        <CtaSection />

        <Learnmore backgroundColor="#CDEBFF" text="Learn more about us and how important is the right sleep" />

        <Footer color="#6EC8F0" :imageSrc="footerLogo" />
    </div>
</template>

<style scoped>
@media(max-width: 424px) {
    .image-mobile {
        height: 580px;
    }
}
</style>