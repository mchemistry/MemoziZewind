<template>
  <v-container class="py-15" style="z-index: 1 !important">
    <test />
  </v-container>
</template>

<script>
import Test from '../components/Test/Test'
export default {
  layout: 'default',
  components: {
    test: Test,
  },
}
</script>
