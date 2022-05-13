import React from 'react';
import { connect } from 'react-dom';
import { depositCash, withdrawCash } from '../actions';

const DEFAULT_STATE = [
    {_id: 1, accountId: 1, type: "deposit", amount: 677.4, name: "Account Opened"},
    {_id: 2, accountId: 1, type: "deposit", amount: 1000, name: "Gold Mine Profits"},
    {_id: 3, accountId: 1, type: "withdraw", amount: 300, name: "Iron Bank Interest"},
    {_id: 4, accountId: 1, type: "withdraw", amount: 402.34, name: "Defenses of Kings Landing"},
    {_id: 5, accountId: 1, type: "deposit", amount: 214.72, name: "Taxes from Kingdoms"},
    {_id: 6, accountId: 2, type: "deposit", amount: 500, name: "Account Opened"},
    {_id: 7, accountId: 2, type: "deposit", amount: 120.34, name: "Taxes from bannermen"},
    {_id: 8, accountId: 2, type: "withdraw", amount: 204.23, name: "Sending Lord to Capital"},
    {_id: 9, accountId: 2, type: "withdraw", amount: 11.34, name: "Camping at Twins"},
    {_id: 10, accountId: 2, type: "deposit", amount: 162.94, name: "Spoils of War"},
    {_id: 11, accountId: 3, type: "deposit", amount: 934.36, name: "Account Opened"},
    {_id: 12, accountId: 3, type: "withdraw", amount: 394.95, name: "Younger Brother Rebelled"},
    {_id: 13, accountId: 3, type: "withdraw", amount: 183.48, name: "Attacked King's Landing"},
    {_id: 14, accountId: 3, type: "deposit", amount: 500,name: "Iron Bank Loan"},
    {_id: 15, accountId: 3, type: "withdraw", amount: 643.03, name: "Hire Mercenaries"},
    {_id: 24, accountId: 3, type: "withdraw", amount: 138.64, name: "Transit to Wall"},
    {_id: 16, accountId: 4, type: "deposit", amount: 34.75, name: "Account Opened"},
    {_id: 17, accountId: 5, type: "deposit", amount: 9.03, name: "Account Opened"},
    {_id: 18, accountId: 6, type: "deposit", amount: 1133.45, name: "Account Opened"},
    {_id: 19, accountId: 7, type: "deposit", amount: 737.9, name: "Account Opened"},
    {_id: 20, accountId: 8, type: "deposit", amount: 483.56, name: "Account Opened"},
    {_id: 21, accountId: 9, type: "deposit", amount: 1035.83, name: "Account Opened"},
    {_id: 22, accountId: 10, type: "deposit", amount: 0, name: "Account Opened"},
    {_id: 23, accountId: 10, type: "withdraw", amount: 134.34, name: "Raiding Repayment"}
];


const transactsReducer = (state = DEFAULT_STATE , action) =>{
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
            { _id: state.length + 1, name: action.payload.name, balance: 0.00 }   //balance: action.payload.balance
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

export default transactsReducer;