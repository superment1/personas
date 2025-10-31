<script setup>
import Toast from '@/components/Toast.vue';
import { onMounted, computed, ref } from 'vue'
import { useRoute } from 'vue-router'

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
  '/advetorial',
  '/relief', 
  '/vslrelax',
  '/vslrelief',
])

const norm = (p) => (p || '/').replace(/\/+$/, '') || '/'
const isBlocked = computed(() => BLOCKED.has(norm(route.path)))
const chatOpen = ref(false)
onMounted(() => {
  const btn = document.getElementById('chat-toggle')
  if (!btn) return

  btn.addEventListener('click', () => {
    try {
      zE('messenger', 'show')
      if (chatOpen.value) {
        zE('messenger', 'close') 
      } else {
        zE('messenger', 'open')    
      }
      chatOpen.value = !chatOpen.value
    } catch (e) {
      console.warn('Zendesk ainda não carregado:', e)
    }
  })
})
</script>

<template>
  <Toast />
  <router-view />
  <!-- <button
    v-show="!isBlocked"
    id="chat-toggle"
    class="chat-fab"
    aria-label="Abrir chat"
  >      
    <svg xmlns="http://www.w3.org/2000/svg" class="drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]" width="60" height="60" viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="30" fill="#370F1E"/>
      <path d="M43.2796 17.5856C44.7821 17.5856 46 18.8036 46 20.306V38.9906C46 40.493 44.7821 41.7109 43.2796 41.7109H42.0626V45.1954C42.0626 46.0114 41.1884 46.5292 40.4727 46.137L32.397 41.7109H16.7204C15.2179 41.7109 14 40.493 14 38.9906V20.306C14 18.8036 15.2179 17.5856 16.7204 17.5856H43.2796Z" fill="#FFFAF0"/>
    </svg>
  </button> -->
</template>

<style>
.chat-fab{
  position: fixed;
  right: 24px; bottom: 24px;
  width: 56px; height: 56px; border-radius: 50%;
  background: #4DBCB6; color: #fff; border: 0;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,.25);
  cursor: pointer; z-index: 99999;
  transition: transform .2s ease, filter .2s ease;
}
.chat-fab:hover{ transform: scale(1.08); filter: brightness(1.1); }

</style>