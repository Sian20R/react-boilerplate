import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import  AuthContext  from './../context/auth';
import { login } from './../actions/auth';


const LoginPage = () => {
  const { authContext, dispatch } = useContext(AuthContext);
  const [ isLoggedIn, setLoggedIn] = useState(false);
  let history = useHistory();

  const onLogin = () => {
    const token = login('SumHeiMun', 'Testing123');
    if (token != null ) {
        dispatch({ type: 'SET_LOGIN', authToken: token });  
        setLoggedIn(true);

        history.push("/dashboard")
        
    }
    else {
      alert('Login Failed');
    }   
  }

 

  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Boilerplate</h1>
        <p>Tag line for app.</p>
        <button className="button" onClick={onLogin}>Login</button>
      </div>
   </div>
  )
}

export default LoginPage;