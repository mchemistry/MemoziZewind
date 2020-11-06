<template>
  <div class="track-infomations">
    <div class="flip-container">
      <transition
        :name="
          state === 'next' ? 'flip' : state === 'prev' ? 'reverse-flip' : null
        "
        mode="out-in"
        :duration="{
          enter: 1500,
          leave: 0,
        }"
        appear
      >
        <div :key="isStateChanged" class="wrapper">
          <div class="image-front">
            <img
              :src="imgFront"
              alt=""
              srcset=""
              style="
                border-radius: 50%;
                box-shadow: 0 25px 29px -10px rgba(237, 17, 72, 0.54);
                width: 300px;
                height: 300px;
              "
            />
          </div>
          <div class="image-back">
            <img
              :src="imgBack"
              alt=""
              srcset=""
              style="
                border-radius: 50%;
                box-shadow: 0 25px 29px -10px rgba(237, 17, 72, 0.54);
                width: 300px;
                height: 300px;
              "
            />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrackInfo',
  props: {
    imgFront: {
      type: String,
      default: 'https://picsum.photos/300',
    },
    imgBack: {
      type: String,
      default: 'https://picsum.photos/300',
    },
    currentTrackIndex: {
      type: Number,
      default: 0,
    },
    state: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isStateChanged: 0,
    }
  },
  watch: {
    currentTrackIndex: {
      handler(newVal, oldVal) {
        if (oldVal !== newVal) {
          this.isStateChanged++
        }
      },
      deep: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.flip-enter-active {
  animation: flip 1.5s forwards;
}

.reverse-flip-enter-active {
  animation: reverse-flip 1.5s forwards;
}
@keyframes flip {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  20% {
    -webkit-transform: rotateY(-30deg);
    transform: rotateY(-30deg);
  }
  50% {
    -webkit-transform: rotateY(195deg);
    transform: rotateY(195deg);
  }
  75% {
    -webkit-transform: rotateY(165deg);
    transform: rotateY(165deg);
  }
  100% {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes reverse-flip {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  20% {
    -webkit-transform: rotateY(30deg);
    transform: rotateY(30deg);
  }
  50% {
    -webkit-transform: rotateY(-195deg);
    transform: rotateY(-195deg);
  }
  75% {
    -webkit-transform: rotateY(-165deg);
    transform: rotateY(-165deg);
  }
  100% {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
  }
}
.track-infomations {
  position: absolute;
  top: calc(50vh - 280px);
  left: calc(50vw - 335px);
  overflow: hidden !important;
  .flip-container {
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-content: center;
    background: transparent;
    perspective: 1000px;
    .wrapper {
      position: relative;
      width: 300px;
      height: 300px;
      transition: all 0.8s;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
      &.flip {
        animation: flip 1.5s forwards;
      }
    }
    .image-front,
    .image-back {
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      text-align: center;
      backface-visibility: hidden;
      -moz-backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }
    .image-front {
      background: black;
      color: white;
    }
    .image-back {
      background: green;
      color: black;
      transform: rotateY(180deg);
    }
  }
}
@media only screen and (max-width: 799px) {
  .track-infomations {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
