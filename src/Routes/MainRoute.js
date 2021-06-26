import React from 'react';
import {Switch } from 'react-router';
import  HomeRoute from './HomeRoute';
import CarListRoute from './CarListRoute';
import ScheduleRoute from './ScheduleRoute';
import LoginRoute from './LoginRoute';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
function MainRoute(props)
{
    return(
        <div>
            <Switch>
                <PublicRoute component ={LoginRoute} path="/login"/>
                <PrivateRoute component ={HomeRoute} exact path="/"/>
                <PrivateRoute component ={CarListRoute} path='/carlist'/>
                <PrivateRoute component ={ScheduleRoute} path='/schedule'/>
            </Switch>
        </div>
    )
}

export default MainRoute;