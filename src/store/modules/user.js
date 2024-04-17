import { login, logout } from '@/api/login'
// import {setToken, delToken, setAccessUser, delAccessUser, delShareToken} from '@/utils/auth'
import {constantRouterMap} from "@/router"
const user = {
  state: {
    token: '', // 登录后的token
    menuList:constantRouterMap
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      setToken(token)
    },

  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {

    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
     
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_ACCESSUSER', {})
     
      })
    }
  }
}

export default user
