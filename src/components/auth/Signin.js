import React, { Component } from 'react';
import {compose, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {onSignin} from '../../reducers/auth';

class Signin extends Component {
    onSubmitHandler = (formProps) => {
        this.props.onSignin(formProps, () => {
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
                <button>Sign in!</button>
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
    onSignin 
}, dispatch);

export default compose(
    connect(mapStateToProps ,mapDispatchToProps),
    reduxForm({ form: 'signin' })
)(Signin);
