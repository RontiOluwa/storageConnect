import { createStore } from "vuex";

export default createStore({
  state: {
    visibile: true,
  },
  getters: {
    Visibility(state) {
      return state.visibile;
    },
  },
  mutations: {
    CHANGE_VISIBILITY(state, value) {
      state.visibile = value;
    },
  },
  actions: {
    changeVisibility({ commit }, value) {
      commit("CHANGE_VISIBILITY", value);
    },
  },
});
