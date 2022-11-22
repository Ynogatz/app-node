import { NextFunction, Request, Response } from 'express'
import { ServerError } from './server-error'
import { logger } from '../../factory'

export class ErrorHandler {
	handler (error: any, request: Request, response: Response, _: NextFunction): void {
		if (error instanceof ServerError) {
			response.status(error.statusCode)
			response.json({
				status: error.statusCode,
				message: error.message
			})

		} else {
			response.status(500)
			response.json({
				status: 500,
				message: 'Erro genérico'
			})
		}
		logger.error(error.toString(), error)
	}
}
