// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import invoicesReducer from './invoicesReducer.js'; // Import your reducer(s)

const rootReducer = combineReducers({
 invoices: invoicesReducer
  // Add more reducers here
});

export default rootReducer;
