
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
        <!-- Blue Rounded Header -->
        <div class="relative 
            min-h-[480px] sm:min-h-[493px] lg:min-h-[521px] md:min-h-[466px] xl:min-h-[616px]
            bg-[url('@/assets/image/sleepWomam/beauty-mobile-bg.jpg')]
            md:bg-[url('@/assets/image/sleepWomam/beautysleep-bg.jpg')]
            bg-no-repeat
            bg-[left_88px]
            md:bg-[20%_100px]
            md:[background-size:123%]
            xl:bg-[20%_100px]
            xl:bg-contain
            bg-contain
            lg:bg-[25%_108px]
            2xl:bg-[center_100px]">
            <Header 
                color="#6EC8F0"
                :imageSrc="logoHeader"
            />
            <HeroSection />
        </div>

        <TaglineStrip />

        <ProductHighlight />

        <BenefitsSection />

        <IngredientsSection />

        <Badges />

        <CtaSection />

        <Learnmore 
            backgroundColor="#CDEBFF"
            text="Learn more about us and how important is the right sleep"
        />

        <Footer 
            color="#6EC8F0"
            :imageSrc="footerLogo"
        />
    </div>
</template>
