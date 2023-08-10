const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
  // res.send('get All Tasks')
  try {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const createTask = async (req, res) => {
  // res.send('create Task')
  //res.send(req.body)
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const getSingleTask = async (req, res) => {
  // res.send('get single task')
  //res.json({ id: req.params.id })
  try {
    const { id } = req.params
    const task = await Task.findOne({ _id: id })
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${id}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const updateTask = (req, res) => {
  //res.send('update Task')
  res.json({ id: req.params.id })
}

const deleteTask = async (req, res) => {
  //res.send('delete Task')
  //res.json({ id: req.params.id })
  try {
    const { id } = req.params
    const task = await Task.findOneAndDelete({ _id: id })
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${id}` })
    }
    res.status(200).json({ task })
    //res.status(200).send()
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getSingleTask,
}
