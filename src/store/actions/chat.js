import {
  GET_NEW_MESSAGE,
  ERROR_GET_NEW_MESSAGE,
  ERROR_SEND_MESSAGE,
  CLEAR_MESSAGES
} from '../mutations/mutationTypes'

import { messagesRef } from '@/plugins/firebase'

export default {
  watchNewMessages({ commit }) {
    messagesRef.off('child_added')
    messagesRef.off('value')

    messagesRef.limitToLast(20).on('child_added', data => {
      const message = data.val()
      commit(GET_NEW_MESSAGE, message)
    })

    messagesRef.on('value', data => {
      if (!data.val()) {
        commit(ERROR_GET_NEW_MESSAGE)
      }
    })
  },
  async sendMessage({ commit }, { color, nick, text }) {
    const newMessageRef = messagesRef.push()
    try {
      await newMessageRef.set({
        color,
        nick,
        text
      })
    } catch (error) {
      commit(ERROR_SEND_MESSAGE, error)
    }
  },
  clearMessages({ commit }) {
    commit(CLEAR_MESSAGES)
  }
}
