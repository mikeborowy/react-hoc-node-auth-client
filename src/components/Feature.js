import React, { Component } from 'react';
import authWrapper from './helpers/authWrapper';
class Feature extends Component {
    render() {
        return (
            <div>
                Some Features
            </div>
        );
    }
}

export default authWrapper(Feature);