import {
  START_GET_BEGIN_MESSAGES,
  SUCCESS_GET_BEGIN_MESSAGES,
  ERROR_GET_BEGIN_MESSAGES,
  GET_NEW_MESSAGE,
  ERROR_GET_NEW_MESSAGE,
  ERROR_SEND_MESSAGE
} from './mutationTypes'

export default {
  [START_GET_BEGIN_MESSAGES](state) {
    state.messages = []
    state.loading = true
  },
  [SUCCESS_GET_BEGIN_MESSAGES](state, payload) {
    state.messages = payload
    state.loading = false
  },
  [ERROR_GET_BEGIN_MESSAGES](state, payload) {
    state.loading = false
    state.error = payload
  },
  [GET_NEW_MESSAGE](state, payload) {
    state.messages.push(payload)
  },
  [ERROR_GET_NEW_MESSAGE](state) {
    state.error = 'Error in get new message'
  },
  [ERROR_SEND_MESSAGE](state, payload) {
    state.error = payload
  }
}
