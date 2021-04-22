const express = require('express');
const cors = require('cors')
const dbConfig = require('./dbconfig')
const welcomeRouter = require('./routers/welcome')
const listingsRouter = require('./routers/listings')

const server = express();
server.use(cors())
server.use(express.json());

server.use('/', welcomeRouter)
server.use('/api/listings', listingsRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: 'something went wrong' })
})

module.exports = server;