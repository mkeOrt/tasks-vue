import type { Task } from "../entities/task";

export interface TaskRepository {
    getAll(): Promise<Task[]>;
}   