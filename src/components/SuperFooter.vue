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
    <div class="flex flex-col gap-0  md:gap-[3rem] lg:gap-[2.5rem] md:flex-row w-full justify-center items-center py-6 md:items-start">
      <!-- Explore -->
      <div class="w-full max-w-[330px] py-[25px] text-white flex flex-col items-start justify-center" >
        <h2 class="text-4xl font-normal font-crossfit uppercase mb-[25px] w-full text-left">Explore</h2>
        <ul class="flex flex-col gap-1 space-y-1 text-[#FFFAF0] font-dmsans text-[18px]">
          <li
            v-for="item in links"
            :key="item.label"
            class="group border-b border-[#FFFAF0] h-[32px] w-[330px] lg:w-[330px]"
          >
            <RouterLink
              :to="item.href"
              class="flex justify-between items-center w-full transition underline-offset-2 hover:underline"
            >
              <p class="label" >{{ item.label }}</p>
              <span class="w-6 h-6 transition-transform duration-200 group-hover:translate-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFAF0"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-full h-full"
                >
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="14 6 20 12 14 18" />
                </svg>
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="w-full max-w-[330px] lg:max-w-[330px] py-[25px] text-white font-dmsans flex flex-col items-start text-left" >
        <h2 class="text-4xl font-normal font-crossfit uppercase mb-[28px]">Contact</h2>
        <ul class="text-[#FFF] flex flex-col gap-1">
          <li class="flex items-center gap-2 border-b border-[#FFF] w-[330px] lg:w-[330px] pb-3 h-[32px]">
            <span class="w-8 h-8 flex items-center justify-center">
              <img src="@/assets/image/icons/email.png" alt="email icon" class="w-6 h-6" />
            </span>
            <a href="mailto:superhelp@superment.co" class="label">superhelp@superment.co</a>
          </li>
          <li class="flex items-center gap-2 border-b border-[#FFF] py-1 w-[330px] lg:w-[330px] pb-3 h-[32px] mt-1">
            <span class="w-8 h-8 flex items-center justify-center">
              <img src="@/assets/image/icons/instagram.png" alt="instagram icon" class="w-6 h-6" />
            </span>
            <a href="https://instagram.com/superment.co" target="_blank" class="label">@superment.co</a>
          </li>
        </ul>
      </div>


    </div>

    <!-- PARTE 2: InputRD -->
    <div class="max-w-[330px] sm:max-w-[700px] flex justify-center md:justify-center">
      <InputRD />
    </div>


    <!-- PARTE 3: Footer com logo e texto -->
    <div class="flex flex-col gap-3 items-center">
      <img src="@/assets/image/sleepSuperment/superment1.png" alt="superment" class="mt-5 w-[150px]" />
      <p class="label-reserved">
        © Super Natural Sleep Research 2025. All Rights Reserved.
      </p>
      <p class="text-[#FFFAF0] font-dmsans font-extralight text-[10px] leading-[12px] text-justify mt-3 w-[330px] md:w-[700px]">
        Super Natural Sleep is a supplement formulated with natural ingredients that relax the nervous system and guide the user into deep, restorative sleep. It does not contain melatonin or harsh chemicals. Super Natural Sleep is manufactured in the United States by an FDA registered and GMP-compliant laboratories. All product’s quality, safety, and compliance certifications are managed by our manufacturing partner. This product is not intended to diagnose, treat, cure or prevent any disease. Always consult your physician before starting any dietary supplement, especially if you are taking medications, are pregnant, or have a medical condition. Super Natural Sleep is part of the commercial portfolio of Superment, a brand owned and operated by an internacional company in the United States.
      </p>
    </div>
  </section>
</template>

<style scoped>
  .label {
    font-family: 'Gelasio';
    font-weight: 300;
    font-size: 1rem;
    color: white
  }

  .label-reserved {
    font-family: 'Gelasio';
    font-weight: 300;
    font-size: 10px;
    color: white;
    width: 180px;
    line-height: 14px;
    text-align: center;
  }
</style>