import React from 'react';
import { Route, Switch } from 'react-router';
import Schedule from '../Pages/Schedule';
function ScheduleRoute(params) 
{
    return(
        <div>
            <Switch>
                <Route 
                    path = '/schedule'
                >
                    <Schedule/>
                </Route>
            </Switch>
        </div>
    );

}

export default ScheduleRoute;