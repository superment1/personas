<template>
  <div class="fixed bottom-4 right-0 z-50 flex flex-col items-end space-y-2">
    <transition-group name="fade" tag="div">
      <div
        v-for="(notification, index) in visibleNotifications"
        :key="notification.id"
        class="w-[240px] sm:w-[270px] md:w-[300px] lg:w-[330px] aspect-[5/2]"
      >
        <button @click="scrollToShopNow" class="w-full h-full">
          <img
            :src="notification.src"
            decoding="async"
            fetchpriority="high"
            alt="Notificação"
            loading="lazy"
            class="w-full h-full object-contain rounded-[10px] shadow-lg"
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
    src: new URL('../assets/image/sleepSuperment/notifications/image-1.png', import.meta.url).href
  },
  {
    id: 2,
    src: new URL('../assets/image/sleepSuperment/notifications/image-2.png', import.meta.url).href
  },
  {
    id: 3,
    src: new URL('../assets/image/sleepSuperment/notifications/image-3.png', import.meta.url).href
  },
  {
    id: 4,
    src: new URL('../assets/image/sleepSuperment/notifications/image-4.png', import.meta.url).href
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
    }, 14000)
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
  transition: all 0.4s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: scale(0.1);
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
.fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
.fade-leave-to {
  opacity: 0;
  transform: scale(0.1);
}
</style>
