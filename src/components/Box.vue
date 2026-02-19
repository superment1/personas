<script setup lang="ts">


interface Item {
  image: string
  title: string
  subtitle?: string
  info?: string
}

const props = defineProps<{
  items: Item[]
}>()

</script>

<template>
  <ul class="w-full flex flex-col items-center gap-6 lg:gap-[80px]">
    <li
      v-for="(item, i) in props.items"
      :key="i"
      :class="[
        'flex px-[35px] lg:px-0 flex-col max-w-[980px] items-center text-center gap-4',
        i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      ]"
    >
      <div class="">
        <img :src="item.image" alt="" class="lg:max-w-[490px] w-auto h-auto rounded-[14px]" />
      </div>
      <div>    
        <h1 class="font font-gelasio text-[32px] whitespace-pre-line leading-[1] lg:text-[62px] text-[#370F1E] italic mt-4">
          {{ item.title }}
        </h1>

        <p v-if="item.subtitle" class="font-DMSans leading-[1.2] font-black text-[13.5px] lg:text-[26px] text-[#370F1E] mt-2">
          {{ item.subtitle }}
        </p>
        <p v-if="item.info" class="font-DMSans leading-[1.2] lg:px-[20px] text-[13.5px] lg:text-[24px] text-[#370F1E] mt-2">
          {{ item.info }}
        </p>
      </div>
    </li>
  </ul>
</template>
