/**
 * @file TextEmoji  / ES module
 * @module plugins/text-emoji
 * @author Tandv <https://github.com/mchemistry>
 */

// module dependencies
import Vue from 'vue'
import { EMOJI_SHOTHAND, GIF_SOURCE_API } from '@/constants/emoji'

// New component

Vue.component('text-emoji', {
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
    convertToTemplate(text) {
      const arrFromText = text.split(' ')
      for (const i in EMOJI_SHOTHAND) {
        for (const el in arrFromText) {
          if (arrFromText[el] === EMOJI_SHOTHAND[i]) {
            arrFromText[el] = `<img
                        src="${GIF_SOURCE_API[i]}"
                        alt="Emoji Icon"
                        style="position: relative; top: 6px; height: ${
                          +this.size + 6
                        }px"
                      />`
          }
        }
      }
      return arrFromText.join(' ')
    },
  },
  render(createElm) {
    const emojiConverted = createElm({
      template: `<span>${this.convertToTemplate(this.text)}</span>`,
    })
    const span = createElm(
      'span',
      {
        style: this.style,
      },
      [emojiConverted]
    )
    return span
  },
})
