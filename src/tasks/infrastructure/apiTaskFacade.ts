import type { AxiosInstance } from "axios";
import type { Task } from "../domain/entities/task";
import type { TaskRepository } from "../domain/repositories/taskRepository";
import type { TasksResponseDto } from "./dtos/taskDto";
import { AppError, ErrorCode } from "@/shared/types/errors";
import { TasksMapper } from "./mappers/tasksMapper";

export class HttpTaskRepository implements TaskRepository {
  constructor(private readonly httpClient: AxiosInstance) { }

  public async getAll(): Promise<Task[]> {
    try {
      const response = await this.httpClient.get<TasksResponseDto>('/tasks');
      return TasksMapper.toDomain(response.data);
    } catch (error) {
      throw new AppError(
        "Failed to fetch tasks",
        ErrorCode.TASK_FETCH_FAILED,
        error,
        "HttpTaskRepository.getAll"
      );
    }
  }
}
