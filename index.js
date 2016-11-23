const express = require('express')
const request = require('request');
let app = express()

/**
 * @api {get} / proxify get request to google
 * @apiName GetUser
 * @apiGroup User
 *
 *
 * @apiSuccess {Object} full website
 */
app.get('/', function (req, res) {

  request('http://www.google.com', (error, response, body) => {

    if (error) {
      res.send('KO')
      return
    }

    res.send(body)

  })
})

app.listen(3000, function () {
  console.log(arguments)
  console.log(JSON.stringify(arguments))
  console.log('Example app listening on port 3000!')
})

console.log('Hello World, i\'ll run before the server!')

