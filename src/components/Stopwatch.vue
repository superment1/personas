<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  bg: { type: String, default: '#FFD700' },
  textColor: { type: String, default: '#370F1E' },
  limit: { type: [String, Number, Date], default: 'midnight' },
  repeat: { type: Boolean, default: false }
})

const time = ref('00:00:00')
let timer = null
let targetTs = 0
let lastShown = -1  

const DAY = 86_400_000
let initialSeconds = 0      
let initialDateMs = 0 

function formatFromSeconds(total) {
  const h = (total / 3600) | 0
  const m = ((total % 3600) / 60) | 0
  const s = total % 60
  const hh = h > 9 ? '' + h : '0' + h
  const mm = m > 9 ? '' + m : '0' + m
  const ss = s > 9 ? '' + s : '0' + s
  return `${hh}:${mm}:${ss}`
}

function stop() {
  if (timer) { clearTimeout(timer); timer = null }
}
function scheduleNext() {
  const now = Date.now()
  const nextBoundary = Math.ceil(now / 1000) * 1000
  const delay = Math.max(80, Math.min(250, nextBoundary - now))
  timer = setTimeout(tick, delay)
}

function computeTargetTs(nowTs = Date.now()) {
  if (props.limit === 'midnight') {
    const d = new Date(nowTs)
    d.setHours(24, 0, 0, 0)
    return d.getTime()
  }

  if (typeof props.limit === 'number') {
    return nowTs + initialSeconds * 1000
  }

  const base = initialDateMs || new Date(props.limit).getTime()
  if (isNaN(base)) return nowTs
  let t = base
  while (t <= nowTs) t += DAY
  return t
}

function tick() {
  const now = Date.now()
  const dist = targetTs - now
  const sec = Math.max(0, (dist / 1000) | 0)

  if (sec !== lastShown) {
    time.value = formatFromSeconds(sec)
    lastShown = sec
  }

  if (sec <= 0) {
    if (!props.repeat) {
      stop()
      return
    }
    targetTs = computeTargetTs(now + 1)
    lastShown = -1
    scheduleNext()
    return
  }

  scheduleNext()
}

function start() {
  stop()
  if (typeof props.limit === 'number') {
    initialSeconds = props.limit
    initialDateMs = 0
  } else if (props.limit !== 'midnight') {
    initialDateMs = new Date(props.limit).getTime() || 0
    initialSeconds = 0
  } else {
    initialSeconds = 0
    initialDateMs = 0
  }

  targetTs = computeTargetTs()
  lastShown = -1
  tick()
}

function onVis() {
  if (document.hidden) stop()
  else start()
}

onMounted(() => {
  start()
  document.addEventListener('visibilitychange', onVis)
})

onBeforeUnmount(() => {
  stop()
  document.removeEventListener('visibilitychange', onVis)
})

watch(() => props.limit, start)
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
