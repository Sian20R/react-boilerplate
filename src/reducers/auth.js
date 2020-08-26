export const initialState = {
    email: null,
    isLogin: false,
    authToken: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOGIN':
            return { 
                ...state, 
                authToken: action.authToken, 
                isLogin: true 
            }
        case 'SET_LOGOUT':
            return { 
                ...state, 
                authToken: null, 
                isLogin: false 
            }
        default:
            return state;
    }
}