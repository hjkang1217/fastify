import pg from '../lib/pg';

const postOptions = {
  schema: {
    body: {
      type: 'object',
      required: [
        'name',
        'email',
      ],
      properties: {
        name: { type: 'string' },
        email: { type: 'string' },
      },
    }
  }
}

async function routes(fastify, options, done) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  });

  fastify.post('/', postOptions, async (request, reply) => {
    await pg.any(`
      insert into test.user(name, email)
      values($(name), $(email))
    `, request.body);

    reply.send('OK');
  })

  done()
}

export default routes