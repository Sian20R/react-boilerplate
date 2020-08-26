import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import  AuthContext  from './../context/auth';

const onLogout = () => {
    dispatch({ type: 'SET_LOGOUT'});
    window.location.href = `http://localhost:8080/login`;
}
  
const Header = ({ component: Component, ...rest }) => {
    const { authContext } = useContext(AuthContext);
   
    return (
        <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title "to="/dashboard">
                    <h1>Boilerplate</h1>
                </Link>
                <button className="button button--link" onClick={onLogout}>Logout</button>
            </div>
        </div>
    </header>
    );
}

export default Header;