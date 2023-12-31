const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async.js')
const { createCustomError } = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req, res) => {
  // res.send('get All Tasks')
  const tasks = await Task.find({})
  res.status(200).json({ tasks })
  //res.status(200).json({ tasks, amount: tasks.length })
  //res
  //.status(200)
  //.json({ success: true, data: { tasks , amount: tasks.length} })
})

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

const getSingleTask = async (req, res, next) => {
  // res.send('get single task')
  //res.json({ id: req.params.id })
  try {
    const { id } = req.params
    const task = await Task.findOne({ _id: id })
    if (!task) {
      // return res.status(404).json({ msg: `No task with id ${id}` })
      return next(createCustomError(`No task with id ${id}`, 404))
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const updateTask = async (req, res) => {
  //res.send('update Task')
  //res.json({ id: req.params.id })
  try {
    const { id } = req.params
    // const data = req.body
    // res.status(200).json({ id, data })
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    })
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${id}` })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
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
