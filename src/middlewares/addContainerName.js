import os from 'os'
import fastifyPlugin from 'fastify-plugin'

const addContainerName = async ( FastifyInstance ) => {
  FastifyInstance.addHook('onSend', async ( FastifyRequest, FastifyReply, FastifyPayload ) => {
    FastifyPayload = {
      data: JSON.parse(FastifyPayload),
      status: FastifyReply.statusCode,
      container: os.hostname(),
    }
    return JSON.stringify(FastifyPayload)
  })
}

export default fastifyPlugin(addContainerName)
