import { push } from 'connected-react-router';

import { LOGIN_USER_TOKEN } from '../../axios';
import AuthRequest from '../../requests/auth-request';
import { signInAction, signInError, signOutAction } from './actions';

export const fetchUserFromLocalStorage = () => {
    return async dispatch => {
        const userJSON = localStorage.getItem(LOGIN_USER_TOKEN);
        if (userJSON && userJSON !== '') {
            dispatch(signInAction(userJSON));
        }
    };
};

export const signIn = (data = {}, onSuccess = null) => {
    return async dispatch => {
        return AuthRequest.signIn(data)
            .then(response => {
                localStorage.setItem(LOGIN_USER_TOKEN, response.token);
                dispatch(signInAction(response.token));
                onSuccess();
            })
            .catch(error => {
                console.log(error);
                dispatch(signInError(error.response));
            });
    };
};

export const signOut = () => {
    return async dispatch => {
        dispatch(signOutAction());
        localStorage.removeItem(LOGIN_USER_TOKEN);
        dispatch(push('/login'));
    };
};
