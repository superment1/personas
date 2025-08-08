
<script setup>
import { useSeo } from '../composables/useSeo'
import HeaderElderly from '../components/HeaderElderly.vue'
import HeroSectionElderly from '../components/HeroSectionElderly.vue'
import TaglineStripElderly from '../components/TaglineStripElderly.vue'
import ProductHighlightElderly from '../components/ProductHighlightElderly.vue'
import IngredientsSectionElderly from '../components/IngredientsSectionElderly.vue'
import BadgesElderly from '../components/BadgesElderly.vue'
import CtaSectionElderly from '../components/CtaSectionElderly.vue'
import LearnmoreElderly from '../components/LearnmoreElderly.vue'
import FooterElderly from '../components/FooterElderly.vue'
import Guarantees from '../components/Guarantees.vue'
import SleepTransformation from '../components/SleepTransformation.vue'

useSeo({
    title: 'Natural Sleep Aid for Elderly | Superment - Non-Medication Sleep Support',
    description: 'Struggling with sleep as a senior? Superment offers a gentle, non-habit forming natural sleep supplement with ingredients like Passionflower & California Poppy.',
    keywords: 'natural sleep aid for elderly sleep supplement for seniors non-medication sleep for older adults best sleep aid for seniors herbal sleep remedies elderly'
})
</script>

<template>
    <div>
        <!-- Blue Rounded Header -->
        <div class="relative min-h-[610px] lg:min-h-[650px] bg-[url('@/assets/image/sleepElderly/hero-mobile-2.png')] md:bg-[url('@/assets/image/sleepElderly/elderyHappyDesk.png')] lg:bg-[center_130px] bg-[length:110%] bg-[position:91%_100%] bg-no-repeat">
            <HeaderElderly />
            <HeroSectionElderly />
        </div>

        <TaglineStripElderly />

        <ProductHighlightElderly />
        <SleepTransformation/>
        <IngredientsSectionElderly />         
        
        <Guarantees/>

        <BadgesElderly />

        <CtaSectionElderly />

        <LearnmoreElderly />

        <FooterElderly />
    </div>
</template>
