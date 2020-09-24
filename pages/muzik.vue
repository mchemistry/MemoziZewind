<template>
  <div id="muzik" class="mx-auto my-auto">
    <client-only>
      <track-infor :current-track="currentTrack" />
      <list-tracks
        :tracks="tracks"
        :is-play="isPlay"
        :is-shuffle="isShuffle"
        :repeat="repeat"
        :bar-timer="barTimer"
        :can-play="canPlay"
        :current-track-index="currentTrackIndex"
        :window-width="windowWidth"
        :window-height="windowHeight"
      />
      <lyzik
        class="mt-10"
        :top="top"
        :lyzik="currentTrack.lyzik.text"
        :save-index-of-lyzik="saveIndexOfLyzik"
        :window-width="windowWidth"
        :window-height="windowHeight"
      />
      <player
        class="mt-10"
        :is-play="isPlay"
        :duration="currentTrack.duration"
        :current-time="currentTime"
        :bar-timer="barTimer"
        :can-play="canPlay"
        :current-track="currentTrack"
        :muted="muted"
        :window-width="windowWidth"
        :window-height="windowHeight"
      />
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ListTracks from '~/components/Muzik/ListTracks'
import Lyzik from '~/components/Muzik/Lyzik'
import Player from '~/components/Muzik/Player'
import TrackInfor from '~/components/Muzik/TrackInfor'

export default {
  name: 'Muzik',
  layout: 'default',
  components: {
    ListTracks,
    Lyzik,
    Player,
    TrackInfor,
  },
  computed: {
    ...mapGetters('layout', ['windowWidth', 'windowHeight']),
    ...mapGetters('muzik', [
      'tracks',
      'isPlay',
      'isShuffle',
      'repeat',
      'currentTime',
      'barTimer',
      'canPlay',
      'currentTrack',
      'muted',
      'top',
      'lyzik',
      'saveIndexOfLyzik',
      'currentTrackIndex',
    ]),
    head() {
      return {
        title: `Page 1 (${this.name}-side)`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Page 1 description',
          },
        ],
      }
    },
  },
}
</script>
<style lang="scss" scoped>
#muzik {
  width: calc(100vw - 24px);
  max-width: 1366px;
  max-height: 767px;
  height: calc(100vh - 24px);
  background: linear-gradient(to right, #b92b27, #1565c0);
  border-radius: 12px;
  margin-left: 12px;
  margin-top: 12px;
  overflow: hidden !important;
  padding: 0 !important;
}
@media only screen and (max-width: 1023px) {
  #muzik {
    width: 100vw !important;
    height: 100vh !important;
    border-radius: 0;
    padding: 0 !important;
    margin: 0;
    overflow: hidden !important;
  }
}
</style>
