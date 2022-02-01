import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render First Users Page', () => {
  render(<App />);
  const pageTitle = screen.getByText("Users");
  expect(pageTitle).toBeInTheDocument();
});
