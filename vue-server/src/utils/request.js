import axios from 'axios'

// axios.get('/db.json').then(resp => {
//     const data = resp.data
//     console.log(data)
// })
const request = axios.create({
  baseURL: 'http://121.199.57.243:7300/mock/5e16ca5fd012a11ecfc23c7c/example',
  timeout: 5000
})
//请求拦截器
request.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
//响应拦截器
request.interceptors.response.use(
  resp => {
    return resp
  },
  err => {
    return Promise.reject(err)
  }
)

export default request //导出自定义创建的axios对象
