import { memo, useState, useTransition } from 'react';
import ReactDOM from 'react-dom/client';
import { sleep } from './utils';
import products from './data';

export default function App() {
  const [tab, setTab] = useState('home');
  const [focusTab, setFocusTab] = useState('home');
  const [isPending, startTransition] = useTransition();

  function switchTab(tab: string) {
    setFocusTab(tab);
    startTransition(() => {
      setTab(tab);
    });
  }
  function setStyles(thisTab: string) {
    return {
      backgroundColor:
        thisTab === focusTab
          ? isPending
            ? 'LightSlateGray'
            : 'DodgerBlue'
          : 'AliceBlue',
      color: thisTab === focusTab ? 'AliceBlue' : 'MidnightBlue',
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
      <div id='content'>
        {isPending && <h1>Loading...</h1>}
        {!isPending && tab === 'home' && <h1>Home page</h1>}
        {!isPending && tab === 'products' && (
          <>
            <h1>Products page</h1>
            <Products />
          </>
        )}
        {!isPending && tab === 'about' && <h1>About page</h1>}
      </div>
    </main>
  );
}

const Products = memo(function () {
  let productsList = products.map((product, i) => (
    <SlowProduct key={product.id} product={product} />
  ));

  return <ul>{productsList}</ul>;
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
