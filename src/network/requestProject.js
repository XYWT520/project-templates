import axios from 'axios';
import { inject } from './injectIntercepter';

const service = axios.create({
  // baseURL: 'http://localhost:9999', 
  // baseURL: 'http://localhost:8080', 
  timeout: 20000, // 请求超时时间
});

inject(service);

export default service;