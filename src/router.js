import indexController from './controllers/indexController.js'
import neasController from './controllers/neasController.js';

const routers = async ( FastifyInstance ) => {
  FastifyInstance.register(indexController, { prefix: '/' })
  FastifyInstance.register(neasController, { prefix: '/' })
}

export default routers
