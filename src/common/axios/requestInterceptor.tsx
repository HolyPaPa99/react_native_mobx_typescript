import {AxiosRequestConfig} from 'axios';

export default {
  beforeRequest: (config: AxiosRequestConfig) => {
    // 在发送请求之前做些什么
    return config;
  },
  error: (error: any) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
};
