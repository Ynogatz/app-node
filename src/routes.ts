import { Router } from 'express'
import { NotFoundError } from './util/error/not-found-error'

export const routes = (): Router => {
	const routes = Router()

	routes.use((req, res, next) => {
		next(new NotFoundError())
	})

	return routes
}
