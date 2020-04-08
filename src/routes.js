import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';

export default function Routes() {
    return(
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Login}/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
};