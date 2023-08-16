require('dotenv').config()

const connectDB = require('./db/connectDB')
const productSchema = require('./models/product')
const jsonProducts = require('./products.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await productSchema.deleteMany()
    await productSchema.create(jsonProducts)
    process.exit(0)
    console.log('products added')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
start()
