<script setup>
  import ButtonShop from '@/components/ButtonShopNow.vue';
</script>

<template>
  <div class="flex flex-col items-center w-full mt-10 sm:mt-0 pb-[40px]">
      <p class="text-[31px] leading-[28px] italic text-center text-[#FFFAF0] font-gelasio font-light">
        SHOP NOW
      </p>

      <div
        class="mt-1 w-[102px] h-[17px] bg-[url('@/assets/image/sleepSuperment/stripe-branco.png')] bg-cover bg-center bg-no-repeat"
      ></div>

      <div class="w-full h-[155px] flex flex-col items-center justify-between mt-9">
        <ButtonShop label="BUY ONE | PAY $32" />
        <ButtonShop label="BUY THREE | PAY $28 PER BOTTLE" />
        <ButtonShop label="BUY SIX | PAY $24 PER BOTTLE" />
      </div>
    </div>
</template>