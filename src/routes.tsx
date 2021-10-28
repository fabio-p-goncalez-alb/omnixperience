import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Offers from './pages/Offers';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/offers" component={Offers} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;