import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

function index(page) {
  return axios.get(`${BASE_URL}/posts?_page=${page}&_limit=10`)
}

function getTotalPost() {
  return axios.get(`${BASE_URL}/posts`)
}

function show(id) {
  return axios.get(`${BASE_URL}/posts/${id}`)
}

function create(data) {
  return axios.post(`${BASE_URL}/posts`, data)
}

function update(id, data) {
  return axios.patch(`${BASE_URL}/posts/${id}`, data)
}

function destroy(id) {
  return axios.delete(`${BASE_URL}/posts/${id}`)
}

const ApiPosts = {
  index,
  show,
  getTotalPost,
  create,
  update,
  destroy,
}

export default ApiPosts
