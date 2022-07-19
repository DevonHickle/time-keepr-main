const { router } = require('express')
const Users = require('../../models/users.model.js')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const usersList = await Users.find()
    if (!usersList) throw new Error('No Users Found')
    res.status(200).json(usersList)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})