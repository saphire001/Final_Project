import { combineReducers } from 'redux';

import userChoiceReducer from './userChoiceReducer';

export default combineReducers( {
    tasks: userChoiceReducer
});