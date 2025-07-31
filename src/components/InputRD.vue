<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"
  script.async = true
  script.onload = () => {
    if (window.RDStationForms) {
    new RDStationForms('e-mail-site-2-fc7666a2bfa336762e39', '').createForm()
    } else {
      console.warn('RDStationForms not available after script load')
    }
  }
  document.body.appendChild(script)
})
</script>

<style scoped>


  #e-mail-site-2-fc7666a2bfa336762e39 form {
    width: 700px;
  }

  .content-input {
    width: 350px !important;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }

  .title {
    font-family: 'Crossfit';
    color: #FFF;
    text-align: start;
  }
@media (min-width: 639px) {
  .content-input {
    width: 769px !important;
  }
}
@media (min-width: 1350px){
  .content-input {
    width: 700px !important; 
  }
}
</style>

<template>
<div class="content-input gap-[18px]" >
  <p class="title text-4xl"> JOIN OUR LIST</p>
  <div
    role="main"
    id="e-mail-site-2-fc7666a2bfa336762e39"
    class="w-full mx-auto"
    style="margin-left: -30px;"
  ></div>
</div>

</template>

