export default {
  beforeRequest: (config: object) => {
    // 在发送请求之前做些什么
    return config;
  },
  error: (error: void) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
};
