const state = {
  counter1: 10
}

const mutations = {
  increment (state) {
    state.counter1 += 100
  }
}
const getters = {
  getCount (state) {
    return state.counter1
  }
}
const actions = {
  increment1 ({commit}) {
    commit('counter/increment', '', { root: true })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
