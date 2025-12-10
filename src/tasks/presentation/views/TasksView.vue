<script setup lang="ts">
import TasksListAsync from "../components/TasksListAsync.vue";
import { onErrorCaptured, ref } from "vue";

const error = ref<string | null>(null);

onErrorCaptured((e) => {
    error.value = e instanceof Error ? e.message : String(e);
    return false;
});
</script>

<template>
    <div class="container mx-auto">
        <h1 class="text-2xl font-semibold my-3">Tasks</h1>
        <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Error: </strong>
            <span class="block sm:inline">{{ error }}</span>
        </div>
        <Suspense v-else>
            <template #default>
                <TasksListAsync />
            </template>
            <template #fallback>
                <p>Loading...</p>
            </template>
        </Suspense>
    </div>
</template>