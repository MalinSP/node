const getAllTasks = (req, res) => {
  res.send('get All Tasks')
}

const createTask = (req, res) => {
  // res.send('create Task')
  res.send(req.body)
}

const getSingleTask = (req, res) => {
  // res.send('get single task')
  res.json({ id: req.params.id })
}

const updateTask = (req, res) => {
  //res.send('update Task')
  res.json({ id: req.params.id })
}

const deleteTask = (req, res) => {
  //res.send('delete Task')
  res.json({ id: req.params.id })
}

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getSingleTask,
}
