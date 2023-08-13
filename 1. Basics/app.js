const express = require('express')
const app = express()

const people = require('./routes/people.js')
const login = require('./routes/auth.js')

//static assets
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({ extended: false }))
// parse json data
app.use(express.json())

app.use('/api/people', people)
app.use('/login', login)

app.listen(5000, () => {
  console.log('server listening on port 5000')
})
