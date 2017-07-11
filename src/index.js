const type = '@REDUX-RESET.RESET';

const reset = (...payload) => ({ type, payload });

const reseter = reducer => (state, action) => {
  if (action.type === type) {
    return reducer(undefined, action);
  }
  return reducer(state, action);
};

module.exports = { reseter, reset };
