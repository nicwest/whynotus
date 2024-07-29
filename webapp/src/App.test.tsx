import React from 'react';
import { render, screen } from '@testing-library/react';
import {App} from './App';

test('renders the website name', () => {
  render(<App />);
  const linkElement = screen.getByText(/For potential employees/i);
  expect(linkElement).toBeInTheDocument();
});
