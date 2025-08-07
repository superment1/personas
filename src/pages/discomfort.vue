
<script setup>
    import { useSeo } from '@/composables/useSeo';
    import Header from '@/components/Header.vue'
    import logoHeader from '@/assets/image/discomfort/header.svg'
    import Footer from '@/components/Footer.vue'
    import logoFooter from '@/assets/image/discomfort/footer.svg'
    import Learnmore from '@/components/Learnmore.vue'

    useSeo({
        title: 'SUPERMENT - Super Natural Sleep',
        description: 'Natural, deep sleep is essential for healthy, radiant skin.',
        keywords: 'superment, super natural sleep, sleep, natural, radiant skin'
    })
</script>
<template>
    <Header 
        color="#370F1E"
        :imageSrc="logoHeader"
    >
    </Header>
    <div class="w-full h-[60px] bg-[#370F1E] flex items-center justify-center">
        <p class="font-crossfit text-[#E1DCCD] text-[20px]">CLEAN-LABEL. MELATONIN-FREE. NON-SEDATIVE.</p>
    </div>
    <div class="w-full h-[300px]"></div>
    <Learnmore 
        backgroundColor="#FFFAF0"
        text="Learn more about us and how important is the right sleep"
    />
    <Footer 
        color="#370F1E"
        :imageSrc="logoFooter"
    >
    </Footer>
</template>