import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import chat from './modules/chat'

Vue.use(Vuex)
const store = new Vuex.Store({
  namespaced: true,
  modules: {
    login,
    chat
  }
})

export default store
