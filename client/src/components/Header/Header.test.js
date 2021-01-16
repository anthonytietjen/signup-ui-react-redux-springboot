import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('renders the header', () => {
  render(<Header />);
  const logoElement = screen.getByTestId('logo');
  expect(logoElement).toBeInTheDocument();
})