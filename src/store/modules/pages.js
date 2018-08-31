export default {
  namespaced: true,
  state: {
    pages: [
      { id: 1, title: 'home' },
      { id: 2, title: 'about' }
    ]
  },
  mutations: {
    destroy (state, { id }) {
      const page = state.pages.find(page => page.id === id)
      const pageIndex = state.pages.indexOf(page)
      state.pages.splice(pageIndex, 1)
    }
  },
  actions: {
    destroy ({ commit, id }) {
      commit('destroy', { id })
    }
  }
}