<script setup>
import { ref, onMounted } from "vue"  
defineProps({ showRedirect: Boolean })

const items = [
  'Made in the USA',
  'Clean, natural, no fillers',
  'Save up to 57%',
  'Up to 120-day money-back guarantee',
  'Real reviews rated 4.9/5.0',
  'Free U.S. shipping'
]
const showGif = ref(false)
const gifSrc = new URL("../assets/image/sleepSuperment/superment-gif.gif", import.meta.url).href

onMounted(async () => {
  const img = new Image()
  img.src = gifSrc
  try {
    if (img.decode) {
      await img.decode()
    } else {
      await new Promise((ok, err) => { img.onload = ok; img.onerror = err })
    }
    showGif.value = true
  } catch {}
})
</script>

<template>
  <section class="topo relative flex flex-col items-center">
    <!-- Botão voltar -->
    <a
      v-if="showRedirect"
      href="/sleep/"
      class="absolute bg-[#fff9ed] rounded-2xl left-4 top-[0.9rem] flex items-center text-sm text-[#370f1e] hover:text-gray-700"
    >
      <svg
        class="w-8 h-8 mr-[1px]"
        fill="none"
        stroke="currentColor"
        stroke-width="1.2"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </a>
    <div class="pb-5 relative w-[250px] h-[60px]">
      <div
        class="absolute inset-0 flex items-center text-[#370F1E] justify-center
              transition-opacity duration-300 pointer-events-none select-none"
        :class="{'opacity-0': showGif}"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 39" width="200" height="39" fill="currentColor">
          <g clip-path="url(#clip0_1_1909)">
            <path d="M9.9668 0.902281C15.2733 0.902281 19.2819 2.5688 19.2819 9.23766V10.1389C19.2819 12.2343 19.0394 13.0683 17.6743 13.0683H12.9172C11.838 13.0683 11.1554 12.8412 11.1554 11.1481V8.73168C11.1554 7.6202 10.9353 6.81148 9.81263 6.81148C8.60163 6.81148 8.40401 7.64543 8.40401 8.57891V10.0436C8.40401 12.9239 9.9668 14.1601 11.2661 15.2464L14.459 17.9235C18.291 20.9804 19.5903 23.9854 19.5903 29.39C19.5903 35.3006 17.8509 38.8369 10.4518 38.8369C4.02117 38.8369 0.916598 36.3112 0.916598 30.1483V28.9163C0.916598 26.8699 1.15908 26.0374 2.50182 26.0374H7.32477C8.71236 26.0374 9.04174 26.6947 9.04174 28.2351V31.0327C9.04174 32.2703 9.26179 32.9529 10.4069 32.9529C11.4861 32.9529 11.7062 32.2717 11.7062 31.135V29.1391C11.7062 26.8405 11.046 25.8552 8.90999 24.0877L5.38634 21.1065C1.75196 18.1015 0.431641 15.5491 0.431641 10.9785C0.431641 4.18485 3.35961 0.900879 9.9668 0.900879" fill="currentColor"/>
            <path d="M21.2188 4.18603C21.2188 1.96308 21.9238 1.4585 24.4789 1.4585H26.5267C28.6851 1.4585 29.8303 1.55941 29.8303 4.18603V29.8229C29.8303 31.7165 30.0938 32.2982 31.2178 32.2982C32.3419 32.2982 32.6489 31.7431 32.6489 29.8229V4.18603C32.6489 1.6351 33.1338 1.4585 35.9959 1.4585H38.0002C40.5988 1.4585 41.259 1.96448 41.259 4.18603V29.1908C41.259 36.6165 38.0002 38.8395 31.2613 38.8395C24.5223 38.8395 21.2201 36.6165 21.2201 29.1908V4.18603H21.2188Z" fill="currentColor"/>
            <path d="M52.7536 23.0279C54.5155 23.0279 55.0214 21.8155 55.0214 18.3297V11.7632C55.0214 8.63055 54.4272 7.44338 52.7312 7.44338H52.1594V23.0279H52.7536ZM43.5493 4.18604C43.5493 1.73602 44.4743 1.4585 46.9397 1.4585H53.4586C62.1781 1.35759 63.9847 5.14614 63.9623 15.1985C63.9623 25.1752 61.6945 28.5096 53.8104 28.5096H52.1579V35.3046C52.1579 37.4 51.673 38.3854 49.8677 38.3854H45.618C43.9894 38.3854 43.5479 37.3496 43.5479 35.0509V4.18604H43.5493Z" fill="currentColor"/>
            <path d="M65.7031 4.18603C65.7031 2.29246 66.3198 1.4585 67.8392 1.4585H79.7753C80.5896 1.4585 81.2946 2.26723 81.2946 3.2021V8.37965C81.2946 9.33976 80.5896 10.1219 79.7753 10.1219H74.3146V15.7045H79.2917C80.1061 15.7045 80.8111 16.4627 80.8111 17.3962V22.0692C80.8111 23.0041 80.1061 23.8128 79.2917 23.8128H74.3146V29.7234H79.7753C80.5896 29.7234 81.2946 30.5069 81.2946 31.4656V36.6936C81.2946 37.6285 80.5896 38.3854 79.7753 38.3854H67.8392C66.3198 38.3854 65.7031 37.5528 65.7031 35.7083V4.18603Z" fill="currentColor"/>
            <path d="M92.502 16.6632C93.912 16.6632 94.8357 15.6022 94.8357 13.1017V10.7526C94.8357 8.45399 93.9989 7.44343 92.4796 7.44343H91.9077V16.6632H92.502ZM83.2976 4.18608C83.2976 1.73607 84.2227 1.45855 86.6881 1.45855H93.1846C101.904 1.35763 103.711 5.0705 103.711 11.7646C103.711 16.9169 102.588 19.7454 99.6152 20.9325L103.336 33.5358C104.107 36.112 103.425 38.3854 101.552 38.3854H97.6767C96.355 38.3854 95.7383 37.4001 95.3865 35.6831L93.207 25.0238L92.9211 22.1449H91.9077V35.3047C91.9077 37.4001 91.4227 38.3854 89.6175 38.3854H85.3888C83.7377 38.3854 83.2976 37.3496 83.2976 35.051V4.18608Z" fill="currentColor"/>
            <path d="M138.645 4.18603C138.645 2.29246 139.261 1.4585 140.781 1.4585H152.715C153.53 1.4585 154.235 2.26723 154.235 3.2021V8.37965C154.235 9.33976 153.531 10.1219 152.715 10.1219H147.253V15.7045H152.23C153.046 15.7045 153.75 16.4627 153.75 17.3962V22.0692C153.75 23.0041 153.046 23.8128 152.23 23.8128H147.253V29.7234H152.715C153.53 29.7234 154.235 30.5069 154.235 31.4656V36.6936C154.235 37.6285 153.531 38.3854 152.715 38.3854H140.781C139.261 38.3854 138.645 37.5528 138.645 35.7083V4.18603Z" fill="currentColor"/>
            <path d="M156.239 4.28688C156.239 1.76118 157.252 1.45703 159.695 1.45703H162.421C164.36 1.45703 165.328 2.13962 165.857 4.28688L168.747 14.9714L169.518 18.8608C169.539 19.0122 169.561 19.0374 169.627 19.0374H169.715C169.783 19.0374 169.783 18.987 169.783 18.8861L169.286 4.13551C169.155 1.73595 170.211 1.45703 172.59 1.45703H174.429C177.005 1.45703 177.688 2.11439 177.688 4.18457V35.1251C177.688 37.3733 177.116 38.3839 175.243 38.3839H171.267C169.682 38.3839 169.021 37.2976 168.382 34.9485L165.114 24.1631L164.343 20.7544C164.32 20.6269 164.299 20.603 164.232 20.603H164.166C164.1 20.603 164.078 20.6535 164.1 20.9058L164.588 35.3031C164.699 37.3986 164.103 38.3839 162.298 38.3839H158.309C156.679 38.3839 156.239 37.3481 156.239 35.0495V4.28548V4.28688Z" fill="currentColor"/>
            <path d="M179.515 8.37819V3.20064C179.515 2.26576 180.176 1.45703 180.991 1.45703H198.057C198.872 1.45703 199.533 2.26576 199.533 3.20064V8.37819C199.533 9.33829 198.873 10.1218 198.057 10.1218H193.808V35.7587C193.808 37.5513 193.236 38.3853 191.782 38.3853H187.29C185.816 38.3853 185.242 37.5513 185.242 35.7587V10.1218H180.993C180.178 10.1218 179.517 9.33829 179.517 8.37819" fill="currentColor"/>
            <path d="M106.489 4.81523C106.577 1.70786 107.942 1.45557 109.593 1.45557H114.125C116.614 1.45557 117.583 1.75831 117.979 4.25879L120.604 22.5456C120.648 22.7979 120.693 22.9002 120.803 22.9002H120.935C121.089 22.9002 121.134 22.7993 121.155 22.5456L123.715 4.25879C124.089 1.78354 125.057 1.45557 127.524 1.45557H132.056C133.708 1.45557 135.073 1.70786 135.16 4.81523L136.437 35.0508C136.525 37.3494 135.997 38.3852 134.367 38.3852H130.21C128.425 38.3852 127.897 37.3999 127.919 35.3045L128.025 16.4864C128.025 16.108 128.025 16.0071 127.87 16.0071H127.803C127.628 16.0071 127.628 16.108 127.583 16.4612L124.913 36.1889C124.648 38.0839 124.076 38.3866 122.027 38.3866H119.681C117.567 38.3866 117.039 38.0839 116.796 36.1889L114.126 16.3603C114.083 16.0576 114.038 16.0071 113.95 16.0071H113.861C113.751 16.0071 113.707 16.108 113.707 16.436L113.767 35.3045C113.811 37.4013 113.282 38.3852 111.434 38.3852H107.342C105.712 38.3852 105.161 37.3494 105.25 35.0508L106.483 4.81523H106.489Z" fill="currentColor"/>
          </g>
          <defs>
            <clipPath id="clip0_1_1909">
              <rect width="199.037" height="38" fill="currentColor" transform="translate(0.481689 0.793457)"/>
            </clipPath>
          </defs>
        </svg>
      </div>

      <img
        :src="gifSrc"
        width="250"
        height="60"
        loading="lazy"
        alt="Logo animado"
        decoding="async"
        class="absolute inset-0 w-full h-full object-contain transition-opacity duration-300
              pointer-events-none select-none"
        :class="{'opacity-0': !showGif}"
        aria-hidden="true"
      />
    </div>
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
  height: 60px;
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

@media (prefers-reduced-motion: reduce) {
  .marquee__track {
    animation: none;
  }
}
</style>
