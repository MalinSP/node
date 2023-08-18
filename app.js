require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const { register } = require('./controllers/auth')

app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('jobs api')
// })
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server is listening on ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
