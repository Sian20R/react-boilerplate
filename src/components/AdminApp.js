
import React, { useState, useReducer } from 'react';
import AppRouter, { history } from './../routers/AppRouter';
import AuthContext from './../context/auth';
import { authReducer, initialState } from './../reducers/auth';

const AdminApp = () => { 
    const [ authContext, dispatch] = useReducer(authReducer, initialState);
    const existingTokens = JSON.parse(localStorage.getItem("authToken"));
    const [ authTokens, setAuthTokens ] = useState(existingTokens);

    return (
        <AuthContext.Provider value={{ authContext, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}

export { AdminApp as default }