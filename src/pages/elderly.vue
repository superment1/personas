
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
    title: 'SUPERMENT - Super Natural Sleep',
    description: 'Natural, deep sleep is essential for healthy, radiant skin.',
    keywords: 'superment, super natural sleep, sleep, natural, radiant skin'
})
</script>

<template>
    <div>
        <!-- Blue Rounded Header -->
        <div class="relative min-h-[530px] lg:min-h-[650px] bg-[url('@/assets/image/sleepElderly/elderyHappy.png')] md:bg-[url('@/assets/image/sleepElderly/elderyHappyDesk.png')] lg:bg-[center_130px] bg-[length:110%] bg-[position:100%_119%] bg-no-repeat">
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
