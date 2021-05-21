import { render, screen } from '@testing-library/react';
import Container from './Container';

test('Container Component가 표시된다.', () => {
  const user = {
    name: '아구몬'
  };

  const onClick = () => {
    const h1 = document.createElement('h1');
    h1.innerHTML = '피카츄';
    document.body.appendChild(h1);
  };
  
  render(<Container user={user} onHeaderBtnClick={onClick}/>);
  const userInfoElement = screen.getByText(/아구몬/);
  expect(userInfoElement).toBeInTheDocument();
});
