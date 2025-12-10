export class TaskError extends Error {
    constructor(message: string, public readonly cause?: unknown) {
        super(message);
        this.name = "TaskError";
    }
}

export class TaskFetchError extends TaskError {
    constructor(message: string = "Failed to fetch tasks", cause?: unknown) {
        super(message, cause);
        this.name = "TaskFetchError";
    }
}

export class TaskRepositoryError extends TaskError {
    constructor(message: string = "Repository error", cause?: unknown) {
        super(message, cause);
        this.name = "TaskRepositoryError";
    }
}

