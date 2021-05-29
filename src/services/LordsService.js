const LordsModel = require('../models/LordsModel')

class LordsService {
  static async save (lord) {
    return LordsModel.create(lord)
  }
}

module.exports = LordsService
