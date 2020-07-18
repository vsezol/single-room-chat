<template>
  <div>
    Chat
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Chat',
  beforeMount() {
    if (!this.isLogged) this.$router.push('/')
  },
  computed: {
    ...mapState('login', ['isLogged'])
  }
}
</script>
