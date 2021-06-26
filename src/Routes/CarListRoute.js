import React from 'react';
import { Route, Switch } from 'react-router';
import CarList from '../Pages/CarList';
function CarListRoute(params) 
{
    return(
        <div>
            <Switch>
                <Route 
                    path = '/carlist'
                >
                    <CarList/>
                </Route>
            </Switch>
        </div>
    );

}

export default CarListRoute;