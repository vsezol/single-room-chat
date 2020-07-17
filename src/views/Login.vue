<template>
  <v-container fluid class="login-container">
    <v-container class="wrapper d-flex flex-column justify-center">
      <form class="rounded">
        <h4 class="mb-1">Pick the color you like</h4>
        <v-color-picker
          hide-canvas
          hide-inputs
          class="select-color pt-2"
          v-model="color"
          dark
        ></v-color-picker>
        <v-text-field
          v-model.trim="nick"
          :error-messages="nickErrors"
          :counter="16"
          label="Nick"
          required
          dark
          @input="$v.nick.$touch()"
          @blur="$v.nick.$touch()"
        ></v-text-field>
        <v-btn class="submit-btn d-block" @click="submit">login</v-btn>
      </form>
    </v-container>
  </v-container>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      color: '',
      nick: ''
    }
  },
  validations: {
    nick: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(10)
    }
  },
  methods: {
    submit() {
      console.log(this.color, this.nick)
    }
  },
  computed: {
    nickErrors() {
      const errors = []
      if (!this.$v.nick.$dirty) return errors
      !this.$v.nick.required && errors.push('Nick is required.')
      !this.$v.nick.minLength && errors.push('Min length 4.')
      !this.$v.nick.maxLength && errors.push('Max length 16.')
      return errors
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
  max-width: 400px

.select-color
  width: 100%
  height: 90px
  max-width: 400px!important

form
  width: 100%
  background: #1E1E1E
  padding: 16px

.select-color, form, .submit-btn
  margin: 0 auto

h4
  color: #B4B4B4
  font-weight: 400
</style>
