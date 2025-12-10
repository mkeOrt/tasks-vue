export type TaskDto = {
    id: number;
    title: string;
    done: boolean;
    created_at: string;
    updated_at: string;
};

export type TasksResponseDto = {
    success: boolean;
    data?: {
        tasks: TaskDto[];
    };
    error?: string;
};