import axios from 'axios'
const axiosInstance = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 1800000
})
axiosInstance.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
axiosInstance.interceptors.response.use(
  response => {
    const res = response.data
    let resultCode = res.result || res.code || ''
    if (resultCode !== '200' && resultCode !== '0') {
      return Promise.reject(res)
    }
  },
  error => {
    return Promise.reject(error)
  }
)
axios.defaults.headers.post['Content-Type'] = 'application/json'
export default axiosInstance
