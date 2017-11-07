const express = require('express')
const nunjucks = require('nunjucks')
const router = require('./routes')

const app = express() // creates an instance of an express application
nunjucks.configure('views', { noCache: true })
app.engine('html', nunjucks.render)
app.set('view engine', 'html') // have res.render work with html files
app.use(express.static('public'))

// apply the routes to our application
app.use(router)

const port = 3000
app.listen(port, () => console.log('listening to ' + port))
