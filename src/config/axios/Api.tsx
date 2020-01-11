import axios from 'axios';
import axiosConfig from '@/config/axios/axiosConfig';
import requestInterceptor from '@/config/axios/requestInterceptor';
import responseInterceptor from '@/config/axios/responseInterceptor';
import {AxiosRequestConfig} from 'axios';

const instance = axios.create(axiosConfig);
instance.interceptors.request.use(
  requestInterceptor.beforeRequest,
  requestInterceptor.error,
);
instance.interceptors.response.use(
  responseInterceptor.succeed,
  responseInterceptor.error,
);
class Api {
  static get(url: string, config: AxiosRequestConfig) {
    return instance.get(url, config);
  }
  static delete(url: string, config: AxiosRequestConfig) {
    return instance.delete(url, config);
  }
  static head(url: string, config: AxiosRequestConfig) {
    return instance.head(url, config);
  }
  static options(url: string, config: AxiosRequestConfig) {
    return instance.options(url, config);
  }
  static post(url: string, params: any, config: AxiosRequestConfig) {
    return instance.post(url, params, config);
  }
  static put(url: string, params: any, config: AxiosRequestConfig) {
    return instance.put(url, params, config);
  }
  static patch(url: string, params: any, config: AxiosRequestConfig) {
    return instance.patch(url, params, config);
  }
}

export default Api;
