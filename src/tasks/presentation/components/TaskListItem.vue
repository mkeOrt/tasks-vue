<script setup lang="ts">
import type { Task } from "@/tasks/domain/entities/task";

defineProps<{ task: Task }>();
</script>

<template>
    <div class="p-4 border border-gray-200">
        <h2>{{ task.title }}</h2>
    </div>
</template>