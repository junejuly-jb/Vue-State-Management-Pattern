import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '../services/EventService.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    events: [],
    event: {}
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
    },

    CREATE_EVENT(state, payload) {
      state.events.push(payload)
    },

    GET_EVENT(state, payload) {
      state.event = payload
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
    },

    createEvents({ commit }, payload) {
      return EventService.addEvents(payload).then(() => {
        commit('CREATE_EVENT', payload)
      })
    },

    fetchEvent({ getters, commit }, id) {
      const event = getters.getThisEvent(id)

      if (event) {
        commit('GET_EVENT', event)
      }

      else {
        EventService.getEvent(id).then(response => {
          commit('GET_EVENT', response.data)
        })
      }
      
    }
  },

  getters: {

    getThisEvent: state => id => {
      return state.events.find(event => event.id == id)
    }
   
  }, 

  modules: {
  }
})
