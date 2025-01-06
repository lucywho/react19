import React from 'react';

type NavBarProps = {
  tab: string;
  focusTab: string;
  switchTab: (tab: string) => void;
  isPending: boolean;
};
const NavBar: React.FC<NavBarProps> = ({ focusTab, switchTab, isPending }) => {
  return (
    <nav>
      <button
        className={`tab-button ${focusTab === 'home' ? 'active' : 'inactive'} ${
          isPending ? 'pending' : ''
        }`}
        onClick={() => switchTab('home')}
      >
        Home
      </button>
      <button
        className={`tab-button ${
          focusTab === 'products' ? 'active' : 'inactive'
        } ${isPending ? 'pending' : ''}`}
        onClick={() => switchTab('products')}
      >
        Products
      </button>
      <button
        className={`tab-button ${
          focusTab === 'about-you' ? 'active' : 'inactive'
        } ${isPending ? 'pending' : ''}`}
        onClick={() => switchTab('about-you')}
      >
        About You
      </button>
      <button
        className={`tab-button ${
          focusTab === 'pokemon' ? 'active' : 'inactive'
        } ${isPending ? 'pending' : ''}`}
        onClick={() => switchTab('pokemon')}
      >
        Pokemon
      </button>
    </nav>
  );
};

export default NavBar;
