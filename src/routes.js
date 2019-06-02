import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";
import Login from './pages/signin/login';
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render ={ props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
