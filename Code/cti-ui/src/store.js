import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    menu: ''
  },
  mutations: {
    login (state, token) {
      state.token = token
      localStorage.setItem('auth', token)
    },
    logout (state) {
      state.token = null
      localStorage.removeItem('auth')
    },
    menu (state, menu) {
      state.menu = menu
    }
  },
  actions: {
    login ({ commit }, token) {
      commit('login', token)
    },
    logout ({ commit }) {
      commit('logout')
    },
    menu ({ commit }, menu) {
      commit('menu', menu)
    }
  },
  modules: {
  }
})
