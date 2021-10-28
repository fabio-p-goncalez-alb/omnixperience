import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Offers from './pages/Offers';
import NavigationBar from './components/NavigationBar';

function Routes() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/offers" exact component={Offers} />

        <Route render={() => <Redirect to="/home" />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;