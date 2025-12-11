<script setup lang="ts">
import type { Task } from "@/tasks/domain/entities/task";

defineProps<{ task: Task }>();
</script>

<template>
    <div class="flex items-center gap-3 p-4 bg-white hover:bg-blue-50 transition-colors cursor-pointer border-0">
        <span class="inline-flex items-center justify-center h-8 w-8 rounded-full text-lg font-bold"
            :class="task.done ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'">
            <svg v-if="task.done" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" fill="none" />
            </svg>
        </span>
        <div class="flex-1 min-w-0">
            <h2 class="text-lg font-medium text-gray-800 truncate">{{ task.title }}</h2>
        </div>
    </div>
</template>