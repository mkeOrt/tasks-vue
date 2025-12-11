import { AppError, ErrorCode } from "@/shared/types/errors";

export function getTaskErrorMessage(error: unknown): string {
    if (error instanceof AppError && error.code === ErrorCode.TASK_FETCH_FAILED) {
        return "Hubo un problema al cargar las tareas. Por favor, intenta más tarde.";
    }
    return error instanceof Error ? error.message : String(error);
}
