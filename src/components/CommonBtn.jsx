import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
  height: 35px;
  background: ${props => props.bgColor};
  border-radius: 5px;
  color: ${props => props.color};
  border: 0;
  font-size: 16px;
  font-weight: 600;
  flex-shrink: 0;
`;

const CommonBtn = ({name, onClick, bgColor, color}) => (
    <Button type={'button'} onClick={onClick} bgColor={bgColor} color={color}>
        {name}
    </Button>
);

CommonBtn.defaultProps = {
  bgColor: '#780EFF',
  color: '#fff'
}

export default CommonBtn;