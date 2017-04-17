import { store } from 'vuex+';

let nameCounter = 0;
const initialState = {
  items: [
    { name: '', id: nameCounter++ },
    { name: '', id: nameCounter++ },
    { name: 'foo', id: nameCounter++ },
  ],
};

const getters = {
  items: state => state.items,
  nrOfItems: state => state.items.length,
};

const actions = {
  addItem(context) {
    context.commit('addItem');
  },
  removeItem(context, id) {
    context.commit('removeItem', id);
  },
};

const mutations = {
  addItem(state) {
    state.items.push({ name: 'bar' + nameCounter++ % 3, id: nameCounter });
  },
  removeItem(state, id) {
    state.items = state.items.filter(i => i.id !== id);
  },
};

export default store({
  state: initialState,
  getters,
  actions,
  mutations,
});
