import axios from 'axios';

const url: string = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: 'http://localhost:3000/v1/api',
  timeout: 1000,
  withCredentials: true
});

export default instance;
