import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false,
    error: false,
    isHaveToken: false,
  },
  mutations: {},
  actions: {},
  modules: {},
});
