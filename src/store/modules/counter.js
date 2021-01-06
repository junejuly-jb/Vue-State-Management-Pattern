export const namespaced = true

export const state = {
    count: 0
}

export const mutations = {

    INCREMENT_COUNT(state, value) {
      state.count = state.count + value
    },

    RESET_COUNT(state, value) {
      state.count = value
    },

}

export const actions = {

    incrementCount({ commit }, value) {
      commit('INCREMENT_COUNT', value)
    }

}