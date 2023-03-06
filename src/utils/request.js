/* eslint-disable no-param-reassign */
import store from '@/store';
import axios from 'axios';

// 创建一个新的axios实例
const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net',
  timeout: 10000, // 超过10s没有接收到响应则报错
});
// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${store.state.token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

// 添加响应拦截器
axios.interceptors.response.use((response) => response.data, (error) => Promise.reject(error));
// 对响应数据做点什么

// 对响应错误做点什么

export default request;
