import { store, global, newInstance } from 'vuex+';
import counter from '@/components/counter/counter-substore.js';

const counter$single = newInstance(counter, 'single');
const counter$multi = newInstance(counter, 'multi');

const initialState = {
  count: 0,
};

const getters = {
  count: state => state.count,
  // Example mapping state from global
  parentCount: state => global.get({ path: global.api.counterGroup.get.count, state }),
};

const actions = {
  increase(context, amount) {
    amount = typeof amount === 'number' ? amount : 1;
    console.log('Action in instance "' + (context.state['vuex+'].instance || '')
                                       + '", Counter, adding', amount);
    context.commit('increase', amount);

    console.log('--- Example of dispatching action in child ---');
    context.dispatch(counter$single.api.act.increase, 10);
    context.dispatch(counter$multi.api.act.increase, 10);

    console.log('--- Example of commiting mutation in child ---');
    context.commit(counter$multi.api.mutate.increase, 100);

    console.log('--- Example of dispatching action action in same instance ---');
    global.dispatch({
      path: global.api.counterGroup.anotherCounter.counter$multi.act.increase,
      data: 1000,
      state: context.state, // Skip state property to make the call global
    });

    console.log('--- Example of commiting mutation in same instance ---');
    global.commit({
      path: global.api.counterGroup.anotherCounter.counter$multi.mutate.increase,
      data: 10000,
      state: context.state, // Skip state property to make the call global
    });

    // Example of reading own getters like normal
    console.log('--- Example parentCount getter from self, no vuex+ needed ---', context.getters.parentCount);
    console.log('--- Example child getter, counter$single, no vuex+ needed ---', counter$single.getters.count(context.state.counter$single));
    // Example of reading getters from global
    if(global.api.counterGroup) console.log('--- Example getter from parent with with known istance name "" ---', global.get({ path: global.api.counterGroup.get.count })); // eslint-disable-line
    if(global.api.counterGroup$foo) console.log('--- Example getter from parent with known instanc ename "foo" ---', global.get({ path: global.api.counterGroup$foo.get.count })); // eslint-disable-line
    console.log('--- Example getter from parent with global.get in same instance ---', global.get({ path: global.api.counterGroup.get.count, state: context.state }));
    // Example of reading getters from children
    console.log('--- Example getter from child in same instance ---', global.get({ path: global.api.counterGroup.anotherCounter.counter$multi.get.count, state: context.state }), '\n '); //eslint-disable-line
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
