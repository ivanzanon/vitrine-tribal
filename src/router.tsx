
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from "./pages/Landing";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Landing} />
            {/* <Route exact path="/" component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/form-event/:id" component={EventForm} />
            <Route path="/signin" component={SignIn} /> */}
        </Switch>
    </BrowserRouter>
);

export default Routes;