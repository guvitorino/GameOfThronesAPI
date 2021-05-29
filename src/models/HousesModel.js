const connection = require('../database/Connection')

class HousesModel {
  constructor () {
    this.collection = 'houses'
  }

  async create (house) {
    return connection(this.collection).insert(house).returning('*')
  }
}

module.exports = new HousesModel()
