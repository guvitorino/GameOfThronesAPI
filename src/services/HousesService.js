const HousesModel = require('../models/HousesModel')

class HousesService {
  static async save (house) {
    return HousesModel.create(house)
  }

  static async list () {
    return HousesModel.list()
  }

  static async search (name, id) {
    return typeof name !== 'undefined'
      ? HousesModel.getByField('name', name)
      : HousesModel.getByField('id', id)
  }

  static async delete (id) {
    return HousesModel.delete(id)
  }
}

module.exports = HousesService
