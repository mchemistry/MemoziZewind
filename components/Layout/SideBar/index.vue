<template>
  <div>
    <v-app-bar
      v-if="!isMuzikPage && windowWidth >= 500"
      color="primary"
      dense
      fixed
      dark
      style="z-index: 100"
    >
      <v-app-bar-nav-icon
        @click.stop="drawerLeft = !drawerLeft"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>{{ routerName }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon :disabled="!canPlay" @click="prevSong()">
        <v-icon color="white"> mdi mdi-skip-previous </v-icon>
      </v-btn>
      <v-btn icon :disabled="!canPlay" @click="playMuzik()">
        <v-icon color="white">
          {{ isPlay ? 'mdi mdi-pause' : 'mdi mdi-play' }}
        </v-icon>
      </v-btn>
      <v-btn icon class="mr-10" :disabled="!canPlay" @click="nextSong()">
        <v-icon color="white"> mdi mdi-skip-next </v-icon>
      </v-btn>
    </v-app-bar>
    <v-icon
      v-else
      class="menu"
      :class="isMuzikPage && 'menu__muzik-page'"
      @click.stop="drawerLeft = !drawerLeft"
      >mdi mdi-menu</v-icon
    >
    <v-navigation-drawer
      v-model="drawerLeft"
      dark
      fixed
      :style="style"
      :color="isMuzikPage ? '' : 'primary'"
      :class="isMuzikPage && 'muzik__side-bar'"
      class="side-bar"
    >
      <v-list-item>
        <v-list-item-content class="d-flex flex-row">
          <v-list-item-subtitle
            class="element--text text-subtitle-2 d-flex flex-row"
          >
            <span class="mt-1">@MENU</span>
            <v-spacer></v-spacer>
            <v-icon right @click.stop="drawerLeft = !drawerLeft">
              mdi mdi-chevron-double-left
            </v-icon>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item
          v-for="item in menu"
          :key="item.title"
          :to="item.to"
          link
          @click="drawerLeft = !drawerLeft"
        >
          <v-list-item-icon>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="mt-1 white--text">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list-item-content class="d-flex flex-row">
        <v-list-item-subtitle
          class="element--text text-subtitle-2 d-flex flex-row ml-3"
        >
          @SETTING
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-divider></v-divider>
      <v-switch
        v-model="toggleMiniPlayer"
        color="element"
        label="SHOW MINI PLAYER"
        class="ml-3"
      ></v-switch>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { layout } from '@/constants/app'

export default {
  name: 'SideBar',
  props: {
    routerName: {
      type: String,
      default: 'Memozi Zewind',
    },
  },
  data() {
    return {
      drawerLeft: null,
    }
  },
  computed: {
    ...mapGetters('layout', [
      'isMuzikPage',
      'windowWidth',
      'windowHeight',
      'toggleMuzikPlayer',
    ]),
    ...mapGetters('muzik', ['isPlay', 'canPlay']),
    toggleMiniPlayer: {
      get() {
        return this.toggleMuzikPlayer
      },
      set() {
        this.togglePlayer()
      },
    },
    style() {
      const style = {}
      style['margin-left'] =
        this.windowWidth > 1366 && this.isMuzikPage
          ? `${(this.windowWidth - 1368) / 2}px !important`
          : '0'
      style['margin-top'] =
        this.windowHeight > 767 && this.isMuzikPage
          ? `${(this.windowHeight - 767) / 2}px !important`
          : '0'
      return style
    },
    menu() {
      return layout.menu
    },
  },
  methods: {
    ...mapActions('layout', [
      'checkMuzikPage',
      'getLayoutSize',
      'togglePlayer',
      'showMiniPlayer',
    ]),
    ...mapActions('muzik', [
      'prevSong',
      'nextSong',
      'playMuzik',
      'toggleVolume',
    ]),
  },
}
</script>

<style lang="scss" scoped>
.side-bar {
  color: white;
  z-index: 101;
}
.menu {
  position: fixed !important;
  top: 15px;
  left: 15px;
  cursor: pointer;
  z-index: 100;
}
.menu__muzik-page {
  top: 25px !important;
  left: 25px !important;
}
.muzik__side-bar {
  height: calc(100vh - 24px) !important;
  max-height: 768px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  background: linear-gradient(to right, #594d80, #1765bf) !important;
  z-index: 101;
  margin-top: 12px !important;
  margin-left: 12px !important;
}
@media only screen and (max-width: 1023px) {
  .muzik__side-bar {
    height: 100vh !important;
    margin-top: 0 !important;
    margin-left: 0 !important;
    border-radius: 0;
  }
}
</style>
