const { router } = require('express')
const Date = require('../../models/dates.model.js')

const router = Router()

router.post('/', async (req, res) => {
  const newDate = new Date(req.body)
  try  {
    const date = await newDate.save()
    if (!date) throw new Error('No Dates Input')
    res.status(200).json(date)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})