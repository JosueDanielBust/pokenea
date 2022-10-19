const fastify = require('fastify')({ logger: true })
const os = require('os')
const neas = require('./neas.js')
const port = process.env.PORT || 80

fastify.get('/', async (request, reply) => {
  const number = Math.floor(Math.random() * neas.length)
  const nea = neas[number]
  const container = os.hostname()
  console.log(container)
  if (!container) {
    reply
      .code(500)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({
        status: 'error',
        error: 'No se pudo obtener el id del contenedor'
      })
  } else {
    reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({
        data: {
          id: nea.id,
          nombre: nea.nombre,
          altura: nea.altura,
          habilidad: nea.habilidad,
        },
        status: 'success',
        container: container,
      })
  }
})

const start = async () => {
  try {
    await fastify.listen({
      port: port,
      host: '0.0.0.0'
    })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
