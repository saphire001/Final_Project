const transactionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_TRANSACTIONS':
      return action.payload;

    case 'DEPOSIT_TRANSACTION':
      let accountIndex = state.findIndex(account => account._id == action.payload['accountId']);

      var newTrans = {
        "_id": action.payload['transactionId'],
        "accountId": accountIndex + 1,
        "type": action.payload['type'],
        "amount": action.payload['amount'],
        "name": action.payload['name']
      }

      state.push(newTrans);

      return state;

    case 'WITHDRAWAL_TRANSACTION':
      let accountIndex2 = state.findIndex(account => account._id == action.payload['accountId']);

      var newTrans2 = {
        "_id": action.payload['transactionId'],
        "accountId": accountIndex2 + 1,
        "type": action.payload['type'],
        "amount": action.payload['amount'],
        "name": action.payload['name']
      }

      state.push(newTrans2);

      return state;

    default:
      return state;
  }
}

export default transactionsReducer;