import axios from 'axios';
import { inject } from './injectIntercepter';

const service = axios.create({
  baseURL: 'http://192.168.92.60', // api的base_url
  // baseURL: '/api', // api的base_url
  timeout: 20000, // 请求超时时间
});

inject(service);

export default service;