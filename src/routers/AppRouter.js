import React from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from '../components/Login';
import DashboardPage from '../components/Dashboard';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => (
    <Router>
      <div>
      <Switch>
            <Route path="/" component={LoginPage} exact={true} />
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/dashboard" component={DashboardPage} />     
       </Switch> 
      </div>
     
   </Router>
);
export default AppRouter;
