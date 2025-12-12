import type { App } from 'vue'
import { apiClient } from './shared/infrastructure/api/apiClient'
import { HttpTaskRepository } from './tasks/infrastructure/httpTaskRepository'
import { TaskFetcher } from './tasks/application/taskFetcher'
import { TaskFetcherKey } from './tasks/presentation/injectionKeys'

export function setupDependencies(app: App): void {
  const taskRepository = new HttpTaskRepository(apiClient)
  const taskFetcher = new TaskFetcher(taskRepository)

  app.provide(TaskFetcherKey, taskFetcher)
}
