
export const initialState = {
    userLogin: [{
        username: '',
        password: ''

    }]
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                userLogin: action.payload
            }
        default:
            return state;
    }
}