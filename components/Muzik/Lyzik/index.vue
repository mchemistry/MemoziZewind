<template>
  <div
    class="lyzik d-flex flex-row justfy-center align-center mb-3"
    :style="[
      windowHeight > 767
        ? { bottom: (windowHeight - 767) / 2 + 120 + 'px !important' }
        : '',
    ]"
  >
    <div class="spacer"></div>
    <div class="lyzik-wrap">
      <span
        v-for="(text, i) in lyzik"
        :key="i"
        class="text-subtitle-2 text-lyzik"
        :style="[
          { top: top + 'px' },
          i === saveIndexOfLyzik - 2
            ? { color: '#f0a410' }
            : { color: '#f0a51041' },
          i === saveIndexOfLyzik - 2
            ? { 'font-size': 17 + 'px !important' }
            : '',
        ]"
        >{{ text }}<br />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lyzik',
  props: {
    top: {
      type: Number,
      default: 0,
    },
    lyzik: {
      type: Array,
      default: () => [],
    },
    saveIndexOfLyzik: {
      type: Number,
      default: 0,
    },
    windowWidth: {
      type: Number,
      default: 0,
    },
    windowHeight: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped>
.lyzik {
  height: 69px;
  position: fixed;
  bottom: 120px;
  width: calc(100vw - 400px);
  max-width: 966px;
  .lyzik-wrap {
    height: 69px;
    width: 100%;
    float: right;
    overflow: hidden;
    span {
      display: block;
      position: relative;
      transition: 0.3s;
      height: 23px !important;
      text-align: center;
    }
  }
}
@media only screen and (max-width: 1023px) {
  .lyzik {
    width: calc(100vw - 400px);
  }
}
@media only screen and (max-width: 800px) {
  .lyzik {
    width: calc(100vw);
    margin-left: 100px !important;
  }
}
@media only screen and (max-width: 600px) {
  .lyzik {
    margin-left: 0 !important;
  }
}
</style>
