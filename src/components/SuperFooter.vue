<script setup>

</script>

<style scoped>
  section.footer {
    width: 100%;
    height: 301px;
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
</style>

<template>
  <section class="footer">
    <p class="description">Super Natural Sleep is a supplement formulated with natural ingredients that relax the nervous system and guide the user into deep, restorative sleep. It does not contain melatonin or harsh chemicals. Super Natural Sleep is manufactured in the United States by an FDA registered and GMP-compliant laboratories. All product’s quality, safety, and compliance certifications are managed by our manufacturing partner. This product is not intended to diagnose, treat, cure or prevent any disease. Always consult your physician before starting any dietary supplement, especially if you are taking medications, are pregnant, or have a medical condition. Super Natural Sleep  is part of the commercial portfolio of Superment, a brand owned and operated by an internacional company in the United States.</p>
    <div class="line"></div>
    <img src="@/assets/image/sleepSuperment/superment1.png" alt="superment">
    <p class="reserved">© Super Natural Sleep Research 2025. All Rights Reserved.</p>
  </section>
</template>

