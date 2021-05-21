import styled from 'styled-components';
import BtnWrapper from './BtnWrapper';
import CommonBtn from '../CommonBtn';

const Wrapper = styled(BtnWrapper)`
  button {
    margin: 0 10px;
  }

  button:last-child {
    margin-right : 0;
  }
`;

const Buttons = ({onClose, onConfirm, btnName}) => {
  return (
    <Wrapper>
      <CommonBtn name={btnName} onClick={onConfirm}/>
      <CommonBtn name={'닫기'} onClick={onClose} bgColor={'#e5e5e5'} color={'#000'}/>
  </Wrapper>
  )
}

export default Buttons;