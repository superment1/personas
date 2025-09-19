<template>
  <button type="button" @click="handleClick" :class="[
    buttonClasses,
    { 'animate-zoom': zooming }
  ]" v-bind="buttonAttrs">
    <svg v-if="showIcon" width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg"
      :class="['fill-current', iconColorClass]">
      <path
        d="M0.614925 1.74633C0.275273 1.74633 0 1.43425 0 1.04919C0 0.664128 0.275273 0.352051 0.614925 0.352051H3.81017C4.10616 0.352051 4.35332 0.589464 4.41177 0.904897L4.89128 2.93508H22.9276C23.2673 2.93508 23.5425 3.24715 23.5425 3.63222C23.5425 3.68591 23.5374 3.73792 23.527 3.78826L22.7397 8.99709C22.7367 9.0231 22.733 9.04827 22.7278 9.07343L21.9353 14.3183C21.8842 14.6581 21.6245 14.898 21.33 14.8972H7.71875L8.2323 17.0692H20.6751C21.0148 17.0692 21.29 17.3812 21.29 17.7663C21.29 18.1514 21.0148 18.4634 20.6751 18.4634H7.76093C7.48936 18.4634 7.24147 18.2571 7.16747 17.9458L6.33351 14.4173C6.32685 14.3938 6.32093 14.3695 6.31649 14.3444L5.59131 11.2764L5.08442 9.13216C5.07776 9.10867 5.07184 9.08518 5.0674 9.06085L3.82645 3.81091V3.80923L3.3388 1.74465H0.614925V1.74633ZM18.4944 20.4341C18.242 20.4341 18.0149 20.5498 17.8499 20.7369C17.6848 20.924 17.5827 21.1824 17.5827 21.4676C17.5827 21.7528 17.6848 22.0112 17.8499 22.1983C18.0149 22.3854 18.2428 22.5011 18.4944 22.5011C18.746 22.5011 18.9739 22.3854 19.1389 22.1983C19.3039 22.0112 19.406 21.7528 19.406 21.4676C19.406 21.1824 19.3039 20.924 19.1389 20.7369C18.9739 20.5498 18.746 20.4341 18.4944 20.4341ZM16.9804 19.7503C17.3681 19.3107 17.9031 19.0389 18.4944 19.0389C19.0856 19.0389 19.6206 19.3107 20.0084 19.7503C20.3961 20.1899 20.6359 20.7965 20.6359 21.4668C20.6359 22.1371 20.3961 22.7436 20.0084 23.1832C19.6206 23.6228 19.0856 23.8946 18.4944 23.8946C17.9031 23.8946 17.3681 23.6228 16.9804 23.1832C16.5926 22.7436 16.3529 22.1371 16.3529 21.4668C16.3529 20.7965 16.5926 20.1899 16.9804 19.7503ZM10.47 20.4341C10.2184 20.4341 9.9905 20.5498 9.82548 20.7369C9.66121 20.924 9.55835 21.1824 9.55835 21.4676C9.55835 21.7528 9.66047 22.0112 9.82548 22.1983C9.9905 22.3854 10.2184 22.5011 10.47 22.5011C10.7216 22.5011 10.9495 22.3854 11.1145 22.1983C11.2795 22.0112 11.3817 21.7528 11.3817 21.4676C11.3817 21.1824 11.2795 20.924 11.1145 20.7369C10.9495 20.5498 10.7216 20.4341 10.47 20.4341ZM8.95601 19.7503C9.34376 19.3107 9.87876 19.0389 10.47 19.0389C11.0613 19.0389 11.5963 19.3107 11.984 19.7503C12.3718 20.1899 12.6115 20.7965 12.6115 21.4668C12.6115 22.1371 12.3718 22.7436 11.984 23.1832C11.5963 23.6228 11.0613 23.8946 10.47 23.8946C9.87876 23.8946 9.34376 23.6228 8.95601 23.1832C8.56825 22.7436 8.3285 22.1371 8.3285 21.4668C8.3285 20.7965 8.56825 20.1891 8.95601 19.7503ZM21.401 9.6137H17.6301L17.3948 13.5038H20.8135L21.401 9.6137ZM16.3995 9.6137H11.156L11.5237 13.5038H16.1642L16.3995 9.6137ZM9.92168 9.6137H6.47114L7.39094 13.5038H10.2902L9.92242 9.6137H9.92168ZM6.14111 8.21942H9.78922L9.42145 4.32936H5.22131L6.14111 8.21942ZM11.0235 8.21942H16.4831L16.7184 4.32936H10.6557L11.0235 8.21942ZM17.7137 8.21942H21.6112L22.1987 4.32936H17.9483L17.713 8.21942H17.7137Z" fill="#FFDC03"/>
    </svg>
    <span :class="['inline-flex items-center gap-2 whitespace-nowrap', textColorClass]">
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
    'px-[1rem]',
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
