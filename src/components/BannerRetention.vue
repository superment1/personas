<!-- src/components/AttentionModal.vue -->
<script setup>
import { watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  /** controla abertura (v-model:open) */
  open: { type: Boolean, default: false },
  /** título do modal */
  title: { type: String, default: 'Atenção!' },
  /** texto principal (se usar slot "default", este é ignorado) */
  message: { type: String, default: '' },
  /** texto do botão principal */
  primaryText: { type: String, default: 'Continuar' },
  /** texto do botão secundário */
  secondaryText: { type: String, default: 'Voltar' },
  /** desabilita fechar ao clicar no backdrop */
  disableBackdropClose: { type: Boolean, default: false },
  /** desabilita fechar com ESC */
  disableEsc: { type: Boolean, default: false },
})

const emit = defineEmits(['update:open', 'primary', 'secondary', 'close', 'open'])

function close() {
  emit('update:open', false)
  emit('close')
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
          @click="disableBackdropClose ? null : close()"
        ></div>

        <!-- Card -->
        <div
          class="relative z-10 w-[92%] max-w-md rounded-2xl bg-white p-6 shadow-xl"
          role="document"
        >
          <!-- Botão fechar (X) -->
          <button
            class="absolute top-3 right-3 p-2 rounded-full hover:bg-black/5"
            aria-label="Fechar"
            @click="close"
          >
            ✕
          </button>

          <!-- Título -->
          <div class="mb-2">
            <slot name="title">
              <h2 class="text-xl font-bold text-[#370F1E]">{{ title }}</h2>
            </slot>
          </div>

          <!-- Conteúdo -->
          <div class="text-sm text-black/80 leading-relaxed">
            <slot>
              <p v-if="message">{{ message }}</p>
            </slot>
          </div>

          <!-- Ações -->
          <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <slot name="actions">
              <button
                class="w-full rounded-xl bg-[#FFDC03] text-[#370F1E] font-extrabold py-3 hover:brightness-95 transition"
                @click="onPrimary"
              >
                {{ primaryText }}
              </button>
              <button
                class="w-full rounded-xl border border-black/10 py-3 hover:bg-black/5 transition"
                @click="onSecondary"
              >
                {{ secondaryText }}
              </button>
            </slot>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity .18s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
