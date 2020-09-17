<template>
  <v-container class="py-15" style="z-index: 1 !important">
    <text-emoji :size="20" text="Em là ai trong thế giới này :D " />
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
