<template>
  <v-container fluid class="login-container">
    <v-container class="wrapper d-flex flex-column justify-center">
      <v-color-picker
        hide-canvas
        hide-inputs
        class="select-color"
        v-model="color"
      ></v-color-picker>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      color: ''
    }
  }
}
</script>

<style lang="sass" scoped>
.login-container
  background: #3A3A3A
  height: calc( 100vh - 48px )
.wrapper
  height: 100%
.select-color
  margin: 0 auto
  width: 256px
  background: #272727!important
</style>
