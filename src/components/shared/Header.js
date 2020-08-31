import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import  AuthContext  from './../../context/auth';

const onLogout = () => {
    dispatch({ type: 'SET_LOGOUT'});
    window.location.href = `http://localhost:8080/login`;
}
  
const Header = ({ component: Component, ...rest }) => {
    const { authContext } = useContext(AuthContext);
   
    return (
        <div className="drawer">
            <div className="appbar-top">
                <Typography className="appbar-menu-items"> Hello </Typography>
                <Typography className="appbar-menu-items"> World </Typography>
            </div>
            
            <AppBar position="static" className="appbar">
                <Toolbar >
                    <IconButton edge="start" className="drawer__menuButton" color="inherit" aria-label="menu" >
                        <MenuIcon />
                    </IconButton>
                    <Typography className="appbar-menu-items">
                        Logo
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;