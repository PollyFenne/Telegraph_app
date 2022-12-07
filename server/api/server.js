const express = require('express');
const cors = require('cors');

//Initialise Usage
const server = express();
server.use(cors());
server.use(express.json());

//Require the root
const postRoutes = require('./routes/posts')
server.use('/posts', postRoutes)

//Root Usage
server.get('/'), (req, res) => {
    res.status(200).send('Hello world!')
}

module.exports = server;

