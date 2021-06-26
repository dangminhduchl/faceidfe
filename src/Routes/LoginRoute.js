import React from 'react';
import { Route, Switch } from 'react-router';
import Login from '../Pages/Login';
function LoginRoute(params) 
{
    return(
        <div>
            <Switch>
                <Route 
                    path = '/login'
                >
                    <Login/>
                </Route>
            </Switch>
        </div>
    );

}

export default LoginRoute;