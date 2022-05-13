import { combineReducers } from 'redux';
import accountsReducer from './accountsReducer';
import transactsReducer from './transactsReducer';

export default combineReducers({
  accounts: accountsReducer,
  transactions: transactsReducer
});
