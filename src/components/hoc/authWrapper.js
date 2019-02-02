import React, {Component} from 'react';
import {connect} from 'react-redux';

export default (WrappedComponent) => {
    class ComposedComponent extends Component {

        componentDidMount() {
            this.redirect();
        }
    
        componentDidUpdate() {
            this.redirect();
        }
    
        redirect() {
            if(!this.props.auth) {
                this.props.history.push('/');
            } 
        }

        render(){
            return <WrappedComponent {...this.props}/>
        } 
    };

    ComposedComponent.displayName = getDisplayName(WrappedComponent)

    const mapStateToProps = (state) => ({
        auth: state.auth.authenticated
    }) ;    

    return connect(
        mapStateToProps
    )(ComposedComponent);
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }