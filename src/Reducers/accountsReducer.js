const accountsReducer = (state = [], action) => {
  switch (action.type) {

    case 'SET_ACCOUNTS':
      return action.payload;

    case 'DELETE_ACCOUNT':
      let accountIndex = state.findIndex(account => account._id == action.payload);
      state.splice(accountIndex, 1);

      return state;


    case 'DEPOSIT':
      let accountIndexDep = state.findIndex(account => account._id == action.payload['accountId']);
      var newBal = parseFloat(state[accountIndexDep]['balance']) + parseFloat(action.payload['amount']);
      state[accountIndexDep]['balance'] = newBal.toFixed(2);

      return state;

    case 'WITHDRAW':
      let accountIndexWith = state.findIndex(account => account._id == action.payload['accountId']);
      var newBal2 = parseFloat(state[accountIndexWith]['balance']) - action.payload['amount']
      state[accountIndexWith]['balance'] = newBal2.toFixed(2);

      return state;

    default:
      return state;
  }
}

export default accountsReducer;