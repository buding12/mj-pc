/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import store from '@/store';
import axios from 'axios';
import { Message } from 'element-ui';
import router from '@/router';
// 创建一个新的axios实例
const request = axios.create({
  baseURL: 'http://interview-api-t.itheima.net',
  timeout: 10000, // 超过10s没有接收到响应则报错
});
// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${store.state.token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

// 添加响应拦截器
request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { response: { status, data: { message } } } = error;
    if (status === 401) {
      // 利用element-ui提示
      Message.error('重新登录');
      // 清空token
      store.commit('DEL_TOKEN');
      // 跳回登录页面
      router.replace('/login');
    } else {
      Message.error(message);
    }
    return Promise.reject(error);
  },
);

export default request;
