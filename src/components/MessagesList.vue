<template>
  <v-container class="mess-list rounded">
    <div v-if="!loading">
      <Message
        v-for="({ color, nick, text }, i) of messagesArr"
        :key="i"
        :color="color"
        :nick="nick"
        :text="text"
      />
    </div>
  </v-container>
</template>

<script>
import Message from './Message'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Message
  },
  computed: {
    ...mapState('login', ['color', 'nick']),
    ...mapState('chat', ['messages', 'loading']),
    messagesArr() {
      return Object.values(this.messages)
    }
  },
  methods: {
    ...mapActions('chat', ['getBeginMessages'])
  },
  mounted() {
    this.getBeginMessages()
  }
}
</script>

<style lang="sass" scoped>
.mess-list
  flex-grow: 1
  background: #272727
</style>
