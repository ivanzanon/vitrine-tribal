import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import About from './pages/About';
import ClassesAdmin from './pages/ClassesAdmin';
import ClassesList from './pages/ClassesList';
import HomeAdmin from './pages/HomeAdmin';
import Landing from './pages/Landing';
import Login from './pages/Login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing} />

      <Route path="/about" component={About} />
      <Route path="/classes" component={ClassesList} />
      <Route path="/login" component={Login} />

      <Route path="/home" component={HomeAdmin} />
      <Route path="/classes-manager" component={ClassesAdmin} />
      {/* <Route exact path="/" component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/form-event/:id" component={EventForm} />
            <Route path="/signin" component={SignIn} /> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
