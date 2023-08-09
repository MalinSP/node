const express = require('express')
const app = express()
const tasks = require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware
app.use(express.json())

//routes
app.get('/hello', (req, res) => {
  res.send('Task manager App')
})

app.use('/api/v1/tasks', tasks)

const port = 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, console.log(`server is listening on port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
