export enum ErrorCode {
  TASK_FETCH_FAILED = 'TASK_FETCH_FAILED',
  UNKNOWN = 'UNKNOWN'
}

export class AppError extends Error {
  public readonly code: ErrorCode;
  public readonly context?: string;

  constructor(
    message: string,
    code: ErrorCode = ErrorCode.UNKNOWN,
    cause?: unknown,
    context?: string
  ) {
    super(message, { cause });

    this.name = "AppError";
    this.code = code;
    this.context = context;
  }
}
