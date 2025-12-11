import { TaskFetchError } from "@/tasks/domain/errors/taskErrors";

export function getTaskErrorMessage(error: unknown): string {
    if (error instanceof TaskFetchError) {
        return "Hubo un problema al cargar las tareas. Por favor, intenta más tarde.";
    }
    return error instanceof Error ? error.message : String(error);
}
