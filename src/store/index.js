import Vue from "vue";
import Vuex from "vuex";

import pages from './modules/pages';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment ({ commit }) {
      commit('increment')
    }
  },
  modules: {
    pages
  }
});
