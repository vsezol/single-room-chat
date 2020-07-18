<template>
  <div class="message">
    <slot name="nick"></slot>
    <slot name="text"></slot>
  </div>
</template>

<style lang="sass" scoped>
.message
  color: white
</style>