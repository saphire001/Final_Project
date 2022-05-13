export const setAccounts = (accountid, name, balance) => {
    return {
        type: 'SET_ACCOUNTS',
        payload: {
            accountid, name, balance
        }
    }
}

export const setTransactions = (transactIndex, accountid, type, amount, description) => {
    return {
        type: 'SET_TRANSACTIONS',
        payload: {
            transactIndex, accountid, type, amount, description
        }
    }
}

export const addAccount = (accountid, name, balance) => {
    return {
        type: 'ADD_ACCOUNT',
        payload: {
            accountid, name, balance
        }
    }
}

export const addStartingBalance = (accountid, amount) => {
    return{
        type: 'START_BALANCE',
        payload: {accountid, amount}
    }
}

export const removeAccount = (accountid) => {
    return {
        type: 'DELETE_ACCOUNT',
        payload: accountid
    }
}

export const depositCash = (accountid, amount) => {
    return {
        type: 'DEPOSIT_CASH',
        payload: {
            accountid, amount
        }
    }
}

export const withdrawCash = (accountid, amount) => {
    return {
        type: 'WITHDRAW_CASH',
        payload: {
            accountid, amount
        }
    }
}

export const accountsError = error =>{
    return{
        type: 'ACCOUNT_ERROR'
    }
}

export const transactsError = error =>{
    return{
        type: 'TRANSACTS_ERROR'
    }
}



export const tasksError = (errorMessage) => {
    return {
        type: 'TASKS_ERROR'
    }
};