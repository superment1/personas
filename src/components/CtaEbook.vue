<script setup lang="ts">
interface Props {
  fileUrl: string       
  label?: string  
  fileName?: string | null 
}

const props = defineProps<Props>()
const { fileUrl, label = 'Choose your bundle and get your book', fileName = null } = props
</script>
<template>
  <a
    :href="fileUrl"
    :download="fileName || undefined"
    class="text-[18px] leading-none inline-flex items-center justify-center px-10 py-3
           bg-[#FFDC03] hover:bg-[#a18c03] text-[#222] font-semibold
           shadow-md transition-transform duration-150 active:scale-95"
  >
    {{ label }}
  </a>
</template>