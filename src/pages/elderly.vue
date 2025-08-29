<script setup>
import { useSeo } from '../composables/useSeo'
import Header from '../components/Header.vue'
import HeroSectionElderly from '../components/HeroSectionElderly.vue'
import TaglineStripElderly from '../components/TaglineStripElderly.vue'
import ProductHighlightElderly from '../components/ProductHighlightElderly.vue'
import IngredientsSectionElderly from '../components/IngredientsSectionElderly.vue'
import BadgesElderly from '../components/BadgesElderly.vue'
import CtaSectionElderly from '../components/CtaSectionElderly.vue'
import Footer from '@/components/Footer.vue'
import logoFooter from '@/assets/image/discomfort/footer.svg'
import Guarantees from '../components/Guarantees.vue'
import SleepTransformation from '../components/SleepTransformation.vue'
import logoHeader from '@/assets/image/discomfort/header.svg'
import Learnmore from '@/components/Learnmore.vue'

useSeo({
    title: 'Natural Sleep Aid for Elderly | Superment - Non-Medication Sleep Support',
    description: 'Struggling with sleep as a senior? Superment offers a gentle, non-habit forming natural sleep supplement with ingredients like Passionflower & California Poppy.',
    keywords: 'natural sleep aid for elderly sleep supplement for seniors non-medication sleep for older adults best sleep aid for seniors herbal sleep remedies elderly'
})
</script>

<template>
    <div>
        <!-- Blue Rounded Header -->
        <Header color="#370F1E" :image-src="logoHeader" />
        <HeroSectionElderly />

        <TaglineStripElderly />

        <ProductHighlightElderly />
        <SleepTransformation />
        <IngredientsSectionElderly />

        <!-- <Guarantees/> -->

        <BadgesElderly />

        <CtaSectionElderly />

        <Learnmore backgroundColor="#FFFAF0" text="Learn more about us and how important is the right sleep" />

        <Footer color="#370F1E" :imageSrc="logoFooter" />
    </div>
</template>
