<template>
  <section>
    <h3 class="text-center mb-2">
      {{ title }}
    </h3>
    <slot name="createdTime" />
    <br class="mb-4" />
    <TextEmoji :text="text" class="white--text" />
  </section>
</template>

<script>
import TextEmoji from '../TextEmoji'
export default {
  name: 'QuestionsAndAnswer',
  components: {
    TextEmoji,
  },
  props: {
    title: {
      type: String,
      require: true,
      default: '',
    },
    text: {
      type: String,
      require: true,
      default: '',
    },
    created: {
      type: String,
      require: true,
      default: '',
    },
    edited: {
      type: String,
      require: true,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.icon {
  position: relative;
  bottom: 1px;
}
</style>
