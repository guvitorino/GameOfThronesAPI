const connection = require('../database/Connection')

class HousesModel {
  constructor () {
    this.collection = 'houses'
  }

  async create (house) {
    return connection(this.collection).insert(house).returning('*')
  }

  async list () {
    return connection(this.collection).select()
  }
}

module.exports = new HousesModel()
