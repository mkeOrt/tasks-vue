import type { AxiosError, AxiosInstance } from "axios";
import type { Task } from "../domain/entities/task";
import type { TaskRepository } from "../domain/repositories/taskRepository";
import type { TasksResponseDto } from "./dtos/taskDto";
import { TasksMapper } from "./mappers/tasksMapper";
import { TaskRepositoryError } from "../domain/errors/taskErrors";

export class HttpTaskRepository implements TaskRepository {
  constructor(private readonly httpClient: AxiosInstance) { }

  public async getAll(): Promise<Task[]> {
    try {
      const response = await this.httpClient.get<TasksResponseDto>('/tasks');
      return TasksMapper.toDomain(response.data);
    } catch (error) {
      const axiosError = error as AxiosError<{ error?: string }>;
      const message = axiosError.response?.data?.error ?? "Repository error";
      throw new TaskRepositoryError(`[HttpTaskRepository.getAll] Failed to fetch tasks: ${message}`, error);
    }
  }
}
