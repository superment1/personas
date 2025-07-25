<template>
  <section class="w-full bg-[#370F1E] px-6 pt-10 pb-36 md:pt-10 md:pb-36 flex flex-col items-center justify-start">
    <!-- Título -->
    <div class="text-center">
      <p class="font-[Crossfit-Bold] text-[32px] font-black text-[#FFFAF0] leading-tight">
        Stress, screens, and<br />
        burnout leave you drained.
      </p>
    </div>

    <!-- Descrição -->
    <div class="mt-1 max-w-md text-center">
      <p class="font-['DM_Sans'] text-base font-light text-[#FFFAF0]">
        Super Natural Sleep helps you<br />
        rest, even on stressful days.
      </p>
    </div>

    <!-- Layout Mobile (<650px): BLOCO 45% em cima -->
    <div class="flex flex-col sm:hidden items-center text-center mt-4">
      <!-- Bloco 45% -->
      <div class="mb-4">
        <p class="font-[Crossfit] font-black text-5xl text-[#FFFAF0]">45%</p>
        <p class="mt-2 max-w-[240px] font-['DM_Sans'] text-sm text-[#FFFAF0]">
          of people lose sleep<br />
          because of stress — the<br />
          top reason for insomnia.
        </p>
        <p class="mt-1 font-['DM_Sans'] text-[10px] font-extralight text-[#FFFAF0]">
          American Psychological Association
        </p>
      </div>

      <!-- Blocos 35% e 46% lado a lado -->
      <div class="flex flex-row justify-around w-full gap-8">
        <!-- Bloco 35% -->
        <div class="flex flex-col items-center text-center">
          <p class="font-[Crossfit] font-black text-5xl text-[#FFFAF0]">35%</p>
          <p class="mt-2 max-w-[200px] font-['DM_Sans'] text-sm text-[#FFFAF0]">
            of people sleep less<br />
            than 7 hours, harming<br />
            focus and mood.
          </p>
          <p class="mt-1 font-['DM_Sans'] text-[10px] font-extralight text-[#FFFAF0]">CDC</p>
        </div>

        <!-- Bloco 46% -->
        <div class="flex flex-col items-center text-center">
          <p class="font-[Crossfit] font-black text-5xl text-[#FFFAF0]">46%</p>
          <p class="mt-2 max-w-[200px] font-['DM_Sans'] text-sm text-[#FFFAF0]">
            of people feel burned<br />
            out, draining their<br />
            energy and wellbeing.
          </p>
          <p class="mt-1 font-['DM_Sans'] text-[10px] font-extralight text-[#FFFAF0]">CDC / AJC.com</p>
        </div>
      </div>
    </div>

    <!-- Layout Desktop (>=650px): três blocos alinhados -->
    <div class="hidden sm:flex flex-row justify-center gap-16 text-center mt-3">
      <!-- Bloco 35% -->
      <div>
        <p class="font-[Crossfit] font-black text-5xl text-[#FFFAF0]">35%</p>
        <p class="mt-2 max-w-[200px] mx-auto font-['DM_Sans'] text-sm text-[#FFFAF0]">
          of people sleep less than 7 hours, harming focus and mood.
        </p>
        <p class="mt-1 font-['DM_Sans'] text-[10px] font-extralight text-[#FFFAF0]">CDC</p>
      </div>

      <!-- Bloco 45% -->
      <div>
        <p class="font-[Crossfit] font-black text-5xl text-[#FFFAF0]">45%</p>
        <p class="mt-2 max-w-[240px] mx-auto font-['DM_Sans'] text-sm text-[#FFFAF0]">
          of people lose sleep because of stress — the top reason for insomnia.
        </p>
        <p class="mt-1 font-['DM_Sans'] text-[10px] font-extralight text-[#FFFAF0]">
          American Psychological Association
        </p>
      </div>

      <!-- Bloco 46% -->
      <div>
        <p class="font-[Crossfit] font-black text-5xl text-[#FFFAF0]">46%</p>
        <p class="mt-2 max-w-[200px] mx-auto font-['DM_Sans'] text-sm text-[#FFFAF0]">
          of people feel burned out, draining their energy and wellbeing.
        </p>
        <p class="mt-1 font-['DM_Sans'] text-[10px] font-extralight text-[#FFFAF0]">CDC / AJC.com</p>
      </div>
    </div>
  </section>
</template>
