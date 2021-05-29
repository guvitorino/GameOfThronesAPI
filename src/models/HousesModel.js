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

  async getByField (field, value) {
    return connection(this.collection).first('*').where(field, value)
  }

  async delete (id) {
    console.log(id)
    return connection(this.collection).where('id', id).delete()
  }
}

module.exports = new HousesModel()
