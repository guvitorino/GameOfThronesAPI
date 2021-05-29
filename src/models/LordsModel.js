const connection = require('../database/Connection')

class LordsModel {
  constructor () {
    this.collection = 'lords'
  }

  async create (lord) {
    return connection(this.collection).insert(lord).returning('*')
  }
}

module.exports = new LordsModel()
