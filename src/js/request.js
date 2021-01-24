import axios from 'axios'

const base_url = 'https://www.wonapp.co/'

const auth_headers = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${ localStorage.getItem('token') }`
})

const get = (url, params = {}) => {
  return axios({
    url,
    method: 'get',
    baseURL: base_url,
    params
  })
}


const post = (url, data) => {
  return axios({
    url,
    method: 'post',
    baseURL: base_url,
    headers: { 'Content-Type': 'application/json' },
    data
  })
}

const auth_get = (url, params = {}) => {
  return axios({
    url,
    method: 'get',
    baseURL: base_url,
    headers: auth_headers(),
    params
  })
}

const auth_post = (url, data) => {
  return axios({
    url,
    method: 'post',
    baseURL: base_url,
    headers: auth_headers(),
    data
  })
}

export { 
  get,
  post,
  auth_get,
  auth_post,
}