<script setup>
  import InputRD from './InputRD.vue';

  const links = [
    { label: 'About Us', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Refund Policy', href: '/refundpolicy' }
  ]
</script>

<template>
  <section class="w-full bg-[#370F1E] flex flex-col items-center justify-start pt-0 pb-5">

    <!-- PARTE 1: Explore + Contact -->
    <div class="flex flex-col gap-0  md:gap-[1rem] lg:gap-[12.5rem] md:flex-row w-full justify-center items-center md:items-start">
      <!-- Explore -->
      <div class="w-full max-w-[350px] py-8 text-white flex flex-col items-start justify-center" >
        <h2 class="text-4xl font-bold font-crossfit uppercase mb-6 w-full text-left">Explore</h2>
        <ul class="space-y-1 text-[#FFFAF0] font-dmsans text-[18px]">
          <li
            v-for="item in links"
            :key="item.label"
            class="group border-b border-[#FFFAF0] h-[38px] w-[350px] lg:w-[450px]"
          >
            <RouterLink
              :to="item.href"
              class="flex justify-between items-center w-full transition underline-offset-2 hover:underline"
            >
              <span>{{ item.label }}</span>
              <span class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
                <img
                  src="@/assets/image/icons/seta-direita.png"
                  alt="seta"
                  class="w-8 h-8 object-contain color-[#FFFAF0]"
                />
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="w-full max-w-[350px] lg:max-w-[450px] py-8 text-white font-dmsans flex flex-col items-start text-left" >
        <h2 class="text-4xl font-normal font-crossfit uppercase mb-6">Contact</h2>
        <ul class="text-[#FFF]">
          <li class="flex items-center gap-2 border-b border-[#FFF] w-[350px] lg:w-[450px] h-[38px]">
            <span class="w-8 h-8 flex items-center justify-center">
              <img src="@/assets/image/icons/email.png" alt="email icon" class="w-6 h-6" />
            </span>
            <a href="mailto:superhelp@superment.co" class="text-[16px]">superhelp@superment.co</a>
          </li>
          <li class="flex items-center gap-2 border-b border-[#FFF] py-1 w-[350px] lg:w-[450px] h-[38px] mt-1">
            <span class="w-8 h-8 flex items-center justify-center">
              <img src="@/assets/image/icons/instagram.png" alt="instagram icon" class="w-6 h-6" />
            </span>
            <a href="https://instagram.com/superment.co" target="_blank" class="text-[16px]">@superment.co</a>
          </li>
        </ul>
      </div>


    </div>

    <!-- PARTE 2: InputRD -->
    <div class="max-w-[350px] sm:max-w-[85%] xl:max-w-[55%] lg:max-w-[75%] flex justify-center md:justify-center">
      <InputRD />
    </div>


    <!-- PARTE 3: Footer com logo e texto -->
    <div class="flex flex-col items-center mt-6">
      <img src="@/assets/image/sleepSuperment/superment1.png" alt="superment" class="mt-5" />
      <p class="text-[#FFFAF0] font-gelasio italic text-[12px] leading-[14px] text-center mt-2 w-[220px]">
        © Super Natural Sleep Research 2025. All Rights Reserved.
      </p>
      <p class="text-[#FFFAF0] font-dmsans font-light text-[10px] leading-[14px] text-justify mt-6 w-[350px] md:w-[700px]">
        Super Natural Sleep is a supplement formulated with natural ingredients that relax the nervous system and guide the user into deep, restorative sleep. It does not contain melatonin or harsh chemicals. Super Natural Sleep is manufactured in the United States by an FDA registered and GMP-compliant laboratories. All product’s quality, safety, and compliance certifications are managed by our manufacturing partner. This product is not intended to diagnose, treat, cure or prevent any disease. Always consult your physician before starting any dietary supplement, especially if you are taking medications, are pregnant, or have a medical condition. Super Natural Sleep is part of the commercial portfolio of Superment, a brand owned and operated by an internacional company in the United States.
      </p>
    </div>
  </section>
</template>

