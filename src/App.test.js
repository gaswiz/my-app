import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the logged-out landing page with a login button', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
});
