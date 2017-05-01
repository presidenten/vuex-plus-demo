import itemList from './item-list-store.js'; // eslint-disable-line

const { getters, mutations, actions } = itemList;

describe('Components: counter-list', () => {
  let state;
  let context;
  beforeEach(() => {
    state = {
      items: [],
    };
    context = {
      state,
      dispatch() {},
      commit() {},
    };
    jest.spyOn(context, 'dispatch');
    jest.spyOn(context, 'commit');
  });

  describe('Getters', () => {
    it('items should return items', () => {
      expect(getters.items(state)).toEqual(state.items);
    });
    it('nrOfItems should return amount of items', () => {
      expect(getters.nrOfItems(state)).toEqual(0);
      state.items = [1, 2, 3];
      expect(getters.nrOfItems(state)).toEqual(3);
    });
  });

  describe('Actions', () => {
    it('addItem should commit mutation', () => {
      actions.addItem(context);

      expect(context.commit).toBeCalledWith('addItem');
    });

    it('removeItem should commit mutation', () => {
      actions.removeItem(context, 42);

      expect(context.commit).toBeCalledWith('removeItem', 42);
    });
  });

  describe('Mutations', () => {
    it('addItem should add a counter group', () => {
      mutations.addItem(state);

      expect(state.items.length).toEqual(1);
    });

    it('removeItem should remove a counter group', () => {
      state.items.push({ name: '', id: 0 });
      mutations.removeItem(state, 0);

      expect(state.items.length).toEqual(0);
    });
  });
});
