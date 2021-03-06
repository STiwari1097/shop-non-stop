import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    userId: null,
    loading: false,
    error: null,
    redirectPathAfterLogin: '/'
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGN_UP_START:
            return {
                ...state, loading: true, error: null
            };

        case actionTypes.SIGN_UP_SUCCESS:
            return {
                ...state, loading: false
            };

        case actionTypes.SIGN_UP_FAIL:
            return {
                ...state, loading: false, error: action.error
            };

        case actionTypes.SIGN_IN_START:
            return {
                ...state, loading: true, error: null
            };

        case actionTypes.SIGN_IN_SUCCESS:
            return {
                ...state, token: action.token, userId: action.userId, loading: false, error: null
            };

        case actionTypes.SIGN_IN_FAIL:
            return {
                ...state, token: null, userId: null, loading: false, error: action.error
            };

        case actionTypes.AUTH_SIGNOUT:
            return {
                ...state, token: null, userId: null, loading: false, error: null
            };

        case actionTypes.SET_REDIRECT_PATH:
            return {
                ...state, redirectPathAfterLogin: action.path
            };

        default:
            return state;
    }
};

export default authReducer;