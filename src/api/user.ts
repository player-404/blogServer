import request from './index';

// 获取当前用户数据
export const getUser = (userId: string) =>
  request({
    method: 'get',
    url: `/user/${userId}`
  });

// 获取所有用户数据
export const getAllUsers = () =>
  request({
    method: 'get',
    url: '/user/getAllUsers'
  });

// 管理员添加用户数据
export const addUser = (userData: User) =>
  request({
    method: 'post',
    url: '/user/adminAddUser',
    data: userData
  });
