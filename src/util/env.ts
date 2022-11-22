import { config, parse } from 'dotenv'
import fs from 'fs'
import { logger } from '../factory'

export const env = (): void => {
	config()
	let path = null
	if (process.env.NODE_ENV === 'development') {
		path = '.env.development'
	}
	if (path) {
		try {
			const envConfig = parse(fs.readFileSync(path))
			for (const k in envConfig) {
				process.env[k] = envConfig[k]
			}
		} catch (e) {
			const message: string = 'Erro carregando variáveis de ambiente.'
			logger.error('App.env() - ' + message)
			process.exit(1)
		}
	}
}
