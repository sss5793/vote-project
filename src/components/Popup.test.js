import { render, screen } from '@testing-library/react';
import Popup from './Popup';

test('Popup Component가 표시된다.', () => {
  render(<Popup text={'팝업'}/>);
  const textElement = screen.getByText(/팝업/);
  expect(textElement).toBeInTheDocument();
});
