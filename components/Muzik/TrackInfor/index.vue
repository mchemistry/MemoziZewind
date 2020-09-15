<template>
  <div class="track-infomations">
    <img src="https://i.ibb.co/10wrGwt/2.png" alt="Free" class="image-slider" />
    <p class="name-of-track text-center">{{ currentTrack.name }}</p>
    <p class="name-of-track text-center light--text">
      {{ currentTrack.artist }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TrackInfo',
  props: {
    currentTrack: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap');
.track-infomations {
  position: absolute;
  top: calc(50vh - 280px);
  left: calc(50vw - 335px);
  overflow: hidden !important;
  .image-slider {
    width: 400px;
    filter: drop-shadow(5px 5px 5px #222);
  }
  .name-of-track {
    display: none;
    font-family: 'Dancing Script', cursive !important;
    font-size: 24px;
  }
  &.light--text {
    font-size: 18px !important;
  }
}
@media only screen and (max-width: 1023px) {
  .name-of-track {
    display: inherit !important;
  }
}
@media only screen and (max-width: 799px) {
  .track-infomations {
    left: 50%;
    transform: translateX(-50%);
  }
  .name-of-track {
    display: none !important;
  }
}
@media only screen and (max-width: 600px) {
  .name-of-track {
    margin-top: 24px;
    display: inherit !important;
  }
  .image-slider {
    width: 300px !important;
  }
}
</style>
