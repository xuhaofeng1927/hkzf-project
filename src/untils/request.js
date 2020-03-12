import axios from 'axios'

// 后台接口的基础地址
const BASE_URL = 'http://localhost:8080';
// 创建axios的实例
const request = axios.create({
  baseURL: BASE_URL
});

// 注册拦截器（request和response）

// 添加一个请求拦截器
request.interceptors.request.use(function (config) {
  // 请求参数
  return config;
}, function (error) {
  // 处理请求错误
  return Promise.reject(error);
});

// 添加一个响应拦截器
request.interceptors.response.use(function (response) {
  // 位于2xx范围内的任何状态代码都会触发此函数
  // 对响应数据做些什么
  const data = {
    status: response.data.status,
    description: response.data.description,
    data: response.data.body
  }
  return data;
}, function (error) {
  // 任何超出2xx范围的状态码都会触发此函数
  // 处理响应错误
  return Promise.reject(error);
});

export { BASE_URL }
export default request