const fastify = require('fastify')({
    logger: true
})
const mongoose = require('mongoose')
const routes = require("./routes/bookRoutes")
const PORT = 3000


fastify.get('/', async() => {
    return {
        Test: 'This is working fine'
    }
})

const mongoUrl ="mongodb://127.0.0.1:27017/fastify-store"

try {
    mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("Database connected sucessfully")
} catch (error) {
    console.log(error)
}

routes.forEach((route, index) => {
    fastify.route(route)
})

const serve = async () => {
    try {
        await fastify.listen(PORT)
        fastify.log.info(`Server listening to PORT ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

serve()