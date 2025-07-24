<script setup>
  import InputRD from './InputRD.vue';

  const links = [
    { label: 'About Us', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Refund Policy', href: '/refundpolicy' }
  ]
</script>

<style scoped>
  .font-crossfit {
    font-family: 'Crossfit', sans-serif;
  }
  .font-dmsans {
    font-family: 'DM Sans', sans-serif;
  }
  
  section.footer {
    width: 100%;
    background-color: #370F1E;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
  
  section.footer p.description {
    margin-top: 30px;
    font-family: 'DM Sans';
    font-weight: 200;
    font-style: Regular;
    font-size: 10px;
    line-height: 14px;
    text-align: justify;
    color: #FFFAF0;
    width: 330px;
  }

  section.footer img {
    margin-top: 20px;
  }

  section.footer p.reserved {
    color: #FFFAF0;
    font-family: 'Gelasio';
    font-style: Italic;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -1%;
    text-align: center;
    margin-top: 10px;
    width: 220px;
  }

  section.footer div.footer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section.footer div.explore {
    width: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  section.footer div.contact {
    width: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

</style>

<template>
  <section class="footer">
    <div class="explore text-white px-6 py-8 w-full">
      <h2 class="text-4xl md:text-4xl font-bold font-crossfit uppercase mb-6 w-full"  style="text-align: start;">Explore</h2>
      <ul class="space-y-1 text-[#FFFAF0] font-dmsans text-[18px] md:text-[18px]">
        <li
          v-for="item in links"
          :key="item.label"
          class="group border-b border-[#FFFAF0] h-[38px] w-[300px]"
        >
          <RouterLink
            :to="item.href"
            class="flex justify-between items-center w-full transition underline-offset-2 hover:underline"
          >
            <span>{{ item.label }}</span>
            <span class="text-1xl transition group-hover:translate-x-1">→</span>
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="contact bg-[#370F1E] text-white px-6 py-8 w-full font-dmsans">
      <h2 class="text-4xl md:text-3xl font-bold font-crossfit uppercase mb-6 w-full"  style="text-align: start;">Contact</h2>
      <ul class="space-y-4 text-[#FFFAF0]">
        <li class="flex items-center gap-3 border-b border-[#FFFAF0] pb-2 w-[300px]">
          <span class="bg-[#6EC8F0] w-8 h-8 flex items-center justify-center rounded">
            📧
          </span>
          <a href="mailto:superhelp@superment.co" class="text-[16px]">superhelp@superment.co</a>
        </li>
        <li class="flex items-center gap-3 border-b border-[#FFFAF0] pb-2 w-[300px]">
          <span class="bg-[#6EC8F0] w-8 h-8 flex items-center justify-center rounded">
            📷
          </span>
          <a href="https://instagram.com/superment.co" target="_blank" class="text-[16px]">@superment.co</a>
        </li>
      </ul>
    </div>
    <InputRD />
    <div class="footer">
      <img src="@/assets/image/sleepSuperment/superment1.png" alt="superment">
      <p class="reserved">© Super Natural Sleep Research 2025. All Rights Reserved.</p>
      <p class="description">Super Natural Sleep is a supplement formulated with natural ingredients that relax the nervous system and guide the user into deep, restorative sleep. It does not contain melatonin or harsh chemicals. Super Natural Sleep is manufactured in the United States by an FDA registered and GMP-compliant laboratories. All product’s quality, safety, and compliance certifications are managed by our manufacturing partner. This product is not intended to diagnose, treat, cure or prevent any disease. Always consult your physician before starting any dietary supplement, especially if you are taking medications, are pregnant, or have a medical condition. Super Natural Sleep  is part of the commercial portfolio of Superment, a brand owned and operated by an internacional company in the United States.</p>
    </div>
  </section>
</template>

