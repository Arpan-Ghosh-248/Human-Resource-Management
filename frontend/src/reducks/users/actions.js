export const SIGN_IN = 'SIGN_IN';
export const signInAction = token => {
    return {
        type: SIGN_IN,
        payload: {
            token
        }
    };
};

export const CHECK_LOGIN = 'CHECK_LOGIN';
export const checkLoginAction = user => {
    return {
        type: CHECK_LOGIN,
        payload: {
            user
        }
    };
};

export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
export const signInError = errors => {
    return {
        type: SIGN_IN_ERROR,
        payload: {
            errors
        }
    };
};

export const SIGN_OUT = 'SIGN_OUT';
export const signOutAction = () => {
    return {
        type: SIGN_OUT
    };
};
