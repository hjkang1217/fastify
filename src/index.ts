import fastify from 'fastify'
import user from './api/user';

function build(opts={}) {
  const app = fastify(opts);
  app.get('/', async (request, reply) => {
    reply.send({ hello: 'world' })
  });
  
  app.register(user, { prefix: '/user' });
  return app;
}

export default build