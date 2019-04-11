import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

function show(id) {
  return axios.get(`${BASE_URL}/albums/${id}`)
}

const ApiAlbums = {
  show,
}

export default ApiAlbums
