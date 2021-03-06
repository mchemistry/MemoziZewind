export const mutations = {
  CHECK_MUZIK_PAGE(state) {
    state.isMuzikPage =
      this.app.router.history.current.name === 'muzik' ? true : null
  },
  GET_LAYOUT_SIZE(state) {
    state.windowWidth = window.innerWidth
    state.windowHeight = window.innerHeight
    window.onresize = () => {
      state.windowWidth = window.innerWidth
      state.windowHeight = window.innerHeight
      // eslint-disable-next-line no-console
      // console.log(
      //   `Check width layout -> ${state.windowWidth}\nCheck height layout -> ${state.windowHeight}`
      // )
    }
  },
  TOGGLE_PLAYER(state) {
    state.toggleMuzikPlayer = !state.toggleMuzikPlayer
  },
}
