const login = {
  namespaced: true,
  state: {
    // for dev
    isLogged: true,
    color: '#FF00AAFF',
    nick: 'vsezol'
    // for prod
    // isLogged: false,
    // color: '',
    // nick: ''
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
