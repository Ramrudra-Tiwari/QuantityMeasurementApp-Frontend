import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders quantity measurement heading', () => {
  render(<App />);
  const headingElement = screen.getAllByText(/Quantity/i)[0];
  expect(headingElement).toBeInTheDocument();
});

