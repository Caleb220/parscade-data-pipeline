type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface Logger {
  debug: (message: string, ...args: any[]) => void;
  info: (message: string, ...args: any[]) => void;
  warn: (message: string, ...args: any[]) => void;
  error: (message: string, ...args: any[]) => void;
}

class ConsoleLogger implements Logger {
  private shouldLog(level: LogLevel): boolean {
    if (import.meta.env.PROD) {
      return level === 'warn' || level === 'error';
    }
    return true;
  }

  debug(message: string, ...args: any[]): void {
    if (this.shouldLog('debug')) {
      console.debug(`[DEBUG] ${message}`, ...args);
    }
  }

  info(message: string, ...args: any[]): void {
    if (this.shouldLog('info')) {
      console.info(`[INFO] ${message}`, ...args);
    }
  }

  warn(message: string, ...args: any[]): void {
    if (this.shouldLog('warn')) {
      console.warn(`[WARN] ${message}`, ...args);
    }
  }

  error(message: string, ...args: any[]): void {
    if (this.shouldLog('error')) {
      console.error(`[ERROR] ${message}`, ...args);
    }
  }
}

// Sentry logger stub for future integration
class SentryLogger implements Logger {
  private fallback = new ConsoleLogger();

  debug(message: string, ...args: any[]): void {
    this.fallback.debug(message, ...args);
  }

  info(message: string, ...args: any[]): void {
    this.fallback.info(message, ...args);
  }

  warn(message: string, ...args: any[]): void {
    this.fallback.warn(message, ...args);
    // if (import.meta.env.VITE_SENTRY_DSN) {
    //   Sentry.captureMessage(message, 'warning');
    // }
  }

  error(message: string, ...args: any[]): void {
    this.fallback.error(message, ...args);
    // if (import.meta.env.VITE_SENTRY_DSN) {
    //   Sentry.captureException(new Error(message));
    // }
  }
}

export const logger: Logger = import.meta.env.VITE_SENTRY_DSN
  ? new SentryLogger()
  : new ConsoleLogger();

export default logger;