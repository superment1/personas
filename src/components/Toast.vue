<script setup>
import { toastStore } from '@/stores/toastStore';


function copyAndClose(msg) {
  const m = /:\s*([A-Z0-9_-]+)/i.exec(msg.text)
  const toCopy = m ? m[1] : msg.text
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(toCopy).catch(() => {})
  }
  toastStore.removeToast(msg.id)
}

function closeModal() {
  if (typeof toastStore.clear === 'function') {
    toastStore.clear()
    return
  }
  if (typeof toastStore.removeToast === 'function') {
    const list = [...toastStore.messages]
    for (const m of list) toastStore.removeToast(m.id)
  } else {
    toastStore.messages.length = 0
  }
}
function extractCode(text) {
  const m = /:\s*([A-Z0-9][A-Z0-9_-]{4,})\b/i.exec(text || '')
  if (m) return m[1]
  const fallback = (text || '').match(/\b[A-Z0-9][A-Z0-9_-]{4,}\b/g)
  return fallback ? fallback[fallback.length - 1] : ''
}

function stripCouponFromText(text) {
  const flat = (text || '').replace(/\r/g, '').replace(/\n+/g, ' ').trim()
  const m = /(.*?:)\s*[A-Z0-9][A-Z0-9_-]{4,}\b/i.exec(flat)
  return m ? m[1] : flat
}
</script>

<template>
    <div
        v-if="toastStore.messages.length"
        class="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
        @click.self="closeModal"
        >
        <div class="flex flex-col gap-4 px-6">
            <div
                v-for="msg in toastStore.messages"
                :key="msg.id"
                class="w-[330px] rounded-3xl font-crossfit text-[#370F1E] shadow px-6 py-4 flex flex-col"
                :class="msg.type === 'success' ? 'bg-[#6EC8F0]'
                        : msg.type === 'error' ? 'bg-red-500'
                        : 'bg-blue-500'"
            >   
                <div class="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="38" viewBox="0 0 34 34"  fill="#fff">
                        <path d="M16.8091 1.09044L5.1314 0.337047C2.41575 0.162396 0.165832 2.41231 0.340483 5.12797L1.09388 16.8056C1.1658 17.898 1.62811 18.9288 2.40548 19.7062L15.316 32.6167C17.0762 34.3769 19.9322 34.3769 21.6924 32.6167L32.6167 21.6924C34.3769 19.9322 34.3769 17.0762 32.6167 15.3159L19.7062 2.40546C18.9323 1.63152 17.9015 1.16236 16.8056 1.09387L16.8091 1.09044ZM9.36755 9.36754C8.30594 10.4291 6.57998 10.4291 5.51837 9.36754C4.45677 8.30593 4.45677 6.57997 5.51838 5.51836C6.57998 4.45676 8.30594 4.45676 9.36755 5.51836C10.4292 6.57997 10.4292 8.30593 9.36755 9.36754Z" fill="#fff"/>
                    </svg>           
                    <div class="flex flex-col pt-2 text-[25px] leading-[1.1]">
                        <p>Thank you!</p>
                        <p class="pt-4"> Here’s your <br>exclusive</p>
                        <p class="mb-4 w-[215px]"> {{ stripCouponFromText(msg.text) }}</p>                
                    </div>    
                    <div v-if="toastStore.messages.length" class="modal">
                        <button class="cursor-pointer" type="button" aria-label="Close" @click="closeModal">X</button>
                    </div>
                </div>
                <button
                    aria-label="copy"
                    title="Copy coupon"
                    class="bg-[#FFDC03] cursor-pointer text-[#370F1E] justify-center items-center flex gap-4 font-bold text-[25px] px-4 rounded-[25px] hover:opacity-90 transition"
                    @click="copyAndClose(msg)"
                    >
                    {{ extractCode(msg.text) || 'Copy' }}
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" 
                        fill="currentColor" 
                        viewBox="0 0 24 24">
                    <path d="M16 1H8C6.9 1 6 1.9 6 3v2H5c-1.1 0-2 .9-2 2v14c0 
                            1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-2h2c1.1 0 2-.9 
                            2-2V5c0-1.1-.9-2-2-2h-1V3c0-1.1-.9-2-2-2zm0 
                            16v2H5V7h1v9c0 1.1.9 2 2 2h8zm3-2h-9V5h9v10z"/>
                    </svg>
                </button>     
            </div>       
        </div>
    </div>
</template>
