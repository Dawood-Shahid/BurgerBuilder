import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BirgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import './App.css';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/checkout' component={ Checkout } />
          <Route path='/' exact component={ BurgerBuilder } />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
