<template>
  <span class="text-emoji" :style="style" v-html="convertToTempalte(text)">
  </span>
</template>

<script>
import { EMOJI_SHOTHAND, GIF_SOURCE_API } from '~/constants/emoji'

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
      const arrFromText = text.split(' ')
      for (const i in EMOJI_SHOTHAND) {
        for (const el in arrFromText) {
          if (arrFromText[el] === EMOJI_SHOTHAND[i]) {
            arrFromText[el] = `<img
                    class="emoji-icon"
                    src="${GIF_SOURCE_API[i]}"
                    alt="Emoji Icon"
                    style="height: ${
                      +this.size + 6
                    }px !important; position: relative; top: 6px;"
                  />`
          }
        }
      }
      return arrFromText.join(' ')
    },
  },
}
</script>
