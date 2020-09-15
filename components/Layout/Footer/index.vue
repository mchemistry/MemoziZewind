<template>
  <v-footer class="mt-5 pa-0" width="100%">
    <v-card flat tile class="primary white--text text-center">
      <v-divider></v-divider>
      <v-card-text class="light--text">
        {{ new Date().getFullYear() }} — Made with
        <v-icon color="red" class="blink">mdi mdi-heart</v-icon>
        for
        <strong class="secondary--text">MYLOVE</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footers {
  background-color: #540474 !important;
  width: 100vw !important;
  font-weight: 100;
}
.heart {
  width: 30px;
  height: 30px;
}
.light--text {
  width: 100%;
}
</style>
