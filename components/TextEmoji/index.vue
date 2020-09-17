<template>
  <span class="text-emoji" :style="style" v-html="convertToTempalte(text)">
  </span>
</template>

<script>
import _ from 'lodash'
const EMOJI_SHOTHAND = ['a', 'b', ':dog', ':D']
const GIF_SOURCE = [
  'https://data2.m4v.me/images/smileys/simply/(.gif',
  'https://data2.m4v.me/images/smileys/simply/(.gif',
  'https://data2.m4v.me/images/smileys/simply/(.gif',
  'https://data2.m4v.me/images/smileys/simply/(.gif',
]
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
  methods: {
    convertToTempalte(text) {
      let result
      for (let i = 0; i < EMOJI_SHOTHAND.length; i++) {
        for (let j = 0; j < EMOJI_SHOTHAND.length; j++) {
          result = _.replace(
            text,
            new RegExp(EMOJI_SHOTHAND[i], 'g'),
            `<img
              class="emoji-icon"
              src="${GIF_SOURCE[j]}"
              alt="Emoji Icon"
              style="height: ${this.size}px !important; position: relative; top: 3px;"
            />`
          )
        }
      }
      return result
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
