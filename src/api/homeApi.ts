import request from './index';

export const getMenus = () =>
  request({
    method: 'get',
    url: '/menu'
  });
