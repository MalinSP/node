const mongoose = require('mongoose')

const connectionString =
  'mongodb+srv://sherlok:DkNnojlnvpQ1XAPw@nodeexpressprojects.pklhz.mongodb.net/Tasks?retryWrites=true&w=majority'

mongoose
  .connect(connectionString)
  .then(() => console.log('connected to DB'))
  .catch((err) => console.log(err))
