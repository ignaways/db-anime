const axios = require('axios')
const { HEADERS, PATH_ANIME } = require('../constant/path')

class AnimeModels {
  static async getList(year, season) {
    try {
      const response = await axios.get(`${PATH_ANIME}/season/${year}/${season}?limit=6&sort=anime_num_list_users&fields=studios,num_episodes,broadcast,source,mean,synopsis,genres,media_type,start_date,alternative_titles`, HEADERS)
      return response.data
    } catch (error) {
      console.log(error, '<<<error')
    }
  }
}

module.exports = AnimeModels