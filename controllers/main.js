const login = async (req, res) => {
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
