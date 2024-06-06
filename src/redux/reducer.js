const initialState = {
  
    result: null,
    loading: false,
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_RESULT':
            return {
                ...state,
                result: action.result,
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.loading,
            };
        default:
            return state;
    }
};

export default gameReducer;
