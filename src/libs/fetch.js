import axios from 'axios'
import router from '../router/index.js'
import qs from "qs"
import {
  Loading,
  Message
} from 'element-ui'

// 创建axios实例
const Axios = axios.create({
  baseURL: "/",
  // timeout: 10000,
  // responseType: "json",
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
});

// request拦截器
Axios.interceptors.request.use(config => {
  if (config.method === "post" ||
    config.method === "put" ||
    config.method === "delete" ||
    config.method === "patch") {
    config.data = qs.stringify(config.data);
  }

  return config
}, error => {
  console.log(error)
  // Do something with request error
  Message.error({
    message: '加载超时'
  })
  return Promise.reject(error)
})

// respone拦截器
Axios.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        router.replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.fullPath
          } //登录成功后跳入浏览的当前页面
        })
        Message.error({
          message: '登录过期，请重新登录'
        })
        break;
    }
  }
  return Promise.reject(error)
})

export default Axios
