import config from './config/index.js'
import app from './app.js'

const start = async () => {
  try {
    await app.listen({
      host: config.host,
      port: config.port
    })
    console.log(`Server listening at ${config.host}:${config.port}`)
  } catch (error) {
    console.log(error)
    process.exit(0)
  }
}

start()
