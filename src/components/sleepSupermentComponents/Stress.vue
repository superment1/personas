<style scoped>
section.stress {
    width: 100%;
    height: 100%;
    background: #370F1E;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 100px 0 120px 0;
}

section.stress div.title {
    width: 304px;
    height: 65px;
}

section.stress div.title p {
    font-family: 'Crossfit-Bold';
    font-size: 28px;
    line-height: 28px;
    font-weight: 900;
    letter-spacing: 0%;
    text-align: center;
    color: #FFFAF0;
}

section.stress div.description {
    width: 254px;
    height: 49px;
    margin-top: -30px;
}

section.stress div.description p {
    font-family: 'DM Sans';
    font-weight: 200;
    font-style: 'Regular';
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: center;
    color: #FFFAF0;
}

section.stress div.item-1-content {
    width: 165px;
    height: 130px;
}

section.stress div.item-2-content {
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
}

#title-stress {
    height: 60px;
    font-family: 'Crossfit';
    font-weight: 900;
    font-style: black;
    font-size: 50px;
    text-align: center;
    color: #FFFAF0;
    margin-top: 20px;

}

#description-stress {
    width: 150px;
    font-family: 'DM Sans';
    font-weight: 400;
    font-style: 'Medium';
    line-height: 16px;
    font-size: 14px;
    letter-spacing: 0%;
    text-align: center;
    color: #FFFAF0;
}

#sub-description-stress {
    font-family: 'DM Sans';
    font-weight: 200;
    font-style: 'Medium';
    font-size: 8px;
    line-height: 16px;
    letter-spacing: 0%;
    text-align: center;
    color: #FFFAF0;
}

@media (min-width:550px) {
  section.stress {
    width: 100%;
    height: 100%;
    background: #370F1E;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 20px 0 120px 0;
    
  }

  div.title {
    background-color: green;
  }

  div.description {
    background-color: red;
  }
}
</style>

<template>
  <section class="w-full bg-[#370F1E] px-6 pt-20 sm:pt-16 md:pt-20 lg:pt-20 pb-36 flex flex-col items-center justify-start">
    <!-- Título -->
    <div class="text-center">
      <p class="font-[Crossfit-Bold] text-[32px] font-black text-[#FFFAF0] leading-tight">
        Stress, screens, and<br />
        burnout leave you drained.
      </p>
    </div>

    <!-- Descrição -->
    <div class="mt-2 max-w-md text-center">
      <p class="font-['DM_Sans'] text-base font-light text-[#FFFAF0]">
        Super Natural Sleep helps you<br />
        rest, even on stressful days.
      </p>
    </div>

    <!-- Layout Mobile (<650px): BLOCO 45% em cima -->
    <div class="flex flex-col sm:hidden items-center text-center mt-10">
      <!-- Bloco 45% -->
      <div class="mb-8">
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
      <div class="flex flex-row justify-around w-full gap-4">
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
    <div class="hidden sm:flex flex-row justify-center gap-16 text-center mt-10">
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
