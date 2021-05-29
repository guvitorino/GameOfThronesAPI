const HousesModel = require('../models/HousesModel')

class HousesService {
  static async save (house) {
    return HousesModel.create(house)
  }
}

module.exports = HousesService
