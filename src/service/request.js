// Request.js

import axios from "axios";
//使用单例模式构建
class Request {
  constructor() {
    if (!Request.instance) {
      // 创建 Axios 实例
      this.instance = axios.create(
        {
          baseURL: process.env.BASE_API, // api 的 base_url
          timeout: 20000 // 请求超时时间
        }
      );
      // 添加请求拦截器
      this.instance.interceptors.request.use(
         (config)=> {
          // 在发送请求之前做些什么
          // 可以添加一些公共的请求头、处理请求参数等
          return config;
        },
         (error)=> {
          // 对请求错误做些什么
          return Promise.reject(error);
        }
      );

      // 添加响应拦截器
      this.instance.interceptors.response.use(
         (response)=> {
          // 对响应数据做些什么
          return response;
        },
         (error)=> {
          // 对响应错误做些什么
          return Promise.reject(error);
        }
      );

      Request.instance = this.instance;
    }

    return Request.instance;
  }

  // 封装GET请求
  get(url, config) {
    const mergedConfig = this.mergeConfig(config);
    return this.instance.get(url, mergedConfig);
  }

  // 封装POST请求
  post(url, data, config) {
    const mergedConfig = this.mergeConfig(config);
    return this.instance.post(url, data, mergedConfig);
  }

  // 封装PUT请求
  put(url, data, config) {
    const mergedConfig = this.mergeConfig(config);
    return this.instance.put(url, data, mergedConfig);
  }

  // 封装DELETE请求
  delete(url, config) {
    const mergedConfig = this.mergeConfig(config);
    return this.instance.delete(url, mergedConfig);
  }

  // 合并配置
  mergeConfig(baseConfig, customConfig) {
    return Object.assign({}, baseConfig, customConfig);
  }
}


export default new Request();
