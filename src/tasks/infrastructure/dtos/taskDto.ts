export type TaskDto = {
  id: number;
  title: string;
  done: boolean;
};

export type TasksResponseDto = {
  success: boolean;
  data?: {
    tasks: TaskDto[];
  };
  error?: string;
};
