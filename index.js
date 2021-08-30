const fastify = require('fastify')({ logger: true })
const axios = require('axios').default;


// TODO Handle hostname within docker compose network?
const port = process.env.PORT ||3000;
const host = process.env.HOST ||"0.0.0.0"

fastify.get('/users', async (request, reply) => {

    axios.get('https://reqres.in/api/users')
        .then((response) => {    
            reply.send(response.data);
        });
})

// Run the server!
const start = async () => {
    try {
        await fastify.listen(port, host, (err, addr) => {
            if(err) {
                fastify.log.error(err)
                process.exit(1)
            } else {
                fastify.log.info(`server listening on ${addr}`)
            }
        })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()