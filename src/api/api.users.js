import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

function index() {
  return axios.get(`${BASE_URL}/users`)
}

function show(username) {
  if(typeof username === 'string'){
    return axios.get(`${BASE_URL}/users?username=${username}`)
  }
  return axios.get(`${BASE_URL}/users/${username}`)
}

function albums(id) {
  return axios.get(`${BASE_URL}/albums?userId=${id}`)
}

function posts(id) {
  return axios.get(`${BASE_URL}/posts?userId=${id}`)
}

const ApiUsers = {
  index,
  show,
  albums,
  posts,
}

export default ApiUsers
