import axios from 'axios';
import axiosConfig from '@/config/axios/axiosConfig';
import requestInterceptor from '@/config/axios/requestInterceptor';
import responseInterceptor from '@/config/axios/responseInterceptor';

const instance = axios.create(axiosConfig);
instance.interceptors.request.use(requestInterceptor);
instance.interceptors.response.use(responseInterceptor);

export default {
  get: (url: string, config: object) => {
    return instance.get(url, config);
  },
  delete: (url: string, config: object) => {
    return instance.delete(url, config);
  },
  head: (url: string, config: object) => {
    return instance.head(url, config);
  },
  options: (url: string, config: object) => {
    return instance.options(url, config);
  },
  post: (url: string, params: object, config: object) => {
    return instance.post(url, params, config);
  },
  put: (url: string, params: object, config: object) => {
    return instance.put(url, params, config);
  },
  patch: (url: string, params: object, config: object) => {
    return instance.patch(url, params, config);
  },
};
