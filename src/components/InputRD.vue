<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js'
  script.async = true
  script.onload = () => {
    new RDStationForms('e-mail-site-2-fc7666a2bfa336762e39', '').createForm()
  }
  document.body.appendChild(script)
})
</script>

<style scoped>
  #e-mail-site-2-fc7666a2bfa336762e39 form {
    width: 100% !important;
    max-width: 700px;
  }

  .content-input {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }

  .title {
    font-family: 'Crossfit';
    color: #FFF;
    font-size: 32px;
    text-align: start;
  }

</style>

<template>
<div class="content-input" >
  <p class="title">UNLOCK 10% OFF</p>
  <div
    role="main"
    id="e-mail-site-2-fc7666a2bfa336762e39"
    class="w-full mx-auto"
    style="margin-left: -30px;"
  ></div>
</div>

</template>

