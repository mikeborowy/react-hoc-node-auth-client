import React, { Component } from 'react';
import authWrapper from './hoc/authWrapper';
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