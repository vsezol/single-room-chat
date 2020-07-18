import {
  GET_NEW_MESSAGE,
  ERROR_GET_NEW_MESSAGE,
  ERROR_SEND_MESSAGE,
  CLEAR_MESSAGES
} from './mutationTypes'

export default {
  [GET_NEW_MESSAGE](state, payload) {
    state.messages = [...state.messages, payload]
    state.loading = false
  },
  [ERROR_GET_NEW_MESSAGE](state) {
    state.error = 'Error in get new message'
  },
  [ERROR_SEND_MESSAGE](state, payload) {
    state.error = payload
  },
  [CLEAR_MESSAGES](state) {
    state.messages = []
    state.loading = true
  }
}
