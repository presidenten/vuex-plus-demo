import { store } from 'vuex+';
import anotherCounter from './another-counter/another-counter-substore.js';

const initialState = {
  count: 0,
};

const getters = {
  count: state => state.count,
};

const actions = {
  increase(context, amount) {
    amount = typeof amount === 'number' ? amount : 1;
    console.log('Action in instance "' + context.state['vuex+'].instance + '", Counter1, adding', amount);
    context.commit('increase', amount);
  },
};

const mutations = {
  increase(state, amount = 1) {
    console.log('Mutation in Counter1, adding', amount, '\n ');
    state.count += amount;
  },
};

export default store({
  state: initialState,
  getters,
  actions,
  mutations,
  modules: {
    anotherCounter,
  },
});
