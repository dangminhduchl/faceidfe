import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import { getToken } from '../Utils/Common';
 
// handle the private routes
function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => getToken() ? <Redirect to={{ pathname: '/', state: { from: props.location } }} /> : <Component {...props} /> }
    />
  )
}
 
export default PublicRoute;