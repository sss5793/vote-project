import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Header Component가 표시된다.', () => {
  render(<Header />);
  const titleElement = screen.getByText('Voting Page');
  expect(titleElement).toBeInTheDocument();
});
