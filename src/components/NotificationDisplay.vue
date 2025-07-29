<template>
  <div class="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-2">
    <transition-group name="fade" tag="div">
      <div
        v-for="(notification, index) in visibleNotifications"
        :key="notification.id"
        class="w-[210px] sm:w-[240px] md:w-[270px] lg:w-[300px] aspect-[3/1]"
      >
        <button @click="scrollToShopNow" class="w-full h-full">
          <img
            :src="notification.src"
            alt="Notificação"
            class="w-full h-full object-cover rounded-[10px] shadow-lg"
          />
        </button>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Lista de imagens das notificações
const notificationsList = [
  {
    id: 1,
    src: new URL('@/assets/image/sleepSuperment/notifications/image-1.png', import.meta.url).href
  },
  {
    id: 2,
    src: new URL('@/assets/image/sleepSuperment/notifications/image-2.png', import.meta.url).href
  },
  {
    id: 3,
    src: new URL('@/assets/image/sleepSuperment/notifications/image-3.png', import.meta.url).href
  },
  {
    id: 4,
    src: new URL('@/assets/image/sleepSuperment/notifications/image-4.png', import.meta.url).href
  }
]

const visibleNotifications = ref([])
let currentIndex = 0

// Função para scroll suave até o botão com id "id-shop-now"
const scrollToShopNow = () => {
  const el = document.getElementById('id-shop-now')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

const mostrarProximaNotificacao = () => {
  visibleNotifications.value = [notificationsList[currentIndex]]

  setTimeout(() => {
    visibleNotifications.value = []

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % notificationsList.length
      mostrarProximaNotificacao()
    }, 600)
  }, 7000)
}

onMounted(() => {
  setTimeout(() => {
    mostrarProximaNotificacao()
  }, 7000)
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
