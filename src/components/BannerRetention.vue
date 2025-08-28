<!-- src/components/AttentionModal.vue -->
<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  icon: { type: String, default: ''},
  title: { type: String, default: 'Atention!' },
  subtitle: { type: String, default: 'Atention!' },
  message: { type: String, default: '' },
  buttonText: { type: String, default: 'Continuar' },
  secondaryText: { type: String, default: '' },
  disableBackdropClose: { type: Boolean, default: false },
  disableEsc: { type: Boolean, default: false },
})

const emit = defineEmits(['update:open', 'primary', 'secondary', 'close', 'open'])

function close() {
  emit('update:open', false)
  emit('close')
}

function onPrimary() { 
  emit('primary') 
  close()
}

function onKeydown(e) {
  if (props.disableEsc) return
  if (e.key === 'Escape') close()
}

function lockScroll(yes) {
  const el = document.documentElement
  if (yes) el.classList.add('overflow-hidden')
  else el.classList.remove('overflow-hidden')
}

watch(() => props.open, (val) => {
  lockScroll(val)
  if (val) emit('open')
})

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  lockScroll(props.open)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  lockScroll(false)
})
</script>

<template>
  <Teleport to="body">
    <transition name="fade">
      <div
        v-if="open"
        class="fixed inset-0 z-50 flex items-center justify-center"
        aria-modal="true"
        role="dialog"
      >
        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/50"
          @click="close()"
        ></div>
        <!-- Card -->
        <div
          class="relative z-10 sm:max-w-[810px] max-w-[340px] rounded-2xl bg-[#370F1E] p-8 sm:p-12 shadow-xl"
          role="document"
        >
        <div class="flex items-center gap-3">
          <svg class="self-start relative top-0"  xmlns="http://www.w3.org/2000/svg" width="59" height="61" viewBox="0 0 59 61" fill="none">
            <path d="M26.5156 54.6747C28.1244 54.6747 29.7271 54.5229 31.3111 54.2258C36.3232 61.1115 45.8463 62.5342 52.5848 57.4126C59.3233 52.2909 60.7155 42.5598 55.7034 35.6741C54.8186 34.4601 53.7728 33.3915 52.5848 32.4873C55.2331 17.7737 45.7039 3.6544 31.3049 0.948153C16.9059 -1.75177 3.0886 7.98565 0.44022 22.6993C-2.20197 37.4129 7.32105 51.5322 21.72 54.2384C23.2979 54.5356 24.9068 54.6873 26.5094 54.6873L26.5156 54.6747ZM43.4825 33.1765C49.8312 33.1765 54.9733 38.4309 54.9733 44.9183C54.9733 51.4057 49.8312 56.6601 43.4825 56.6601C37.14 56.6601 31.998 51.412 31.9918 44.931C31.998 38.4436 37.14 33.1891 43.4887 33.1828H43.4825V33.1765ZM15.9159 26.1516H23.8239C24.4365 26.1516 24.9377 25.6395 24.9377 25.0135V11.4823C24.9377 10.8563 25.4389 10.3441 26.0515 10.3441H27.5366C28.1492 10.3441 28.6504 10.8563 28.6504 11.4823V28.8073C28.6504 29.4333 28.1492 29.9454 27.5366 29.9454H15.9159C15.3033 29.9454 14.8021 29.4333 14.8021 28.8073V27.2898C14.8021 26.6638 15.3033 26.1516 15.9159 26.1516Z" fill="#E1DCCD"/>
            <path d="M44.2312 36.7869H42.7462C42.131 36.7869 41.6324 37.2965 41.6324 37.9251V47.5044C41.6324 48.133 42.131 48.6426 42.7462 48.6426H44.2312C44.8464 48.6426 45.345 48.133 45.345 47.5044V37.9251C45.345 37.2965 44.8464 36.7869 44.2312 36.7869Z" fill="#E1DCCD"/>
            <path d="M44.2312 50.6975H42.7462C42.131 50.6975 41.6324 51.2071 41.6324 51.8357V52.5628C41.6324 53.1914 42.131 53.701 42.7462 53.701H44.2312C44.8464 53.701 45.345 53.1914 45.345 52.5628V51.8357C45.345 51.2071 44.8464 50.6975 44.2312 50.6975Z" fill="#E1DCCD"/>
          </svg>
          <div class="flex-col">
            <div class="font-crossfit text-[37px] leading-none sm:text-[82px] text-[#FFDC03]">{{ title }}</div>
            <div class="font-crossfit leading-none text-[24px] sm:text-[64px] text-[#fff]">{{ subtitle }}</div>
            <div class="text-[11px] sm:text-[25px] pt-[23px] text-[#fff] font-normal font-gelasio italic leading-[1]">
              <!-- Slot NOMEADO 'message'; se não vier slot, cai no fallback da prop -->
              <slot name="message">
                <p v-if="message" v-html="message"></p>
              </slot>
            </div>
          </div>

        </div>
          <button
            class="absolute top-3 right-3 p-2 rounded-full text-[#fff]"
            aria-label="Fechar"
            @click="close"
          >
            <svg
              width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round" stroke-linejoin="round"
              role="img" aria-label="close"
            >
              <circle cx="12" cy="12" r="9.2"/>
              <path d="M9 9l6 6M15 9l-6 6"/>
            </svg>
          </button>
          <!-- Ações -->
          <div class="mt-5 items-center gap-3">
            <slot name="actions">
              <button
                  class="btn-attn w-full text-[15px] sm:text-[40px] rounded-[40px] bg-[#FFDC03] text-[#370F1E] font-gelasio italic font-extrabold py-3
                        hover:brightness-95 transition-transform duration-200
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FFDC03]"
                  @click="onPrimary"
                >
                <span class="inline-block">
                  {{ buttonText }}
                </span>
              </button>              
            </slot>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style>
@keyframes breath {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.08); }
  100% { transform: scale(1); }

}
.btn-attn {
  position: relative;
  transform-origin: center;
  will-change: transform;
  animation: breath 1.6s ease-in-out infinite;
  transition: transform .12s ease, filter .12s ease;
  -webkit-tap-highlight-color: transparent; /* mobile */
  touch-action: manipulation;             
  user-select: none;
}

.btn-attn:hover { transform: scale(1.02); }
.btn-attn:active {
  animation-play-state: paused;
  transform: scale(0.96) !important;
  filter: brightness(.96);
}
@media (hover: none) {
  .btn-attn:hover { transform: none; }
}
@media (prefers-reduced-motion: reduce) {
  .btn-attn {
    animation: none;
    transition: transform .12s ease; 
  }
}
.fade-enter-active, .fade-leave-active { transition: opacity .18s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
