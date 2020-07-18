import mutations from '../mutations/chat'
import actions from '../actions/chat'

const chat = {
  namespaced: true,
  state: {
    messages: [],
    loading: true,
    error: null
  },
  mutations,
  actions
}

export default chat
