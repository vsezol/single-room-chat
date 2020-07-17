<template>
  <v-app-bar app color="dark" dark dense flat>
    <h2>
      Single Room Shat
    </h2>
    <v-spacer></v-spacer>

    <router-link to="/login" tag="div" class="link">
      <v-icon>mdi-logout</v-icon>
    </router-link>
  </v-app-bar>
</template>

<style lang="sass" scoped>
.link
  cursor: pointer
</style>
