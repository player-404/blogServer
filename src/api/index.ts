import axios from 'axios';
import Cookies from 'js-cookie';

const url: string = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: 'http://47.100.1.135:9999/v1/api',
  timeout: 1000,
  withCredentials: true
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    //添加token验证
    const token = Cookies.get('jwt');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);
export default instance;
