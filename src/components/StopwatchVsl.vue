<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const DURATION_MS = 7 * 60 * 1000 // 7 minutos fixo
const mm = ref('07')
const ss = ref('00')
let endAt = Date.now() + DURATION_MS
let t = null

function tick() {
  const left = Math.max(0, endAt - Date.now())
  const totalSec = Math.floor(left / 1000)
  const minutes = Math.floor(totalSec / 60)
  const seconds = totalSec % 60
  mm.value = String(minutes).padStart(2, '0')
  ss.value = String(seconds).padStart(2, '0')
  if (left <= 0 && t) {
    clearInterval(t)
    t = null
  }
}

onMounted(() => {
  tick()
  t = setInterval(tick, 1000)
})

onBeforeUnmount(() => t && clearInterval(t))
</script>

<template>
  <section class="flex flex-col justify-end items-end py-0 bg-[##6EC8F0]">
    <div class="flex flex-col items-start justify-center w-[160px] gap-2 lg:gap-4">
      <div class="flex flex-row items-center gap-[3px] w-full lg:w-[410px]">
        <svg class="block lg:hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"
          fill="none">
          <path
            d="M8.59947 18.4132C9.12124 18.4132 9.64101 18.364 10.1547 18.2676C11.7803 20.5007 14.8687 20.9621 17.0542 19.3011C19.2396 17.6401 19.6911 14.4841 18.0656 12.2509C17.7786 11.8572 17.4395 11.5107 17.0542 11.2174C17.9131 6.44552 14.8226 1.8664 10.1527 0.988714C5.48289 0.113082 1.00169 3.2711 0.142771 8.04299C-0.714137 12.8149 2.37434 17.394 7.04419 18.2717C7.55593 18.3681 8.0777 18.4173 8.59746 18.4173L8.59947 18.4132ZM14.1021 11.4409C16.1611 11.4409 17.8288 13.145 17.8288 15.249C17.8288 17.353 16.1611 19.0571 14.1021 19.0571C12.0452 19.0571 10.3775 17.355 10.3755 15.2531C10.3775 13.1491 12.0452 11.445 14.1042 11.443H14.1021V11.4409ZM5.1618 9.16265H7.72651C7.92518 9.16265 8.08773 8.99654 8.08773 8.79353V4.40512C8.08773 4.2021 8.25029 4.036 8.44896 4.036H8.9306C9.12927 4.036 9.29182 4.2021 9.29182 4.40512V10.0239C9.29182 10.2269 9.12927 10.393 8.9306 10.393H5.1618C4.96313 10.393 4.80058 10.2269 4.80058 10.0239V9.53177C4.80058 9.32875 4.96313 9.16265 5.1618 9.16265Z"
            fill="#370F1E" />
          <path
            d="M14.345 12.6119H13.8633C13.6638 12.6119 13.5021 12.7771 13.5021 12.981V16.0877C13.5021 16.2916 13.6638 16.4568 13.8633 16.4568H14.345C14.5445 16.4568 14.7062 16.2916 14.7062 16.0877V12.981C14.7062 12.7771 14.5445 12.6119 14.345 12.6119Z"
            fill="#370F1E" />
          <path
            d="M14.345 17.1233H13.8633C13.6638 17.1233 13.5021 17.2886 13.5021 17.4924V17.7283C13.5021 17.9321 13.6638 18.0974 13.8633 18.0974H14.345C14.5445 18.0974 14.7062 17.9321 14.7062 17.7283V17.4924C14.7062 17.2886 14.5445 17.1233 14.345 17.1233Z"
            fill="#370F1E" />
        </svg>
        <svg class="hidden lg:block" xmlns="http://www.w3.org/2000/svg" width="49" height="50" viewBox="0 0 49 50"
          fill="none">
          <path
            d="M21.9241 44.7949C23.2543 44.7949 24.5795 44.6694 25.8892 44.4237C30.0334 50.1171 37.9074 51.2934 43.4791 47.0587C49.0507 42.8239 50.2019 34.7779 46.0577 29.0845C45.3261 28.0807 44.4614 27.1971 43.4791 26.4495C45.6689 14.2837 37.7898 2.60939 25.8841 0.371761C13.9785 -1.86064 2.55377 6.19064 0.363991 18.3564C-1.82067 30.5222 6.05332 42.1965 17.959 44.4342C19.2636 44.6799 20.5939 44.8054 21.919 44.8054L21.9241 44.7949ZM35.953 27.0194C41.2023 27.0194 45.454 31.3639 45.454 36.728C45.454 42.092 41.2023 46.4365 35.953 46.4365C30.7088 46.4365 26.4571 42.0972 26.452 36.7384C26.4571 31.3744 30.7088 27.0298 35.9581 27.0246H35.953V27.0194ZM13.1599 21.211H19.6985C20.205 21.211 20.6194 20.7875 20.6194 20.2699V9.08177C20.6194 8.56419 21.0339 8.14072 21.5404 8.14072H22.7683C23.2748 8.14072 23.6892 8.56419 23.6892 9.08177V23.4068C23.6892 23.9243 23.2748 24.3478 22.7683 24.3478H13.1599C12.6534 24.3478 12.2389 23.9243 12.2389 23.4068V22.152C12.2389 21.6344 12.6534 21.211 13.1599 21.211Z"
            fill="#370F1E" />
          <path
            d="M36.5721 30.0046H35.3442C34.8355 30.0046 34.4232 30.4259 34.4232 30.9457V38.8662C34.4232 39.386 34.8355 39.8073 35.3442 39.8073H36.5721C37.0807 39.8073 37.493 39.386 37.493 38.8662V30.9457C37.493 30.4259 37.0807 30.0046 36.5721 30.0046Z"
            fill="#370F1E" />
          <path
            d="M36.5721 41.5064H35.3442C34.8355 41.5064 34.4232 41.9278 34.4232 42.4475V43.0487C34.4232 43.5685 34.8355 43.9898 35.3442 43.9898H36.5721C37.0807 43.9898 37.493 43.5685 37.493 43.0487V42.4475C37.493 41.9278 37.0807 41.5064 36.5721 41.5064Z"
            fill="#370F1E" />
        </svg>
        <span class="text-[#370F13] font-crossfit text-[18px] lg:text-[46px] font-black leading-[106%] text-center">
          LIMITED TIME OFFER
        </span>
      </div>

      <div class="w-[160px] flex flex-row items-center justify-between lg:gap-8">
        <!-- Minutes -->
        <div class="flex flex-col gap-2">
          <div
            class="card relative overflow-hidden isolate
         before:content-[''] before:absolute
         before:inset-x-0
         before:top-1/2 before:-translate-y-1/2
         before:h-px before:bg-black/20 before:pointer-events-none">
            <span class="title text-white drop-shadow-[0_6px_12px_rgba(0,0,0,0.35)]">
              {{ mm }}</span>
          </div>
          <span class="label">Minutes</span>
        </div>

        <!-- Seconds -->
        <div class="flex flex-col gap-2">
          <div class="card relative overflow-hidden isolate
         before:content-[''] before:absolute
         before:inset-x-0
         before:top-1/2 before:-translate-y-1/2
         before:h-px before:bg-black/20 before:pointer-events-none">
            <span class="title text-white drop-shadow-[0_6px_12px_rgba(0,0,0,0.35)]">
              {{ ss }}</span>
          </div>
          <span class="label">Seconds</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  width: 75.94px;
  height: 75.94px;
  flex-shrink: 0;
  border-radius: 7.127px;
  background: linear-gradient(132deg, #FFDC03 2.9%, #C9B11C 94.39%);
  display: flex;
  align-items: center;
  justify-content: center;

}

.title {
  width: 55.942px;
  height: 60.33px;
  flex-shrink: 0;
  text-align: center;
  font-family: Crossfit;
  font-size: 56.204px;
  font-style: normal;
  font-weight: 900;
  line-height: 106%;
  background: linear-gradient(128deg, #FFF 20%, #DDD 95.88%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: white;
}

.label {
  color: #370F1E;
  text-align: center;
  font-family: Gelasio;
  font-size: 14.051px;
  font-style: italic;
  font-weight: 600;
  line-height: 106%;
}

@media(min-width: 1024px) {
  .card {
    width: 193.607px;
    height: 193.607px;
  }

  .title {
    width: 142.624px;
    height: 153.81px;
    flex-shrink: 0;
    text-align: center;
    font-family: Crossfit;
    font-size: 143.291px;
    font-style: normal;
    font-weight: 900;
    line-height: 106%;
    background: linear-gradient(128deg, #FFF 20%, #DDD 95.88%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: white;
  }

  .label {
    font-size: 35.823px;
  }
}
</style>
