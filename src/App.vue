<script setup lang="ts">
import Toast from '@/components/Toast.vue';
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import '@n8n/chat/style.css'
 
const route = useRoute()

const BLOCKED = new Set([
  '/tsl',
  '/sleepnatural',
  '/sleepingbeauty',
  '/terms',  
  '/privacypolicy',
  '/faq', 
  '/about', 
  '/maturesleep', 
  '/discomfort', 
  '/menopause',
  '/vsleep', 
  '/vsleep2',
  '/sleep2',
  '/relax', 
  '/slim', 
  '/7days',
  '/relief', 
  '/vslrelax',
  '/vslrelief',
  '/melatonin',
  '/healthnews',
  '/home'
])

let cleanup = null

async function mountChat() {
  if (cleanup) { cleanup(); cleanup = null }
  const normalizedPath = route.path.replace(/\/+$/, '') || '/'
  if (BLOCKED.has(normalizedPath)) return
  if (typeof window === 'undefined') return

  const { createChat } = await import('@n8n/chat')
  cleanup = createChat({
    webhookUrl: 'https://thomaschi.app.n8n.cloud/webhook/3ce6905f-d886-4c8e-be56-c7df210a5e0e',
  })
}

onMounted(mountChat)
watch(() => route.path, mountChat)
</script>

<template>
  <Toast />
  <router-view />
</template>

<style>
:root {
  --chat--toggle--background: #4DBCB6;
  --chat--toggle--active--background: #359c93; 
  --chat--toggle--hover--background: #3aa89f;
}
</style>