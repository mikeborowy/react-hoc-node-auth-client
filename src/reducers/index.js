import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import auth from '../reducers/auth';

export default combineReducers({
    auth,
    form: reduxFormReducer
});