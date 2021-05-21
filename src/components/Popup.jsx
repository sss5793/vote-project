import styled from 'styled-components';
import CommonBtn from './CommonBtn';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(0,0,0,0.5);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content :center;
`;

const Container = styled.div`
  width: 340px;
  height: 250px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
`;

const Text = styled.h1`
  font-size: 20px;
  margin-top: 50px;
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Popup = ({text, btnName, onClose, onConfirm}) => {
  return(
    <Wrapper>
      <Container>
        <Text>{text}</Text>
        <BtnWrapper>
          <CommonBtn name={btnName} onClick={onConfirm}/>
          <CommonBtn name={'닫기'} bgColor={'#e5e5e5'} color={'#000'} onClick={onClose}/>
        </BtnWrapper>
      </Container>
    </Wrapper>
  )
};

Popup.defaultProps = {
  text: '팝업입니다.',
  btnName: '확인',
}

export default Popup;