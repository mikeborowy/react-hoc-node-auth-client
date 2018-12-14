import React, { Component } from 'react';
import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {onSignup} from '../../reducers/auth';

class Signup extends Component {
    onSubmitHandler = (formProps) => {
        this.props.onSignup(formProps, () => {
            this.props.history.push('/feature');
        });
    };
    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmitHandler)}>
                <fieldset>
                    <label>Email</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                        />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                        />
                </fieldset>
                <button>Sign up!</button>
                <div>
                    {this.props.errorMessage}
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    errorMessage: state.auth.errorMessage
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    onSignup 
}, dispatch);

export default compose(
    connect(mapStateToProps ,mapDispatchToProps),
    reduxForm({ form: 'signup' })
)(Signup);
