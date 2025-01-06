/* eslint-disable react/react-in-jsx-scope */
import { useState, useTransition } from 'react';
import Products from './Products';
import NavBar from './Nav';
import About from './About';
import Pokemon from './Pokemon';

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
        {!isPending && tab === 'about-you' && (
          <>
            <h1>About You page</h1>
            <About />
          </>
        )}
        {!isPending && tab === 'pokemon' && (
          <>
            <h1>Pokemon</h1>
            <Pokemon />
          </>
        )}
      </div>
    </main>
  );
}
