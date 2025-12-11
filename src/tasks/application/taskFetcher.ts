import type { TaskRepository } from "../domain/repositories/taskRepository";
import type { Task } from "../domain/entities/task";

export class TaskFetcher {
  constructor(private taskRepository: TaskRepository) { }

  public async exec(): Promise<Task[]> {
    return await this.taskRepository.getAll();
    /**
     * ⚠️ INFO: if you want to handle errors because you need to show a custom error message
     * you can use the try catch block to catch the error and throw it to the presentation layer
     * a use case should be if your application logic does multiple steps and you want to handle errors for each step
     * if you only have one step you can handle the error in the presentation layer
     */
    // try {
    //   return await this.taskRepository.getAll();
    // } catch (error) {
    //   throw new AppError(
    //     "Failed to fetch tasks",
    //     ErrorCode.TASK_FETCH_APPLICATION_FAILED,
    //     error,
    //     "TaskFetcher.exec"
    //   );
    // }
  }
}
