import { App } from './app'
import { logger } from './factory'

const app: App = App.getInstance()

app.express.listen(process.env.PORT, () => {
	logger.logInfoWithoutFormat('Servidor rodando na porta: ' + process.env.PORT)
})
