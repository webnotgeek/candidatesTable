import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Applications");
  expect(linkElement).toBeInTheDocument();
});
