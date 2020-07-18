<template>
  <div>
    Chat
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Chat',
  beforeMount() {
    if (!this.isLogged) this.$router.push('/login')
  },
  methods: {
    ...mapActions('chat', ['getBeginMessages'])
  },
  computed: {
    ...mapState('login', ['isLogged'])
  },
  mounted() {
    this.getBeginMessages()
  }
}
</script>
