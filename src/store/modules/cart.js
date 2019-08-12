const errorLog = {
  state: {
    totalPrice: 0,
    counts: 'xx'
  },
  getters: {
  },
  mutations: {
    ADD_COUNT_HANDLE (state, { count }) {
      state.counts = state.counts + count
    }
  },
  actions: {
    addCount ({ commit }, data) {
      commit('ADD_COUNT_HANDLE', {count: data})
    }
  }
}

export default errorLog
