<script setup>
  import ButtonShop from '@/components/ButtonSleepSuperment.vue';
  import ShopButton from '../ShopButton.vue';
</script>

<template>
  <div class="flex flex-col items-center w-full">
    
    <!-- Título + Stripe (alinhado lado a lado em telas lg+) -->
    <div class="flex flex-col lg:flex-row items-center justify-center gap-2">
      <p class="text-[29px] leading-[28px] italic text-center text-[#FFFAF0] font-gelasio font-light">
        SHOP NOW
      </p>
      <div
        class="mt-0 lg:mt-0 w-[102px] h-[17px] bg-[url('@/assets/image/sleepSuperment/logo-stripe-branco.png')] bg-cover bg-center bg-no-repeat"
      ></div>
    </div>

    <!-- Botões -->
    <div class="w-full h-[155px] flex flex-col items-center justify-end gap-3 mt-6">
      <ShopButton 
        label="BUY ONE | PAY $32"
        type="button"
        id="buy-button"
        productId="prod_SbKYsQrxStW8wB"
        textColorClass="text-[#370F1E]"
        :showIcon="false"
        class=" !bg-[#6EC8F0] text-[14px] font-bold sm:py-2 sm:w-[260px] 2xl:w-[326px] rounded-md botao-shop !hover:bg-none !transition-none !px-0">
        BUY ONE | PAY $42
      </ShopButton>
      <ShopButton 
        label="BUY THREE | PAY $28 PER BOTTLE"
        type="button"
        id="buy-button"
        productId="prod_SbKa8ag01A2TGX"
        textColorClass="text-[#370F1E]"
        :showIcon="false"
        class=" !bg-[#6EC8F0] text-[14px] font-bold sm:py-2 sm:w-[260px] 2xl:w-[326px] rounded-md botao-shop !hover:bg-none !transition-none !px-0">
        BUY THREE | PAY $32 PER BOTTLE
      </ShopButton>
      <ShopButton 
        label="BUY SIX | PAY $24 PER BOTTLE"
        type="button"
        id="buy-button"
        productId="prod_SbKaRuJpDVBEzx"
        textColorClass="text-[#370F1E]"
        :showIcon="false"
        class=" !bg-[#6EC8F0] text-[14px] font-bold sm:py-2 sm:w-[260px] 2xl:w-[326px] rounded-md botao-shop !hover:bg-none !transition-none !px-0">
        BUY SIX | PAY $26 PER BOTTLE
      </ShopButton>

      <!-- <ButtonShop label="BUY ONE | PAY $32" />
      <ButtonShop label="BUY THREE | PAY $28 PER BOTTLE" />
      <ButtonShop label="BUY SIX | PAY $24 PER BOTTLE" /> -->
    </div>
    
  </div>
</template>
