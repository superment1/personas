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
  <section class="w-[full] flex flex-col justify-start items-center py-0 bg-[#6EC8F0]">
    <div class="flex flex-row items-start ml-5">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
          <path
            d="M10.1272 20.7522C10.7417 20.7522 11.3538 20.6943 11.9588 20.5808C13.8731 23.2107 17.5102 23.754 20.0839 21.7979C22.6576 19.8418 23.1893 16.1252 21.275 13.4953C20.937 13.0316 20.5376 12.6235 20.0839 12.2781C21.0954 6.6585 17.4559 1.26588 11.9564 0.232271C6.45695 -0.79892 1.17964 2.92013 0.168135 8.53976C-0.841006 14.1594 2.79615 19.552 8.29561 20.5856C8.89826 20.6991 9.51273 20.7571 10.1248 20.7571L10.1272 20.7522ZM16.6074 12.5414C19.0322 12.5414 20.9961 14.5482 20.9961 17.0259C20.9961 19.5037 19.0322 21.5105 16.6074 21.5105C14.185 21.5105 12.2211 19.5061 12.2187 17.0308C12.2211 14.553 14.185 12.5462 16.6098 12.5438H16.6074V12.5414ZM6.07881 9.85833H9.09915C9.33311 9.85833 9.52454 9.66271 9.52454 9.42363V4.25561C9.52454 4.01652 9.71597 3.82091 9.94994 3.82091H10.5171C10.7511 3.82091 10.9425 4.01652 10.9425 4.25561V10.8726C10.9425 11.1117 10.7511 11.3073 10.5171 11.3073H6.07881C5.84484 11.3073 5.65342 11.1117 5.65342 10.8726V10.293C5.65342 10.0539 5.84484 9.85833 6.07881 9.85833Z"
            fill="#370F1E" />
          <path
            d="M16.8934 13.9203H16.3262C16.0913 13.9203 15.9008 14.1149 15.9008 14.355V18.0137C15.9008 18.2537 16.0913 18.4484 16.3262 18.4484H16.8934C17.1283 18.4484 17.3188 18.2537 17.3188 18.0137V14.355C17.3188 14.1149 17.1283 13.9203 16.8934 13.9203Z"
            fill="#370F1E" />
          <path
            d="M16.8934 19.2332H16.3262C16.0913 19.2332 15.9008 19.4278 15.9008 19.6679V19.9456C15.9008 20.1857 16.0913 20.3803 16.3262 20.3803H16.8934C17.1283 20.3803 17.3188 20.1857 17.3188 19.9456V19.6679C17.3188 19.4278 17.1283 19.2332 16.8934 19.2332Z"
            fill="#370F1E" />
        </svg>
      </div>

      <div class="ml-2">
        <!-- Headline -->
        <div class="text-[#370F13] font-gelasio italic text-[12px] font-black leading-[106%] text-center">
          LIMITED TIME OFFER
        </div>

        <!-- Tiles -->
        <div class="flex items-end gap-2 card">
          <!-- Minutes -->
          <div class="flex flex-col items-center mt-[2px]">
            <div class="tile">
              <span class="tile-num">{{ mm }}</span>
            </div>
            <span class="label">Minutes</span>
          </div>

          <!-- Seconds -->
          <div class="flex flex-col items-center">
            <div class="tile">
              <span class="tile-num">{{ ss }}</span>
            </div>
            <span class="label">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tile {
  width: 69px;
  height: 69px;
  border-radius: 6.593px;
  display: grid;
  place-items: center;
  /* amarelo com leve gradiente e “relevo” */
  background: linear-gradient(132deg, #FFDC03 2.9%, #C9B11C 94.39%);
}

.tile-num {
  text-align: center;
  font-family: Crossfit;
  font-size: 52px;
  font-style: normal;
  font-weight: 900;
  line-height: 106%;
  background: linear-gradient(128deg, #FFF 20%, #DDD 75.88%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.label {
  color: #370F13;
  font-family: 'Gelasio', serif;
  text-align: center;
  font-size: 13px;
  font-style: italic;
  font-weight: 600;
  line-height: 106%;
  margin-top: 5px;
}
</style>
