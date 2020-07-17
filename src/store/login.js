import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const login = {
  namespaced: true,
  state: {
    isLogged: false,
    color: '',
    nick: ''
  },
  mutations: {
    login(state, { color, nick }) {
      state.isLogged = true
      state.color = color
      state.nick = nick
    },
    logout(state) {
      state.isLogged = false
      state.color = ''
      state.nick = ''
    }
  }
}

export default login