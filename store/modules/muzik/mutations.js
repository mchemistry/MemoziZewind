import _ from 'lodash'

export const mutations = {
  INIT_AUDIO: (state) => {
    state.currentTrackIndex = 0
    state.currentTrack = state.tracks[0]
    state.imgFront = state.tracks[0].cover
    state.imgBack = state.tracks[1].cover
    state.indexOfNextTrack = 0
    state.canPlay = false
    state.audio = new Audio()
    state.audio.src = state.tracks[0].source
    state.audio.oncanplay = () => {
      state.canPlay = true
    }
  },
  PLAY_MUZIK: (state) => {
    if (state.audio.paused) {
      const playedPromise = state.audio.play()
      if (playedPromise) {
        playedPromise
          .catch((e) => {
            state.canPlay = false
            // eslint-disable-next-line no-console
            console.log(e)
            if (
              e.name === 'NotAllowedError' ||
              e.name === 'NotSupportedError'
            ) {
              // eslint-disable-next-line no-console
              console.log(e.name)
            }
          })
          .then(() => {
            setTimeout(() => (state.canPlay = true), 500)
            state.audio.play()
            state.isTimerPlaying = true
            state.isPlay = true
            // eslint-disable-next-line no-console
            console.log('Playing sound !!!')
          })
      }
    } else {
      state.audio.pause()
      state.isTimerPlaying = false
      state.isPlay = false
    }
  },
  PREV_SONG: (state) => {
    state.oldState = state.state
    state.state = 'prev'
    if (state.currentTrackIndex > 0) {
      state.currentTrackIndex--
    } else {
      state.currentTrackIndex = state.tracks.length - 1
    }
    state.currentTrack = state.tracks[state.currentTrackIndex]
    state.imgBack = state.tracks[state.currentTrackIndex].cover
    setTimeout(() => {
      state.imgFront = state.tracks[state.currentTrackIndex].cover
    }, 900)
  },
  NEXT_SONG: (state) => {
    state.oldState = state.state
    state.state = 'next'
    if (_.isEqual(state.repeat, 2)) {
      // eslint-disable-next-line no-self-assign
      state.currentTrackIndex = state.currentTrackIndex
    } else if (state.currentTrackIndex < state.tracks.length - 1) {
      state.currentTrackIndex++
    } else {
      state.currentTrackIndex = 0
    }
    state.currentTrack = state.tracks[state.currentTrackIndex]
    setTimeout(() => {
      state.imgFront = state.tracks[state.currentTrackIndex].cover
    }, 900)
    state.imgBack = state.tracks[state.currentTrackIndex].cover
  },
  RESET_PLAYER: (state) => {
    state.canPlay = false
    state.saveIndexOfLyzik = 3
    state.top = 0
    state.barTimer = 0
    state.audio.currentTime = 0
    state.audio.src = state.currentTrack.source
    state.audio.oncanplay = () => {
      state.canPlay = true
    }
    if (state.isTimerPlaying) {
      state.audio.play()
      state.isPlay = true
    } else {
      state.audio.pause()
      state.isPlay = false
    }
  },
  SHUFFLE_TRACKS: (state) => {
    if (state.isShuffle) {
      state.isShuffle = false
      state.tracks = state.originalTracks
    } else {
      state.isShuffle = true
      state.tracks = _.shuffle(state.originalTracks)
    }
    state.currentTrackIndex = state.tracks.indexOf(state.currentTrack)
  },
  REPEAT_TRACK: (state) => {
    state.repeat++
    state.repeat = state.repeat % 3
  },
  GENERATE_TIMER: (state) => {
    const timer = Math.ceil(state.audio.duration)
    const curTimer = Math.ceil(state.audio.currentTime)
    state.barTimer = (1000 / timer) * curTimer
    let minute = Math.floor(timer / 60)
    let second = timer - minute * 60
    let curMinute = Math.floor(curTimer / 60)
    let curSecond = curTimer - curMinute * 60
    if (minute < 10) {
      minute = '0' + minute
    }
    if (second < 10) {
      second = '0' + second
    }
    if (curMinute < 10) {
      curMinute = '0' + curMinute
    }
    if (curSecond < 10) {
      curSecond = '0' + curSecond
    }
    state.duration = `${minute}:${second}`
    state.currentTime = `${curMinute}:${curSecond}`
  },
  SKIP_TO_TIMER: (state, value) => {
    const timer = Math.ceil(state.audio.duration)
    const curTimer = (value * timer) / 1000
    //    const breakPointTime = state.audio.currentTime
    let count = 0
    let saveIndex = 0
    for (let i = 3; i < state.currentTrack.lyzik.timer.length; i++) {
      if (state.currentTrack.lyzik.timer[i] < Math.ceil(curTimer)) {
        count++
      } else {
        saveIndex = i
        break
      }
    }
    state.top = -(23 * count)
    state.saveIndexOfLyzik = saveIndex
    if (value !== 0) {
      state.isTimerPlaying = true
      state.audio.currentTime = curTimer
      state.barTimer = (1000 / timer) * curTimer
    }
    state.audio.play()
    state.isPlay = true
  },
  LYZIK_TRACK: (state) => {
    const len = state.currentTrack.lyzik.timer.length
    const timer = Math.ceil(state.audio.currentTime)
    for (let i = state.saveIndexOfLyzik; i < len; i++) {
      if (_.isEqual(timer, state.currentTrack.lyzik.timer[i])) {
        state.top -= 23
        state.saveIndexOfLyzik++
      }
    }
  },
  TOGGLE_VOLUME: (state) => {
    if (state.muted) {
      state.muted = false
      state.audio.muted = false
    } else {
      state.muted = true
      state.audio.muted = true
    }
  },
  // PLAY_TRACK_INDEX: (state, index) => {
  //   // eslint-disable-next-line no-console
  //   console.log(
  //     `Index -> ${index} \n state.IndexTrack -> ${
  //       state.currentTrackIndex
  //     } \n check Index -> ${index === state.currentTrackIndex}`
  //   )
  //   if (index === state.currentTrackIndex) {
  //     if (state.isPlay) {
  //       state.audio.pause()
  //       state.isPlay = false
  //       return false
  //     } else {
  //       state.audio.play()
  //       state.isPlay = true
  //       return false
  //     }
  //   } else {
  //     state.currentTrackIndex = index
  //     state.currentTrack = state.tracks[index]
  //     state.imageCover = state.currentTrack.cover
  //     state.name = state.currentTrack.name
  //     state.artist = state.currentTrack.artist
  //   }
  //   return true
  // },
}
