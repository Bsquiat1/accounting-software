// src/store/reducers/invoicesReducer.js
const initialState = {
  invoices: []
};

const invoicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_INVOICE':
      return {
        ...state,
        invoices: [...state.invoices, action.payload]
      };
    default:
      return state;
  }
};

export default invoicesReducer;
