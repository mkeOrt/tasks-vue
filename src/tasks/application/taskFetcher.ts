import type { TaskRepository } from "../domain/repositories/taskRepository";
import type { Task } from "../domain/entities/task";
import { TaskFetchError } from "../domain/errors/taskErrors";

export class TaskFetcher {
    constructor(private taskRepository: TaskRepository) { }

    public async exec(): Promise<Task[]> {
        try {
            return await this.taskRepository.getAll();
        } catch (error) {
            // ⚠️ DEBUG: Log structured error for analytics/monitoring
            // console.error("Error fetching tasks (Technical Cause):", {
            //     isTaskRepositoryError: error instanceof TaskRepositoryError,
            //     message: error instanceof Error ? error.message : String(error),
            //     stack: error instanceof Error ? error.stack : undefined,
            //     raw: error
            // });
            // TODO: Replace with analytics/monitoring service (e.g., Sentry, LogRocket)

            // Using error coming from backend or default error message
            // You can also use a custom error message if needed or preferred
            const errorMessage = error instanceof Error ? error.message : "Could not load your tasks. Please try again later.";
            throw new TaskFetchError(errorMessage, error);
        }
    }
}