import fastify from 'fastify'
import routers from './router.js'
import addContainerName from './middlewares/addContainerName.js'

const app = fastify.fastify({
  logger: { level: 'info' }
})

app.register(addContainerName)
app.register(routers)

export default app;
