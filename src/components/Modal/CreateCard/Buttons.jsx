import styled from 'styled-components';
import BtnWrapper from '../BtnWrapper';
import CommonBtn from '../../CommonBtn';

const Wrapper = styled(BtnWrapper)`
  padding: 0 20px 20px 0;

  button {
    margin: 0 10px;
  }

  button:last-child {
    margin-right : 0;
  }
`;

const Buttons = ({onClose, onCreate}) => {
  return (
    <Wrapper>
      <CommonBtn name={'생성'} onClick={onCreate}/>
      <CommonBtn name={'닫기'} onClick={onClose} bgColor={'#e5e5e5'} color={'#000'}/>
  </Wrapper>
  )
}

export default Buttons;