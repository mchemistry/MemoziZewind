<template>
  <v-app id="questions">
    <v-btn
      v-if="showTOC"
      icon
      class="menu-of-content"
      @click="showTOC = !showTOC"
    >
      <v-icon color="white">mdi-table-large</v-icon>
    </v-btn>
    <div
      class="toc--outside"
      :class="[showTOC ? 'toc--outside--hiden' : '']"
      @click="showTOC = !showTOC"
    ></div>
    <div
      class="toc--inside text-center"
      :class="[showTOC ? 'toc--inside--hiden' : '']"
    >
      <div class="element--text text-subtitle-2">
        <v-btn icon class="close-toc" @click.stop="showTOC = !showTOC">
          <v-icon> mdi mdi-chevron-double-right </v-icon>
        </v-btn>
        <p class="element--text text pt-4 pb-0 mb-0">@TABLE OF QUESTIONS</p>
      </div>
      <v-divider class="mt-3"></v-divider>
      <ul>
        <li
          v-for="(item, index) in data"
          :key="index"
          class="light--text"
          :class="[active === index + 1 ? 'element--text' : '']"
          @click="
            active = index + 1
            showTOC = !showTOC
          "
        >
          #{{ index + 1 }} -
          {{ item.title.toUpperCase() }}
        </li>
      </ul>
    </div>
    <v-container class="mt-10">
      <transition name="fade" mode="out-in">
        <qna
          :text="data[active - 1].text"
          class="element--text"
          :title="data[active - 1].title.toUpperCase()"
          :created="data[active - 1].created"
          :edited="data[active - 1].edited"
        />
      </transition>
    </v-container>
  </v-app>
</template>

<script>
import QuestionsAndAnswer from '../components/QuestionsAndAnswer'
import qna from '../static/data/qna.json'
const QNA = qna.qna
export default {
  layout: 'default',
  components: {
    qna: QuestionsAndAnswer,
  },
  data() {
    return {
      data: QNA,
      showTOC: false,
      active: 1,
    }
  },
}
</script>
<style lang="scss" scoped>
#questions {
  .menu-of-content {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 4px;
    padding: 6px;
  }
  .toc--outside {
    position: fixed;
    width: calc(100vw - 300px);
    height: 100vh;
    top: 0;
    left: 0;
    transition: all 0.3s;
    background: #161122b7;
    z-index: 1000;
    &--hiden {
      left: calc(-100vw + 300px);
      visibility: hidden;
      transition: visibility all 0.3s;
    }
  }
  .toc--inside {
    max-width: 300px;
    width: 300px;
    height: 100vh;
    background: #161122;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
    transition: all 0.3s;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    &--hiden {
      right: -300px;
      visibility: hidden;
      transition: visibility all 0.3s;
    }
    .element--text > .close-toc {
      position: absolute;
      left: 4px;
      margin: 8px 0;
    }
    ul > li {
      list-style: none;
      text-align: start !important;
      font-size: 12px;
      margin-top: 16px;
      float: left;
      cursor: pointer;
    }
    ul > li:hover {
      padding-left: 4px;
      transition: all 0.5s;
      color: #f0a30e !important;
    }
  }
}
</style>
