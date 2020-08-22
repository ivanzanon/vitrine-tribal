
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from "./pages/Landing";
import About from './pages/About';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Landing} />
            
            <Route path="/about" component={About} />
            {/* <Route exact path="/" component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/form-event/:id" component={EventForm} />
            <Route path="/signin" component={SignIn} /> */}
        </Switch>
    </BrowserRouter>
);

export default Routes;