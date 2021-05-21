import { render, screen } from '@testing-library/react';
import App from './App';

test('페이지 제목이 표시된다.', () => {
  render(<App />);
  const titleElement = screen.getByText('Voting Page');
  expect(titleElement).toBeInTheDocument();
});
