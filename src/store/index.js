import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '../services/EventService.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    events: []
  },
  mutations: {
    INCREMENT_COUNT(state, value) {
      state.count = state.count + value
    },

    RESET_COUNT(state, value) {
      state.count = value
    },

    GET_EVENTS(state, payload) {
      state.events = payload
    }
  },
  actions: {
    
    incrementCount({ commit }, value) {
      commit('INCREMENT_COUNT', value)
    },

    fetchEvents({ commit }) {
      EventService.getEvents()
        .then(response => {
          commit('GET_EVENTS', response.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    }
    
  },
  modules: {
  }
})
