import React from 'react';
import { connect } from 'react-dom';
import { depositCash, withdrawCash } from '../actions';

const DEFAULT_STATE = [
    { _id: 1, name: "Lannisters", balance: 1189.78 },
    { _id: 2, name: "Starks", balance: 567.71 },
    { _id: 3, name: "Baratheons", balance: 31.26 },
    { _id: 4, name: "Targaryens", balance: 34.75 },
    { _id: 5, name: "Greyjoys", balance: 9.03 },
    { _id: 6, name: "Tyrells", balance: 1133.45 },
    { _id: 7, name: "Martells", balance: 737.9 },
    { _id: 8, name: "Tullys", balance: 483.56 },
    { _id: 9, name: "Arryns", balance: 1035.83 },
    { _id: 10, name: "Free Folk", balance: -134.34 }
];


const accountsReducer = (state = DEFAULT_STATE , action) =>{
    let updateState = [...state];                       
    let accountId;
    let accBalance;
    let depAmount;
    let witAmount;

    if(action && action.payload){accountId = state.findIndex(account => account.id === action.payload.accountid);}


    if(action.type === "DEPOSIT_CASH") {
        depAmount = action.payload.amount;
        accountId = action.payload.accountid;
        accBalance = action.payload.balance ;

        const accountIndex = updateState.findIndex(acc => acc._id === accountId);
        updateState[accountIndex].balance += parseInt(depAmount);
        return updateState;
    }

    else if(action.type === "WITHDRAW_CASH") {
        witAmount = action.payload.amount;
        accountId = action.payload.accountid;
        accBalance = action.payload.balance;

        const accountIndex = updateState.findIndex( acc => acc._id === accountId);
        updateState[accountIndex].balance -= parseInt(witAmount);
        return updateState;
    }


    else if(action.type === "ADD_ACCOUNT"){
        return [
            ...state,
            { _id: state.length + 1, name: action.payload.name, balance: 0.00 }   
        ];
    }

    else if(action.type === "START_BALANCE") {
        accountId = state.findIndex(account => account.id === action.payload.accountid);
        updateState[accountId].balance += action.payload.amount;
        return updateState;
    }

    else if(action.type === "DELETE_ACCOUNT"){
        updateState.splice(accountId, 1);
        return updateState;
    }

    else
        return state

};

export default accountsReducer;