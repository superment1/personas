<!-- src/components/AttentionModal.vue -->
<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  title: { type: String, default: 'Atenção!' },
  message: { type: String, default: '' },
  primaryText: { type: String, default: 'Continuar' },
  secondaryText: { type: String, default: '' },
  disableBackdropClose: { type: Boolean, default: false },
  disableEsc: { type: Boolean, default: false },
  timer: { type: Number, default: 0 } // tempo em ms (0 = desativado)
})

const emit = defineEmits(['update:open', 'primary', 'secondary', 'close', 'open'])

function close() {
  emit('update:open', false)
  emit('close')
}


const remainingMs = ref(0)                 
let tickId = null                          
let deadline = 0                     

function startCountdown() {
  if (props.timer <= 0) return
  deadline = Date.now() + props.timer
  remainingMs.value = Math.max(0, deadline - Date.now())

  stopCountdown()
  tickId = setInterval(() => {
    const left = deadline - Date.now()
    remainingMs.value = Math.max(0, left)
    if (left <= 0) {
      deadline = Date.now() + props.timer
      remainingMs.value = props.timer
    }
  }, 200) 
}

function stopCountdown() {
  if (tickId) {
    clearInterval(tickId)
    tickId = null
  }
}

// formatador mm:ss
function fmt(tms) {
  const totalSec = Math.ceil(tms / 1000)
  const m = Math.floor(totalSec / 60)
  const s = totalSec % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

function onPrimary() { emit('primary') }
function onSecondary() { emit('secondary'); close() }

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
  if (val) {
    emit('open')
    if (props.timer > 0) startCountdown()
  } else {
    stopCountdown()
    remainingMs.value = 0
  }
})

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
  lockScroll(props.open)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  lockScroll(false)
  stopCountdown()
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
          @click="disableBackdropClose ? null : close()"
        ></div>
        <!-- Card -->
        <div
          class="relative z-10 w-[92%] max-w-2xl rounded-2xl bg-white p-8 shadow-xl"
          role="document"
        >
          <button
            class="absolute top-3 right-3 p-2 rounded-full hover:bg-black/5"
            aria-label="Fechar"
            @click="close"
          >
            ✕
          </button>
          <!-- Título -->
          <div class="mb-2 items-center  flex">
            <slot name="title">
              <h2 class="text-2xl font-black text-[#ff0000]">{{ title }}</h2>
            </slot>
            <span
              v-if="timer > 0"
              class="ml-8 items-center w-40 gap-2 rounded-full bg-black/5 text-[#ff0606] text-2xl font-semibold px-3 py-1"
              aria-live="polite"
            >
              ⏳ {{ fmt(remainingMs) }}
            </span>
          </div>
          
          <!-- Conteúdo -->
          <div class="text-sm text-black/80 leading-relaxed">
            <slot>
              <p v-if="message">{{ message }}</p>
            </slot>
          </div>

          <!-- Ações -->
          <div class="mt-5 items-center gap-3">
            <slot name="actions">
              <button
                  class="btn-attn w-full rounded-xl bg-[#FFDC03] text-[#370F1E] font-extrabold py-3
                        hover:brightness-95 transition-transform duration-200
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FFDC03]"
                  @click="onPrimary"
                >
                <span class="inline-block">
                  {{ primaryText }}
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

/* anima o botão (a caixa inteira) */
.btn-attn {
  animation: breath 1.6s ease-in-out infinite;
  transform-origin: center;
  will-change: transform;
}

/* acessibilidade */
@media (prefers-reduced-motion: reduce) {
  .btn-attn { animation: none; }
}
.fade-enter-active, .fade-leave-active { transition: opacity .18s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
