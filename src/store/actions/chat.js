import {
  START_GET_BEGIN_MESSAGES,
  SUCCESS_GET_BEGIN_MESSAGES,
  ERROR_GET_BEGIN_MESSAGES,
  GET_NEW_MESSAGE,
  ERROR_GET_NEW_MESSAGE,
  SEND_MESSAGE,
  ERROR_SEND_MESSAGE
} from '../mutations/mutationTypes'

import { messagesRef } from '@/plugins/firebase'

export default {
  async getBeginMessages({ commit }) {
    commit(START_GET_BEGIN_MESSAGES)
    try {
      const snapshot = await messagesRef.limitToLast(20).once('value')
      const messages = snapshot.val()
      commit(SUCCESS_GET_BEGIN_MESSAGES, messages)
    } catch (error) {
      commit(ERROR_GET_BEGIN_MESSAGES, error)
    }
  },
  watchNewMessages({ commit }) {
    messagesRef.off('child_added')
    messagesRef.off('value')

    messagesRef.on('child_added', data => {
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
      commit(SEND_MESSAGE)
    } catch (error) {
      commit(ERROR_SEND_MESSAGE, error)
    }
  }
}
