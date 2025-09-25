<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import FlipDigit from './FlipDigit.vue'

const props = defineProps({
  durationMs: { type: Number, default: 8 * 60 * 1000 },
  startOn:    { type: String,  default: 'mount' },
  persistKey: { type: String,  default: '' }
})
const emit = defineEmits(['expired'])

const hh = ref('00')
const mm = ref('00')
const ss = ref('00')

let endAt = 0
let t = null

function tick() {
  const left = Math.max(0, endAt - Date.now())
  const totalSec = Math.floor(left / 1000)

  const hours   = Math.floor(totalSec / 3600)
  const minutes = Math.floor((totalSec % 3600) / 60)
  const seconds = totalSec % 60

  hh.value = String(hours).padStart(2, '0')
  mm.value = String(minutes).padStart(2, '0')
  ss.value = String(seconds).padStart(2, '0')

   if (left <= 0) {
    if (t) { clearInterval(t); t = null }
    if (props.persistKey) {
      localStorage.setItem(props.persistKey, String(Date.now()))
    }
    startCountdown()
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
  startCountdown()
})

onBeforeUnmount(() => t && clearInterval(t))
</script>

<template>
  <section class="flex flex-col justify-end items-end py-0 bg-[##6EC8F0]">
    <div class="flex flex-col items-start justify-center gap-2 xl:gap-4">
        <div class="w-auto flex flex-row items-center justify-between gap-1 sm:gap-2">
            <!-- Hours -->
            <div class="flex flex-col gap-2">
                <div
                class="card relative overflow-hidden xl:text-[143px] text-[18px] sm:text-[82px] font-crossfit isolate rounded-[19px]
                        w-[80px] h-[68px] xl:w-[120px] xl:h-[100px]
                        shadow-[0_4px_8px_rgba(0,0,0,0.08)]"
                >
                <FlipDigit :value="hh" flip-bg="none"  font-size="clamp(15px, 2.2vw, 28px)"/>
                </div>
            </div>

            <!-- Minutes -->
            <div class="flex flex-col gap-2">
                <div
                class="card relative overflow-hidden xl:text-[143px] text-[18px] sm:text-[82px] font-crossfit isolate rounded-[19px]
                        w-[80px] h-[68px] xl:w-[120px] xl:h-[100px]
                        shadow-[0_4px_8px_rgba(0,0,0,0.08)]"
                >
                <FlipDigit :value="mm" flip-bg="none" font-size="clamp(15px, 2.2vw, 28px)"/>
                </div>
            </div>

            <!-- Seconds -->
            <div class="flex flex-col gap-2">
                <div
                class="card relative overflow-hidden xl:text-[143px] text-[18px] sm:text-[82px] font-crossfit isolate rounded-[19px]
                        w-[80px] h-[68px] xl:w-[120px] xl:h-[100px]
                        shadow-[0_4px_8px_rgba(0,0,0,0.08)]"
                >
                <FlipDigit :value="ss" flip-bg="none" font-size="clamp(15px, 2.2vw, 28px)"/>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  width: 19px;
  height: 18px;
  flex-shrink: 0;
  border-radius: 2px;
  background: linear-gradient(132deg, #A2FFFA 2.9%, #004E4A 94.39%);
  display: flex;
  align-items: center;
  justify-content: center;

}

.title {
  width: 14px;
  height: 16px;
  flex-shrink: 0;
  text-align: center;
  font-family: Crossfit;
  font-size: 13px;
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
    width: 37px;
    height: 37px;
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
