/* eslint-disable react/react-in-jsx-scope */

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home', () => {
  render(<App />);
  const homeElement = screen.getByText(/Home page/i);
  expect(homeElement).toBeTruthy();
});
