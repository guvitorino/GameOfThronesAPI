/* eslint-disable camelcase */
const service = require('../services/HousesService')
class HousesController {
  static async show (req, res) {
    try {
      const houses = await service.list()

      return res.status(200).json(houses)
    } catch (err) {
      return res.status(500).json({ error: 'failed to list houses' })
    }
  }

  static async create (req, res) {
    try {
      const { name, region, foundation_year, current_lord } = req.body

      const house = await service.save({ name, region, foundation_year, current_lord })

      return res.status(201).json(house)
    } catch (err) {
      return res.status(500).json({ error: 'failed to create Lord' })
    }
  }
}

module.exports = HousesController
