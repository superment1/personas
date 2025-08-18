<script setup>
import { toastStore } from '@/stores/toastStore';
</script>

<template>
    <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 flex flex-col gap-2 z-50">
        <div v-for="msg in toastStore.messages" :key="msg.id" :class="[
            'px-4 py-2 rounded shadow text-white transition-all',
            msg.type === 'success' ? 'bg-green-500' :
                msg.type === 'error' ? 'bg-red-500' :
                    'bg-blue-500'
        ]">
            {{ msg.text }}
        </div>
    </div>
</template>
