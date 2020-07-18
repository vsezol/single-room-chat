import mutations from '../mutations/chat'
import actions from '../actions/chat'

const chat = {
  namespaced: true,
  state: {
    messages: null,
    beginLen: 20,
    loading: false,
    error: null
  },
  mutations,
  actions
}

export default chat
