import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BirgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders'
import './App.css';

function App() {
  return (
    <div>
    <h1 style={{margin:'50px 0 0 0'}}>Commit Update from Dawood</h1>
      <Layout>
        <Switch>
          <Route path='/checkout' component={ Checkout } />
          <Route path='/orders' component={ Orders } />
          <Route path='/' exact component={ BurgerBuilder } />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
