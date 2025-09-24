<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({ value: [String, Number] })

const pad  = (v: any) => String(v).padStart(2,'0')
const curr = ref(pad(props.value))
const next = ref(curr.value)
const flipping = ref(false)

const TOP_MS = 300, BOT_MS = 300

let animating = false
let queued: string | null = null

const bottomAnim = ref(curr.value)

function runFlip(to: string) {
  animating = true
  next.value = to

  bottomAnim.value = curr.value

  flipping.value = true

  setTimeout(() => {
    curr.value = to
    bottomAnim.value = to
  }, TOP_MS)

  setTimeout(() => {
    flipping.value = false
    animating = false
    if (queued && queued !== curr.value) {
      const q = queued
      queued = null
      runFlip(q)
    } else {
      queued = null
    }
  }, TOP_MS + BOT_MS)
}

watch(() => pad(props.value), (nv) => {
  if (nv === curr.value) return
  if (animating) queued = nv
  else runFlip(nv)
})
</script>

<template>
  <div class="card relative w-full h-full [perspective:1200px]">

    <div class="absolute inset-x-0 top-0 h-1/2 overflow-hidden z-0">
      <div class="face face-skin">
        <span class="digit absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2">{{ curr }}</span>
      </div>
    </div>
    <div class="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden z-0">
      <div class="face face-skin">
        <span :class="[
                'digit absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2',
                flipping ? 'opacity-0' : 'opacity-100'
              ]">
          {{ curr }}
        </span>
      </div>
    </div>

    <div v-if="flipping"
         class="absolute inset-x-0 top-0 h-1/2 overflow-hidden
                [transform-origin:bottom] will-change-transform anim-top z-30">
      <div class="face face-skin">
        <span class="digit absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2">{{ curr }}</span>
      </div>
    </div>

    <div v-if="flipping"
     class="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden
            [transform-origin:top] will-change-transform anim-bottom z-20">
        <div class="face face-skin">
            <span class="digit absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2">
            {{ bottomAnim }}
            </span>
        </div>
    </div>
  </div>
</template>

<style scoped>
.face{ position:relative; height:100%; width:100%;
       backface-visibility:hidden; -webkit-backface-visibility:hidden;
       transform-style:preserve-3d; }

.face-skin{ position:relative;
  background:linear-gradient(180deg,#FFD91F 6%,#F3C81C 54%,#D7A90F 100%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.55),
              inset 0 -2px 0 rgba(0,0,0,.15),
              0 8px 16px rgba(0,0,0,.18);
}

.digit{
  position:absolute; z-index:2;        
  color:#fff;
  font-weight:800;
  font-size: 1em;     
  line-height:.85;
  text-shadow:0 2px 0 rgba(0,0,0,.18), 0 8px 12px rgba(0,0,0,.28);
  mix-blend-mode: normal;
  pointer-events:none; user-select:none;
}
.anim-top    { animation: flipTop 300ms ease-in forwards; }
.anim-bottom { animation: flipBottom 300ms ease-out 300ms forwards; }

@keyframes flipTop   { to   { transform: rotateX(-90deg); } }
@keyframes flipBottom{ from { transform: rotateX( 90deg); } to { transform: rotateX(0); } }
</style>
