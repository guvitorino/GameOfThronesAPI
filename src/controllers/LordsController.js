const service = require('../services/LordsService')

class LordsController {
  static async show (req, res) {
    const data = await service.get()
    return res.status(200).json(data)
  }

  static async create (req, res) {
    try {
      const { name, seasons } = req.body
      const lord = await service.save({ name, seasons })
      return res.status(201).json(lord)
    } catch (err) {
      return res.status(500).json({ error: 'failed to create Lord' })
    }
  }
}

module.exports = LordsController
