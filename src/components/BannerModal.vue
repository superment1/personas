<script setup>
import { ref, onMounted, watch, onBeforeUnmount, nextTick } from 'vue'

const showModal = ref(false)
const OPEN_KEY = 'rd-modal-opened' 

let rdScriptLoaded = false
let formCreated = false

function openModal() {
  if (!sessionStorage.getItem(OPEN_KEY)) {
    showModal.value = true
    document.body.style.overflow = 'hidden'
  }
}
function closeModal() {
  showModal.value = false
  document.body.style.overflow = ''
  sessionStorage.setItem(OPEN_KEY, '1')
}

function onKey(e) {
  if (e.key === 'Escape') closeModal()
}

onMounted(() => {
  setTimeout(openModal, 1500)
  const script = document.createElement('script')
  script.src = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"
  script.async = true
  script.onload = () => {
    if (window.RDStationForms) {
    new RDStationForms('lead-e9a65abee360f5aa42a1', '').createForm()
    } else {
      console.warn('RDStationForms not available after script load')
    }
  }
  document.body.appendChild(script)
  window.addEventListener('keydown', onKey)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})

watch(showModal, async (isOpen) => {
  if (!isOpen || formCreated === true) return
  await nextTick()
  if (rdScriptLoaded && window.RDStationForms) {
    new RDStationForms('lead-e9a65abee360f5aa42a1', '').createForm()
    formCreated = true
  }
})

</script>

<template>
  <div
    v-show="showModal"
    class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
    aria-hidden="true">
  </div>
    <div
      v-show="showModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="rd-modal-title"
      class="fixed inset-0 z-50 flex items-center justify-center p-8"
      @click="closeModal"
    >          
      <div @click.stop 
        class="relative w-full max-w-xl font-crossfit text-[34px] md:text-[40px] shadow-2xl ring-1 rounded-xl bg-[#6EC8F0] ring-black/5 pt-4 pb-[7px] space-y-0">
        <h1 id="rd-modal-title" class="text-[#370F1E] leading-[1.3] flex items-center justify-center flex-col" >
          Sign up below to get a <br> 
          <span class="tracking-wide">
            <span class="bg-[#FFDC03] inline-block text-center rounded px-[5px] h-[40px]">10%</span> super discount.
          </span> 
        </h1>
        <div
          role="main"
          id="lead-e9a65abee360f5aa42a1"
          class="w-[360px] md:w-full">
        </div>
      </div>
    </div>
</template>

<style scoped>
  :deep(#lead-e9a65abee360f5aa42a1 label) {
    font-size: 20px;
    font-family: 'Gelasio';
    font-weight: 500;
    margin-left: 1px;
  }

  :deep(#lead-e9a65abee360f5aa42a1 input),
  :deep(#lead-e9a65abee360f5aa42a1 select),
  :deep(#lead-e9a65abee360f5aa42a1 textarea) {
    height: 44px; /* aumenta altura */
    font-size: 18px; /* aumenta tamanho do texto */
    padding: 0 14px; /* espaço interno */
    border-radius: 10px; /* opcional */
  }
  
 :deep(#lead-e9a65abee360f5aa42a1 input.bricks-form__input) {
  height: 44px !important; /* ajuste o valor como preferir */
  font-size: 18px;          /* aumenta também o tamanho do texto */
  padding: 0 14px;          /* deixa mais espaçado nas laterais */
  border-radius: 10px;      /* opcional, para arredondar */
}


/* Botão do RD */
:deep(#lead-e9a65abee360f5aa42a1 button) {
  background-color: #FFDC03;
  color: #370F1E;
  width: 100% !important;  
  padding: 0 16px;          /* ajuste lateral */
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  font-size: 22px;
  font-style: italic;
  font-weight: 500;
  border-radius: 6px;
  align-self: flex-start;    /* garante que fique à esquerda no container */
  margin: 5px 0 0 0;  
}


  :deep(#rd-form-me7bf6ln) {
    width: 100% !important;   /* ocupa toda a largura do modal */
    max-width: 700px !important;
    border-radius: 4px;
  }

  :deep(#lead-e9a65abee360f5aa42a1 .phone-country .select2-choice) {
    padding-left: 0px !important; /* ajuste fino */
  }

  /* Ajusta o select de país */
:deep(#lead-e9a65abee360f5aa42a1 .phone-country .select2-choice) {
  height: 44px !important; /* mesmo valor dos outros inputs */
  display: flex;
  align-items: center;
  padding-left: 8px; /* espaço interno */
}

/* Ajusta o input de telefone */
:deep(#lead-e9a65abee360f5aa42a1 .phone-input-group input) {
  height: 44px !important;
  font-size: 18px;
  padding: 0 14px;
}

/* Remove espaço extra entre select e input */
:deep(#lead-e9a65abee360f5aa42a1 .phone-input-group) {
  gap: 0 !important;
}

  
  :deep(#rd-section-me7bf6lg) {
    background: none;
    width: 100% !important;  
  }
  
  :deep(#lead-e9a65abee360f5aa42a1 .bricks-form__label) {
    margin-bottom: 0px !important;
  }

  :deep(#lead-e9a65abee360f5aa42a1 .bricks-form__field) {
    margin-bottom: 4px !important;
  }

  @media(min-width: 420px) {
    :deep(#rd-section-me7bf6lg) {
      width: 100% !important;   
      max-width: 355px;
    }
  }
  
  @media(min-width: 750px) {
    :deep(#rd-section-me7bf6lg) {
      width: 100% !important;   
      max-width: 600px;
    }

    :deep(#lead-e9a65abee360f5aa42a1) {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

 </style>