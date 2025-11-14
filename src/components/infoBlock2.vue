<script setup lang="ts">

type Item = {
  svg?: string
  title: string
  subtitle?: string | string[] 
  image?: string
  imageDesk?: string
}
const HILITE_CLASS = 'text-[#FFDC03] font-semibold'

defineProps<{
  items: Item[]
}>()

function getSubtitles(sub?: string | string[]) {
  if (!sub) return []
  return Array.isArray(sub) ? sub : [sub]
}

function parseBold(text: string) {
  const parts = text.split('**')
  return parts.map((t, i) => ({ text: t, strong: i % 2 === 1 }))
}
</script>
<template>
    <div class="grid gap-[30px] lg:max-w-[1269px] lg:mx-auto lg:gap-[60px] min-w-[300px] sm:grid-cols-2 lg:grid-cols-1">
      <div
        v-for="(item, i) in items"
        :key="i"
        :class="['flex flex-col gap-[27px] lg:gap-[127px]',
         i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse']"
      ><div class="flex flex-col gap-4 lg:gap-[20px] lg:self-center ">
        <div class="flex gap-[14px] items-center">
          <span
          v-if="item.svg"
          class="shrink-0 w-[30px] h-[35px] lg:h-[80px] lg:w-[60px] text-[#FFDC03]"
          v-html="item.svg"
          aria-hidden="true"
        />
        <h3 class="text-[17.5px] lg:text-[37px] leading-[1.2] whitespace-pre-line font-gelasio italic font-bold text-[#fff]">
          {{ item.title }}
        </h3>
        </div>        
         <div class="flex flex-col gap-[16px] lg:gap-[37px]">
          <p
            v-for="(sub, idx) in getSubtitles(item.subtitle)"
            :key="idx"
            class="text-[15px] lg:text-[26px] text-[#fff] whitespace-pre-line font-sans leading-[18px] lg:leading-[33px] font-light"
          >
            <template v-for="(seg, j) in parseBold(sub)" :key="j">
              <span :class="seg.strong ? HILITE_CLASS : ''">{{ seg.text }}</span>
            </template>
          </p>
        </div>
      </div>
         <img
          :src="item.image"
          :alt="item.title"
          :width="660"
          :height="400"
          class="lg:hidden w-[330px] lg:rounded-md rounded-lg h-[190px] object-cover"
        />
        <img
          :src="item.imageDesk"
          :alt="item.title"
          :width="660"
          :height="400"
          class="hidden lg:block w-[570px] h-[480px] rounded-lg object-cover"
        />
      </div>
    </div>
</template>