import Vue from 'vue'
import Vuex from 'vuex'
import * as event from '../store/modules/event'
import * as counter from '../store/modules/counter'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editMode: false
  },

  mutations: {
    SET_EDITMODE( state , payload) {
      if (payload == true) {
        state.editMode = false
      }
      else {
        state.editMode = true
      }
    }
  },

  actions: {

  },

  modules: {
    event,
    counter
  }

})
