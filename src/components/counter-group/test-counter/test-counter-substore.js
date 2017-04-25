import { store } from 'vuex+';
import comboCounter from '../another-counter/combo-counter/combo-counter-substore.js';

const initialState = {
  count: 0,
};

const getters = {
  count: state => state.count,
};

const actions = {
  increase(context, amount) {
    amount = typeof amount === 'number' ? amount : 1;
    console.log('Action in instance "' + context.state['vuex+'].instance + '", Counter2, adding', amount);
    context.commit('increase', amount);

    console.log('--- Example of commiting mutation in child ---');
    context.commit(comboCounter.api.mutate.increase.replace('comboCounter/', 'comboCounter#sansa/'), 100);
  },
};

const mutations = {
  increase(state, amount) {
    console.log('Mutation in Counter2, adding', amount, '\n ');
    state.count += amount;
  },
};


export default store({
  state: initialState,
  getters,
  actions,
  mutations,
  modules: {
    ['comboCounter#sansa']: comboCounter, // eslint-disable-line
  },
});
