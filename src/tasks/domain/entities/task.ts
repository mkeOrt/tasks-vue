export class Task {
    constructor(
        public readonly id: number,
        public readonly title: string,
        public readonly done: boolean,
        public readonly createdAt: Date,
        public readonly updatedAt: Date,
    ) {}
}