import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders header', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Tomato Clone/i);
  expect(linkElement).toBeInTheDocument();
});
