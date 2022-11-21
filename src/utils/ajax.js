import axios from 'axios'

export function request() {
  // 1、创建axios的实例 (实例本身就是一个promise)
  const instance = axios.create({
    baseUrl: '', // 服务器地址
    timeout: 5000, // 链接超时设置
  })

  // 2、axios拦截器
  // 请求拦截
  instance.interceptors.request.use(
    config => {
      return config
    }, err => {

  })
  // 响应拦截
  instance.interceptors.response.use(
    res => {
      return res.data
    },
    err => {

    }
  )

}
