<script setup lang="ts">
import TasksListAsync from '../components/TasksListAsync.vue'
import BaseAlert from '@/shared/BaseAlert.vue'
import PageTitle from '@/shared/PageTitle.vue'
import { onErrorCaptured, ref } from 'vue'
import BaseLoader from '@/shared/BaseLoader.vue'
import { getTaskErrorMessage } from '../mappers/taskErrorMapper'
import { logError } from '@/shared/utils/logger'

const error = ref<string | null>(null)

onErrorCaptured((e) => {
  logError(e, 'TasksView')
  error.value = getTaskErrorMessage(e)
  return false
})

function closeError() {
  error.value = null
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-2">
    <div class="w-full max-w-2xl bg-white rounded-xl shadow p-6">
      <PageTitle>
        <span>📝 Tasks</span>
      </PageTitle>
      <BaseAlert v-if="error" type="error" closable @close="closeError">
        <template #title> Error </template>
        {{ error }}
      </BaseAlert>
      <Suspense v-else>
        <template #default>
          <TasksListAsync />
        </template>
        <template #fallback>
          <BaseLoader>Loading tasks...</BaseLoader>
        </template>
      </Suspense>
    </div>
  </div>
</template>
