
<script setup>
import { useSeo } from '../composables/useSeo'
import HeaderMenopause from '../components/HeaderMenopause.vue'
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
import HeroSectionMenopause from '../components/HeroSectionMenopause.vue'
import TaglineStripMenopause from '../components/TaglineStripMenopause.vue'

useSeo({
    title: 'SUPERMENT - Super Natural Sleep',
    description: 'Natural, deep sleep is essential for healthy, radiant skin.',
    keywords: 'superment, super natural sleep, sleep, natural, radiant skin'
})
</script>

<template>
    <div>
        <div
        class="
            relative 
            min-h-[610px] 
            lg:min-h-[650px] 
            bg-no-repeat
            bg-cover 
            bg-bottom
            bg-[url('@/assets/image/sleepMenopause/hero-menopause.webp')]
            md:bg-[url('@/assets/image/sleepMenopause/hero-menopause-desk.webp')] 
            md:bg-[length:100%_auto]
            md:bg-[position:center_bottom]
            lg:bg-[length:auto_100%]
            lg:bg-[position:90%_130px]
        ">
            <HeaderMenopause />
            <HeroSectionMenopause />
        </div>
        <TaglineStripMenopause />
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
