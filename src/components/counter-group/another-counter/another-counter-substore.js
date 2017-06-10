import { store, root, newInstance } from 'vuex+';
import counter from '@/common/counter-substore.js';

const counter$foo = newInstance(counter, 'foo');
const counter$bar = newInstance(counter, 'bar');

const initialState = {
  count: 0,
};

const getters = {
  count: state => state.count,
  // Example referencing parent state
  parentCount: state => state.$parent.count,
};

const actions = {
  increase(context, amount) {
    amount = typeof amount === 'number' ? amount : 1;
    console.log('Action in instance "' + (context.state['vuex+'].instance || '') + '", Counter, adding', amount);
    context.commit('increase', amount);

    // Examples working in other part of the application

    // Example of dispatching in sub modules
    console.log('--- Example of dispatching action in child ---');
    context.dispatch('counter$foo/increase', 10);
    context.dispatch('counter$bar/increase', 1000);

    // Example working with root object
    // Set `state` property to automatically figure out the module and parent instances
    // Skip `state` property to have an absolute path and type instances manually
    console.log('context.state', context.state); // eslint-disable-line
    console.log('--- [Vuex+] Example of dispatching action to root module instance ---');
    root.dispatch({
      path: '$root/increase',
      data: 10,
      state: context.state,
    });

    console.log('--- [Vuex+] Example of dispatching action to parent module instance ---');
    root.dispatch({
      path: '$parent/increase',
      data: 100,
      state: context.state,
    });

    console.log('--- [Vuex+] Example reading from parent ---', context.state.$parent.count);

    // Example of reading getters with normal Vuex methods
    console.log('--- [Vuex] Example reading getter ---', context.getters.parentCount);
    console.log('--- [Vuex] Example reading state from child ---', context.state.counter$foo.count);
    console.log('--- [Vuex] Example reading getter from child ---', context.getters['counter$foo/count']);

    // Example reading from root level module instance
    console.log('--- [Vuex+] Example root getter from in same instance ---', root.get({ path: '$root/count', state: context.state }));

    // Example of reading getters from root level states with absolute paths
    // $parent and $root is not available in absolute paths
    if (root.api.counterGroup) {
      console.log('--- [Vuex+] Example getter with absolute path, instance name "" ---', root.get({ path: 'counterGroup/count' }));
    }
    if (root.api.counterGroup$foo) {
      console.log('--- [Vuex+] Example getter with absolute path, instance name "foo" ---', root.get({ path: 'counterGroup$foo/count' }));
    }
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
    counter$foo,
    counter$bar,
  },
});
