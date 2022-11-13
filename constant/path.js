const URI = 'https://api.myanimelist.net/v2'
const HEADERS = {
  headers: {
    'content-type': 'application/json',
    'X-MAL-CLIENT-ID': '71edbf3aeb1b7544dd6ac9fbf140e4b4',
    'Access-Control-Allow-Origin': '*'
  }
}

const PATH_ANIME = `${URI}/anime`

module.exports = { HEADERS, PATH_ANIME }