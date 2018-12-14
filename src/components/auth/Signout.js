import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {onSignout} from '../../reducers/auth';

class Signout extends Component {
    componentDidMount() {
        this.props.onSignout();
    }

    render() {
        return (
            <div>
                Sorry, bye bye!
            </div>
        );
    }
}

const mapDispatchToState = (dispatch) => bindActionCreators({
    onSignout
}, dispatch);

export default connect(null, mapDispatchToState)(Signout);