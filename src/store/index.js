import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    INCREMENT_COUNT(state, value) {
      state.count = state.count + value
    },

    RESET_COUNT(state, value) {
      state.count = value
    }
  },
  actions: {
    
    incrementCount({ commit }, value) {
      commit('INCREMENT_COUNT', value)
    },
    
  },
  modules: {
  }
})
