<script setup>
defineProps({ showRedirect: Boolean })

const items = [
  'Made in the USA',
  'Clean, natural, no fillers',
  'Save up to 57%',
  'Up to 120-day money-back guarantee',
  'Real reviews rated 4.9/5.0',
  'Free U.S. shipping'
]
</script>

<template>
  <section class="topo">
    <a v-if="showRedirect" href="/sleep/"
      class="absolute bg-[#fff9ed] rounded-2xl left-4 top-[0.9rem] flex items-center text-sm text-[#370f1e] hover:text-gray-700">
      <svg class="w-8 h-8 mr-[1px]" fill="none" stroke="currentColor" stroke-width="1.2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </a>
    <img src="@/assets/image/sleepSuperment/superment-gif.gif" 
    width="250" height="48" 
    alt="Logo animado" 
    fetchpriority="high"
    decoding="async" />
  </section>

  <section class="scroll-link-products">
    <div class="marquee">
      <div class="marquee__track">
        <!-- dois grupos idênticos para loop contínuo -->
        <ul class="marquee__group" v-for="i in 2" :key="i" :aria-hidden="i === 2">
          <li v-for="(t, idx) in items" :key="i + '-' + idx" class="marquee__item">{{ t }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.topo {
  background: #E1DCCD;
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.topo img {
  width: 250px;
  height: auto;
  object-fit: cover;
}

.scroll-link-products {
  background: #370F1E;
  height: 28px;
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.marquee {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.marquee__track {
  display: flex;
  width: max-content;
  will-change: transform;
  animation: marquee-scroll 18s linear infinite;
}

.marquee__group {
  display: flex;
  align-items: center;
  white-space: nowrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.marquee__item {
  font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
  color: #fff;
  font-size: 13px;
  font-weight: 300;
  line-height: 25px;
  padding: 0 16px;
}

.marquee__item+.marquee__item {
  position: relative;
}

.marquee__item+.marquee__item::before {
  content: "|";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding-left: 0px;
}

.marquee__item:last-child::after {
  content: "|";
  display: inline-block;
  margin-left: 16px;
  margin-right: 0;
  letter-spacing: 0;
}

.marquee__group>.marquee__item:first-child {
  padding-left: 0px;
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.marquee:hover .marquee__track {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .marquee__track {
    animation: none;
  }
}
</style>
