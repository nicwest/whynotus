import React from 'react';
import { render, screen } from '@testing-library/react';
import {App} from './App';
import {
  MemoryRouter,
} from "react-router-dom";

test('renders the website name', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/For potential employees/i);
  expect(linkElement).toBeInTheDocument();
});
