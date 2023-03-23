const express = require('express');
const serverStatic = require('server-static');
const path = require('path');

const app = express();

//Configuring dist to serve the app files
app.use('/', serverStatic(path.join(__dirname, '/dist')))

//The * route is to serve project on different page routes except rooy '/'
app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)