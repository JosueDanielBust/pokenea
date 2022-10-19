const fastify = require('fastify')({ logger: false })
const dockerId = require('docker-container-id');
const os = require('os');
const neas = require('./neas.js')
const port = process.env.PORT || 3000

fastify.get('/', async (request, reply) => {
  const number = Math.floor(Math.random() * neas.length);
  const nea = neas[number];
  const container = await dockerId();
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
        host: os.hostname(),
      })
  }
})

const start = async () => {
  try {
    await fastify.listen({ port: port })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
