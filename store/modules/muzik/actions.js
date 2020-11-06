import _ from 'lodash'

export const actions = {
  initAudio: ({ dispatch, commit, state }) => {
    commit('INIT_AUDIO')
    state.audio.ontimeupdate = () => {
      dispatch('generateTimer')
      dispatch('lyzikTrack')
    }
    state.audio.onloadedmetadata = () => {
      dispatch('generateTimer')
    }
    state.audio.onended = () => {
      if (_.isEqual(state.repeat, 0)) {
        if (
          _.isEqual(state.currentTrack, state.tracks[state.tracks.length - 1])
        ) {
          state.isTimerPlaying = false
          state.currentTrack = state.tracks[state.tracks.length - 1]
          state.currentTrackIndex = state.tracks.length - 1
          dispatch('resetPlayer')
        } else {
          dispatch('nextSong')
        }
      } else {
        dispatch('nextSong')
      }
    }
  },
  playMuzik: ({ commit }) => commit('PLAY_MUZIK'),
  resetPlayer: ({ commit }) => commit('RESET_PLAYER'),
  prevSong: ({ dispatch, commit }) => {
    commit('PREV_SONG')
    dispatch('resetPlayer')
  },
  nextSong: ({ dispatch, commit }) => {
    commit('NEXT_SONG')
    dispatch('resetPlayer')
  },
  shuffleTracks: ({ commit }) => commit('SHUFFLE_TRACKS'),
  repeatTrack: ({ commit }) => commit('REPEAT_TRACK'),
  generateTimer: ({ commit }) => commit('GENERATE_TIMER'),
  skipToTimer: ({ commit }, value) => commit('SKIP_TO_TIMER', value),
  lyzikTrack: ({ commit }) => commit('LYZIK_TRACK'),
  toggleVolume: ({ commit }) => commit('TOGGLE_VOLUME'),
  playTrackIndex: ({ dispatch, state }, index) => {
    if (index === state.currentTrackIndex) {
      if (!state.isPlay) {
        state.audio.play()
        state.isTimerPlaying = true
        state.isPlay = true
      } else {
        state.audio.pause()
        state.isTimerPlaying = false
        state.isPlay = false
      }
    } else {
      state.oldState = state.state
      if (index > state.currentTrackIndex) {
        state.state = 'next'
      } else {
        state.state = 'prev'
      }
      state.currentTrackIndex = index
      state.currentTrack = state.tracks[index]
      setTimeout(() => {
        state.imgFront = state.tracks[state.currentTrackIndex].cover
      }, 900)
      state.imgBack = state.tracks[state.currentTrackIndex].cover
      dispatch('resetPlayer')
    }
  },
}
