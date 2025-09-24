<template>
  <footer :class="['relative rounded-t-3xl']" :style="{ backgroundColor: color }">
    <div class="w-full h-[215px] flex flex-col justify-start items-center">
      <h2
        id="footer-title"
        class="text-white font-crossfit text-center mt-8 font-semibold text-[40px] sm:text-[20px] leading-tight"
        :style="{ color: colortext }"
      >
        {{ title }}
      </h2>
      <p
        v-if="subtitle"
        class="text-white/80 text-center mt-3 font-light text-[14px] sm:text-[16px] leading-[1.15]"
        :style="{ color: colortext }"
        v-html="subtitle"
      >

      </p>
      
    </div>
  </footer>
</template>

<script lang="ts" setup>

type Props = {
  /** Cor de fundo do footer (qualquer CSS color: hex, rgb, var(), etc.) */
  color?: string
  colortext?: string
  title: string
  subtitle?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: '#4DBCB6',
  imageSrc: '',
  alt: 'Superment',
  subtitle: ''
})
</script>
