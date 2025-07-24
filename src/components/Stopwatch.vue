<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const time = ref('00:00:00')
let countdownInterval

function getTimeUntilMidnight() {
  const now = new Date()
  const midnight = new Date()

  midnight.setHours(24, 0, 0, 0)

  const distance = midnight.getTime() - now.getTime()

  if (distance <= 0) {
    return '00:00:00'
  }

  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((distance / (1000 * 60)) % 60)
  const seconds = Math.floor((distance / 1000) % 60)

  return [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0')
  ].join(':')
}

const startCountdown = () => {
  time.value = getTimeUntilMidnight()

  countdownInterval = setInterval(() => {
    time.value = getTimeUntilMidnight()
  }, 1000)
}

onMounted(() => {
  startCountdown()
})

onBeforeUnmount(() => {
  clearInterval(countdownInterval)
})
</script>

<template>
  <div class="bg-[#FFD700] flex justify-center items-center px-0 py-0 w-full">
    <div class="flex justify-between items-center px-6 py-3 w-[350px]">
      <div class="text-[#370F1E] font-gelasio text-sm font-bold italic leading-4">
        <div>LIMITED</div>
        <div>TIME</div>
        <div>OFFER</div>
      </div>
      <div class="text-[#370F1E] font-crossfit text-6xl md:text-6xl font-bold">
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
