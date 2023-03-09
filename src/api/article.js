import request from '@/utils/request';

// eslint-disable-next-line import/prefer-default-export
export function getArticleList(params) {
  return request({
    url: '/admin/interview/query',
    method: 'get',
    params,
  });
}
export function getArticleInfo(id) {
  return request({
    url: '/h5/interview/show',
    method: 'get',
    params: {
      id,
    },
  });
}

export function updateArticleInfo(data) {
  return request({
    method: 'put',
    url: '/admin/interview/update',
    data,
  });
}
export function addArticleInfo(data) {
  return request({
    method: 'post',
    url: '/admin/interview/create',
    data,
  });
}
