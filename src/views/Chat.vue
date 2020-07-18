<template>
  <v-container fluid class="chat-container d-flex flex-column">
    <MessagesList></MessagesList>
    <CreateMessage></CreateMessage>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

import MessagesList from '@/components/MessagesList'
import CreateMessage from '@/components/CreateMessage'

export default {
  name: 'Chat',
  beforeMount() {
    if (!this.isLogged) this.$router.push('/login')
  },
  computed: {
    ...mapState('login', ['isLogged'])
  },
  components: {
    MessagesList,
    CreateMessage
  }
}
</script>

<style lang="sass">
.chat-container
  background: #3A3A3A
  height: calc( 100vh - 48px )
</style>
