<template>
  <v-app class="primary d-flex justify-center align-center">
    <v-btn class="back" icon @click="backToPrevRoute()">
      <v-icon color="white">mdi mdi-arrow-left</v-icon>
    </v-btn>
    <nuxt class="d-flex justify-center align-center" />
  </v-app>
</template>

<script>
export default {
  methods: {
    backToPrevRoute() {
      this.$router.back()
    },
  },
}
</script>

<style lang="scss" scoped>
.primary {
  width: 100vw !important;
  height: 100vh !important;
  background: #161122;
  .back {
    position: fixed;
    top: 20px;
    left: 20px;
  }
}
</style>
