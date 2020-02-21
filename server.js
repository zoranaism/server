
const summary = {
  Monday: 'value1',
  Tuesday: 'value2',
  Wednesday: 'value3',
  Thursday: 'value4',
  Friday: 'value5',
  Saturday: 'value6',
  Sunday: 'value7'
}

const express = require('express')

// create server
const app = express()

function render (myDay) {
  const document = `<html>
    <head>
      <title>My favorite movie</title>
    </head>

    <body>
      <h1>${myDay}</h1>
    </body>
  </html>`

  return document
}

// register GET /hello endpoint
app.get(
  '/summary/:day', // route
  (request, response) => { // handler callback

    const myDay = `${request.params.day}`

    const page = render(myDay)

    response.send(page)
  }
)

// 3000 is common
const port = 3000

// start listening
app.listen(
  port,
  () => console.log(`Listening on :${port}`)
)
