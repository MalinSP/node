const getAllJobs = async (req, res) => {
  res.send('get All Jobs')
}
const getJob = async (req, res) => {
  res.send('get single job')
}
const createJob = async (req, res) => {
  res.send('create job')
}
const updateJob = async (req, res) => {
  res.send('update Job')
}
const deleteJob = async (req, res) => {
  res.send('delete Job')
}

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
}