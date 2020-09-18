<template>
  <v-app class="d-flex flex-column justify-center align-center default-layout">
    <client-only>
      <hiden-layout />
      <side-bar
        :router-name="
          $route.name === 'index' ? 'TIMELINE' : $route.name.toUpperCase()
        "
      />
      <dragable-player
        v-if="!isMuzikPage && windowWidth < 500 && toggleMuzikPlayer"
        :is-play="isPlay"
        :can-play="canPlay"
        :current-track="currentTrack"
      />
    </client-only>
    <v-slide-x-transition>
      <nuxt :nuxt-child-key="$route.name" />
    </v-slide-x-transition>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import SideBar from '@/components/Layout/SideBar'
import HidenLayout from '@/components/Layout/HidenLayout'
import DragablePlayer from '@/components/Muzik/DragablePlayer'
export default {
  components: {
    SideBar,
    HidenLayout,
    DragablePlayer,
  },
  computed: {
    ...mapGetters('layout', [
      'isMuzikPage',
      'windowWidth',
      'toggleMuzikPlayer',
    ]),
    ...mapGetters('muzik', ['isPlay', 'canPlay', 'currentTrack']),
  },
}
</script>

<style lang="scss" scoped>
.default-layout {
  z-index: 1000 !important;
  overflow: hidden !important;
}
</style>
