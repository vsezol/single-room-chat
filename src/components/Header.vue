<template>
  <v-app-bar app color="dark" dark dense flat>
    <h2>
      Single Room Shat
    </h2>
    <v-spacer></v-spacer>

    <v-icon v-if="isLogged" @click="logoutHandler">mdi-logout</v-icon>
  </v-app-bar>
</template>

<style lang="sass" scoped>
.link
  cursor: pointer
</style>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'Header',
  methods: {
    ...mapMutations('login', ['logout']),
    logoutHandler() {
      this.logout()
      this.$router.push({ path: 'login' })
    }
  },
  computed: mapState('login', ['isLogged'])
}
</script>
