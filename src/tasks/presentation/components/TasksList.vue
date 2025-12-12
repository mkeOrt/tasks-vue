<script setup lang="ts">
import TaskListItem from './TaskListItem.vue'
import { Task } from '@/tasks/domain/entities/task'

defineProps<{ tasks: Task[] }>()
</script>

<template>
  <ul class="divide-y divide-gray-100 bg-gray-50 rounded-xl shadow-sm overflow-hidden">
    <li v-for="(task, index) in tasks" :key="task.id">
      <TaskListItem
        :task="task"
        :class="[
          index === 0 ? 'rounded-t-xl' : '',
          index === tasks.length - 1 ? 'rounded-b-xl' : '',
        ]"
      />
    </li>
  </ul>
</template>
