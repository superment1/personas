<template>
  <button type="button" @click="handleClick" :class="[
    buttonClasses,
    { 'animate-zoom': zooming }
  ]" v-bind="buttonAttrs">
    <svg v-if="showIcon" width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg"
      :class="['fill-current', iconColorClass]">
      <path
        d="M7 22.2938C6.45 22.2938 5.97917 22.098 5.5875 21.7063C5.19583 21.3147 5 20.8438 5 20.2938C5 19.7438 5.19583 19.273 5.5875 18.8813C5.97917 18.4897 6.45 18.2938 7 18.2938C7.55 18.2938 8.02083 18.4897 8.4125 18.8813C8.80417 19.273 9 19.7438 9 20.2938C9 20.8438 8.80417 21.3147 8.4125 21.7063C8.02083 22.098 7.55 22.2938 7 22.2938ZM17 22.2938C16.45 22.2938 15.9792 22.098 15.5875 21.7063C15.1958 21.3147 15 20.8438 15 20.2938C15 19.7438 15.1958 19.273 15.5875 18.8813C15.9792 18.4897 16.45 18.2938 17 18.2938C17.55 18.2938 18.0208 18.4897 18.4125 18.8813C18.8042 19.273 19 19.7438 19 20.2938C19 20.8438 18.8042 21.3147 18.4125 21.7063C18.0208 22.098 17.55 22.2938 17 22.2938ZM6.15 6.29382L8.55 11.2938H15.55L18.3 6.29382H6.15ZM5.2 4.29382H19.95C20.3333 4.29382 20.625 4.46466 20.825 4.80632C21.025 5.14799 21.0333 5.49382 20.85 5.84382L17.3 12.2438C17.1167 12.5772 16.8708 12.8355 16.5625 13.0188C16.2542 13.2022 15.9167 13.2938 15.55 13.2938H8.1L7 15.2938H19V17.2938H7C6.25 17.2938 5.68333 16.9647 5.3 16.3063C4.91667 15.648 4.9 14.9938 5.25 14.3438L6.6 11.8938L3 4.29382H1V2.29382H4.25L5.2 4.29382Z" />
    </svg>
    <span :class="textColorClass">
      <slot v-if="title">{{ title }}</slot>
      <slot v-else>Shop now</slot>
    </span>
  </button>
</template>

<script setup>
import { defineProps, useAttrs, computed, ref } from 'vue'

const props = defineProps({
  productId: { type: String, required: false },
  anchorId: String,
  customClass: { type: String, default: '' },
  title: String,
  paymentLink: String,
  textColorClass: {
    type: String,
    default: 'text-[#58663A]'
  },
  iconColorClass: {
    type: String,
    default: 'text-[#58663A]'
  },
  showIcon: {
    type: Boolean,
    default: true
  }
})

const attrs = useAttrs()
const zooming = ref(false)

// Computed para classes do botão
const buttonClasses = computed(() => {
  const baseClasses = [
    'text-white',
    'px-3',
    'py-0',
    'h-[50px]',
    'rounded-full',
    'transition-transform',
    'duration-300',
    'flex',
    'items-center',
    'justify-center',
    'hover:bg-[#58663A]/50',
    'hover:text-white',
    'hover:fill-white'
  ]

  if (attrs.class) {
    if (typeof attrs.class === 'string') {
      baseClasses.push(...attrs.class.split(' '))
    } else if (Array.isArray(attrs.class)) {
      baseClasses.push(...attrs.class)
    }
  }

  return baseClasses
})

// Computed para filtrar outros atributos
const buttonAttrs = computed(() => {
  const { class: _, ...otherAttrs } = attrs
  return otherAttrs
})


const handleClick = async () => {
  zooming.value = true
  setTimeout(() => zooming.value = false, 300)

  if (props.anchorId && !props.productId && !props.paymentLink) {
    const target = document.getElementById(props.anchorId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (props.paymentLink) {
    window.location.href = props.paymentLink
    return
  }

  if (props.productId) {
    try {
      const res = await fetch(`https://checkout.superment.co/get-price-id?product_id=${props.productId}`)
      const data = await res.json()
      if (!data.price_id) {
        alert("Erro ao buscar o preço: " + (data.error || "desconhecido"))
        return
      }
      window.location.href = `https://checkout.superment.co/checkout?price_id=${data.price_id}`
    } catch (err) {
      console.error("Erro na requisição:", err)
      alert("Erro ao tentar iniciar o checkout.")
    }
  }
}

</script>

<style scoped>
button:hover span,
button:hover svg {
  fill: #fff;
  color: #fff;
}

@keyframes zoom {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

.animate-zoom {
  animation: zoom 0.3s ease-in-out;
}
</style>
