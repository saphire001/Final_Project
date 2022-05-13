import { combineReducers } from 'redux';

//import userChoiceReducer from './userChoiceReducer';
import errorReducer from './errorReducer';
//import accountsReducer from './accountsReducer';
import accountsReducer from './accountsReducer';

import transactsReducer from './transactsReducer';

export default combineReducers( {

    //tasks: userChoiceReducer,
    //accounts: accountsReducer,
    accounts: accountsReducer,
    transacts: transactsReducer,
    errors: errorReducer

});
