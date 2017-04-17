import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import itemList from './item-list-store.js';

const { getters, mutations, actions } = itemList;

chai.use(sinonChai);
const { expect } = chai;
console.debug = () => {};

describe('Components: counter-list', () => {
  let state;
  let context;
  beforeEach(() => {
    state = {
      items: [],
    };
    context = {
      state,
      dispatch: sinon.spy(),
      commit: sinon.spy(),
    };
  });

  describe('Getters', () => {
    it('items should return items', () => {
      expect(getters.items(state)).to.equal(state.items);
    });
    it('nrOfItems should return amount of items', () => {
      expect(getters.nrOfItems(state)).to.equal(0);
      state.items = [1, 2, 3];
      expect(getters.nrOfItems(state)).to.equal(3);
    });
  });

  describe('Actions', () => {
    it('addItem should commit mutation', () => {
      actions.addItem(context);

      expect(context.commit).calledWith('addItem');
    });

    it('removeItem should commit mutation', () => {
      actions.removeItem(context, 42);

      expect(context.commit).calledWith('removeItem', 42);
    });
  });

  describe('Mutations', () => {
    it('addItem should add a counter group', () => {
      mutations.addItem(state);

      expect(state.items.length).to.equal(1);
    });

    it('removeItem should remove a counter group', () => {
      state.items.push({ name: '', id: 0 });
      mutations.removeItem(state, 0);

      expect(state.items.length).to.equal(0);
    });
  });
});
