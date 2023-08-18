const jwt = require('jsonwebtoken')
const { BadRequest } = require('../errors')

const login = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    throw new BadRequest('Please provide email and password')
  }
  const id = new Date().getDate()
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
  res.status(200).json({ msg: 'user created', token })
}

const dashboard = async (req, res) => {
  //console.log(req.headers)
  console.log(req.user)
  const number = Math.floor(Math.random() * 100)

  res
    .status(200)
    .json({ msg: `hello, ${req.user.username}`, secret: `Here is your data` })
}

module.exports = { login, dashboard }