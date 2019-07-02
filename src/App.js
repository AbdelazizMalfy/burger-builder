import React from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
        <Checkout />
      </Layout>
    </div>
  );
}

export default App;
