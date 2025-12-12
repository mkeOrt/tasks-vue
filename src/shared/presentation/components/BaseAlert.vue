<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'info',
    },
    closable: {
        type: Boolean,
        default: false,
    },
});

const alertClass = computed(() => ({
    'bg-red-100 border border-red-400 text-red-700': props.type === 'error',
    'bg-green-100 border border-green-400 text-green-700': props.type === 'success',
    'bg-blue-100 border border-blue-400 text-blue-700': props.type === 'info',
    'bg-yellow-100 border border-yellow-400 text-yellow-700': props.type === 'warning',
}));

const iconComponent = computed(() => {
    switch (props.type) {
        case 'error':
            return {
                template: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01"/></svg>`
            };
        case 'success':
            return {
                template: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/></svg>`
            };
        case 'warning':
            return {
                template: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01"/></svg>`
            };
        default:
            return {
                template: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16h.01"/></svg>`
            };
    }
});
</script>

<template>
    <div class="rounded px-4 py-3 mb-4 flex items-start gap-3 relative shadow-sm" :class="alertClass" role="alert">
        <span class="mt-1">
            <slot name="icon">
                <component :is="iconComponent" class="h-5 w-5" />
            </slot>
        </span>
        <div class="flex-1 min-w-0">
            <div v-if="$slots.title" class="font-bold mb-1">
                <slot name="title" />
            </div>
            <div class="text-sm">
                <slot />
            </div>
        </div>
        <div v-if="$slots.actions" class="ml-2 shrink-0">
            <slot name="actions" />
        </div>
        <button v-if="closable" @click="$emit('close')"
            class="absolute top-2 right-2 text-lg text-gray-400 hover:text-gray-600 focus:outline-none">
            &times;
        </button>
    </div>
</template>
