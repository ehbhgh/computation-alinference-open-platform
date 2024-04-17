/*
 * @Description:
 * @Author: Wang Su
 * @Date: 2024-01-17 17:19:03
 * @LastEditors: Wang Su
 * @LastEditTime: 2024-01-17 17:32:44
 */
import LoginApi from "./login/index";
import StagingApi from "./staging/index";
let api = {
  LoginApi,
  StagingApi,
};
let apiProxy = new Proxy(api, {
  get(target, key) {
    if (key in target) {
      return target[key];
    } else {
      throw new Error(`Unknown API key: ${key}`);
    }
  }
});

let apiPlugin = {
  install(Vue, options) {
    Vue.prototype.$api = apiProxy;
  },
};
export default apiPlugin