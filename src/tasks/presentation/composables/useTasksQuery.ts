import { queryOptions } from "@tanstack/vue-query";
import { inject } from "vue";
import { TaskFetcherKey } from "../injectionKeys";
import type { TaskFetcher } from "@/tasks/application/taskFetcher";

export function useTasksQueryOptions() {
    const taskFetcher = inject(TaskFetcherKey);
    if (!taskFetcher) {
        throw new Error("TaskFetcher not provided");
    }

    return createTasksQueryOptions(taskFetcher);
}

export function createTasksQueryOptions(taskFetcher: TaskFetcher) {
    return queryOptions({
        queryKey: ['tasks'],
        queryFn: () => taskFetcher.exec(),
    });
}