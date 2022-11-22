import { env } from './util/env'
import express, { Express } from 'express'
import { routes } from './routes'
import { configMiddlewares } from './util/middlewares'
import { errorHandler } from './factory'

export class App {
	static instance: App
	express: Express

	private constructor () {
		env()

		this.express = express()
		configMiddlewares(this.express)
		this.express.use(routes())
		this.express.use(errorHandler.handler.bind(errorHandler))
	}

	static getInstance (): App {
		if (!this.instance) {
			this.instance = new App()
		}
		return this.instance
	}
}
