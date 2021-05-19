import styled from 'styled-components';
import CommonBtn from '../../CommonBtn';

const BtnWrapper = styled.section`
  width: 100%;
  padding: 0 20px 20px 0;
  text-align: right;

  button {
    margin: 0 10px;
  }

  button:last-child {
    margin-right : 0;
  }
`;

const Buttons = ({onClose, onCreate}) => {
  return (
    <BtnWrapper>
      <CommonBtn name={'생성'} onClick={onCreate}/>
      <CommonBtn name={'닫기'} onClick={onClose} bgColor={'#e5e5e5'} color={'#000'}/>
  </BtnWrapper>
  )
}

export default Buttons;