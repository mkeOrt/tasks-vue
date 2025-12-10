<script setup lang="ts">
import TaskListItem from "./TaskListItem.vue";
import { Task } from "@/tasks/domain/entities/task";

defineProps<{ tasks: Task[] }>();
</script>

<template>
    <ul>
        <li v-for="(task, index) in tasks" :key="task.id">
            <TaskListItem :task="task" :class="{
                'rounded-t-xl': index === 0,
                'rounded-b-xl': index === tasks.length - 1
            }" />
        </li>
    </ul>
</template>