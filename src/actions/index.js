export const setAccounts = accounts => {
    return {
      type: 'SET_ACCOUNTS',
      payload: accounts
    }
  };
  
  export const setTransactions = transactions => {
    return {
      type: 'SET_TRANSACTIONS',
      payload: transactions
    }
  };
  
  export const deleteAccount = accountId => {
    return {
      type: 'DELETE_ACCOUNT',
      payload: accountId
    }
  };
  
  
  export const deposit = (amount, accountId) => {
    return {
      type: 'DEPOSIT',
      payload: {
        amount,
        accountId
      }
    }
  };
  
  export const withdraw = (amount, accountId) => {
    return {
      type: 'WITHDRAW',
      payload: {
        amount,
        accountId
      }
    }
  };
  
  export const depositTransaction = (transactionId, accountId, amount) => {
    return {
      type: 'DEPOSIT_TRANSACTION',
      payload: {
        transactionId,
        accountId,
        type: "deposit",
        amount,
        name: "Money has been deposited"
      }
    }
  };
  
  export const withdrawalTransaction = (transactionId, accountId, amount) => {
    return {
      type: 'WITHDRAWAL_TRANSACTION',
      payload: {
        transactionId,
        accountId,
        type: "withdraw",
        amount,
        name: "Money has been withdrawn"
      }
    }
  };
  