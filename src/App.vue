<script setup lang="ts">
import Toast from './components/Toast.vue';
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import '@n8n/chat/style.css'
import type { App } from 'vue'


const route = useRoute()

type ChatTheme = '1' | '2' | '3' | '4'
function normalizePath(path: string) {
  return path.replace(/\/+$/, '') || '/'
}

function getChatTheme(path: string): ChatTheme | null {
  const p = normalizePath(path)
  // ===== TEMA 1 =====
  if ([
    '/sleep',

  ].includes(p)) {
    return '1'
  }
  // ===== TEMA 2 =====
  if ([
    '/sleep2',
    '/relax',
    '/vslrelax',
  ].includes(p)) {
    return '2'
  }
  // ===== TEMA 3 =====
  if ([
    '/relief',
  ].includes(p)) {
    return '3'
  }
  // ===== TEMA 4 =====
  if ([

    '/slim',
  ].includes(p)) {
    return '4'
  }

  return null 
}

function applyChatTheme(path: string) {
  if (typeof window === 'undefined') return

  const theme = getChatTheme(path)
  const root = document.documentElement
  root.classList.remove(
    'chat-theme-1',
    'chat-theme-2',
    'chat-theme-3',
    'chat-theme-4',
  )

  if (theme) {
    root.classList.add(`chat-theme-${theme}`)
  }
}


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
  // '/sleep2',
  '/relax', 
  '/slim', 
  '/7days',
  '/relief', 
  '/vslrelax',
  '/vslrelief',
  '/vslnerve',
  '/melatonin',
  '/healthnews',
  '/home',

])

let cleanup: App<Element> | null = null

async function mountChat() {
  if (cleanup) {
    cleanup.unmount()
    cleanup = null
  }
  const normalizedPath = route.path.replace(/\/+$/, '') || '/'
  applyChatTheme(normalizedPath)
  if (BLOCKED.has(normalizedPath)) return
  if (typeof window === 'undefined') return

  const { createChat } = await import('@n8n/chat')
  cleanup = createChat({
    webhookUrl: 'https://thomaschi.app.n8n.cloud/webhook/3ce6905f-d886-4c8e-be56-c7df210a5e0e',
    i18n: {
      en: {
        title: 'Hello',
        subtitle: "Start a chat. We're here to help you 24/7.",
          }    
    }
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
.chat-header {
  gap: 0 !important
}
:root.chat-theme-1 .chat-header {
  background-color: #6EC8F0 !important;
}
:root.chat-theme-1 .chat-heading {
  font-family: 'Crossfit', 'system-ui', 'sans-serif' !important;
}
:root.chat-theme-1 .chat-layout .chat-header p {
  font-family: 'Gelasio', serif !important;
  font-style: italic !important;
  color: #491529 !important;
}
:root.chat-theme-1 {
  --chat--toggle--background: #6EC8F0 ;
  --chat--toggle--active--background: #6EC8F0;
  --chat--toggle--hover--background: #6EC8F0;
}

/* TEMA 2 */

:root.chat-theme-2 {
  --chat--toggle--background: #4DBCB6;
  --chat--toggle--active--background: #4DBCB6;
  --chat--toggle--hover--background: #4DBCB6;
}
:root.chat-theme-2 .chat-header {
  background-color: #4DBCB6 !important;
}
:root.chat-theme-2 .chat-heading {
  font-family: 'Crossfit', 'system-ui', 'sans-serif' !important;
}
:root.chat-theme-2 .chat-layout .chat-header p {
  font-family: 'Gelasio', serif !important;
  font-style: italic !important;
  color: #491529 !important;
}

/* TEMA 3 */

:root.chat-theme-3 {
  --chat--toggle--background: #370F1E;
  --chat--toggle--active--background: #370F1E;
  --chat--toggle--hover--background: #370F1E;
}
:root.chat-theme-3 .chat-header {
  background-color: #370F1E !important;
}
:root.chat-theme-3 .chat-heading {
  font-family: 'Crossfit', 'system-ui', 'sans-serif' !important;
}
:root.chat-theme-3 .chat-layout .chat-header p {
  font-family: 'Gelasio', serif !important;
  font-style: italic !important;
  color: #fff !important;
}

/* TEMA 4 */

:root.chat-theme-4 {
  --chat--toggle--background: #036;
  --chat--toggle--active--background: #036;
  --chat--toggle--hover--background: #036;
}
:root.chat-theme-4 .chat-header {
  background-color: #036 !important;
}
:root.chat-theme-4 .chat-heading {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  font-weight: 900;
}
:root.chat-theme-4 .chat-layout .chat-header p {
  font-family: 'Roboto', serif !important;
  font-style: italic !important;
  color: #fff !important;
}

/* GERAL */
.chat-window{
  border-radius: 15px !important;
}
.chat-footer{
  background-color: #FFF !important;
}
.chat-body{
  background-color: #E1DCCD !important;
}
.chat-message.chat-message-from-bot {
  border-radius: 8px 8px 8px 0 !important;
  background: #FFF !important;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15) !important;
}
</style>