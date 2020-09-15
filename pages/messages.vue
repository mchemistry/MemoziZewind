<template>
  <v-container class="py-15" style="z-index: 1 !important">
    <text-emoji :size="20" />
  </v-container>
</template>

<script>
import TextEmoji from '@/components/TextEmoji'
export default {
  layout: 'default',
  components: {
    TextEmoji,
  },
}
</script>
