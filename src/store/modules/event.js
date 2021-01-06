import EventService from '../../services/EventService'

export const namespaced = true

export const state = {
    events: [],
    event: {}
}

export const mutations = {
    
    GET_EVENTS(state, payload) {
        state.events = payload
    },

    CREATE_EVENT(state, payload) {
        state.events.push(payload)
    },

    GET_EVENT(state, payload) {
        state.event = payload
    }

}
  
export const actions = {

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
        return EventService.getEvent(id).then(response => {
        commit('GET_EVENT', response.data)
        })
    }

    }

}

export const getters = {

    getThisEvent: state => id => {
      return state.events.find(event => event.id == id)
    }
   
  }