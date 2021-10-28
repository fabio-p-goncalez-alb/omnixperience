import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Home from './pages/Home';
import Offers from './pages/Offers';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/offers" component={Offers} />

        <Route render={() => <Redirect to="/home" />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;