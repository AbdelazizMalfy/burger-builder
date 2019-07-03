import React from 'react';
import { Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder';
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders';

function App() {
  return (
    <div>
      <Layout>
        <Route path='/orders' component={Orders} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/' exact component={BurgerBuilder} />
      </Layout>
    </div>
  );
}

export default App;
