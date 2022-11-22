import { ServerError } from './server-error'

export class BadRequestError extends ServerError {
	constructor (message: string) {
		super(message, 200)
		this.name = 'BadRequestError'
	}
}
