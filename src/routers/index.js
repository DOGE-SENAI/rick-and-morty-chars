import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Error from '../Pages/Error';

const Routers = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="*" component={Error}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routers;