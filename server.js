const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send('Hello World')
})

const server = app.listen(port,function () {
    let host = server.address();
    let serverPort = server.address().port;
    console.log(`Server is running at port ${serverPort}`)
})
