import { store, api, instance } from 'vuex+';
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

    console.log('--- Example of dispatching action in child ---');
    context.dispatch(comboCounter.api.act.increase, 10);

    console.log('--- Example of commiting mutation in child ---');
    context.commit(comboCounter.api.mutate.increase, 100);

    console.log('--- Example of dispatching action action in same instance ---');
    instance.dispatch({
      path: api.counterGroup.anotherCounter.comboCounter.act.increase,
      data: 1000,
      context,
    });

    console.log('--- Example of commiting mutation in same instance ---');
    instance.commit({
      path: api.counterGroup.anotherCounter.comboCounter.mutate.increase,
      data: 10000,
      context,
    });

    // Example of reading getters from same store instance
    console.log('--- Example getter from parent ---', instance.get({ path: api.counterGroup.get.count, context }));
    console.log('--- Example getter from child ---', instance.get({ path: api.counterGroup.anotherCounter.comboCounter.get.count, context }), '\n ');
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
    comboCounter,
  },
});
