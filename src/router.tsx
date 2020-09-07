
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from "./pages/Landing";
import About from './pages/About';
import ClassesList from './pages/ClassesList';
import Login from './pages/Login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Landing} />
            
            <Route path="/about" component={About} />
            <Route path="/classes" component={ClassesList} />
            <Route path="/login" component={Login} />
            {/* <Route exact path="/" component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/form-event/:id" component={EventForm} />
            <Route path="/signin" component={SignIn} /> */}
        </Switch>
    </BrowserRouter>
);

export default Routes;