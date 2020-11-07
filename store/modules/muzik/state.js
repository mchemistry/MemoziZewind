import data from '@/static/data/muzik.json'

export const state = () => ({
  tracks: data.tracks,
  originalTracks: data.tracks,
  isShuffle: false,
  repeat: 0,
  duration: null,
  time: 0,
  currentTime: null,
  barTimer: 0,
  isTimerPlaying: false,
  currentTrack: data.tracks[0],
  currentTrackIndex: 0,
  isPlay: false,
  canPlay: false,
  top: 0,
  saveIndexOfLyzik: 3,
  muted: false,
  imgFront: null,
  imgBack: null,
  state: null,
  show: false,
})
