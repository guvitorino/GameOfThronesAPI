class HousesController {
  static async show (req, res) {
    return res.status(200).json({
      ok: true
    })
  }
}

module.exports = HousesController
