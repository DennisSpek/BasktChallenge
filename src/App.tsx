import React from 'react';
import ProductsView from './view/productsView';
import CheckoutView from './view/checkoutView';
import { BasketProvider } from './context/provider';

function App() {
  return (
    <BasketProvider>
      <div className="App">
        <header className="App-header">
          <ProductsView />
        </header>
      </div>
    </BasketProvider>
  );
}

export default App;