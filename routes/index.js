const router = require('express').Router()
const tweetBank = require('../tweetBank')
const morgan = require('morgan')

router.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
// app.disable('etag')

router.get('/', function (req, res) {
  let tweets = tweetBank.list()
  res.render('index', { tweets })
})

router.get('/users/:name', (req, res) => {
  let tweets = tweetBank.find({ name: req.params.name })
  res.render('index', { tweets, showForm: true, name: req.params.name })
})

router.post('/tweets', function (req, res) {
  var name = req.body.name;
  var text = req.body.text;
  console.log(name, text)
  console.log(req.body)
  tweetBank.add(name, text);
  res.redirect('/');
})


module.exports = router
