import { store, api, global, newInstance } from 'vuex+';
import counter from '@/components/counter/counter-substore.js';

const counter$single = newInstance(counter, 'single');
const counter$multi = newInstance(counter, 'multi');

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
    context.dispatch(counter$multi.api.act.increase, 10);

    console.log('--- Example of commiting mutation in child ---');
    context.commit(counter$multi.api.mutate.increase, 100);

    console.log('--- Example of dispatching action action in same instance ---');
    global.dispatch({
      path: api.counterGroup.anotherCounter.counter$multi.act.increase,
      data: 1000,
      context,
    });

    console.log('--- Example of commiting mutation in same instance ---');
    global.commit({
      path: api.counterGroup.anotherCounter.counter$multi.mutate.increase,
      data: 10000,
      context,
    });

    // Example of reading getters from same store instance
    console.log('--- Example getter from parent ---', global.get({ path: api.counterGroup.get.count, context }));
    console.log('--- Example getter from child ---', global.get({ path: api.counterGroup.anotherCounter.counter$multi.get.count, context }), '\n ');
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
    counter$single,
    counter$multi,
  },
});
