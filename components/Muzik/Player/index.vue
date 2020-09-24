<template>
  <div
    id="player-controller"
    class="d-flex flex-row justify-center align-center"
    :style="style"
  >
    <div class="track-info px-3 d-flex flex-row">
      <img
        :src="currentTrack.cover"
        alt="Image Cover"
        class="track-info__img"
      />
      <div class="track-info__title py-2 ml-4">
        <span class="text-subtitle-1">{{ currentTrack.name }}</span>
        <br />
        <span class="text-body-2 light--text">{{ currentTrack.artist }}</span>
      </div>
    </div>
    <div class="player-swap d-flex flex-row justify-center align-center">
      <div
        class="d-flex flex-row player justify-space-between align-center buttons-controller mx-auto py-0"
      >
        <v-icon
          class="icon-player"
          :disabled="!canPlay"
          color="white"
          @click="prevSong()"
          >mdi mdi-skip-previous</v-icon
        >
        <v-icon
          class="icon-player"
          :disabled="!canPlay"
          color="white"
          x-large
          @click="playMuzik()"
        >
          {{ isPlay ? 'mdi mdi-pause-circle' : 'mdi mdi-play-circle' }}
        </v-icon>
        <v-icon
          class="icon-player"
          :disabled="!canPlay"
          color="white"
          @click="nextSong()"
          >mdi mdi-skip-next</v-icon
        >
      </div>
      <div class="player-swap__bar-timer d-flex flex-row">
        <v-slider
          v-model="timer"
          class="text-subtitle-2 py-0 ml-15 mt-2 timer-slider"
          max="1000"
          :label="canPlay ? currentTime + ' / ' + duration : ''"
          :inverse-label="true"
          :disabled="!canPlay"
          track-color="light"
          track-fill-color="red"
          thumb-color="red"
          @click="skipToTimer(slider)"
        >
        </v-slider>
        <v-progress-circular
          v-if="!canPlay"
          class="loader mt-3"
          :size="20"
          :width="3"
          color="element"
          indeterminate
        ></v-progress-circular>
        <v-icon
          class="icon-volume mx-10 px-2"
          :disabled="!canPlay"
          color="white"
          @click="toggleVolume()"
          >{{ muted ? 'mdi mdi-volume-off' : 'mdi mdi-volume-high' }}</v-icon
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Disk',
  props: {
    isPlay: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: String,
      default: '',
    },
    currentTime: {
      type: String,
      default: '',
    },
    barTimer: {
      type: Number,
      default: 0,
    },
    canPlay: {
      type: Boolean,
      default: false,
    },
    currentTrack: {
      type: Object,
      default: () => {},
    },
    muted: {
      type: Boolean,
      default: false,
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
  data() {
    return {
      slider: 0,
    }
  },
  computed: {
    timer: {
      get() {
        return this.barTimer
      },
      set(val) {
        this.slider = val
      },
    },
    style() {
      const style = {}
      style.bottom =
        this.windowHeight > 767 ? `${(this.windowHeight - 767) / 2}px` : 0
      return style
    },
  },
  created() {
    this.checkMuzikPage()
  },
  destroyed() {
    this.checkMuzikPage()
  },
  methods: {
    ...mapActions('muzik', [
      'prevSong',
      'nextSong',
      'resetPlayer',
      'playMuzik',
      'skipToTimer',
      'toggleVolume',
    ]),
    ...mapActions('layout', ['checkMuzikPage']),
  },
}
</script>
<style scoped>
#player-controller {
  height: 100px;
  position: fixed;
  width: calc(100vw - 400px);
  max-width: 966px;
  margin: 0 10px 10px 10px;
  margin-right: 10px !important;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.player-swap {
  width: 100%;
}
.buttons-controller {
  width: 150px;
}
.icon-volume {
  cursor: pointer;
}
.track-info {
  height: 100px;
  width: 400px;
}
.track-info__img {
  width: 80px;
  height: 80px;
  margin-top: 10px;
  border: 5px solid rgba(0, 89, 255, 0.329);
}
.track-info__title {
  min-width: 100px;
}
.player-swap__bar-timer {
  width: 100%;
}
span {
  display: inline-block;
  width: 100%;
}
>>> .theme--dark.v-messages {
  display: none !important;
}
>>> .theme--dark.v-label {
  font-size: 14px;
  margin-top: 4px;
  color: white;
  margin-left: 15px !important;
}
>>> .theme--dark.v-slider .v-slider__track-fill {
  background: linear-gradient(
    90deg,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  ) !important;
}
@media only screen and (max-width: 1240px) {
  .player-swap {
    flex-direction: column !important;
  }
  .player {
    order: 1;
    margin-bottom: 10px;
  }
  .player-swap__bar-timer {
    order: 0;
  }
  .icon-volume {
    order: 0;
    margin: 0 !important;
    margin-right: 16px !important;
    top: -5px;
  }
  .timer-slider {
    order: 1;
    margin: 0 !important;
  }
  .loader {
    margin-top: 6px !important;
    order: 2;
  }
}
@media only screen and (max-width: 1023px) {
  #player-controller {
    width: calc(100vw - 400px);
  }
  .track-info {
    display: none !important;
  }
}
@media only screen and (max-width: 800px) {
  #player-controller {
    height: 100px;
    width: 100vw;
    bottom: 0;
    margin: 0 0 10px 10px;
    padding-right: 25px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .track-info {
    display: inherit !important;
  }
}
@media only screen and (max-width: 600px) {
  .track-info {
    display: none !important;
  }
  >>> .theme--dark.v-label {
    font-size: 12px;
    margin-left: 4px !important;
  }
  .icon-volume {
    margin: 0 8px 0 0 !important;
  }
}
</style>
