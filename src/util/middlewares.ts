import { Express, json, NextFunction, Request, Response } from 'express'
import { dateUtils, logger } from '../factory'

export const configMiddlewares = (app: Express): void => {
	app.use(json())

	app.use((req: Request, res: Response, next: NextFunction): void => {
		res.type('json')
		next()
	})

	app.use((req: Request, res: Response, next: NextFunction): void => {
		const message: string = '[level: INFO - endpoint: \'' + req.path + '\' - method: ' + req.method + ' - date: ' + dateUtils.getCurrentDate() + ']'
		logger.logInfoWithoutFormat(message)
		next()
	})
}
