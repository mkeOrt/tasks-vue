<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { useTasksQueryOptions } from "@/tasks/presentation/composables/useTasksQuery";
import TasksList from "./TasksList.vue";

const { data, suspense } = useQuery({
    ...useTasksQueryOptions(),
    suspense: true
});
await suspense();
</script>

<template>
    <TasksList :tasks="data || []" />
</template>
