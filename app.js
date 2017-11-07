const express = require('express')
const app = express() // creates an instance of an express application
const morgan = require('morgan')

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
// app.disable('etag')

// this is a change
app.get('/*', (req, res) => {
  res.status(200).send('Hello World!')
})

const port = 3000
app.listen(port, () => console.log('listening to ' + port))
