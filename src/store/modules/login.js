const hexa2rgba = hexa => {
  let rgba = 'rgba('
  for (let i = 1; i < 9; i += 2) {
    const byte = hexa.slice(i, i + 2)
    if (i !== 7) {
      rgba += parseInt(byte, 16) + ','
    } else {
      rgba += (parseInt(byte, 16) / 255).toFixed(2) + ')'
    }
  }
  return rgba
}

const login = {
  namespaced: true,
  state: {
    // for dev
    isLogged: true,
    color: '',
    nick: 'vsezol'
    // for prod
    // isLogged: false,
    // color: '',
    // nick: ''
  },
  mutations: {
    login(state, { color, nick }) {
      state.isLogged = true
      state.color = hexa2rgba(color)
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
