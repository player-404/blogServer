import request from './index';

interface IUser {
  username?: string;
  password?: string;
  confirmPassword?: string;
  phone?: string;
  code?: string;
}

//注册
export const signUp = async (user: IUser) =>
  request({
    method: 'post',
    url: '/user/signUp',
    data: user
  });

// 登录
export const signIn = async (username: string, password: string) =>
  request({
    method: 'post',
    url: '/user/signIn',
    data: { username, password }
  });

// 获取验证码
export const getCodes = async (phone: string) =>
  request({
    method: 'post',
    url: '/user/sms',
    data: { phone }
  });
