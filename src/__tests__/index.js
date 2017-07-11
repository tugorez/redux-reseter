import { reset, reseter } from '../index';

const reducer = (state = 0, { type, payload = 1 }) => {
  if (type === 'ADD') return state + payload;
  if (type === 'SUB') return state - payload;
  return state;
};

describe('reducer', () => {
  it('should compute the operations', () => {
    const action1 = { type: 'ADD' };
    const action2 = { type: 'ADD' };
    const action3 = { type: 'SUB' };
    const action4 = { type: 'ADD' };
    const actions = [action1, action2, action3, action4];
    const state = actions.reduce(reducer, 0);
    expect(state).toMatchSnapshot();
  });
});

describe('redux-reseter', () => {
  describe('reset', () => {
    it('creates a valid action', () => {
      const action = reset({ type: 'ADD' }, { type: 'SUB' }, { type: 'SUB' });
      expect(action).toMatchSnapshot();
    });
  });

  describe('reseter', () => {
    const reseted = reseter(reducer);

    it('should wait for a reset action and reset the state', () => {
      const actions = [
        { type: 'ADD' },
        { type: 'ADD' },
        { type: 'ADD' },
        reset(),
      ];
      const state = actions.reduce(reseted, undefined);
      expect(state).toMatchSnapshot();
    });
  });
});
