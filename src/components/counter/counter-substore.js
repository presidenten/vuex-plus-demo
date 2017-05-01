import { store } from 'vuex+';

const initialState = {
  count: 0,
};

const getters = {
  count: state => state.count,
};

const actions = {
  increase(context, amount) {
    amount = typeof amount === 'number' ? amount : 1;
    console.log('Action in counter "' + (context.state['vuex+'].instance || '')
                                       + '", adding', amount);
    context.commit('increase', amount);
  },
};

const mutations = {
  increase(state, amount) {
    console.log('Mutation in Counter, adding', amount, '\n ');
    state.count += amount;
  },
};


export default store({
  state: initialState,
  getters,
  actions,
  mutations,
});
