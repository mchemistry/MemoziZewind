import Vuex from 'vuex'
import Vue from 'vue'
import muzik from './modules/muzik'
import layout from './modules/layout'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    modules: {
      muzik,
      layout,
    },
  })
}

export default store
