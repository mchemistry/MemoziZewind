<template>
  <div
    id="player-dragable"
    ref="player-dragable"
    class="d-flex flex-row justify-center align-center"
    :style="show && { opacity: 1 }"
    @mouseover="show = true"
    @mouseleave="show = false"
    @dragstart="(e) => initDragableEvent(e)"
    @dragover="(e) => dragableEvent(e)"
    @dragend="(e) => stopDragableEvent(e)"
  >
    <img
      class="muzik-cover"
      :src="currentTrack.cover"
      alt="muzik cover"
      :class="isPlay && 'play'"
    />
    <v-slide-x-transition>
      <div v-if="show" class="player-controller d-flex flex-row py-1">
        <v-btn icon class="ml-4" :disabled="!canPlay" @click="prevSong()">
          <v-icon color="white"> mdi mdi-skip-previous </v-icon>
        </v-btn>
        <v-btn icon :disabled="!canPlay" @click="playMuzik()">
          <v-icon color="white">
            {{ isPlay ? 'mdi mdi-pause-circle' : 'mdi mdi-play-circle' }}
          </v-icon>
        </v-btn>
        <v-btn icon :disabled="!canPlay">
          <v-icon color="white" @click="nextSong()"> mdi mdi-skip-next </v-icon>
        </v-btn>
        <v-btn icon class="mr-1" @click="togglePlayer()">
          <v-icon color="white"> mdi mdi-close-circle </v-icon>
        </v-btn>
      </div>
    </v-slide-x-transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'DragablePlayer',
  props: {
    isPlay: {
      type: Boolean,
      default: false,
    },
    canPlay: {
      type: Boolean,
      default: false,
    },
    currentTrack: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      show: false,
      isMouseDown: false,
      initXPos: 0,
      initYPos: 0,
      width: 0,
      height: 0,
      dragable: null,
    }
  },
  mounted() {
    this.dragable = this.$refs['player-dragable']
    this.width = this.dragable.offsetWidth
    this.height = this.dragable.offsetHeight
  },
  methods: {
    ...mapActions('muzik', ['prevSong', 'nextSong', 'playMuzik']),
    ...mapActions('layout', ['togglePlayer']),
    initDragableEvent(e) {
      this.isMouseDown = true
      this.initXPos = e.offsetX
      this.initYPos = e.offsetY
      this.dragable.style.cursor = 'move'
    },
    dragableEvent(e) {
      if (this.isMouseDown) {
        let cX = e.clientX - this.initXPos
        let cY = e.clientY - this.initYPos
        if (cX < 0) cX = 0
        if (cY < 0) cY = 0
        if (window.innerWidth - e.clientX + this.initXPos < this.width) {
          cX = window.innerWidth - this.width
        }
        if (window.innerHeight - e.clientY + this.initYPos < this.height) {
          cX = window.innerHeight - this.height
        }
        this.dragable.style.top = cY + 'px'
        this.dragable.style.left = cX + 'px'
      }
    },
    stopDragableEvent() {
      this.isMouseDown = false
      this.dragable.style.cursor = 'context-menu'
    },
  },
}
</script>

<style lang="scss">
#player-dragable {
  position: fixed;
  height: 3.5rem;
  bottom: 0.5rem;
  left: 0.25rem;
  z-index: 100;
  opacity: 0.2;
  .muzik-cover {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: 0.25rem solid rgba(0, 89, 255, 0.329);
    z-index: 99;
    animation: rotation 10s infinite linear;
    animation-play-state: paused;
    &.play {
      animation-play-state: running;
    }
  }
  .player-controller {
    position: relative;
    left: -16px;
    background-color: rgba(0, 89, 255, 0.329);
    border-top-right-radius: 22px;
    border-bottom-right-radius: 22px;
    z-index: 98;
    transition: all 0.5s;
  }
}
</style>
