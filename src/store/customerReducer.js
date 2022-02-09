const defaultState = {
  customers: [],
};

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      return { ...state, customers: state.customers.concat(action.payload) };
    case "GET_CUSTOMERS":
      return state;
    default:
      return state;
  }
};
