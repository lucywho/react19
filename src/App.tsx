/* eslint-disable react/react-in-jsx-scope */
import { useState, useTransition, Suspense } from 'react';
import Products from './components/products/Products';
import NavBar from './components/Nav';
import About from './components/about/About';
import Pokemon from './components/Pokemon';
import Homepage from './components/Homepage';

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
        {!isPending && tab === 'home' && (
          <>
            <h1>Home page</h1>
            <Homepage />
          </>
        )}
        {!isPending && tab === 'products' && (
          <>
            <h1>Products page</h1>
            <Products />
          </>
        )}
        {!isPending && tab === 'about-you' && (
          <>
            <h1>About You page</h1>
            <About />
          </>
        )}
        {!isPending && tab === 'pokemon' && (
          <>
            <h1>Pokemon</h1>
            <Suspense fallback={<p>Please wait</p>}>
              <Pokemon />
            </Suspense>
          </>
        )}
      </div>
    </main>
  );
}
