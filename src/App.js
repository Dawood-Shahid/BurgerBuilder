import React from 'react';
import './App.css';

import Layout from './containers/Layout/Layout';
import Burger from './containers/BurgerBuilder/BirgerBuilder'

function App() {
  return (
    <div>
      <Layout>
        <Burger />
      </Layout>
    </div>
  );
}

export default App;
