<template>
  <v-container class="create-mess mt-3 d-flex rounded">
    <v-textarea auto-grow :rows="rows" dark/>
    <v-icon class="ml-3 create-mess__send-icon">mdi-send</v-icon>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      rows: 1
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
