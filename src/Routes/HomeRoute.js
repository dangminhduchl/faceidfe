import React from 'react';
import { Route } from 'react-router';
import HomePage from '../Pages/HomePage';
function HomeRoute(props) 
{
    return(
        <div>
            <Route exact path="/">
                <HomePage/>
            </Route>
        </div>
    )
}

export default HomeRoute;