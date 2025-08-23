<script setup>
import { useSeo } from '@/composables/useSeo'
import SuperFooter from '../components/SuperFooter.vue'
import SuperHeader from '../components/SuperHeader.vue'
    useSeo({
        title: 'SUPERMENT - Super Natural Sleep',
        description: 'Natural, deep sleep is essential for healthy, radiant skin.',
        keywords: 'superment, super natural sleep, sleep, natural, radiant skin'
    })
</script>

<template>
    <SuperHeader :show-redirect="true"/>
    <div class="flex flex-col mx-auto bg-[#fff9ed] items-center font-gelasio">
        <div class="main flex flex-col max-w-[80%] md:max-w-[70%] mx-auto">
            <div class="title font-crossfit border-b-2 border-[#370f1e] text-[#370f1e]">
                <h1 class="text-[2.25rem] text-center py-8">
                    Refund Policy
                </h1>
            </div>
             <div class="font-sans leading-[1.2] font-medium text-[#370f1e]">
                <div class="py-5 pt-10 border-b-2 border-[#370f1e]">
                    <p class="italic pb-3">Last updated: July 22, 2025 </p>
                    <p class=""> We’re confident you’ll love Superment. But if for
any reason you're not completely satisfied, we
offer a simple and fair return policy</p>
                </div>
                <div class="py-5 border-b-2 border-[#370f1e]">
                    <p class="primary pb-2 text-xl font-bold"> Money-Back Guarantee</p>
                    <p class="pb-3"> If you’re unhappy with your purchase for any reason, just let us know within the applicable period below and we’ll issue a full </p>
                    <ul class="list-disc pl-6 space-y-1">                        
                        <li><span class="">120 days – for purchases of the 6-bottle bundle</span></li>
                        <li><span class="">90 days – for purchases of the 3-bottle bundle</span></li>
                        <li><span class="">30 days – for purchases of a single bottle</span></li>
                    </ul>
                    <p class="pt-3">To be eligible, the request must be made within the time frame above, counting from the delivery date, and applies to first-time purchases made through www.superment.co only.</p>
                </div>
                <div class="py-5 border-b-2 border-[#370f1e]">
                    <p class="primary pb-2 text-xl font-bold"> How to Request a Refund</p>
                    <p class=""> Email us at superhelp@superment.co with your
order number and reason for the return. Our
customer support team will take care of the
rest.</p>
                </div> 
                <div class="py-5 border-b-2 border-[#370f1e]">
                    <p class="primary pb-2 text-xl font-bold"> Please note:</p>
                    <p class="pb-3"> Shipping fees (if any) are non-refundable.</p>
                    <p class="pb-3"> Refunds are processed to your original method of payment.</p>
                    <p class="pb-3"> It may take 5–10 business days for the refund to
appear, depending on your bank or card issuer.</p>
                    <p>Damaged or Incorrect Items</p>
                    <p>If your order arrives damaged or incorrect, we’ll
make it right. Just send us an email with your
order number and a photo of the issue</p>
                </div>  
                <div class="py-5 ">
                    <p class="primary pb-2 text-xl font-bold"> Questions?</p>
                    <p> We’re here to help. Contact us anytime at:
<strong>superhelp@superment.co</strong></p>
                </div> 
             </div>
        </div>
    </div>

    <div class="bg-[#370F1E] w-full">
        <div class="max-w-[330px] sm:max-w-[700px] mx-auto">
            <SuperFooter />
        </div>
    </div>
</template>







