// Redux
// createStore --> Store
const Redux = (() => {
  const subscribers = [];
  let hiddenReducer;
  let hiddenState;

  return {
    createStore: (reducer, state) => {
      hiddenReducer = reducer;
      hiddenState = state;
      return {
        getState: () => {
          return hiddenState;
        },
        dispatch: action => {
          const newState = hiddenReducer(hiddenState, action);
          hiddenState = newState;
          subscribers.forEach(func => func());
        },
        subscribe: func => {
          subscribers.push(func);
        }
      };
    }
  };
})();
