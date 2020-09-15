<template>
  <div class="nothing"></div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  created() {
    this.initAudio()
    this.getLayoutSize()
  },
  methods: {
    ...mapActions('muzik', ['initAudio']),
    ...mapActions('layout', ['getLayoutSize']),
  },
}
</script>

<style lang="scss" scoped>
.nothing {
  position: fixed;
  background: transparent;
}
</style>
