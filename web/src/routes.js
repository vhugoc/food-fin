import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Departments from './pages/Departments';

import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/login" component={SignIn} />
        <PublicRoute path="/registro" component={SignUp} />
        <PrivateRoute path="/" exact component={Dashboard} />
        <PrivateRoute path="/departamentos" exact component={Departments} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
