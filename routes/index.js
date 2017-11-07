const router = require('express').Router()
// const locals = require('./model')
const morgan = require('morgan')

router.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
// app.disable('etag')

router.get('/', function (req, res) {
  res.render('index', {title: 'TESTING'})
})

module.exports = router
