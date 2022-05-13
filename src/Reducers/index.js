import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import accountsReducer from './accountsReducer';
import transactsReducer from './transactsReducer';

export default combineReducers( {

    accounts: accountsReducer,
    transacts: transactsReducer,
    errors: errorReducer

});
