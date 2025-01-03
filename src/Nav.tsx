import React from 'react';

type NavBarProps = {
  tab: string;
  focusTab: string;
  switchTab: (tab: string) => void;
  isPending: boolean;
};
export const NavBar: React.FC<NavBarProps> = ({
  tab,
  focusTab,
  switchTab,
  isPending,
}) => {
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
          focusTab === 'about' ? 'active' : 'inactive'
        } ${isPending ? 'pending' : ''}`}
        onClick={() => switchTab('about')}
      >
        About
      </button>
    </nav>
  );
};
