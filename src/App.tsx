import React from 'react';
import { useState, useTransition } from 'react';
import ReactDOM from 'react-dom/client';
import Products from './Products';
import NavBar from './Nav';
import About from './About';

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

  return (
    <main>
      <NavBar
        tab={tab}
        focusTab={focusTab}
        switchTab={switchTab}
        isPending={isPending}
      />
      <div id='content'>
        {isPending && <h1>Loading...</h1>}
        {!isPending && tab === 'home' && <h1>Home page</h1>}
        {!isPending && tab === 'products' && (
          <>
            <h1>Products page</h1>
            <Products />
          </>
        )}
        {!isPending && tab === 'about' && (
          <>
            <h1>About page</h1>
            <About />
          </>
        )}
      </div>
    </main>
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

ReactDOM.createRoot(rootElement).render(<App />);
