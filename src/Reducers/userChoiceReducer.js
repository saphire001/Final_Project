const userChoiceReducer = (state =[], action) => {
    switch(action.type){
        case 'SET_ACCOUNTS':
            return action.payload;
    }
}

export default userChoiceReducer;