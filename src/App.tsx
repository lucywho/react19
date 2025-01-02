import { memo, useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { sleep } from './utils';
import products from './data';

export default function App() {
  const [tab, setTab] = useState('home');

  function switchTab(tab: string) {
    setTab(tab);
  }

  function setStyles(thisTab: string) {
    return {
      backgroundColor: tab === thisTab ? 'blue' : 'white',
      color: thisTab === tab ? 'white' : 'blue',
    };
  }

  return (
    <main>
      <nav>
        <button onClick={() => switchTab('home')} style={setStyles('home')}>
          Home
        </button>
        <button
          onClick={() => switchTab('products')}
          style={setStyles('products')}
        >
          Products
        </button>
        <button onClick={() => switchTab('about')} style={setStyles('about')}>
          About
        </button>
      </nav>
      <div>
        {tab === 'home' && <h1>Home</h1>}
        {tab === 'products' && <Products />}
        {tab === 'about' && <h1>About</h1>}
      </div>
    </main>
  );
}

const Products = memo(function () {
  let productsList = products.map((product, i) => (
    <SlowProduct key={product.id} product={product} />
  ));

  return (
    <>
      <h1>Products page</h1>
      <ul>{productsList}</ul>
    </>
  );
});

function SlowProduct({ product }: any) {
  sleep(1);
  return <li>Product: {product.name}</li>;
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}
ReactDOM.createRoot(rootElement).render(<App />);
