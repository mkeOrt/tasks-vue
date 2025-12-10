import type { InjectionKey } from "vue";
import type { TaskFetcher } from "@/tasks/application/taskFetcher";

export const TaskFetcherKey: InjectionKey<TaskFetcher> = Symbol("TaskFetcher");
