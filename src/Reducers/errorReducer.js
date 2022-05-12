const DEFAULT_STATE = {
    getAccounts: ''
};

const errorReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'GET_TODO_ERROR':
            return {
                ...state,
                getAccounts: 'Unable to get Accounts from API. Please Try again later'
            }
        default:
            return true;
    }
}

export default errorReducer;