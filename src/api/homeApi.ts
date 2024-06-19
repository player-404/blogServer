import request from './index';

// 获取所有菜单
export const getMenus = () =>
  request({
    method: 'get',
    url: '/menu'
  });

// 获取用户菜单
export const getMenuByUser = () =>
  request({
    method: 'get',
    url: '/menu/getMenusByUser'
  });
