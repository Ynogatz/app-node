import { ServerError } from './server-error'

export class NotFoundError extends ServerError {
	constructor () {
		super('Not found', 404)
	}
}
