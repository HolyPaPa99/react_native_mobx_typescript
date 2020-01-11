export default {
  succeed: (response: any) => {
    // 对响应数据做点什么
    return response;
  },
  error: (error: any) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  },
};
