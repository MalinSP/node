const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    throw new CustomAPIError('Please provide email and password', 400)
  }
  const id = new Date().getDate()
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
  res.status(200).json({ msg: 'user created', token })
}

const dashboard = async (req, res) => {
  const number = Math.floor(Math.random() * 100)
  res.status(200).json({
    msg: 'Hello John Doe',
    secret: `Here is your authorized data, your number is ${number}`,
  })
}

module.exports = { login, dashboard }
