import { AppError } from '../types/errors';

/**
 * Logger utility for error tracking.
 * Currently logs to console, but can be extended to send to analytics services
 * like Sentry, LogRocket, DataDog, etc.
 */

export function logError(error: unknown, context?: string): void {
  const timestamp = new Date().toISOString();

  console.group(`🔴 Error ${context ? `[${context}]` : ''} - ${timestamp}`);

  if (error instanceof AppError) {
    logAppError(error);
  } else if (error instanceof Error) {
    logGenericError(error);
  } else {
    console.error('Unknown error:', error);
  }

  console.groupEnd();

  // TODO: Send to analytics service
  // sendToAnalytics({ error, context, timestamp });
}

function logAppError(error: AppError): void {
  console.error('Message:', error.message);
  console.error('Code:', error.code);
  console.error('Context:', error.context);
  console.error('Stack:', error.stack);

  logCauseChain(error.cause);
}

function logGenericError(error: Error): void {
  console.error('Message:', error.message);
  console.error('Name:', error.name);
  console.error('Stack:', error.stack);

  logCauseChain(error.cause);
}

function logCauseChain(cause: unknown): void {
  let currentCause = cause;
  let depth = 1;

  while (currentCause) {
    console.group(`↳ Cause ${depth}`);

    if (currentCause instanceof Error) {
      console.error('Message:', currentCause.message);
      if (currentCause instanceof AppError) {
        console.error('Code:', currentCause.code);
        console.error('Context:', currentCause.context);
      }
      console.error('Stack:', currentCause.stack);
      currentCause = currentCause.cause;
    } else {
      console.error('Value:', currentCause);
      currentCause = null;
    }

    console.groupEnd();
    depth++;
  }
}

// For future analytics integration
// function sendToAnalytics(data: { error: unknown; context?: string; timestamp: string }) {
//   // Example: Sentry
//   // Sentry.captureException(data.error, { extra: { context: data.context } });
//
//   // Example: Custom endpoint
//   // fetch('/api/logs', { method: 'POST', body: JSON.stringify(data) });
// }
