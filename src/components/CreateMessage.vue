<template>
  <v-container class="create-mess mt-3 d-flex rounded">
    <v-textarea
      v-model.trim="text"
      :error-messages="textErrors"
      @input="$v.text.$touch()"
      @blur="$v.text.$touch()"
      rows="1"
      dark
      counter="256"
      auto-grow
      class="pa-0"
    />
    <div class="ml-3 align-self-end">
      <v-icon class="create-mess__send-icon mb-6" @click="sendHandler">
        mdi-send
      </v-icon>
    </div>
  </v-container>
</template>

<script>
import { maxLength } from 'vuelidate/lib/validators'
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      text: ''
    }
  },
  validations: {
    text: {
      maxLength: maxLength(256)
    }
  },
  methods: {
    ...mapActions('chat', ['sendMessage']),
    sendHandler() {
      if (!this.textErrors.length && this.text) {
        this.sendMessage({
          color: this.color,
          nick: this.nick,
          text: this.text
        })
        this.text = ''
      }
    }
  },
  computed: {
    ...mapState('login', ['color', 'nick']),
    textErrors() {
      const errors = []
      if (!this.$v.text.$dirty) return errors
      !this.$v.text.maxLength && errors.push('Max length 256.')
      return errors
    }
  }
}
</script>

<style lang="sass" scoped>
.create-mess
  background: #272727

  &__send-icon
    color: white
    cursor: pointer
</style>
