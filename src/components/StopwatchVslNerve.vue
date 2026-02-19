<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import FlipDigit from './FlipDigit2.vue'


const props = defineProps({
  durationMs: { type: Number, default: 7 * 60 * 1000 },    
  startOn:    { type: String,  default: 'video-ended' },   
  persistKey: { type: String,  default: '' }                
})
const emit = defineEmits(['expired'])

const DURATION_MS = 7 * 60 * 1000
const mm = ref('07')
const ss = ref('00')
let endAt = 0
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
    emit('expired') 
  }
}

function startCountdown() {
  if (props.persistKey) {
    const savedStart = Number(localStorage.getItem(props.persistKey) || 0)
    const startAt = savedStart || Date.now()
    if (!savedStart) localStorage.setItem(props.persistKey, String(startAt))
    endAt = startAt + props.durationMs
  } else {
    endAt = Date.now() + props.durationMs
  }
  tick()
  if (t) clearInterval(t)
  t = setInterval(tick, 1000)
}

onMounted(() => {
  if (props.startOn === 'mount') {
    startCountdown()
    return
  }
  const el = document.getElementById('vid-68aa4210166658ec2475a56e')
  const onReady = () => {
    el?.addEventListener('video:ended', () => { startCountdown() }, { once: true })
  }
  el?.addEventListener('player:ready', onReady, { once: true })
  document.addEventListener('player:ready', onReady, { once: true })
})
onBeforeUnmount(() => t && clearInterval(t))
</script>

<template>
  <section class="flex flex-col justify-end items-end py-0 ">
    <div class="flex flex-col items-start justify-center w-[160px] sm:w-[220px] gap-2 xl:gap-4">
      <div class="flex flex-row items-center gap-[3px] w-full xl:w-[410px]">       
        <svg class="hidden sm:block xl:hidden"  xmlns="http://www.w3.org/2000/svg" width="49" height="50" viewBox="0 0 49 50" fill="none">
          <path d="M21.9241 44.7949C23.2543 44.7949 24.5795 44.6694 25.8892 44.4237C30.0334 50.1171 37.9074 51.2934 43.4791 47.0587C49.0507 42.8239 50.2019 34.7779 46.0577 29.0845C45.3261 28.0807 44.4614 27.1971 43.4791 26.4495C45.6689 14.2837 37.7898 2.60939 25.8841 0.371761C13.9785 -1.86064 2.55377 6.19064 0.363991 18.3564C-1.82067 30.5222 6.05332 42.1965 17.959 44.4342C19.2636 44.6799 20.5939 44.8054 21.919 44.8054L21.9241 44.7949ZM35.953 27.0194C41.2023 27.0194 45.454 31.3639 45.454 36.728C45.454 42.092 41.2023 46.4365 35.953 46.4365C30.7088 46.4365 26.4571 42.0972 26.452 36.7384C26.4571 31.3744 30.7088 27.0298 35.9581 27.0246H35.953V27.0194ZM13.1599 21.211H19.6985C20.205 21.211 20.6194 20.7875 20.6194 20.2699V9.08177C20.6194 8.56419 21.0339 8.14072 21.5404 8.14072H22.7683C23.2748 8.14072 23.6892 8.56419 23.6892 9.08177V23.4068C23.6892 23.9243 23.2748 24.3478 22.7683 24.3478H13.1599C12.6534 24.3478 12.2389 23.9243 12.2389 23.4068V22.152C12.2389 21.6344 12.6534 21.211 13.1599 21.211Z" fill="#C7AF7F"/>
          <path d="M36.5721 30.0046H35.3442C34.8355 30.0046 34.4232 30.4259 34.4232 30.9457V38.8662C34.4232 39.386 34.8355 39.8073 35.3442 39.8073H36.5721C37.0807 39.8073 37.493 39.386 37.493 38.8662V30.9457C37.493 30.4259 37.0807 30.0046 36.5721 30.0046Z" fill="#C7AF7F"/>
          <path d="M36.5721 41.5064H35.3442C34.8355 41.5064 34.4232 41.9278 34.4232 42.4475V43.0487C34.4232 43.5685 34.8355 43.9898 35.3442 43.9898H36.5721C37.0807 43.9898 37.493 43.5685 37.493 43.0487V42.4475C37.493 41.9278 37.0807 41.5064 36.5721 41.5064Z" fill="#C7AF7F"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M8.59947 17.5703C9.12124 17.5703 9.64101 17.5211 10.1547 17.4247C11.7803 19.6579 14.8687 20.1193 17.0542 18.4582C19.2396 16.7972 19.6911 13.6412 18.0656 11.408C17.7786 11.0143 17.4395 10.6678 17.0542 10.3745C17.9131 5.60263 14.8226 1.0235 10.1527 0.145819C5.48289 -0.729813 1.00169 2.4282 0.142771 7.20009C-0.714137 11.972 2.37434 16.5511 7.04419 17.4288C7.55593 17.5252 8.0777 17.5744 8.59746 17.5744L8.59947 17.5703ZM14.1021 10.598C16.1611 10.598 17.8288 12.3021 17.8288 14.4061C17.8288 16.5101 16.1611 18.2142 14.1021 18.2142C12.0452 18.2142 10.3775 16.5121 10.3755 14.4102C10.3775 12.3062 12.0452 10.6021 14.1042 10.6001H14.1021V10.598ZM5.1618 8.31975H7.72651C7.92518 8.31975 8.08773 8.15365 8.08773 7.95063V3.56222C8.08773 3.3592 8.25029 3.1931 8.44896 3.1931H8.9306C9.12927 3.1931 9.29182 3.3592 9.29182 3.56222V9.18103C9.29182 9.38404 9.12927 9.55015 8.9306 9.55015H5.1618C4.96313 9.55015 4.80058 9.38404 4.80058 9.18103V8.68887C4.80058 8.48586 4.96313 8.31975 5.1618 8.31975Z" fill="#C7AF7F"/>
          <path d="M14.345 11.769H13.8633C13.6638 11.769 13.5021 11.9342 13.5021 12.1381V15.2448C13.5021 15.4487 13.6638 15.614 13.8633 15.614H14.345C14.5445 15.614 14.7062 15.4487 14.7062 15.2448V12.1381C14.7062 11.9342 14.5445 11.769 14.345 11.769Z" fill="#C7AF7F"/>
          <path d="M14.345 16.2804H13.8633C13.6638 16.2804 13.5021 16.4457 13.5021 16.6495V16.8854C13.5021 17.0892 13.6638 17.2545 13.8633 17.2545H14.345C14.5445 17.2545 14.7062 17.0892 14.7062 16.8854V16.6495C14.7062 16.4457 14.5445 16.2804 14.345 16.2804Z" fill="#C7AF7F"/>
        </svg>
        <svg class="hidden xl:block" xmlns="http://www.w3.org/2000/svg" width="49" height="50" viewBox="0 0 49 50"
          fill="none">
          <path
            d="M21.9241 44.7949C23.2543 44.7949 24.5795 44.6694 25.8892 44.4237C30.0334 50.1171 37.9074 51.2934 43.4791 47.0587C49.0507 42.8239 50.2019 34.7779 46.0577 29.0845C45.3261 28.0807 44.4614 27.1971 43.4791 26.4495C45.6689 14.2837 37.7898 2.60939 25.8841 0.371761C13.9785 -1.86064 2.55377 6.19064 0.363991 18.3564C-1.82067 30.5222 6.05332 42.1965 17.959 44.4342C19.2636 44.6799 20.5939 44.8054 21.919 44.8054L21.9241 44.7949ZM35.953 27.0194C41.2023 27.0194 45.454 31.3639 45.454 36.728C45.454 42.092 41.2023 46.4365 35.953 46.4365C30.7088 46.4365 26.4571 42.0972 26.452 36.7384C26.4571 31.3744 30.7088 27.0298 35.9581 27.0246H35.953V27.0194ZM13.1599 21.211H19.6985C20.205 21.211 20.6194 20.7875 20.6194 20.2699V9.08177C20.6194 8.56419 21.0339 8.14072 21.5404 8.14072H22.7683C23.2748 8.14072 23.6892 8.56419 23.6892 9.08177V23.4068C23.6892 23.9243 23.2748 24.3478 22.7683 24.3478H13.1599C12.6534 24.3478 12.2389 23.9243 12.2389 23.4068V22.152C12.2389 21.6344 12.6534 21.211 13.1599 21.211Z"
            fill="#FA0000" />
          <path
            d="M36.5721 30.0046H35.3442C34.8355 30.0046 34.4232 30.4259 34.4232 30.9457V38.8662C34.4232 39.386 34.8355 39.8073 35.3442 39.8073H36.5721C37.0807 39.8073 37.493 39.386 37.493 38.8662V30.9457C37.493 30.4259 37.0807 30.0046 36.5721 30.0046Z"
            fill="#FA0000" />
          <path
            d="M36.5721 41.5064H35.3442C34.8355 41.5064 34.4232 41.9278 34.4232 42.4475V43.0487C34.4232 43.5685 34.8355 43.9898 35.3442 43.9898H36.5721C37.0807 43.9898 37.493 43.5685 37.493 43.0487V42.4475C37.493 41.9278 37.0807 41.5064 36.5721 41.5064Z"
            fill="#FA0000" />
        </svg>
        <span class="font-crossfit bg-[linear-gradient(126deg,#C7AF7F_35.13%,#967940_94.99%)] bg-clip-text text-transparent text-[18px] xl:text-[46px] font-black leading-[106%] text-center">
          LIMITED TIME OFFER
        </span>
      </div>

      <div class="w-[160px] flex flex-row items-center justify-between xl:gap-4 sm:w-[220px]">
        <!-- Minutes -->
        <div class="flex flex-col gap-2">
          <div style="font-family: 'Montserrat', sans-serif;"
            class="card relative overflow-hidden xl:text-[128px] text-[48px] font-black sm:text-[82px] isolate rounded-[9px]
                  w-[80px] h-[68px] xl:w-[120px] xl:h-[100px]
                  shadow-[0_8px_16px_rgba(0,0,0,0.18)]
                  bg-[linear-gradient(132deg, #C7AF7F 2.9%, #967940 94.39%)]
                  before:content-[''] before:absolute before:left-0 before:right-0
                  before:top-1/2 before:-translate-y-1/2 before:h-px
                  before:bg-black/20 before:pointer-events-none"
          >
            <FlipDigit flipBg="linear-gradient(132deg, #C7AF7F 2.9%, #967940 94.39%)" :value="mm" font-size="100"/>
          </div>
          <span class="label">Minutes</span>
        </div>

        <!-- Seconds -->
        <div class="flex flex-col gap-2">
          <div style="font-family: 'Montserrat', sans-serif;"
            class="card relative overflow-hidden xl:text-[128px] font-black text-[48px] sm:text-[82px] isolate rounded-[9px]
                  w-[80px] h-[68px] xl:w-[120px] xl:h-[100px]
                  shadow-[0_8px_16px_rgba(0,0,0,0.18)]
                  bg-[linear-gradient(132deg, #C7AF7F 2.9%, #967940 94.39%)]
                  before:content-[''] before:absolute before:left-0 before:right-0
                  before:top-1/2 before:-translate-y-1/2 before:h-px
                  before:bg-black/20 before:pointer-events-none"
          >
            <FlipDigit flipBg="linear-gradient(132deg, #C7AF7F 2.9%, #967940 94.39%)" :value="ss" font-size="100"/>
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
  border-radius: 8px;
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
  background: linear-gradient(128deg, #FFF 20%, #DDD 75.88%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: white;
}

.label {
  color: #C7AF7F;
  text-align: center;
  font-family: Gelasio;
  font-size: 14.051px;
  font-style: italic;
  font-weight: 600;
  line-height: 106%;
}

@media(min-width: 660px) {
  .card {
    width: 100px;
    height: 100px;
  }

  .label {
    font-size: 22px;
  }
}

@media(min-width: 1280px) {
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
    background: linear-gradient(128deg, #FFF 20%, #DDD 75.88%);
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
