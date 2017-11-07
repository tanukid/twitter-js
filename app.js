const express = require('express')
const nunjucks = require('nunjucks')
const router = require('./routes')
var bodyParser = require('body-parser')
var socketio = require('socket.io');

const app = express() // creates an instance of an express application
nunjucks.configure('views', { noCache: true })
app.engine('html', nunjucks.render)
app.set('view engine', 'html') // have res.render work with html files
app.use(express.static('public'))
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))
// apply the routes to our application
//app.use(router)

// or:
// var router = routes(io);
// app.use( '/', router );

const port = 3000
const server = app.listen(port, () => console.log('listening to ' + port))
const io = socketio.listen(server)
app.use('/', router(io))
