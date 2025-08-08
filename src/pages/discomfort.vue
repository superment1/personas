
<script setup>
    import { useSeo } from '@/composables/useSeo';
    import Header from '@/components/Header.vue';
    import logoHeader from '@/assets/image/discomfort/header.svg';
    import Footer from '@/components/Footer.vue';
    import logoFooter from '@/assets/image/discomfort/footer.svg';
    import Learnmore from '@/components/Learnmore.vue';
    import SleepSection from '@/components/discomfort/SleepSection.vue';
    import CtaDiscomfort from '@/components/discomfort/CtaDiscomfort.vue';

    useSeo({
        title: 'SUPERMENT - Super Natural Sleep',
        description: 'Natural, deep sleep is essential for healthy, radiant skin.',
        keywords: 'superment, super natural sleep, sleep, natural, radiant skin'
    })
</script>
<template>
    <div>
       <div class="
            relative 
            min-h-[570px]
            bg-[url('@/assets/image/discomfort/sleep-mobile.webp')]
            md:bg-[url('@/assets/image/sleepWomam/beautysleep-bg.jpg')]
            bg-no-repeat
            bg-[left_110px]
            bg-contain"
        >
            <Header 
                color="#370F1E"
                :imageSrc="logoHeader"
            />
            <SleepSection />
        </div>
        <div class="w-full h-[60px] bg-[#370F1E] flex items-center justify-center">
            <p class="font-crossfit text-[#E1DCCD] text-[20px]">CLEAN-LABEL. MELATONIN-FREE. NON-SEDATIVE.</p>
        </div>
        <CtaDiscomfort />
        <Learnmore 
            backgroundColor="#FFFAF0"
            text="Learn more about us and how important is the right sleep"
        />
        <Footer 
            color="#370F1E"
            :imageSrc="logoFooter"
        />
    </div>
</template>