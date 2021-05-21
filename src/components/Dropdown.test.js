import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

test('Dropdown Component가 표시된다.', () => {
  render(<Dropdown />);
  // 사용자 선택 드롭다운 메뉴
  const dropdownElement = screen.getByText('선택해 주세요.');
  expect(dropdownElement).toBeInTheDocument();

  // 누르면 하위 요소가 나타나는지
  fireEvent.click(dropdownElement);

  const dropdownChildElement = screen.getByText('항목 1');
  expect(dropdownChildElement).toBeVisible();


  // 한번 더 누르면 리스트가 사라지는지
  fireEvent.click(dropdownElement);

  const childElement = screen.getByText('항목 1');
  expect(childElement).not.toBeVisible();
});
