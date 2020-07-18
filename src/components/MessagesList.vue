<template>
  <v-container class="mess-list rounded">
    <div v-if="loading">
      <v-skeleton-loader
        v-for="i in 10"
        :key="i"
        dark
        width="250"
        class="skeleton-message mb-2"
        type="list-item-avatar-two-line"
      ></v-skeleton-loader>
    </div>
    <div v-else>
      <Message
        v-for="({ color, nick, text }, i) of messages"
        :key="i"
        :color="color"
        :nick="nick"
        :text="text"
      />
    </div>
    <div class="scroll" ref="scroller"></div>
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
    ...mapState('chat', ['messages', 'loading'])
  },
  methods: {
    ...mapActions('chat', ['watchNewMessages'])
  },
  mounted() {
    this.watchNewMessages()
  },
  updated() {
    this.$el.scrollTop = this.$el.scrollHeight
  }
}
</script>

<style lang="sass">
.mess-list
  background: #272727
  overflow-y: scroll
  &::-webkit-scrollbar
    width: 5px
    background: #272727

  &::-webkit-scrollbar-thumb
    background: #C1C1C1
</style>
