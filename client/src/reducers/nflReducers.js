function nflReducer(state, action) {
    switch(action.type) {
        case SOME_ACTION:
            return {
                ...state,
                data: action.payload
            }
        break;

        default:
            // the dispatched action is not in this reducer, return the state unchanged
            return state;
    }
}