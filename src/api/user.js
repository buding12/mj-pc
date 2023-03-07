/* eslint-disable import/prefer-default-export */
import request from '@/utils/request';

export function login(data) {
  return request({
    method: 'post',
    url: '/auth/login',
    data,
  });
}

export function getUserInfo() {
  return request({
    method: 'get',
    url: '/auth/currentUser',
  });
}
