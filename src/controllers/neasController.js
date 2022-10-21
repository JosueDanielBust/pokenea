import nea from '../models/neasModel.js'

const routes = async ( FastifyInstance ) => {
  FastifyInstance.get('/nea', async ( FastifyRequest, FastifyReply ) => {
    FastifyReply.send(await nea.nea())
  })

  FastifyInstance.get('/phrase', async ( FastifyRequest, FastifyReply ) => {
    FastifyReply.send(await nea.phrase())
  })
}

export default routes
