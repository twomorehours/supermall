import request from './request.js';

// eslint-disable-next-line import/prefer-default-export
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid,
    },
  });
}
