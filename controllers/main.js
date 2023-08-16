const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    throw new CustomAPIError('Please provide email and password', 400)
  }
  res.send('Fake Login/Register/Sign up Route')
}

const dashboard = async (req, res) => {
  const number = Math.floor(Math.random() * 100)
  res.status(200).json({
    msg: 'Hello John Doe',
    secret: `Here is your authorized data, your number is ${number}`,
  })
}

module.exports = { login, dashboard }
