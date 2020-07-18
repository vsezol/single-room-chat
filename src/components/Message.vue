<template>
  <div class="message">
    <div
      class="message__avatar rounded-circle"
      :style="{ background: color }"
    ></div>
    <div class="message__main"></div>
    <slot name="nick"></slot>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  props: ['color']
}
</script>

<style lang="sass" scoped>
.message
  color: white

  &__avatar
    width: 32px
    height: 32px
</style>
