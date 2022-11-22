import { ErrorHandler } from './util/error/error-handler'
import { Logger } from './util/log'
import { DateUtils } from './util/date'

export const errorHandler: ErrorHandler = new ErrorHandler()
export const logger: Logger = new Logger()
export const dateUtils: DateUtils = new DateUtils()
