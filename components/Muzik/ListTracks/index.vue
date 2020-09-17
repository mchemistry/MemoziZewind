<template>
  <div>
    <img
      v-if="windowWidth < 800"
      src="~/assets/images/icons/list_tracks.svg"
      alt="List Tracks"
      class="music-library"
      @click.stop="toggleTracksList = !toggleTracksList"
    />
    <v-navigation-drawer
      v-model="toggleTracksList"
      right
      fixed
      :permanent="windowWidth >= 800"
      :width="320"
      class="list-of-tracks mr-3"
      color="transparent"
      :style="[
        windowWidth > 1366
          ? { 'margin-right': (windowWidth - 1366) / 2 + 'px !important' }
          : '',
        windowHeight > 767
          ? { 'margin-top': (windowHeight - 767) / 2 + 'px !important' }
          : '',
      ]"
    >
      <v-list-item class="px-0">
        <v-list-item-content class="mx-2">
          <v-list-item-title
            class="mb-4 element--text text-center tracks-title text-subtitle-1"
          >
            <v-icon
              v-if="windowWidth < 800"
              class="btn-hide-tracks-list"
              color="light"
              @click.stop="toggleTracksList = !toggleTracksList"
              >mdi mdi-chevron-double-right</v-icon
            >LIST TRACKS
          </v-list-item-title>
          <div class="buttons-controller d-flex flex-row px-0">
            <v-icon
              class="icon-player ml-2"
              :medium="true"
              :color="isShuffle ? 'element' : 'light'"
              @click="shuffleTracks()"
              >mdi mdi-shuffle</v-icon
            >
            <v-spacer></v-spacer>
            <v-icon
              class="icon-playe mr-5"
              :medium="true"
              :color="repeat == 0 ? 'light' : 'element'"
              @click="repeatTrack()"
            >
              {{
                repeat == 1 || repeat == 0
                  ? 'mdi mdi-repeat'
                  : 'mdi mdi-repeat-once'
              }}
            </v-icon>
          </div>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <vue-scroll :ops="ops" style="padding-bottom: 84px !important">
        <transition-group name="flip-list" tag="div">
          <v-list-item
            v-for="(item, index) in tracks"
            :key="item.name"
            color="transparent"
            class="list-item"
            :style="[
              index === currentTrackIndex ? { 'padding-left': 23 + 'px' } : '',
            ]"
            @click="canPlay ? playTrackIndex(index) : null"
          >
            <v-list-item-icon class="mr-4">
              <v-icon>
                {{
                  index === currentTrackIndex && isPlay
                    ? 'mdi mdi-pause'
                    : 'mdi mdi-play'
                }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content class="px-0 mx-0">
              <v-list-item-title class="white--text text-body-2 name-of-song">
                {{ item.name }}
              </v-list-item-title>
              <v-list-item-title class="light--text text-body-2">
                {{ item.artist }}
              </v-list-item-title>
            </v-list-item-content>
            <span class="total-track-timer white--text text-body-2 mr-3">
              {{ item.duration }}
            </span>
            <span
              v-if="index === currentTrackIndex"
              class="track-timer-bar"
              :style="{ width: (barTimer * 320) / 1000 + 'px' }"
            ></span>
            <span v-if="index === currentTrackIndex" class="active"></span>
          </v-list-item>
        </transition-group>
      </vue-scroll>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    tracks: {
      type: Array,
      default: () => [],
    },
    isPlay: {
      type: Boolean,
      default: false,
    },
    isShuffle: {
      type: Boolean,
      default: false,
    },
    repeat: {
      type: Number,
      default: 0,
    },
    barTimer: {
      type: Number,
      default: 0,
    },
    canPlay: {
      type: Boolean,
      default: false,
    },
    currentTrackIndex: {
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
  data: () => ({
    toggleTracksList: false,
    ops: {
      rail: {
        opacity: '1',
        background: 'trasparent',
        border: 'none',
        specifyBorderRadius: '0px',
        size: '6px',
        gutterOfSide: '0px',
        keepShow: true,
      },
      bar: {
        background: 'rgba(240, 248, 255, 0.267)',
        keepShow: true,
        size: '3px',
        minSize: 0.1,
        specifyBorderRadius: '5px',
      },
      scrollButton: {
        enable: false,
        background: '#cecece',
      },
      scrollPanel: {
        easing: 'easeInQuad',
        speed: 800,
      },
      vuescroll: {
        wheelScrollDuration: 0,
        wheelDirectionReverse: false,
        mode: 'native',
        sizeStrategy: 'number',
        detectResize: true,
      },
      maxHeight: 1,
    },
  }),
  methods: {
    ...mapActions('muzik', ['shuffleTracks', 'repeatTrack', 'playTrackIndex']),
  },
}
</script>
<style scoped>
>>> .v-navigation-drawer__content {
  overflow: hidden !important;
}
>>> .v-list-item__content {
  padding: 12px 0 !important;
}
.list-of-tracks {
  height: calc(100vh - 24px) !important;
  margin-top: 12px;
  max-height: 767px;
}
.flip-list-move {
  transition: transform 1s;
}
.track-timer-bar {
  height: 56px;
  position: absolute;
  background: linear-gradient(
    90deg,
    rgba(63, 94, 251, 0.8) 0%,
    rgba(252, 70, 106, 0.8) 100%
  );
  z-index: -1;
  left: 0;
}
.name-of-song {
  width: 194px !important;
}
.list-item {
  transition: all 0.5s;
}
.list-item:hover {
  padding-left: 23px;
  transition: all 0.5s;
}
.active {
  height: 56px;
  width: 320px;
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  z-index: -9999;
  left: 0;
}
.music-library {
  position: fixed !important;
  top: 25px;
  right: 25px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  z-index: 0;
}
@media only screen and (max-width: 1023px) {
  .list-of-tracks {
    height: 100vh !important;
    margin: 0 !important;
    border-radius: 0;
  }
}
@media only screen and (max-width: 799px) {
  .list-of-tracks {
    background: linear-gradient(to right, #594d80, #1765bf) !important;
  }
  .btn-hide-tracks-list {
    cursor: pointer;
    position: relative;
    font-size: 32px;
    left: -70px;
  }
  .tracks-title {
    margin-right: 32px !important;
  }
}
@media only screen and (max-width: 500px) {
  .btn-hide-tracks-list {
    left: -70px;
  }
}
@keyframes leftright {
  0%,
  20% {
    transform: translateX(0%);
    left: 0%;
  }
  80%,
  100% {
    transform: translateX(-100%);
    left: 100%;
  }
}
</style>
