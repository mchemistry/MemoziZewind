<template>
  <div
    class="lyzik d-flex flex-row justfy-center align-center mb-3"
    :style="bottomResponsive"
  >
    <div class="spacer"></div>
    <div class="lyzik--wrap">
      <span
        v-for="(text, i) in lyzik"
        :key="i"
        class="text-subtitle-2 text-lyzik"
        :class="i === saveIndexOfLyzik - 2 && 'text-active'"
        :style="textLyzikstyle"
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
  computed: {
    textLyzikstyle() {
      const style = {}
      style.transform = `translateY(${this.top}px) scale(var(--scale))`
      return style
    },
    bottomResponsive() {
      const style = {}
      style.bottom =
        this.windowHeight > 767
          ? `${(this.windowHeight - 767) / 2 + 120}px !important`
          : '120px'
      return style
    },
  },
}
</script>

<style lang="scss" scoped>
$scale: 1;
.lyzik {
  height: 69px;
  position: fixed;
  width: calc(100vw - 400px);
  max-width: 966px;
  .lyzik--wrap {
    height: 69px;
    width: 100%;
    float: right;
    overflow: hidden;
    span {
      display: block;
      position: relative;
      transition: all 0.3s;
      height: 23px !important;
      text-align: center;
      color: #f0a51041;

      --scale: 1;
      &.text-active {
        color: #f0a410 !important;

        --scale: 1.15;
      }
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
