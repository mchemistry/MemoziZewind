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
    // as size of text and height of image
    size: {
      type: [String, Number],
      default: '16',
    },
    // raw text need convert to string template
    text: {
      type: String,
      default: '',
    },
  },
  computed: {
    // style for span tag
    style() {
      const style = {}
      style['font-size'] = this.size + 'px'
      return style
    },
  },
  methods: {
    /**
     * Sync text
     * @param {string} text as text need convert to string template
     * @return {string} as string template
     */
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
      return arrFromText.join(' ') // concat elements of array to string template
    },
  },
  render(createElm) {
    const emojiConverted = createElm({
      template: `<span>${this.convertToTemplate(this.text)}</span>`, // convert string template to HTML
    })
    const span = createElm(
      'span',
      {
        style: this.style, // set style for span tag
      },
      [emojiConverted] // inside span tag
    )
    return span
  },
})
