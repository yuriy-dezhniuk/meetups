import firebase from 'firebase';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    resetStore(state) {
      state.user = null;
    },
  },
  actions: {
    async signUserUp({ commit }, { email, password }) {
      const { user } = await firebase.auth()
        .createUserWithEmailAndPassword(email, password);
      const newUser = { id: user.uid };
      commit('setUser', newUser);
    },
    async signUserIn({ commit }, { email, password }) {
      const { user } = await firebase.auth()
        .signInWithEmailAndPassword(email, password);
      commit('setUser', { id: user.uid });
    },
    autoSignIn(store, { uid }) {
      store.commit('setUser', { id: uid });
    },
  },
  modules: {
  },
});
