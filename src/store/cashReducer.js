const defaultState = {
  cash: 0,
};

// Reducer это функция, которая принимает state и action и возвращает новый state
export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};
