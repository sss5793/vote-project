import { render, screen, fireEvent } from '@testing-library/react';
import CommonBtn from './CommonBtn';

test('CommonBtn Component가 표시된다.', () => {
  const data = {
    name: '버튼',
    onClick: () => {
      const h1 = document.createElement('h1');
      h1.innerHTML = '피카츄';
      document.body.appendChild(h1);
    }
  };

  render(<CommonBtn { ...data }/>);
  const buttonElement = screen.getByText('버튼');
  expect(buttonElement).toBeInTheDocument();

  // 버튼 동작 확인
  fireEvent.click(buttonElement);

  const h1Element = screen.getByText(/피카츄/);
  expect(h1Element).toBeInTheDocument();
});
