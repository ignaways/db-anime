const AnimeModels = require('../models/AnimeModels')

class AnimeControllers {
  static async getList(req, res) {
    try {
      const {year,season} = req.query
      const list = await AnimeModels.getList(year,season)
      res.status(200).json(list)
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }
}

module.exports = AnimeControllers