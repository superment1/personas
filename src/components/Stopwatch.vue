<script setup>
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue'

const props = defineProps({
  bg: { type: String, default: '#FFD700' },          // cor de fundo
  textColor: { type: String, default: '#370F1E' },   // cor do texto
  limit: { type: [String, Number, Date], default: 'midnight' } // alvo do contador
})

const time = ref('00:00:00')
let countdownInterval = null
let targetDate = null

function computeTargetDate() {
  if (props.limit === 'midnight') {
    const now = new Date()
    const midnight = new Date()
    midnight.setHours(24, 0, 0, 0)
    return midnight
  }

  if (typeof props.limit === 'number') {
    const d = new Date()
    d.setSeconds(d.getSeconds() + props.limit)
    return d
  }

  const d = new Date(props.limit)
  return isNaN(d.getTime()) ? null : d
}

function formatDistance(ms) {
  if (ms <= 0) return '00:00:00'
  const totalSeconds = Math.floor(ms / 1000)
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  return [
    String(hours).padStart(2, '0'),
    String(minutes).padStart(2, '0'),
    String(seconds).padStart(2, '0')
  ].join(':')
}

function tick() {
  const now = new Date().getTime()
  const dist = targetDate.getTime() - now
  time.value = formatDistance(dist)
  if (dist <= 0 && countdownInterval) {
    clearInterval(countdownInterval)
    countdownInterval = null
  }
}

function startCountdown() {
  targetDate = computeTargetDate()
  if (!targetDate) {
    time.value = '00:00:00'
    return
  }
  tick()
  if (countdownInterval) clearInterval(countdownInterval)
  countdownInterval = setInterval(tick, 1000)
}

onMounted(startCountdown)
onBeforeUnmount(() => countdownInterval && clearInterval(countdownInterval))

watch(() => props.limit, startCountdown)
</script>

<template>
  <div class="flex justify-center items-center px-0 py-1 w-full" :style="{ backgroundColor: bg }">
    <div class="flex justify-between items-center px-0 py-3 w-[330px]">
      <div class="font-gelasio text-sm font-bold italic leading-4" :style="{ color: textColor }">
        <div>LIMITED</div>
        <div>TIME</div>
        <div>OFFER</div>
      </div>

      <div class="font-crossfit text-7xl md:text-7xl font-bold" :style="{ color: textColor }">
        {{ time }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-crossfit {
  font-family: 'Crossfit', sans-serif;
}

.font-dmsans {
  font-family: 'DM Sans', sans-serif;
}
</style>
