<template>
  <span class="text-emoji" :style="style">
    em laf ai
    <img
      class="emoji-icon"
      src="../../assets/images/emoji/big-smile.gif"
      alt="Emoji Icon"
      :style="{ height: size + 'px' }"
    />
  </span>
</template>

<script>
export default {
  name: 'TextEmoji',
  props: {
    size: {
      type: [String, Number],
      default: '16',
    },
    text: {
      type: String,
      default: '',
    },
  },
  computed: {
    style() {
      const style = {}
      style['font-size'] = this.size + 'px'
      return style
    },
  },
}
</script>

<style lang="scss" scoped>
.emoji-icon {
  position: relative;
  top: 3px;
}
</style>
