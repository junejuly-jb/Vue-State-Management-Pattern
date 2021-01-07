import Vue from 'vue'
import Vuex from 'vuex'
import * as event from '../store/modules/event'
import * as counter from '../store/modules/counter'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editMode: false
  },
  modules: {
    event,
    counter
  }

})
