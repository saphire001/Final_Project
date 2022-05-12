import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import accountsReducer from './accountsReducer';

export default combineReducers( {

    accounts: accountsReducer,
    errors: errorReducer

});