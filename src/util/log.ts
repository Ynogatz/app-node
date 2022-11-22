import { dateUtils } from '../factory'

enum LogLevel {
	DEBUG = 'DEBUG',
	INFO = 'INFO',
	WARN = 'WARN',
	ERROR = 'ERROR'
}

export class Logger {
	private format (message: string, level: LogLevel, error?: any): string {
		let ret: string = '[level: ' + level + ' - message: ' + message + ' - data: ' + dateUtils.getCurrentDate()
		if (error) {
			ret += ' - error.message: ' + error.message
			ret += ' - error.status: ' + error.statusCode
			// ret += ' - error.stack: ' + error.stack
		}
		ret += ']'
		return ret
	}

	debug (message: string): void {
		console.debug(this.format(message, LogLevel.DEBUG))
	}

	info (message: string): void {
		console.info(this.format(message, LogLevel.INFO))
	}

	warn (message: string, error?: any): void {
		console.warn(this.format(message, LogLevel.WARN, error))
	}

	error (message: string, error?: any): void {
		console.error(this.format(message, LogLevel.ERROR, error))
	}

	logInfoWithoutFormat (message: string): void {
		console.info(message)
	}
}
