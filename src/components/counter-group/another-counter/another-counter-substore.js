import { store } from 'vuex+';
import comboCounter from './combo-counter/combo-counter-substore.js';

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

    console.log('--- Example of dispatching action in child ---', comboCounter.api.act.increase.replace('comboCounter/', 'comboCounter#hej/'));
    context.dispatch(comboCounter.api.act.increase.replace('comboCounter/', 'comboCounter#hejje/'), 10);
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
    ['comboCounter#hejje']: comboCounter, // eslint-disable-line
  },
});
