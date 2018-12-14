import axios from 'axios';

/** TYPES START */
export const types = {
    AUTH_USER: 'AUTH_USER',
    AUTH_ERROR: 'AUTH_ERROR',
};
/** TYPES END */

/** ACRIONS START */
export const onUserAuth = (token) => ({type:types.AUTH_USER, token});
export const onAuthError = (error) => ({type:types.AUTH_ERROR, error});
export const onSignup = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3090/signup', formProps);
        const token = response.data.token;
        dispatch(onUserAuth(token));
        localStorage.setItem('token', token)
        callback();
    } catch(error) {
        dispatch(onAuthError('Email is in use'));
    };
}; 
export const onSignin = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3090/signin', formProps);
        const token = response.data.token;
        dispatch(onUserAuth(token));
        localStorage.setItem('token', token)
        callback();
    } catch(error) {
        dispatch(onAuthError('Invalid login credentials'));
    };
}; 
export const onSignout = () => {
    localStorage.removeItem('token');
    return {type:types.AUTH_USER, token:''};
}
/** ACRIONS END */

/** REDUCER START */
const INITIAL_STATE = {
    authenticated: '',
    errorMessage: '',
}

export default (state= INITIAL_STATE, action= {}) => {
    switch (action.type) {
        case types.AUTH_USER:
            return {...state, authenticated: action.token}
    
        case types.AUTH_ERROR:
            return {...state, errorMessage: action.error}
    
        default:
            return state;
    }
   
}
/** REDUCER END */