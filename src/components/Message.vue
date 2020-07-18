<template>
  <div class="message d-flex mb-2">
    <div
      class="message__avatar rounded-circle mr-2"
      :style="{ background: color }"
    ></div>
    <div class="message__main pa-2 rounded d-flex flex-column">
      <div>
        <h5>{{ nick }}</h5>
      </div>
      <div>
        <p class="mb-0">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['color', 'nick', 'text']
}
</script>

<style lang="sass" scoped>
.message
  &__avatar
    width: 32px
    height: 32px

  &__main
    color: white
    background: #3A3A3A
</style>
