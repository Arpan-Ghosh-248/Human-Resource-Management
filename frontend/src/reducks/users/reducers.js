import * as Actions from './actions';
import initialState from '../store/initialState';

export const UserReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case Actions.SIGN_IN:
            return {
                ...state,
                token: action.payload.token
            };
        case Actions.CHECK_LOGIN:
            return {
                ...state,
                ...action.payload.user
            };
        case Actions.SIGN_IN_ERROR:
            return {
                ...state,
                errors: action.payload.errors
            };
        case Actions.SIGN_OUT:
            return {
                errors: {
                    email: null,
                    password: null
                }
            };
        default:
            return state;
    }
};
