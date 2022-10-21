const routes = async ( FastifyInstance ) => {
  FastifyInstance.get('/', async ( FastifyRequest, FastifyReply ) => {
    FastifyReply.send({
      paths: {
        nea: '/nea',
        phrase: '/phrase',
      },
    })
  })
}

export default routes
