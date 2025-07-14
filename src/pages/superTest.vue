<script setup>
import CtaButton from '../components/CTAButton.vue';
import { useSeo } from '../composables/useSeo'
import HeroSection from '../components/HeroSection.vue'
import timbrado from '../assets/image/timbrado.jpg'
import Image from '../components/Image.vue'
import rosto from '../assets/image/rosto.png'
import halloween from '../assets/image/halloween.png'
import telefone from '../assets/image/icons/telefone.png'

  useSeo({
    title: 'Curso SuperTeste - Teste Melhor',
    description: 'Descubra como testar melhor com o método SuperTest. Método prático e eficaz.',
    keywords: 'teste, curso, testador melhor, supertest'
  })
</script>

<template>
  <section class="text-center">
    <HeroSection :imageUrl="timbrado">
      <div class="flex flex-col items-center gap-6">
        <div class="flex items-center justify-center h-full">
          <h1 class="text-yellow-700 text-4xl font-semibold">
            Testando tailwind
          </h1>
        </div>
        <CtaButton 
          class="px-4 py-2 text-white bg-green-500 whitespace-nowrap hover:opacity-90 hover:scale-105 transition duration-300 ease-in-out"
          anchorId="fale-conosco"
        > 
          FALE COMIGO
        </CtaButton>
      </div>
    
    </HeroSection>
    </section>
    <section id='fale-conosco'>
    <div class="relative bg-red-400 w-full px-8 py-4 h-full">
      <div>
        <div class="flex justify-between gap-4">
          <div class="flex gap-2">
            <Image
              :src="rosto"
              alt="Imagem fantasma"
              imgClass="rounded-lg shadow-lg w-[50px] h-auto max-w-md"
            >
            </Image>
            <Image
              :src="halloween"
              alt="fantasma 2"
              imgClass="rounded-lg shadow-lg w-[50px] h-auto max-w-md"
            ></Image>
          </div>
          <h1 class="p-4 text-white font-bold">
            Fale conosco
          </h1>
        </div>
        <h2 class="text-start">
          Resultado:
            O botão aparece só na section vermelha, posicionado no canto direito.
            Ele “entra” um pouco ao passar o mouse (hover:translate-x-[-10px]).
            Usamos right-[-20px] para deixar ele "fora" da tela e dar o efeito de entrada.
            O overflow-x-visible na section garante que o botão não fique cortado.
        </h2>
      </div>
        <div class="absolute top-1/2 right-0 -translate-y-1/2 transition-all duration-300 ease-in-out hover:scale-100 z-50">
          <CtaButton 
            class="bg-yellow-500 text-white font-semibold rounded-[1.75rem] shadow-md"
            checkoutUrl="test_eVqeVf1KngXH2Fgeha9MY02"
            :icon="telefone"       
          >
            Compre Aqui
          </CtaButton>
        </div>
    </div>
  </section>
</template>
