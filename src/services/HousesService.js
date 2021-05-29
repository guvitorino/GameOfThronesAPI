const HousesModel = require('../models/HousesModel')

class HousesService {
  static async save (house) {
    return HousesModel.create(house)
  }

  static async list () {
    return HousesModel.list()
  }
}

module.exports = HousesService
