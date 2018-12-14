import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './styleHeader.css';
class Header extends Component {
    renderLinks() {
        if(this.props.authenticated){
            return(
                <div>
                    <Link to='/signout'>Sign out</Link>
                    <Link to='/feature'>Feature</Link>
                </div>
            );
        } else {
            return(
                <div>
                    <Link to='/signup'>Sign up</Link>
                    <Link to='/signin'>Sign in</Link> 
                </div>
            );
        }
    }
    render() {
        return (
            <div className='header'>
                <Link to='/'>Redux Auth</Link>
                {this.renderLinks()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(Header);