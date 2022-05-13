const userChoiceReducer = (state =[], action) => {
    switch(action.type){
        case 'SET_TRANSACTIONS':
            return action.payload;
        case 'SET_ACCOUNTS':
            return action.payload;
        case 'ADD_ACCOUNT':
            return [
                ...state,
                { id: state.length +1, balance: action.payload }
            ]
        case 'DEPOSIT_CASH':
            return [
                ...state,
                { balance: action.payload }
            ]
        case 'WITHDRAW_CASH':
            return [
                ...state,
                { id: state.props.id}
            ]
        default:
            return state;
    }

}

export default userChoiceReducer;