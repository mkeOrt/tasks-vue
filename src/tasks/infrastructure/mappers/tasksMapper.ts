import { Task } from "@/tasks/domain/entities/task";
import type { TaskDto, TasksResponseDto } from "../dtos/taskDto";

export class TasksMapper {
  static toDomain(dto: TasksResponseDto): Task[] {
    if (!dto.data?.tasks) {
      return [];
    }
    return dto.data.tasks.map(TasksMapper.taskToDomain);
  }

  private static taskToDomain(dto: TaskDto): Task {
    return new Task(
      dto.id,
      dto.title,
      dto.done,
    );
  }
}
