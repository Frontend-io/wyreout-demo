import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Signin, Signup, Transactions } from '../pages';
import ProtectedRoute from './protected-route';

const MainRouter = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/sign-in">
          <Signin />
        </Route>
        <Route exact path="/sign-up">
          <Signup />
        </Route>

        <ProtectedRoute>
          <Transactions />
        </ProtectedRoute>
        
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
