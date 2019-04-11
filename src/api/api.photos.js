import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

function getTotalPhotos(id) {
  return axios.get(`${BASE_URL}/photos?albumId=${id}`)
}

function show(id, page) {
  return axios.get(`${BASE_URL}/photos?albumId=${id}&_page=${page}&_limit=12`)
}

function detail(id) {
  return axios.get(`${BASE_URL}/photos/${id}`)
}

const ApiPhotos = {
  show,
  getTotalPhotos,
  detail,
}

export default ApiPhotos
