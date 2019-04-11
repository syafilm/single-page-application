import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

function index(id) {
  return axios.get(`${BASE_URL}/comments?postId=${id}`)
}

function create(data) {
  return axios.post(`${BASE_URL}/comments`, data)
}

function update(id, data) {
  return axios.patch(`${BASE_URL}/comments/${id}`, data)
}

function destroy(id) {
  return axios.delete(`${BASE_URL}/comments/${id}`)
}

const ApiComments = {
  index,
  create,
  update,
  destroy,
}

export default ApiComments
